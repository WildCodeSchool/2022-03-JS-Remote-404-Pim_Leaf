function ButtonIcons({ icon, handleClickMinus, products }) {
  return (
    <div>
      <button type="button" onClick={() => handleClickMinus(products)}>
        <img
          src={`http://localhost:3000/src/assets/icon_${icon}.svg`}
          alt={`${icon} icon for illustration`}
          className="w-12 m-4 transition duration-120 ease-out hover:scale-110"
        />
      </button>
    </div>
  );
}

export default ButtonIcons;
