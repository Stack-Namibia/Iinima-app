import * as React from "react";
import { Input } from "../../../general/Input";
import { Button } from "../../../general/Button";
import Grid from "@mui/material/Grid";
import photoUploadImage from "../../../../assets/photo-upload.svg";
import { InfoText } from "../../../general/InfoText";
import { BasicSelect } from "../../../general/BasicSelect";

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
    value: "6sdafsid7fshd",
    label: "Windhoek",
  },
  {
    value: "6sdafsid7fshd",
    label: "Katima Mulilo",
  },
  {
    value: "6sdafsid7fshd",
    label: "Oshakati",
  },
];

const Form = () => (
  <div className='flex items-center justify-center p-6 max-w-2xl'>
    <div className='w-full'>
      <InfoText text='Add Photos' />
      <div className='flex justify-center mb-5 mt-2 gap-2'>
        <img src={photoUploadImage} alt='logo' className='w-[24%]' />
        <img src={photoUploadImage} alt='logo' className='w-[24%]' />
        <img src={photoUploadImage} alt='logo' className='w-[24%]' />
        <img src={photoUploadImage} alt='logo' className='w-[24%]' />
      </div>
      <div className='mb-2'>
        <Input id='title' label='Listing title' type='text' />
        <BasicSelect items={categoriesMock} text={"Categories"} />
        <BasicSelect items={addressesMock} text={"Address"} />
        <Input
          id='description'
          label='Item description'
          type='text'
          multiline
        />
      </div>
      <InfoText text='Rental price per:' />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Input id='day' label='Day(s)' type='number' adornment='N$' />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Input id='week' label='Week(s)' type='number' adornment='N$' />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Input id='month' label='Month(s)' type='number' adornment='N$' />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Input
            id='itemValue'
            label='Item Value'
            type='number'
            adornment='N$'
          />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Input id='quantity' label='Quantity' type='number' />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Input id='minRentalDays' label='Minimum rental days' type='number' />
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
          <Button text='List item' />
        </Grid>
      </Grid>
    </div>
  </div>
);

export default Form;
