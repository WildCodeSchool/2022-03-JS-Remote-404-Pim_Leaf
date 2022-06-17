function ButtonSuppliersDetails() {
  const ajout = () => {
    // eslint-disable-next-line no-alert
    alert("Produit ajouter!");
  };
  // eslint-disable-next-line react/button-has-type
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className="m-10 mt-5 py-2 text-center text-white text-base bg-lightBlue hover:bg-opacity-90 rounded-full "
      onClick={ajout}
    >
      Ajouter à ma liste
    </button>
  );
}

export default ButtonSuppliersDetails;
