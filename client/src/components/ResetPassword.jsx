import { useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "./Nav";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(
      "https://chartify-2-0.onrender.com/auth/reset-password/" + token,
      {
        password,
      }
    )
      .then((response) => {
        if (response.data.status) {
          navigate("/login");
          alert("Password reset successful");
        }
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert("please try after sometime");
      });
  };
  return (
    <>
      <Nav />
      <div className="h-[70vh] md:h-[75vh] w-full bg-black flex items-center justify-center">
        <div className="w-full md:w-[40rem] flex flex-col justify-center items-center border-2 bg-indigo-700 rounded-lg p-8 mx-2">
          <h2 className="pb-4 text-3xl text-center">Reset Password</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label htmlFor="password" className="text-black">
              Enter New Password:
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-white text-black border-2 hover:bg-indigo-700 hover:text-white rounded-md py-2 px-4 w-full transition-colors duration-300"
              type="submit"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
