import styled from "@emotion/styled";
import { useState } from "react";
import classes from "./switch-line.module.css";
import Title from "@/components/phone/atoms/title";
import SubTitle from "@/components/phone/atoms/sub-title";
import TargetBox from "@/components/phone/atoms/target-box";

const Container = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  ${(props) => (props.style ? props.style : null)};
`;

/** insert color rgb og rgba of #... into theme prop */
export default function SwitchLine({
  style,
  title,
  subTitle,
  id,
  setCheckedSwitch,
  setIsSwitchChecked,
  condition,
}) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <TargetBox
      hover={{ backgroundColor: "rgba(233, 233, 233, 0.787)" }}
      style={{ padding: "8px 4px", width: "175px" }}
      isNextTriger={false}
      condition={!isChecked && condition}>
      <label htmlFor={id} style={{ cursor: "pointer" }}>
        <Container style={style} key={id}>
          {title && (
            <Title style={{ fontWeight: "normal", marginLeft: "2px" }}>
              {title}
            </Title>
          )}
          <input
            type="checkbox"
            id={id}
            onChange={(e) => {
              setCheckedSwitch !== undefined &&
                e.target.checked &&
                setCheckedSwitch(id);
              setCheckedSwitch !== undefined &&
                !e.target.checked &&
                setCheckedSwitch("");
              //
              setIsSwitchChecked !== undefined &&
                e.target.checked &&
                setIsSwitchChecked(true);
              setIsSwitchChecked !== undefined &&
                !e.target.checked &&
                setIsSwitchChecked(false);
              //
              e.target.checked && setIsChecked(true);
              !e.target.checked && setIsChecked(false);
            }}
            className={`${classes.toggleInput}`}></input>
          <label className={` ${classes.toggleLabel}`} htmlFor={id}></label>
        </Container>
        {subTitle && (
          <SubTitle style={{ marginLeft: "2px" }}>{subTitle}</SubTitle>
        )}
      </label>
    </TargetBox>
  );
}
