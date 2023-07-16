const FormRowSelect = ({ name, labelText, value, inputHandler, list }) => {
  return (
    <div className="form-row">
      <label htmlFor="status" className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        onChange={inputHandler}
        className="form-select"
      >
        {list.map((status, index) => {
          return (
            <option value={status} key={index}>
              {status}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
