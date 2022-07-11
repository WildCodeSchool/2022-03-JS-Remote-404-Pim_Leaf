/* eslint-disable import/no-unresolved */

import { Link } from "react-router-dom";

import { FiArrowRight } from "react-icons/fi";

function ClientsLinesToAnswer({ human, action }) {
  return (
    <tr className="odd:bg-lightBlue/10 even:bg-middleBlue/30 transition ease-in-out hover:bg-lightBlue duration-500 text-left">
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <Link to={`/fournisseur/client/${human.retailer_id}/details`}>
          {human.company_name}
        </Link>
      </td>

      <td className="px-5 py-5 border-b bg-white text-sm">{human.domain}</td>

      <td className="px-5 py-5 border-b bg-white text-sm">{human.city}</td>

      <td className="px-5 py-5 border-b bg-white text-sm flex">
        <button
          type="button"
          onClick={action}
          className="w-full relative transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:bg-lightBlue hover:text-white font-normal py-2 px-4 rounded-full"
        >
          <span
            aria-hidden
            className="absolute inset-0 bg-lightBlue/90 opacity-50 rounded-full"
          />
          <span className="relative" />
          Accepter
        </button>

        <button
          type="button"
          onClick={action}
          className="w-full relative transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:bg-lightBlue hover:text-white font-normal py-2 px-4 rounded-full"
        >
          <span
            aria-hidden
            className="absolute inset-0 bg-lightBlue/90 opacity-50 rounded-full"
          />
          <span className="relative" />
          Refuser
        </button>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <Link to={`/fournisseur/client/${human.retailer_id}/details`}>
          <button
            type="button"
            className="inline-block text-darkBlue text-xl transition duration-120 ease-out hover:scale-125"
          >
            <FiArrowRight />
          </button>
        </Link>
      </td>
    </tr>
  );
}

export default ClientsLinesToAnswer;
