import styled from "@emotion/styled";

const ControlBarContainer = styled.div`
  display: flex;
  width: 100px;
`;
const ControlBar = styled.div`
  width: 20px;
  height: 6px;
  border-left: 1px solid rgb(195, 195, 195);
  ${(props) => (props.style ? props.style : null)}

  &::after {
    content: "";
    display: block;
    width: 20px;
    height: 1px;
    margin-top: 2.5px;
    background-color: rgb(195, 195, 195);
  }
`;
const Controller = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: white;
  position: absolute;
  z-index: 10;
  margin-left: ${(props) =>
    props.position ? `${props.position * 20 + 15}px` : "68px"};
  box-shadow: 2px 2px 4px rgba(128, 128, 128, 0.83);
  cursor: pointer;
`;

const ScrollController = ({ setPosition, position }) => {
  return (
    <>
      <ControlBarContainer>
        <ControlBar onDragEnter={() => setPosition(0)} />
        <ControlBar onDragEnter={() => setPosition(1)} />
        <ControlBar onDragEnter={() => setPosition(2)} />
        <ControlBar onDragEnter={() => setPosition(3)} />
        <ControlBar onDragEnter={() => setPosition(4)} />
        <div
          style={{
            height: "8px",
            width: "20px",
            backgroundColor: "black",
            borderLeft: "1px solid rgb(195, 195, 195)",
          }}
          onDragEnter={() => setPosition(5)}></div>
      </ControlBarContainer>
      <Controller draggable={true} position={position}></Controller>
    </>
  );
};
export default ScrollController;
