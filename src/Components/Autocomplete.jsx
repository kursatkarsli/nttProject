import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Home } from "@mui/icons-material";
import {
  alpha,
  FormControl,
  Input,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

export default function AutoCompleteComponent() {
  const [selectBoxValue, setSelectBoxValue] = React.useState("Categories");
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const CustomSelect = styled(Select)(({ theme }) => ({
    "&::before": {
      border: "0 !important",
    },
    "&::focus": {
      border: "0 !important",
    },
  }));

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectBoxValue(value);
  };
  return (
    <Search>
      <Input
        placeholder="Search..."
        sx={{
          border: "1px solid #89919A",
          paddingLeft: "2rem",
          borderRadius: "3px",
          "&::before": { border: "none", display: "none" },
          "&::focused": { display: "none" },
          "&::after": { display: "none" },
          width: '100%',
          padding:'0 0 0 2rem'

        }}
        endAdornment={
          <CustomSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            autoWidth
            variant="filled"
            sx={{
              ".css-1gzkxga-MuiSelect-select-MuiInputBase-input-MuiFilledInput-input":
                {
                paddingTop: ".3rem",
                },
            }}
            size="small"
            value={selectBoxValue}
            onChange={handleChange}
            renderValue={(selected) => {
              if (!selectBoxValue) {
                return <span>Categories</span>;
              }

              return selected;
            }}
          >
            <MenuItem value={'Data'}>Data</MenuItem>
            <MenuItem value={'Category Name'}>Category Name</MenuItem>
            <MenuItem value={'Category Name'}>Category Name</MenuItem>
          </CustomSelect>
        }
        size="medium"
      />
    </Search>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];
