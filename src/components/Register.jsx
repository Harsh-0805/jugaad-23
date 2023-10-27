import { useState } from "react";
import "./style.css";

function Register() {
  const [isTeam, setIsTeam] = useState(false);
  const [teamLeaderName, setTeamLeaderName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [teamName, setTeamName] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  const handleOptionChange = (e) => {
    setIsTeam(e.target.value === "team");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <form
      id="register"
      onSubmit={handleSubmit}
      className=" text-black about w-[100vw] bg-cover py-16 px-5 text-center xl:text-left flex items-center justify-center h-full"
    >
      <div className="flex flex-col w-full max-w-[450px] ">
        <h1 className="font-bold text-5xl text-center mb-21">Register Here</h1>
        <div className="flex flex-row justify-center scale-110 items-center mt-2">
          <div className="flex m-4">
            <input
              type="radio"
              id="individual"
              name="registrationType"
              value="individual"
              checked={!isTeam}
              onChange={handleOptionChange}
            />
            <label htmlFor="individual" className="font-bold ml-2">
              Individual
            </label>
          </div>
          <div className="flex items-center m-4">
            <input
              type="radio"
              id="team"
              name="registrationType"
              value="team"
              checked={isTeam}
              onChange={handleOptionChange}
            />
            <label htmlFor="team" className="font-bold ml-2">
              Team
            </label>
          </div>
        </div>
        {isTeam && (
          <div className="flex flex-col">
            <label htmlFor="teamName" className="mb-2">
              Team Name
            </label>
            <input
              type="text"
              id="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
            />
            <label htmlFor="teamName" className="mb-2">
              Team Size
            </label>

            <select
              id="countries"
              class="bg-white border border-gray-300 text-black rounded px-2 py-1 mb-2"
            >
              <option selected>Choose a Team size</option>
              <option value="One">1</option>
              <option value="Two">2</option>
              <option value="Three">3</option>
              <option value="Four">4</option>
            </select>
          </div>
        )}
        <div className="flex flex-col mb-4">
          <label htmlFor="teamLeaderName" className="mb-2">
            {isTeam ? "Team Leader Name" : "Name"}
          </label>
          <input
            type="text"
            id="teamLeaderName"
            value={teamLeaderName}
            onChange={(e) => setTeamLeaderName(e.target.value)}
            className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
          />
          <label htmlFor="phoneNumber" className="mb-2">
            Phone Number
          </label>
          <input
            type="number"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
          />
          <label htmlFor="email" className="mb-2 ">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
          />
        </div>
        <label className="mb-2 ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
          />
          I agree to the terms and conditions mentioned in the Brochure
        </label>
        <button
          type="submit"
          disabled={!isChecked}
          class="rounded-md px-3.5 max-w-[170px] py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#000] text-white"
        >
          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[orange] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span class="relative text-black transition duration-300 group-hover:text-white ease">
            Register
          </span>
        </button>
      </div>
    </form>
  );
}

export default Register;
