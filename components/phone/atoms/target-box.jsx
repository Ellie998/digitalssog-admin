// components/TargetBox.jsx
import styled from "@emotion/styled";

import { useContext } from "react";
import { UrlContext } from "@/components/phone/templates/display-box";
import { useRouter } from "next/navigation";
import { encodeUrl } from "@/lib/utils";

const Container = styled.div`
  cursor: pointer;
  width: ${(props) => (props.style.width ? props.style.width : "fit-content")};
  height: ${(props) =>
    props.style.height ? props.style.height : "fit-content"};
  border: ${(props) => (props.condition ? "2px solid red" : "none")};
  border-radius: "2px";
  ${(props) => (props.style ? props.style : null)}
  &:hover {
    ${(props) => (props.hover ? props.hover : null)}
  }
`;

/**  make component border and tooltip */
const TargetBox = ({
  id = "TargetBox",
  style = { width: "fit-content" },
  hover,
  onClick,
  condition,
  isNextTriger = true,
  isBackTriger = false,
  children,
  onMouseDown,
}) => {
  const router = useRouter();
  const { functionName, appName, methodOrder, guideOrder } =
    useContext(UrlContext);

  return (
    <Container
      id={id}
      style={style}
      hover={hover}
      condition={condition && !isBackTriger}
      data-tooltip={
        condition && !isBackTriger
          ? onMouseDown
            ? "1초 이상 누르고 있기"
            : "클릭"
          : null
      }
      onMouseDown={() => {
        onMouseDown ? onMouseDown() : null;
        onMouseDown &&
          setTimeout(() => {
            isNextTriger &&
              condition &&
              router.push(
                `/description/${encodeUrl(functionName)}?appName=${encodeUrl(
                  appName
                )}&methodOrder=${methodOrder}&guideOrder=${String(
                  Number(guideOrder) + 1
                )}`,
                { scroll: false }
              );

            isBackTriger &&
              condition &&
              router.push(
                `/description/${encodeUrl(functionName)}?appName=${encodeUrl(
                  appName
                )}&methodOrder=${methodOrder}&guideOrder=${String(
                  Number(guideOrder) - 1
                )}`,
                { scroll: false }
              );
          }, 1000);
      }}
      onClick={() => {
        !onMouseDown &&
          isNextTriger &&
          condition &&
          router.push(
            `/description/${encodeUrl(functionName)}?appName=${encodeUrl(
              appName
            )}&methodOrder=${methodOrder}&guideOrder=${String(
              Number(guideOrder) + 1
            )}`,
            { scroll: false }
          );
        onClick ? onClick() : null;
        !onMouseDown &&
          isBackTriger &&
          condition &&
          router.push(
            `/description/${encodeUrl(functionName)}?appName=${encodeUrl(
              appName
            )}&methodOrder=${methodOrder}&guideOrder=${String(
              Number(guideOrder) - 1
            )}`,
            { scroll: false }
          );
      }}>
      {children}
    </Container>
  );
};

export default TargetBox;
