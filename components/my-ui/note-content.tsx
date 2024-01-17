import classes from "./note-content.module.css";

// min-height: ${(props) => (props.height ? props.height : "800px")};

const NoteContent = ({
  children,
  title,
  subTitle,
}: {
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
}) => {
  return (
    <div className={`${classes.container} `}>
      <div className="mx-auto">
        <div className="pb-2 text-3xl">{title ? title : null}</div>
        <div className="text-sm text-slate-500">
          {subTitle ? subTitle : null}
        </div>
      </div>
      <div className="mt-[30px]">{children}</div>
    </div>
  );
};

export default NoteContent;
