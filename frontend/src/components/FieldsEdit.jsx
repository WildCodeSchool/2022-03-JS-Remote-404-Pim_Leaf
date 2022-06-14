import { useState } from "react";

function FieldsEdit() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
      <form className="font-redHat flex flex-col items-start min-w-max w-4/5 m-auto">
        <label htmlFor="email" className="text-xl w-full">
          Nouveau mot de passe :
          <input
            className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 w-full mt-1 mb-3"
            id="email"
            type="text"
            name="password"
            placeholder=""
            onChange={(event) => {
              const input = event.target;
              setPassword(input.value);
            }}
          />
        </label>

        <label htmlFor="confirmMail" className="text-xl w-full">
          Confirmer le nouveau mot de passe :
          <input
            className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 w-full  mt-1 mb-3"
            id="confirmMail"
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
          className="m-auto py-2 w-28 text-center text-white text-base bg-darkBlue hover:bg-opacity-90 rounded-full mt-12"
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
