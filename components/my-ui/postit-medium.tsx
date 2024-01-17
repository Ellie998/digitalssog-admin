import classes from "./postit-medium.module.css";

const PostitMedium = ({
  title,
  content,
  className,
}: {
  title?: string | React.ReactNode;
  content?: string | React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${classes.container} ${className}`}>
      <div className={classes.title}>{title ? title : null}</div>
      <div className={classes.content}>{content ? content : null}</div>
    </div>
  );
};

export default PostitMedium;
