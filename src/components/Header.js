import React from "react";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <Button color="green" text="Hello" />
      <Button color="red" text="click it" />
      <Button color="pink" text="doesn't matter" />
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
