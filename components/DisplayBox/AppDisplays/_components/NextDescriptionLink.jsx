// components/NextDescriptionLink.jsx
import React, { useContext } from "react";
import UrlContext from "../../../page_context/UrlContext";

/**prop : children and nextOption */
const NextDescriptionLink = ({ children, nextOption }) => {
  const { setMyDescriptionId } = useContext(UrlContext);
  return (
    <div
      onClick={() => {
        nextOption &&
          setMyDescriptionId((prevValue) => (+prevValue + 1).toString());
      }}>
      {children}
    </div>
  );
};

export default NextDescriptionLink;
