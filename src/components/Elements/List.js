import React from "react";

const List = ({ children, ordered }) => {
  const css = {
    "& li": {
      fontSize: "1rem",
      lineHeight: "1.3",
      margin: "0.3rem auto"
    },
    "@media(min-width: 1024px)": {
      "& li": {
        fontSize: "1.5rem"
      }
    }
  };
  return ordered ? (
    <ol css={css}>{children}</ol>
  ) : (
    <ul css={css}>{children}</ul>
  );
};

export { List };
