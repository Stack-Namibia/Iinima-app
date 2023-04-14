import { Search } from "@mui/icons-material";
import { Input } from "react-daisyui";

interface SearchProps {
  value: string;
  onChange: (e: any) => void;
  handleSearch: () => void;
}

const SearchInput = ({ value, onChange, handleSearch }: SearchProps) => {
  return (
    <>
      <div className='w-full'>
        <Input
          type='text'
          placeholder='Search'
          value={value}
          onChange={onChange}
          className='w-full bg-white border border-gray-300 rounded-lg shadow-sm py-2 pl-10 pr-4 text-base focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary'
        />
        <Search
          sx={{
            position: "absolute",
            top: "40%",
            right: "2rem",
            transform: "translateY(-50%)",
            color: "gray.500",
          }}
        />
      </div>
    </>
  );
};

export default SearchInput;
