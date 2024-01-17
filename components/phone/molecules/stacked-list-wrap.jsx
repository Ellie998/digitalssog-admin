import styled from "@emotion/styled";

const Container = styled.div`
  border-style: solid;
  border-bottom-width: 1px;
  border-color: rgb(229 231 235);
  padding-top: 0.25rem /* 4px */;
  padding-bottom: 0.25rem /* 4px */;
  ${(props) => (props.style ? props.style : null)}
`;

const ListInfoContainer = styled.div`
  font-size: 0.5rem /* 8px */;
  margin-left: 0.5rem /* 8px */;
  color: rgb(163 163 163);
  text-align: start;
  line-height: 1rem /* 16px */;
  ${(props) => (props.style ? props.style : null)}
`;

export default function StackedListWrap({
  style,
  listTitle,
  children,
  className,
}) {
  return (
    <Container style={style} className={className}>
      {listTitle !== undefined && (
        <ListInfoContainer
          style={listTitle.style}
          className={` ${listTitle.className}`}>
          {listTitle.content}
        </ListInfoContainer>
      )}
      {children}
    </Container>
  );
}
