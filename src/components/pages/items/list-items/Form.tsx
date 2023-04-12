import * as React from "react";
import { useState } from "react";
import ReactDropzone from "react-dropzone";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useAuth0 } from "@auth0/auth0-react";
import { Input } from "../../../general/Input";
import { RootState } from "../../../../store/reducers";
import { Button } from "../../../general/Button";
import Grid from "@mui/material/Grid";
import photoUploadImage from "../../../../assets/photo-upload.svg";
import { InfoText } from "../../../general/InfoText";
import { BasicSelect } from "../../../general/BasicSelect";
import * as ItemActionsCreator from "../../../../store/action-creators/items-action-creator";

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

const addressesMock = [
  {
    value: "6sdafsid7fshd1",
    label: "Windhoek",
  },
  {
    value: "6sdafsid7fshd2",
    label: "Katima Mulilo",
  },
  {
    value: "6sdafsid7fshd3",
    label: "Oshakati",
  },
];

const Form = () => {
  const { user } = useAuth0();
  const itemState = useSelector((state: RootState) => state.item);
  const dispatch = useDispatch();

  const { createItem } = bindActionCreators(ItemActionsCreator, dispatch);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [dailyPrice, setDailyPrice] = useState("");
  const [weeklyPrice, setWeeklyPrice] = useState("");
  const [monthlyPrice, setMonthlyPrice] = useState("");
  const [itemValue, setItemValue] = useState("");
  const [quantity, setQuantity] = useState("");
  const [miniRentalDays, setMiniRentalDays] = useState("");
  const [photos, setPhotos] = useState<{ file: any; preview: string }[]>(
    Array(4).fill({ file: null, preview: "" })
  ); // This is the array that will hold the images

  const handleSubmit = async (e: any) => {
    // This function sends the data to the backend
    e.preventDefault();

    createItem({
      title,
      category,
      location,
      description,
      dailyPrice,
      weeklyPrice,
      monthlyPrice,
      itemValue,
      quantity,
      miniRentalDays,
      photos,
      user_id: user?.sub,
    });
    handleCancel();
  };

  const handleCancel = () => {
    // This function clears all the input fields

    setTitle("");
    setCategory("");
    setLocation("");
    setDescription("");
    setDailyPrice("");
    setWeeklyPrice("");
    setMonthlyPrice("");
    setItemValue("");
    setQuantity("");
    setMiniRentalDays("");
    setPhotos(Array(4).fill({ file: null, preview: "" }));
  };

  return (
    <div className='flex items-center justify-center p-6 max-w-2xl'>
      <div className='w-full'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InfoText text='Add Photos' />
          <div className='flex justify-center mb-5 mt-2 gap-2'>
            <ReactDropzone
              onDrop={(acceptedFiles) => {
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
                    src={photos[0].file ? photos[0].preview : photoUploadImage}
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
                    src={photos[1].file ? photos[1].preview : photoUploadImage}
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
                    src={photos[2].file ? photos[2].preview : photoUploadImage}
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
                    src={photos[3].file ? photos[3].preview : photoUploadImage}
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
              items={addressesMock}
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
            <Grid item xs={2} sm={4} md={4}>
              <Input
                id='quantity'
                label='Quantity'
                type='number'
                onChange={setQuantity}
                value={quantity}
                required
              />
            </Grid>
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
              <Button
                text='List item'
                type='submit'
                loading={itemState.isLoading}
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Form;
