import styled from "@emotion/styled";

const ProfileIconContainer = styled.i`
  font-style: normal;
  padding-left: 0.125rem /* 2px */;
  padding-right: 0.125rem /* 2px */;
  padding-top: 0.25rem /* 4px */;
  padding-bottom: 0.25rem /* 4px */;
  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16px */;
  height: 1.25rem /* 20px */;
  width: 1.25rem /* 20px */;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 9999px;
  ${(props) => (props.style ? props.style : null)}
`;

const ProfileIcon = ({ name, style, children }) => {
  return (
    <ProfileIconContainer
      style={style}
      className={name ? `bi bi-${name}` : null}>
      {children}
    </ProfileIconContainer>
  );
};
export default ProfileIcon;
