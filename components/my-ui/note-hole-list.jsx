import classes from "./note-hole-list.module.css";

const NoteHoleList = ({ number }) => {
  let temp = 0;
  const noteHoleComponents = [];

  while (temp < number) {
    noteHoleComponents.push(temp);
    temp++;
  }
  return (
    <div className={`${classes["note-hole-list"]} col-start-1 col-end-2 `}>
      {noteHoleComponents.map((i) => (
        <div key={i} className={classes.noteHole}></div>
      ))}
    </div>
  );
};

export default NoteHoleList;
