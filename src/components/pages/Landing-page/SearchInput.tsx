import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Search } from "@mui/icons-material";
import { Box } from "@mui/material";

interface Props {
  data: any[];
}

export default function SearchInput({ data }: Props) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Autocomplete
        id='free-solo-demo'
        freeSolo
        options={data.map((option) => option)}
        renderInput={(params) => (
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Search sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              {...params}
              id='search'
              label='Search for items'
              variant='standard'
            />
          </Box>
        )}
      />
    </Stack>
  );
}
