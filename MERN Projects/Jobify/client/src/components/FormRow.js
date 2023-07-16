const FormRow = ({ type, name, inputHandler, labelText, value }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        className="form-input"
        name={name}
        value={value}
        onChange={inputHandler}
      />
    </div>
  );
};
export default FormRow;
