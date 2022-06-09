import IconPlus from "../assets/icon_plus.svg";

function PlusButton() {
  return (
    <div>
      <button type="button" onClick={() => console.warn("edit button")}>
        <img
          src={IconPlus}
          alt="icon-edit"
          className="w-16 transition duration-120 ease-out hover:scale-110 mr-2"
        />
      </button>
    </div>
  );
}

export default PlusButton;
