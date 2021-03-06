/* eslint-disable import/no-unresolved */
export default function SuppliersList({ id, name, domaine, ville, status }) {
  return (
    <tr className="font-redHat border-b ">
      <td className="px-5 py-5 bg-white text-sm">
        <div className="flex">
          <div className="ml-3">
            <p className="text-darkBlue whitespace-no-wrap">{name}</p>
            <p className="text-darkBlue/50 whitespace-no-wrap">{id}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 bg-white text-sm">{domaine}</td>
      <td className="px-5 py-5 bg-white text-sm">{ville}</td>
      <td className="px-5 py-5 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-darkBlue/90 leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-lightGreen/60 opacity-50 rounded-full"
          />
          <span className="relative">{status}</span>
        </span>
      </td>
      <td className="px-5 py-5  bg-white text-sm text-right">
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
