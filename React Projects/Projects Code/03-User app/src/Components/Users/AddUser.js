import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInput = useRef();
  const ageInput = useRef();
  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInput.current.value;
    const enteredAge = ageInput.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Error!",
        message: "Please enter a  valid username and age.",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInput.current.value = "";
    ageInput.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInput} />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" ref={ageInput} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
