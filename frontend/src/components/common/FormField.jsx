function FormField({ name, labels, placeholder }) {
  return (
    <label htmlFor={labels} className="text-xl">
      {name}
      <input
        type="text"
        name={labels}
        placeholder={placeholder}
        className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 w-full  mt-1 mb-3 shadow-lg"
      />
    </label>
  );
}

export default FormField;
