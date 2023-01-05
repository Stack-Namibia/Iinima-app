import * as React from "react";
import { Input } from "../../../general/Input";
import { Button } from "../../../general/Button";
import Grid from "@mui/material/Grid";
import photoUploadImage from "../../../../assets/photo-upload.svg";
import { InfoText } from "../../../general/InfoText";
import { BasicSelect } from "../../../general/BasicSelect";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

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
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [dayPrice, setDayPrice] = useState("");
  const [weekPrice, setWeekPrice] = useState("");
  const [monthPrice, setMonthPrice] = useState("");
  const [itemValue, setItemValue] = useState("");
  const [quantity, setQuantity] = useState("");
  const [minRentalDays, setMinRentalDays] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<{ file: any; preview: string }[]>([]); // This is the array that will hold the images

  const handleSubmit = (e: any) => {
    // This function sends the data to the backend
    e.preventDefault();
    setLoading(true);
    console.log({
      title,
      category,
      address,
      description,
      dayPrice,
      weekPrice,
      monthPrice,
      itemValue,
      quantity,
      minRentalDays,
    });
    setTimeout(() => {
      setLoading(false);
      handleCancel();
    }, 2000);
  };

  const handleCancel = () => {
    // This function clears all the input fields

    setTitle("");
    setCategory("");
    setAddress("");
    setDescription("");
    setDayPrice("");
    setWeekPrice("");
    setMonthPrice("");
    setItemValue("");
    setQuantity("");
    setMinRentalDays("");
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles) {
        setImages([
          ...images,
          {
            file: acceptedFiles[0],
            preview: URL.createObjectURL(acceptedFiles[0]),
          },
        ]);
      }
      return true;
    },
  });

  return (
    <div className='flex items-center justify-center p-6 max-w-2xl'>
      <div className='w-full'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InfoText text='Add Photos' />
          <div className='flex justify-center mb-5 mt-2 gap-2'>
            <div {...getRootProps()} className='cursor-pointer w-[24%]'>
              <input
                {...getInputProps()}
                type='file'
                className='w-10 invisible'
              />
              <img
                src={images[0] ? images[0].preview : photoUploadImage}
                alt='logo'
                className='w-full'
              />
            </div>
            <div {...getRootProps()} className='cursor-pointer w-[24%]'>
              <input {...getInputProps()} type='file' multiple />
              <img
                src={images[1] ? images[1].preview : photoUploadImage}
                alt='logo'
                className='w-full'
              />
            </div>
            <div {...getRootProps()} className='cursor-pointer w-[24%]'>
              <input {...getInputProps()} type='file' multiple />
              <img
                src={images[2] ? images[2].preview : photoUploadImage}
                alt='logo'
                className='w-full'
              />
            </div>
            <div {...getRootProps()} className='cursor-pointer w-[24%]'>
              <input {...getInputProps()} type='file' multiple />
              <img
                src={images[3] ? images[3].preview : photoUploadImage}
                alt='logo'
                className='w-full'
              />
            </div>
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
              onChange={setAddress}
              value={address}
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
                onChange={setDayPrice}
                value={dayPrice}
                required
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Input
                id='week'
                label='Week(s)'
                type='number'
                adornment='N$'
                onChange={setWeekPrice}
                value={weekPrice}
                required
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Input
                id='month'
                label='Month(s)'
                type='number'
                adornment='N$'
                onChange={setMonthPrice}
                value={monthPrice}
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
                onChange={setMinRentalDays}
                value={minRentalDays}
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
              <Button text='List item' type='submit' loading={loading} />
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Form;
