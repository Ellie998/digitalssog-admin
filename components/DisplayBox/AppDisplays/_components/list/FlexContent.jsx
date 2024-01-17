import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
  width: ${(props) => (props.styles.width ? props.styles.width : "100%")};
  ${(props) => props.styles}
`;

const FlexItem = styled.div`
  margin-left: 0.25rem /* 4px */;
`;

export default function FlexContent({
  className,
  items,
  styles = { width: "100%" },
  children,
  id,
}) {
  return (
    <>
      <Container key={id} className={`${className}`} styles={styles}>
        {items?.map((item, i) => (
          <FlexItem key={`flexItem${i}`}>{item}</FlexItem>
        ))}
      </Container>
      {children}
    </>
  );
}
