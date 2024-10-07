import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [select, setSelect] = useState(0);
  return (
    <main id="sign-up">
      <h1>Join as :</h1>

      <div className="role">
        <span className={select === 1 ? "selected" : ""}>
          <label
            for="patient"
            onClick={() => {
              setSelect(1);
            }}
          >
            Patient
          </label>
          <input type="radio" name="role" id="patient" required />
        </span>

        <span className={select === 2 ? "selected" : ""}>
          <label
            for="doctor"
            onClick={() => {
              setSelect(2);
            }}
          >
            Doctor
          </label>
          <input type="radio" name="role" id="doctor" required />
        </span>
      </div>

      <Link to="/create-doctor">
        <button className="next">Next</button>
      </Link>
    </main>
  );
}

export default SignUp;
