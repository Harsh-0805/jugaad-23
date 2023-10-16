import React from "react";
import { useState } from "react";
export default function Modal() {
  const [closeModal, isModalClose] = useState(true);
  const close = () => {
    if (closeModal == false) {
      isModalClose(true);
    } else {
      isModalClose(false);
    }
  };
  return (
    <>
      <div className="absolute w-9/12 h-3/5 inset-1/2 z-20 top-56">
        {closeModal && (
          <form className="w-full max-w-lg">
            <button
              onClick={close}
              className="w-50 p-3 rounded-md bg-black text-yellow-500 hover:bg-white hover:text-black"
            >
              X
            </button>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-team-name"
                >
                  Team Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-800 text-yellow-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-team-name"
                  type="text"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Team Leader Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-800 text-yellow-500 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-number"
                >
                  Team Leader's Whatsapp Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-800 text-yellow-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-number"
                  type="text"
                  placeholder="0123456789"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Team Leader's Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-800 text-yellow-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="email"
                  placeholder="@mail.com"
                />
              </div>
            </div>
          </form>
        )}
      </div>
      </>
  );
        }
      /* <div classname="md:flex md:flex-col">
        <div>
          <label
            htmlFor="name"
            classname="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Team Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            classname="appearance-none block w-full bg-gray-800 text-yellow-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            classname="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Team Leader Name:
          </label>
          <input
            type="text"
            id="Lname"
            name="Lname"
            classname="appearance-none block w-full bg-gray-800 text-yellow-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            classname="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Team Leader Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            classname="appearance-none block w-full bg-gray-800 text-yellow-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div>
          <label
            htmlFor="text"
            classname="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Team Leader Whatsapp Number:
          </label>
          <input
            type="text"
            id="whatsapp"
            name="whatsapp"
            classname="appearance-none block w-full bg-gray-800 text-yellow-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div>
          <button classname="w-10 rounded-md bg-black text-yellow-400 hover:bg-white">
            Submit
          </button>
        </div>
      </div>
    </>
  );
} */
