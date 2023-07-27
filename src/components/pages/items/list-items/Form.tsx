import { useEffect, useState } from "react";
import ReactDropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useAuth0 } from "@auth0/auth0-react";
import { Input } from "../../../general/Input";
import { Button } from "../../../general/Button";
import Grid from "@mui/material/Grid";
import photoUploadImage from "../../../../assets/photo-upload.svg";
import { InfoText } from "../../../general/InfoText";
import { BasicSelect } from "../../../general/BasicSelect";
import * as ItemActionsCreator from "../../../../store/action-creators/items-action-creator";
import { RootState } from "../../../../store/reducers";
import { Location } from "../../../../api/locations";
import { Item } from "../../../../api/items";
import { extractUUIDFromString } from "../../../../utils/data";
import {
  useGetLocations,
  useSyncLocations,
} from "../../../../hooks/locations/queries";

const categoriesMock = [
  {
    value: "power-tools",
    label: "Power Tools",
  },
  {
    value: "hand-tools",
    label: "Hand Tools",
  },
  {
    value: "garden-tools",
    label: "Garden Tools",
  },
];

const Form = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();

  const { item, isLoading } = useSelector((state: RootState) => state.items);

  const { createItem, getItem, updateItem } = bindActionCreators(
    ItemActionsCreator,
    dispatch
  );

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [dailyPrice, setDailyPrice] = useState(0);
  const [weeklyPrice, setWeeklyPrice] = useState(0);
  const [monthlyPrice, setMonthlyPrice] = useState(0);
  const [itemValue, setItemValue] = useState(0);
  // const [quantity, setQuantity] = useState(0);
  const [miniRentalDays, setMiniRentalDays] = useState(0);
  const [photos, setPhotos] = useState<{ file: any; preview: string }[]>(
    Array(4).fill({ file: null, preview: "" })
  );
  const [editItemsPhotos, setEditItemsPhotos] = useState<string[]>([]);
  const [location, setLocation] = useState<any>([]);
  const [editForm, setEditForm] = useState(false);
  const { isLoading: isSyncLocations } = useSyncLocations();
  const { data: locations } = useGetLocations(isSyncLocations);

  const handleSubmit = async (e: any) => {
    // This function sends the data to the backend
    e.preventDefault();
    if (editForm) {
      if (item && item._id) {
        updateItem(item._id, {
          item: {
            title,
            category,
            location,
            description,
            dailyPrice,
            weeklyPrice,
            monthlyPrice,
            itemValue,
            // quantity,
            miniRentalDays,
            photos,
            user_id: user?.sub,
          },
          currentPhotos: editItemsPhotos,
        });
      }
    } else {
      await createItem({
        title,
        category,
        location,
        description,
        dailyPrice,
        weeklyPrice,
        monthlyPrice,
        itemValue,
        // quantity,
        miniRentalDays,
        photos,
        user_id: user?.sub,
      });
    }
    handleCancel();
  };

  const handleCancel = () => {
    // This function clears all the input fields

    setTitle("");
    setCategory("");
    setLocation("");
    setDescription("");
    setDailyPrice(0);
    setWeeklyPrice(0);
    setMonthlyPrice(0);
    setItemValue(0);
    // setQuantity(0);
    setMiniRentalDays(0);
    setPhotos(Array(4).fill({ file: null, preview: "" }));
  };

  const setEditItem = (item: Item) => {
    // This function sets the values of the input fields to the values of the item being edited

    setTitle(item.title);
    setCategory(item.category);
    setLocation(item.location);
    setDescription(item.description ?? "");
    setDailyPrice(item.dailyPrice);
    setWeeklyPrice(item.weeklyPrice);
    setMonthlyPrice(item.monthlyPrice);
    setItemValue(item.itemValue ?? 0);
    setMiniRentalDays(item.miniRentalDays);
    setEditItemsPhotos(item.photos);
  };

  useEffect(() => {
    // Get items id parameter from path
    const path = window.location.pathname;
    const itemId = extractUUIDFromString(path);

    if (itemId) {
      setEditForm(true);
      getItem(itemId);

      if (item) {
        setEditItem(item);
      }
    }
  });

  const setPhotosPreview = (photo: any, index: number) => {
    if (editItemsPhotos[index]) {
      return photos[index].file
        ? photos[index].preview
        : editItemsPhotos[index];
    }

    return photos[index].file ? photos[index].preview : photoUploadImage;
  };

  return (
    <div className='flex items-center justify-center p-6 max-w-2xl'>
      <div className='w-full'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InfoText text='Add Photos' />
          <div className='flex justify-center mb-5 mt-2 gap-2'>
            <ReactDropzone
              onDrop={(acceptedFiles) => {
                console.log(acceptedFiles);
                // set value at index zero in images array
                if (acceptedFiles) {
                  setPhotos([
                    ...photos.map((image, index) => {
                      if (index === 0) {
                        return {
                          file: acceptedFiles[0],
                          preview: URL.createObjectURL(acceptedFiles[0]),
                        };
                      }
                      return image;
                    }),
                  ]);
                }
                return true;
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className='cursor-pointer w-[24%]'>
                  <input
                    {...getInputProps()}
                    type='file'
                    className='w-10 invisible'
                  />
                  <img
                    src={setPhotosPreview(photos[0], 0)}
                    alt='logo'
                    className='w-full'
                  />
                </div>
              )}
            </ReactDropzone>
            <ReactDropzone
              onDrop={(acceptedFiles) => {
                // set value at index zero in images array
                if (acceptedFiles) {
                  setPhotos([
                    ...photos.map((image, index) => {
                      if (index === 1) {
                        return {
                          file: acceptedFiles[0],
                          preview: URL.createObjectURL(acceptedFiles[0]),
                        };
                      }
                      return image;
                    }),
                  ]);
                }
                return true;
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className='cursor-pointer w-[24%]'>
                  <input {...getInputProps()} type='file' multiple />
                  <img
                    src={setPhotosPreview(photos[1], 1)}
                    alt='logo'
                    className='w-full'
                  />
                </div>
              )}
            </ReactDropzone>
            <ReactDropzone
              onDrop={(acceptedFiles) => {
                // set value at index zero in images array
                if (acceptedFiles) {
                  setPhotos([
                    ...photos.map((image, index) => {
                      if (index === 2) {
                        return {
                          file: acceptedFiles[0],
                          preview: URL.createObjectURL(acceptedFiles[0]),
                        };
                      }
                      return image;
                    }),
                  ]);
                }
                return true;
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className='cursor-pointer w-[24%]'>
                  <input {...getInputProps()} type='file' multiple />
                  <img
                    src={setPhotosPreview(photos[2], 2)}
                    alt='logo'
                    className='w-full'
                  />
                </div>
              )}
            </ReactDropzone>
            <ReactDropzone
              onDrop={(acceptedFiles) => {
                // set value at index zero in images array
                if (acceptedFiles) {
                  setPhotos([
                    ...photos.map((image, index) => {
                      if (index === 3) {
                        return {
                          file: acceptedFiles[0],
                          preview: URL.createObjectURL(acceptedFiles[0]),
                        };
                      }
                      return image;
                    }),
                  ]);
                }
                return true;
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className='cursor-pointer w-[24%]'>
                  <input {...getInputProps()} type='file' multiple />
                  <img
                    src={setPhotosPreview(photos[3], 3)}
                    alt='logo'
                    className='w-full'
                  />
                </div>
              )}
            </ReactDropzone>
          </div>
          <div className='mb-2'>
            <Input
              id='title'
              label='Listing title'
              type='text'
              value={title}
              onChange={setTitle}
              required
            />
            <BasicSelect
              items={categoriesMock}
              text={"Categories"}
              onChange={setCategory}
              value={category}
              required
            />
            <BasicSelect
              items={
                locations?.map((l) => ({
                  label: l.town,
                  value: l.town,
                })) || []
              }
              text={"Address"}
              onChange={setLocation}
              value={location}
            />
            <Input
              id='description'
              label='Item description'
              type='text'
              multiline
              onChange={setDescription}
              value={description}
              required
            />
          </div>
          <InfoText text='Rental price per:' />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <Input
                id='day'
                label='Day(s)'
                type='number'
                adornment='N$'
                onChange={setDailyPrice}
                value={dailyPrice}
                required
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Input
                id='week'
                label='Week(s)'
                type='number'
                adornment='N$'
                onChange={setWeeklyPrice}
                value={weeklyPrice}
                required
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Input
                id='month'
                label='Month(s)'
                type='number'
                adornment='N$'
                onChange={setMonthlyPrice}
                value={monthlyPrice}
                required
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Input
                id='itemValue'
                label='Item Value'
                type='number'
                adornment='N$'
                onChange={setItemValue}
                value={itemValue}
              />
            </Grid>
            {/* <Grid item xs={2} sm={4} md={4}>
              <Input
                id='quantity'
                label='Quantity'
                type='number'
                onChange={setQuantity}
                value={quantity}
                required
              />
            </Grid> */}
            <Grid item xs={2} sm={4} md={4}>
              <Input
                id='minRentalDays'
                label='Minimum rental days'
                type='number'
                onChange={setMiniRentalDays}
                value={miniRentalDays}
                required
              />
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ marginTop: "1rem" }}
          >
            <Grid item xs={6}>
              <Button
                text='cancel'
                color='secondary'
                clickEvent={handleCancel}
              />
            </Grid>
            <Grid item xs={6}>
              {editForm ? (
                <Button text='Update item' type='submit' loading={isLoading} />
              ) : (
                <Button text='List item' type='submit' loading={isLoading} />
              )}
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Form;
