import styled from "styled-components";

const BrowseItemButton = () => {
  return (
    <StyledButton className="btn gap-2 bg-primary rounded-[180px] border-none text-white mt-5">
      browse items
    </StyledButton>
  );
};

export default BrowseItemButton;

const StyledButton = styled.button`
  background-color: #c13327;
  text-align: center;
`;
