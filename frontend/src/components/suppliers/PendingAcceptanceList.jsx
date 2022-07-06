import React from "react";

function PendingAcceptanceList({ id, name, domaine, ville, choix1, choix2 }) {
  return (
    <tr className="font-redHat">
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex">
          <div className="ml-3">
            <p className="text-darkBlue whitespace-no-wrap">{name}</p>
            <p className="text-darkBlue/50 whitespace-no-wrap">{id}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {domaine}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {ville}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          type="button"
          className="w-full relative transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:bg-purple-700 text-purple-700 hover:text-white font-normal py-2 px-4 rounded"
        >
          <span
            aria-hidden
            className="absolute inset-0 bg-lightBlue/90 opacity-50 rounded-full"
          />
          <span className="relative">{choix1}</span>
        </button>
      </td>
      <td className="px-5 py-5 border-b bg-white text-sm">
        <button
          type="button"
          className="w-full relative transition duration-300 ease-in-out hover:bg-purple-700 - hover:text-white font-normal py-2 px-4 rounded-full"
        >
          <span
            aria-hidden
            className="absolute inset-0 bg-lightBlue/90 opacity-50 rounded-full"
          />
          <span className="relative">{choix2}</span>
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
        <button
          type="button"
          className="inline-block text-lightGrey hover:text-darkBlue"
        >
          <svg
            className="inline-block h-6 w-6 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default PendingAcceptanceList;
