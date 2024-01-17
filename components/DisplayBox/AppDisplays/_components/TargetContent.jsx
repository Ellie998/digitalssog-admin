// components/TargetContent.jsx
import styled from "@emotion/styled";

import { useContext } from "react";
import { UrlContext } from "@/components/phone/templates/display-box";
import { useRouter } from "next/navigation";
import { encodeUrl } from "@/lib/utils";

const Container = styled.div`
  ${(props) => (props.style ? props.style : null)}
`;

/**  make component border and tooltip
 *
 * isWidthFull,
 * id,
 * onClick,
 * isNextDescriptionLink,
 * goBackDescription,
 * targetOption,
 * className,
 * children
 */
const TargetContent = (prop) => {
  const targetStyle = {
    border: "2px solid red",
    width: prop.isWidthFull ? "173px" : "fit-content",
    height: "fit-content",
    borderRadius: "2px",
  };
  const router = useRouter();
  const { functionName, appName, methodOrder, guideOrder } =
    useContext(UrlContext);
  return (
    <Container style={prop.style}>
      {!prop.isNextDescriptionLink && !prop.goBackDescription && (
        <div
          key={prop.id}
          onClick={prop.onClick}
          className={prop.className}
          data-tooltip={prop.targetOption ? "클릭" : null}
          style={prop.targetOption ? targetStyle : null}>
          {prop.children}
        </div>
      )}
      {prop.isNextDescriptionLink && (
        <div
          key={prop.id}
          className={prop.className}
          data-tooltip={prop.targetOption ? "클릭" : null}
          style={prop.targetOption ? targetStyle : null}
          onClick={() => {
            prop.onClick ? prop.onClick() : null;
            prop.targetOption &&
              router.push(
                `/description/${encodeUrl(functionName)}?appName=${encodeUrl(
                  appName
                )}&methodOrder=${methodOrder}&guideOrder=${String(
                  Number(guideOrder) + 1
                )}`,
                { scroll: false }
              );
          }}>
          {prop.children}
        </div>
      )}
      {prop.goBackDescription && (
        <div
          key={prop.id}
          className={prop.className}
          data-tooltip={prop.targetOption ? "클릭" : null}
          style={prop.targetOption ? targetStyle : null}
          onClick={() => {
            prop.onClick ? prop.onClick() : null;
            setMyDescriptionId((prevValue) => (+prevValue - 1).toString());
          }}>
          {prop.children}
        </div>
      )}
    </Container>
  );
};

export default TargetContent;
