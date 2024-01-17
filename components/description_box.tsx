import classes from "./description_box.module.css";

const DescriptionBox = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string | React.ReactNode;
}) => {
  return (
    <div className={classes.box}>
      <div className={classes.title}>{title}</div>
      {children}
    </div>
  );
};

export default DescriptionBox;
