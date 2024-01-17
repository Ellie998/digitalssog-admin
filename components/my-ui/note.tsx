import classes from "./note.module.css";
import NoteHoleList from "./note-hole-list";
import NoteContent from "./note-content";

const Note = ({
  children,
  title,
  subTitle,
  holeNum,
  className,
}: {
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  holeNum?: number;
  className?: string;
}) => {
  return (
    <div className={`${classes.note} ${className}`}>
      <NoteHoleList number={holeNum} />
      <NoteContent title={title} subTitle={subTitle}>
        {children}
      </NoteContent>
    </div>
  );
};

export default Note;
