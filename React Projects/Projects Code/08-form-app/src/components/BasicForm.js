import UseInput from "../hooks/use-input1";
const isEmail = (value) => value.includes("@");
const notEmpty = (value) => value.trim() !== "";

const BasicForm = (props) => {
  const {
    isValue: enteredName,
    isValid: nameIsValid,
    error: nameError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = UseInput(notEmpty);
  const {
    isValue: enteredName1,
    isValid: name1IsValid,
    error: name1Error,
    inputChangeHandler: name1ChangeHandler,
    inputBlurHandler: name1BlurHandler,
    reset: resetName1,
  } = UseInput(notEmpty);

  const {
    isValue: enteredEmail,
    isValid: emailIsValid,
    error: emailError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = UseInput(isEmail);

  let formIsValid = false;
  if (nameIsValid && emailIsValid && name1IsValid) {
    formIsValid = true;
  }

  const formSumbitHandler = (event) => {
    event.preventDefault();
    resetName();
    resetName1();
    resetEmail();
  };

  const nameInputClasses = nameError ? "form-control invalid" : "form-control";
  const name1InputClasses = name1Error
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSumbitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameError && <p className="error-text">This must not be empty</p>}
        </div>
        <div className={name1InputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredName1}
            onChange={name1ChangeHandler}
            onBlur={name1BlurHandler}
          />
          {name1Error && <p className="error-text">This must not be empty</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      {emailError && <p className="error-text">Enter valid email</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
