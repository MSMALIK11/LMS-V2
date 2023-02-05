import { Button, Typography } from "@mui/material";
import React from "react";
import TextBox from "../common/TextBox";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Email from "@mui/icons-material/Email";
import Lock from "@mui/icons-material/LockRounded";
import { signupUser } from "../services/api";
import { useNavigate, useLocation } from "react-router-dom";

const state = {
  name: "",
  email: "",
  password: "",
};

const footerText = {
  login: "Dont have an account   ",
  signup: "Already have an account",
};
const Signup = () => {
  const [user, setUser] = React.useState(state);
  const [error, setError] = React.useState(false);

  const [isSignup, setIsSignup] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // let name=e.target.name;
    // let value=e.target.value;

    if (name === "email") {
      const isValid = value.match(/^\S+@\S+\.\S+$/);
      console.log("isValid", isValid);
      if (isValid) {
        setError(false);
      } else {
        setError(true);
      }
    }

    setUser({ ...user, [name]: value });
  };

  const handleSignup = async (val) => {
    console.log(val);
    const res = await signupUser(val, user);

    if (res?.data.message === "login successfully completed") {
      alert("Login Successsfully 😎👌");
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
      return;
    }
    if (res) {
      alert("Signup successfully please login 😎👌");

      setIsSignup(true);
      return;
    }
  };

  return (
    <div className="signupWraper">
      <div className="signup shadow p-3 text-center ">
        <Typography variant="h5">
          {isSignup === true ? "Login Here" : "Signup Here"}
        </Typography>
        {!isSignup && (
          <TextBox
            label="Username"
            name="name"
            icon={<AccountCircleRoundedIcon />}
            handleChange={handleChange}
          />
        )}

        <TextBox
          label="Email"
          name="email"
          handleChange={handleChange}
          icon={<Email />}
          error={error}
          user={user}
        />
        <TextBox
          label="password"
          name="password"
          handleChange={handleChange}
          icon={<Lock />}
        />
        {isSignup ? (
          <Button
            variant="contained"
            color="secondary"
            className="mt-3"
            onClick={() => handleSignup("login")}
          >
            Login{" "}
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            className="mt-3"
            onClick={() => handleSignup("signup")}
          >
            Signup{" "}
          </Button>
        )}

        <div>
          <Typography variant="contained" className="mt-4">
            {isSignup ? footerText.login : footerText.signup}{" "}
            <span
              onClick={() => setIsSignup(!isSignup)}
              className="text-primary"
            >
              {isSignup ? "signup" : "login"}
            </span>{" "}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Signup;
