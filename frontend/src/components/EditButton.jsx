import IconEdit from "../assets/icon_edit.svg";

function EditButton() {
  return (
    <div>
      <button type="button" onClick={() => console.warn("edit button")}>
        <img
          src={IconEdit}
          alt="icon-edit"
          className="w-16 transition duration-120 ease-out hover:scale-110 mr-16"
        />
      </button>
    </div>
  );
}

export default EditButton;
