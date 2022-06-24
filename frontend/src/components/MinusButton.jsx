import IconMinus from "../assets/icon_minus.svg";

function MinusButton({ handleClickMinus, products }) {
  return (
    <div>
      <button type="button" onClick={() => handleClickMinus(products)}>
        <img
          src={IconMinus}
          alt="icon-edit"
          className="w-16 transition duration-120 ease-out hover:scale-110 mr-2"
        />
      </button>
    </div>
  );
}

export default MinusButton;
