import StackedList_Profile from "stories/phone/molecules/StackedList_Profile";

const RecentHistoryLine = ({ profile, title, info, onClick, children }) => {
  return (
    <StackedList_Profile
      style={{ height: "2rem" }}
      profile={{
        name: profile.name,
        style: profile.style ? profile.style : null,
      }}
      title={{
        content: title.content,
        style: title.style ? title.style : null,
      }}
      info={{
        content: info.content,
        style: info.style,
      }}
      onClick={onClick}>
      {children ? children : null}
    </StackedList_Profile>
  );
};

export default RecentHistoryLine;
