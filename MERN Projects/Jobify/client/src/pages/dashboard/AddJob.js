import { FormRow, Alert, FormRowSelect } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();
  const submitForm = (event) => {
    event.preventDefault();
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };
  const inputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    handleChange({ name, value });
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            inputHandler={inputChange}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            inputHandler={inputChange}
          />
          <FormRow
            type="text"
            labelText="job Location"
            name="jobLocation"
            value={jobLocation}
            inputHandler={inputChange}
          />
          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            inputHandler={inputChange}
            list={jobTypeOptions}
          />
          <FormRowSelect
            name="status"
            value={status}
            inputHandler={inputChange}
            list={statusOptions}
          />
          <div className="btn-container">
            <button
              className="btn btn-block submit-btn"
              type="submit"
              onClick={submitForm}
              disabled={isLoading}
            >
              Submit
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
