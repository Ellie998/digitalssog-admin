import styled from "@emotion/styled";
import ProfileIcon from "@/components/phone/atoms/profile-icon";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  width: 170px;
  cursor: pointer;
  align-items: center;
  height: 30px;
  ${(props) => (props.style ? props.style : null)}
`;

const ProfileContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  ${(props) => (props.style ? props.style : null)}
`;

const TitleContainer = styled.div`
  font-size: 0.875rem /* 14px */;
  text-align: left;

  height: 1rem /* 16px */;
  grid-column-start: 2;
  grid-row-start: 1;
  grid-column-end: ${(props) => (props.info !== undefined ? "5" : "7")};
  grid-row-end: ${(props) => (props.subTitle !== undefined ? "2" : "3")};
  ${(props) => (props.style ? props.style : null)}
`;
const SubTitleContainer = styled.div`
  font-size: 0.5rem /* 8px */;
  text-align: left;
  color: rgb(156 163 175);

  height: 1rem /* 16px */;
  grid-column-start: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-end: ${(props) => (props.info !== undefined ? "5" : "7")};
  ${(props) => (props.style ? props.style : null)}
`;

const InfoContainer = styled.div`
  font-size: 0.5rem /* 14px */;
  color: rgb(115 115 115);
  height: 1rem /* 16px */;
  text-align: end;
  grid-column-start: 5;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: ${(props) => (props.subInfo !== undefined ? "2" : "3")};
  align-self: ${(props) => (props.subInfo === undefined ? "center" : null)};
  ${(props) => (props.style ? props.style : null)}
  &:hover {
    ${(props) => (props.hover ? props.hover : null)}
  }
`;

const SubInfoContainer = styled.div`
  font-size: 0.5rem /* 8px */;
  text-align: end;
  height: 1rem /* 16px */;
  grid-column-start: 5;
  grid-column-end: 7;
  grid-row-start: 2;
  grid-row-end: 3;
  ${(props) => (props.style ? props.style : null)}
`;

export default function StackedList_Profile({
  style,
  profile,
  title,
  subTitle,
  info,
  subInfo,
  onClick,
  onMouseDown,
  children,
  id,
}) {
  return (
    <>
      <Container
        key={id}
        style={style}
        onClick={onClick}
        onMouseDown={onMouseDown}>
        {profile && (
          <ProfileContainer>
            <ProfileIcon
              name={profile && profile.name}
              style={profile && profile.style}
              onClick={profile && profile.onClick}>
              {profile && profile.content ? profile.content : null}
            </ProfileIcon>
          </ProfileContainer>
        )}

        <TitleContainer
          style={title.style}
          info={info}
          subTitle={subTitle}
          onClick={title.onClick}>
          {title.content}
        </TitleContainer>
        {/* subTitle */}
        {subTitle !== undefined && (
          <SubTitleContainer style={subTitle.style} info={info}>
            {subTitle.content}
          </SubTitleContainer>
        )}
        {/* info */}
        {info !== undefined && (
          <InfoContainer
            style={info.style}
            hover={info.hover}
            subInfo={subInfo}
            onClick={info.onClick}>
            {info.content}
          </InfoContainer>
        )}
        {/* sub info */}
        {subInfo !== undefined && (
          <SubInfoContainer style={subInfo.style}>
            {subInfo.content}
          </SubInfoContainer>
        )}
      </Container>
      {children}
    </>
  );
}
