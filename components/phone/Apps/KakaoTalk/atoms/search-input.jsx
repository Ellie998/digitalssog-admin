import styled from "@emotion/styled";

const Container = styled.input``;

const SearchInput = ({ style, placeholder }) => {
  return <Container style={{ ...style }} placeholder={placeholder} />;
};
export default SearchInput;
