import { useState } from "react";
import "./style.css";
// import { useState } from "react";
import axios from "axios"; // Import Axios

function Register() {
  const [isTeam, setIsTeam] = useState(false);
  const [teamLeaderName, setTeamLeaderName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [teamName, setTeamName] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [teamSize, setTeamSize] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(true);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  function handleTeamSizeChange(event) {
    setTeamSize(event.target.value);
  }

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  const handleOptionChange = (e) => {
    setIsTeam(e.target.value === "team");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      // Construct the data to send in the request
      const userData = {
        teamName,
        teamSize,
        teamLeaderName,
        email,
        phoneNumber,
      };

      if (isTeam) {
        // Make sure that each team member input field has a value
        for (let i = 0; i < parseInt(teamSize) - 1; i++) {
          const teamMemberInput = document.getElementById(`teamMember${i + 1}`);
          if (!teamMemberInput.value) {
            throw new Error(`Team member ${i + 1} name is required`);
          }
        }

        // Add the team member names to the user data object
        for (let i = 0; i < parseInt(teamSize) - 1; i++) {
          userData[`teamMember${i + 1}`] = document.getElementById(
            `teamMember${i + 1}`
          ).value;
        }
      }
      // Make the POST request to your backend
      const response = await axios.post(
        "https://jugaadecell.onrender.com/api/register",
        userData
      ); // Adjust the URL as needed

      // Handle the response (you can display a success message or redirect to a new page)
      console.log("Registration successful:", response.data);
      setRegistrationSuccess(true);
    } catch (error) {
      setErrorMsg(false);
      if (error.response && error.response.status === 400) {
        setErrorMsg(false);
        // Server validation error, you can handle or display the error message as needed
        console.error("Error registering user:", error.response.data.error);
      } else {
        setErrorMsg(false);
        // Handle other errors
        console.error("Error registering user:", error);
      }
    } finally {
      setIsLoading(false);
      setErrorMsg(true); // Reset loading state to false when the request is complete
    }
  };

  function renderTeamInputs() {
    const inputs = [];
    for (let i = 0; i < parseInt(teamSize) - 1; i++) {
      inputs.push(
        // <div key={i}>
        //   <label htmlFor={`teamMember${i + 1}`}>Team Member {i + 1}</label>
        //   <input
        //     type="text"
        //     id={`teamMember${i + 1}`}
        //     name={`teamMember${i + 1}`}
        //     className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
        //   />
        // </div>
        <div className="flex flex-col mb-2" key={i}>
          <label htmlFor={`teamMember${i + 1}`} className="mb-2">
            Team Member {i + 1}
          </label>
          <input
            type="text"
            id={`teamMember${i + 1}`}
            name={`teamMember${i + 1}`}
            value={`teamMember${i + 1}`}
            className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
          />
        </div>
      );
    }
    return inputs;
  }

  if (registrationSuccess) {
    return (
      <div
        id="register"
        className="flex items-center justify-center h-full bg-cover"
      >
        <div className=" rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4">
            Registration Successful!
          </h2>
          <p className="text-black">Thank you for registering.</p>
        </div>
      </div>
    );
  }
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
            {/* <label htmlFor="teamName" className="mb-2">
              Team Name
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
            /> */}
            <label htmlFor="teamName" className="mb-2">
              Team Size
            </label>

            <select
              name="teamSize"
              class="bg-white border border-gray-300 text-black rounded px-2 py-1 mb-2"
              value={teamSize}
              onChange={handleTeamSizeChange}
            >
              <option selected>Choose a Team size</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        )}
        <div className="flex flex-col mb-4">
          <label htmlFor="teamName" className="mb-2">
            Team Name
          </label>
          <input
            type="text"
            id="teamName"
            name="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
          />
          <label htmlFor="teamLeaderName" className="mb-2">
            {isTeam ? "Team Leader Name" : "Name"}
          </label>
          <input
            type="text"
            id="teamLeaderName"
            name="teamLeaderName"
            value={teamLeaderName}
            onChange={(e) => setTeamLeaderName(e.target.value)}
            className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
          />
          {teamSize && renderTeamInputs()}
          <label htmlFor="phoneNumber" className="mb-2">
            Phone Number
          </label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
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
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border bg-[#fff] text-[black] border-gray-400 rounded px-2 py-1 mb-2"
          />
        </div>
        <label className="mb-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="border bg-[#fff] text-[black] border-gray-400 rounded mb-2"
          />
          I agree to the terms and conditions mentioned in the Brochure
        </label>
        {/* {errorMsg && <div className="text-red-500">team name and email should be unique</div>} */}
        {errorMsg ? (
          ""
        ) : (
          <div className="text-red-500">
            team name and email should be unique
          </div>
        )}
        <button
          type="submit"
          href="https://flowbite.com/docs/forms/select/"
          disabled={!isChecked}
          class="rounded-md px-3.5 max-w-[170px] py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#000] text-white"
        >
          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[orange] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span class="relative text-black transition duration-300 group-hover:text-white ease">
            {isLoading ? "Loading" : "Register"}
          </span>
        </button>
      </div>
    </form>
  );
}

export default Register;
