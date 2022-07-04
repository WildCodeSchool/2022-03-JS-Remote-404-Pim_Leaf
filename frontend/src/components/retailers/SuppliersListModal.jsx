function SuppliersListModal({ name, domaine }) {
  return (
    <tr className="odd:bg-lightBlue/10 even:bg-middleBlue/30">
      <td className="p-1 pl-10 border-y-8 border-darkBlue/95">{name}</td>
      <td className="p-1 border-y-8 border-darkBlue/95">{domaine}</td>
      <td className="p-1 pr-10 border-y-8 border-darkBlue/95">
        <button
          type="button"
          className="bg-white text-darkBlue p-1 rounded-2xl flex transition duration-120 ease-out hover:bg-middleBlue"
        >
          Se Connecter
        </button>
      </td>
    </tr>
  );
}

export default SuppliersListModal;
