import classes from "./BlurModal.module.css";

export default function BlurModal({
  className,
  style,
  onClickBackDrop,
  children,
}) {
  return (
    <>
      <div className={`${classes.modalWrap}`}>
        <div className={classes.backdrop} onClick={onClickBackDrop}></div>
        <div className={`${classes.modal} ${className}`} style={style}>
          {children}
        </div>
      </div>
    </>
  );
}
