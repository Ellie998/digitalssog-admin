import styled from '@emotion/styled';

const IconContainer = styled.i(() => ({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  cursor: 'pointer',
  borderRadius: '9999px',
}));

export default function Icon({ id, name, style, className, onClick }) {
  return (
    <IconContainer
      style={style}
      id={id}
      onClick={onClick}
      className={`bi bi-${name}  ${className}`}
    ></IconContainer>
  );
}
