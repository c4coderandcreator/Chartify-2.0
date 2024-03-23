import { useState } from "react";
import chartImg from "../assets/Defaultchart.svg";
import Nav2 from "./Nav2";
const Dashboard = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleLogout = () => {
  //   axios
  //     .get("http://localhost:3000/auth/logout")
  //     .then((res) => {
  //       if (res.data.status) {
  //         navigate("/");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/auth/verify")

  //     .then((res) => {
  //       if (res.data.status) {
  //         console.log(res.data);
  //         navigate("/dashboard");
  //       } else {
  //         navigate("/");
  //       }
  //     });
  // }, []);

  const [chartType, setChartType] = useState("");
  const [year, setYear] = useState("");
  const [yod, setYod] = useState("");
  const [chartUrl, setChartUrl] = useState(chartImg);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newChartUrl = `https://quickchart.io/chart?c={type:'${chartType.trim()}',data:{labels:[${year.trim()}],datasets:[{label:'Users',data:[${yod.trim()}]}]}}`;
    setChartUrl(newChartUrl);
    console.log(newChartUrl);
    console.log(chartUrl);
  };

  return (
    <>
      <Nav2 />
      {/* <div className="w-full flex items-center justify-between text-white h-16 px-4 md:px-16 bg-black">
        <div className="text-2xl text-white md:text-6xl md:pt-2 font-semibold pl-1">
          <Link to="/">Chartify</Link>
        </div>
        <div className="hidden  md:flex gap-4 text-lg md:text-xl font-normal">
          <ul>
            <li className="font-semibold pr-2">
              <Link to="/dashboard">Home</Link>
            </li>
          </ul>
          <ul>
            <li className="bg-white text-black rounded-lg py-1 px-2 border-2 hover:bg-indigo-700 hover:text-white ">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <button
            onClick={handleLogout}
            className="bg-black px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div> */}
      {/* Hamburger menu for mobile */}
      {/* <div className="md:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div> */}
      {/* Mobile menu */}
      {/* {isOpen && (
        <div className=" md:hidden w-screen flex flex-col items-center text-lg text-white font-normal absolute top-16 bg-black">
          <ul className=" m-1">
            <li className="font-semibold text-white pr-2">
              <Link to="/dashboard">Home</Link>
            </li>
          </ul>
          <ul className=" m-1 pb-2">
            <li className="bg-white text-black rounded-lg py-1 px-2 border-2 hover:bg-indigo-700 hover:text-white">
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
          <button
            onClick={handleLogout}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      )} */}

      <div className="flex flex-wrap justify-center items-center py-20 h-[75vh] md:h-[85vh] w-full mx-auto">
        <div className="max-w-sm mx-2 md:mx-auto bg-indigo-700 shadow-md rounded p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="chartType"
                className="block text-white text-sm font-bold mb-2"
              >
                Type of Chart:
              </label>
              <select
                type="text"
                id="chartType"
                name="chartType"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={chartType}
                onChange={(e) => setChartType(e.target.value)}
              >
                <option value="choose chart">Choose a chart</option>
                <option value="bar">bar</option>
                <option value="line">line</option>
                <option value="pie">pie</option>
                <option value="horizontalBar">horizontalBar</option>
                <option value="doughnut">doughnut</option>
                <option value="polarArea">polarArea</option>
                <option value="sparkline">sparkline</option>
                <option value="radar">radar</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="year"
                className="block text-white text-sm font-bold mb-2"
              >
                Enter Year:
              </label>
              <input
                type="text"
                id="year"
                name="year"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="yod"
                className="block text-white text-sm font-bold mb-2"
              >
                Enter Numeric Data:
              </label>
              <input
                type="text"
                id="yod"
                name="yod"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={yod}
                onChange={(e) => setYod(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-white border-2 hover:bg-indigo-700 text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Generate
              </button>
            </div>
          </form>
          <p className="text-sm py-1 mt-2">
            {" "}
            Note : sample year : 2020,2022,2027,2028... <br />
            sample data : 10000,2345,300,1400...
          </p>
        </div>
        <div className="mx-2 md:mx-auto bg-white shadow-md rounded my-2">
          <img
            className="w-full  md:w-[50vw] h-[50vh] md:h-[65vh]"
            src={chartUrl}
            alt="chart"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
