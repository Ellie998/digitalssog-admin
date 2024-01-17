import styled from "@emotion/styled";
import { useState } from "react";
import Icon from "@/components/phone/atoms/icon";

const Container = styled.div`
  display: flex;
  position: relative;
  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16px */;
  border-radius: 0.75rem /* 12px */;
  padding-top: 0.25rem /* 4px */;
  padding-bottom: 0.25rem /* 4px */;
  padding-left: 0.5rem /* 8px */;
  padding-right: 0.5rem /* 8px */;
  text-align: center;
  cursor: pointer;
  animation: fadeInUp 0.5s;
  animation: ${(props) => (props.closeTriger ? "fadeOutDown 0.5s" : null)};
  margin-left: auto;
  margin-right: auto;

  ${(props) => (props.style ? props.style : null)}
  @keyframes fadeInUp {
    0% {
      opacity: 0.7;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  @keyframes fadeOutDown {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  }
`;

export default function Alert({
  icon,
  style = {
    color: "rgb(255, 255, 255)",
    border: "1px solid transparent",
    backgroundColor: "rgba(40, 40, 40, 0.51)",
    width: "max-content",
    top: "0px",
  },

  onClick,
  content,
}) {
  const [closeTriger, setCloseTriger] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(true);
  setTimeout(() => {
    setCloseTriger(true);
  }, 2000);

  setTimeout(() => {
    setIsAlertOpen(false);
  }, 2500);

  return (
    <>
      {isAlertOpen && (
        <Container
          closeTriger={closeTriger}
          onClick={onClick}
          style={{
            color: "rgb(255, 255, 255)",
            border: "1px solid transparent",
            backgroundColor: "rgba(40, 40, 40, 0.51)",
            width: "max-content",
            top: "0px",
            ...style,
          }}>
          <Icon
            name={`${icon.name}`}
            style={{
              marginRight: "0.25rem",
              borderRadius: "0.5rem",
              padding: "0.125rem",
              ...icon.style,
            }}
          />
          {content}
        </Container>
      )}
    </>
  );
}
