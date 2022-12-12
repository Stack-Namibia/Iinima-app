import { Grid, TextField } from "@mui/material";
import { Button } from "../../general/Button";
import styled from "styled-components";

const Form = () => {
  const textField: any = {
    variant: "outlined",
    fullWidth: true,
    margin: "dense",
  };

  const profile: any = {
    firstname: "Jon",
    lastname: "Doe",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    coverImageUrl:
      "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
    fields: {
      "First Name": "Jon",
      "Last Name": "Doe",
      "Mobile Number": "(081) 656-1487",
      Email: "jondoe@example.com",
      Address: "Windhoek, Namibia",
    },
  };

  return (
    <div className="w-full">
      <div>
        <div className="flex flex-col">
          <img
            className="h-32 w-full object-cover lg:h-48"
            src={profile.coverImageUrl}
            alt=""
          />
          <LabelDiv
            htmlFor="file-upload"
            className="cursor-pointer rounded-md bg-white font-medium text-right mr-3"
          >
            <span>Change Cover Image</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
            />
          </LabelDiv>
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex flex-col">
              <img
                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                src={profile.imageUrl}
                alt=""
              />
              <LabelDiv
                htmlFor="file-upload"
                className="cursor-pointer rounded-md bg-white font-medium text-left lg:text-center"
              >
                <span>Change Profile Image</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </LabelDiv>
            </div>
            <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                <div className="truncate text-2xl font-bold text-gray-900">
                  {profile.name}
                </div>
              </div>
              <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"></div>
            </div>
          </div>
          <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
            <div className="truncate text-2xl font-bold text-gray-900">
              {profile.name}
            </div>
          </div>
        </div>
      </div>
      <div className="divider" />
      <div className="flex items-center justify-center">
        <div className="w-full lg:w-1/2">
          <form className="p-6">
            <div className="flex flex-col gap-5 mb-2 lg:flex-row">
              <TextField
                {...textField}
                id="firstName"
                label="First Name"
                type="text"
                value={profile.firstname}
              />
              <TextField
                {...textField}
                id="lastName"
                label="Last Name"
                type="text"
                value={profile.lastname}
              />
            </div>
            <div className="flex flex-col gap-5 mb-2 lg:flex-row">
              <TextField
                {...textField}
                id="mobileNumber"
                label="Mobile Number"
                type="text"
                value={profile.fields["Mobile Number"]}
              />
              <TextField
                {...textField}
                id="email"
                label="Email"
                type="email"
                value={profile.fields["Email"]}
                className="h-Full"
              />
            </div>

            <TextField
              {...textField}
              id="address"
              label="Address"
              type="text"
              value={profile.fields["Address"]}
            />

            <TextField
              {...textField}
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              defaultValue={profile.about}
            />
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ marginTop: "1rem" }}
            >
              <Grid item xs={6}>
                <Button text="cancel" color="secondary" />
              </Grid>
              <Grid item xs={6}>
                <Button text="Save changes" />
              </Grid>
            </Grid>

            <div className="flex"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

const LabelDiv = styled.label`
  color: #5e8797;
  &:hover {
    color: #d63e3e;
  }
`;
