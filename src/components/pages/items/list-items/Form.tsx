import * as React from "react";
import { Input } from "../../../general/Input";
import { Button } from "../../../general/Button";
import Grid from "@mui/material/Grid";
import photoUploadImage from "../../../../assets/photo-upload.svg";
import { InfoText } from "../../../general/InfoText";
import { BasicSelect } from "../../../general/BasicSelect";
import { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
  };

  return (
    <div className='flex items-center justify-center p-6 max-w-2xl'>
      <div className='w-full'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InfoText text='Add Photos' />
          <div className='flex justify-center mb-5 mt-2 gap-2'>
            <img src={photoUploadImage} alt='logo' className='w-[24%]' />
            <img src={photoUploadImage} alt='logo' className='w-[24%]' />
            <img src={photoUploadImage} alt='logo' className='w-[24%]' />
            <img src={photoUploadImage} alt='logo' className='w-[24%]' />
          </div>
          <div className='mb-2'>
            <Input
              id='title'
              label='Listing title'
              type='text'
              value={title}
              onChange={setTitle}
            />
            <BasicSelect
              items={categoriesMock}
              text={"Categories"}
              onChange={setCategory}
              value={category}
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
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Input
                id='minRentalDays'
                label='Minimum rental days'
                type='number'
                onChange={setMinRentalDays}
                value={minRentalDays}
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
              <Button text='cancel' color='secondary' />
            </Grid>
            <Grid item xs={6}>
              <Button text='List item' type='submit' />
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Form;
