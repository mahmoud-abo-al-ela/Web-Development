import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import { FormRow, Alert } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [location, setLocation] = useState(user.location);
  const [lastName, setLastName] = useState(user.lastName);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !email || !location || !lastName) {
      displayAlert();
      return;
    }
    updateUser({ name, email, location, lastName });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={submitHandler}>
        <h3>Profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            inputHandler={(e) => setName(e.target.value)}
          />
          <FormRow
            type="text"
            labelText="last name"
            value={lastName}
            inputHandler={(e) => setLastName(e.target.value)}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            inputHandler={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type="text"
            name="location"
            value={location}
            inputHandler={(e) => setLocation(e.target.value)}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? "Please wait..." : "Save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
