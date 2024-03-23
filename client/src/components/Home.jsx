import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import dataImg from "../assets/data.svg";
import Nav from "./Nav";

const Home = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const alertUser = () => {
    // alert("Please Login 🫂");
  };
  const handleLogout = () => {
    axios
      .get("https://chartify-2-0.onrender.com/auth/logout")
      .then((res) => {
        if (res.data.status) {
          navigate("/signup");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Nav />
      <div className="flex flex-col md:flex-row justify-between items-center bg-black px-4 md:px-20 mt-8">
        <div className="text-center md:text-left order-2 md:order-1">
          <div className="text-3xl md:text-5xl text-white font-bold m-4 md:m-6">
            Create Charts in <br /> Seconds
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start m-4">
            <button
              onClick={alertUser}
              className="w-full text-lg md:text-2xl border-2 hover:border-white bg-indigo-700 hover:bg-white hover:text-indigo-700 text-white md:mr-4 rounded-lg py-2 m-1 md:py-1"
            >
              <Link to="/login">Login</Link>
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-lg md:text-2xl border-2 text-white bg-indigo-700 hover:bg-white hover:text-indigo-700 rounded-lg py-2 m-1 md:py-1"
            >
              SignUp
            </button>
          </div>
        </div>

        <div className="w-full md:w-[45vw] h-auto md:h-[80vh] order-1 md:order-2">
          <img
            className="w-full h-full object-cover"
            src={dataImg}
            alt="image"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
