import { useState } from "react";

function FieldsEdit() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
      <form className="flex flex-col items-center">
        <label htmlFor="password" className="flex flex-col w-screen">
          <p className="ml-20">Nouveau mot de passe :</p>
          <input
            className="text-darkBlue bg-middleBlue bg-opacity-50 p-2 mb-4 ml-20 mr-20"
            id="email"
            type="text"
            name="password"
            placeholder=""
            onChange={(event) => {
              const input = event.target;
              setPassword(input.value);
            }}
          />
          <p className="ml-20">Confirmer le nouveau mot de passe :</p>
          <input
            className="text-darkBlue bg-middleBlue bg-opacity-50 p-2 mb-4 ml-20 mr-20"
            id="email"
            type="text"
            name="password"
            placeholder=""
            onChange={(event) => {
              const input = event.target;
              setConfirmPassword(input.value);
            }}
          />
        </label>
        <input
          type="submit"
          value="enregistrer"
          className="py-2 w-28 text-center text-white text-base bg-darkBlue hover:bg-opacity-90 rounded-full"
          onClick={() =>
            password === confirmPassword
              ? console.warn("your password is good")
              : console.warn("password wrong")
          }
        />
      </form>
    </div>
  );
}

export default FieldsEdit;
