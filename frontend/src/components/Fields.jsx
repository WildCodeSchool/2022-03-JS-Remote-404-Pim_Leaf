/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from "react-hook-form";

import CompanyProfil from "../data/ClementData2";
import userProfil from "../data/ClementData";

function FieldsCompany() {
  const { register, handleSubmit } = useForm();
  const { pathname } = window.location;

  return (
    <div>
      <form
        className="font-redHat flex flex-col items-center min-w-max w-4/5 m-auto"
        onSubmit={handleSubmit(handleSubmit)}
      >
        {pathname === "/profil" ? (
          <p className="mt-5 mb-8 text-xl font-redHat">
            Nom de mon entreprise : {userProfil[0].company}
          </p>
        ) : (
          ""
        )}
        <div className="flex flex-col items-start w-full">
          <label className="text-xl">
            {pathname === "/company" ? "Domaine" : "Mon nom"}
          </label>
          <input
            className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 w-full  mt-1 mb-3 shadow-lg"
            name="name"
            value={
              pathname === "/company"
                ? CompanyProfil[0].domaine
                : userProfil[0].name
            }
            {...register("name")}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label className="text-xl">
            {pathname === "/company" ? "Description" : "email"}
          </label>
          <textarea
            cols="30"
            rows="5"
            className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 w-full mt-1
            mb-3 shadow-lg"
            type="description"
            name="description"
            value={
              pathname === "/company"
                ? CompanyProfil[0].description
                : userProfil[0].mail
            }
            {...register("description")}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label className="text-xl">
            {pathname === "/company"
              ? "Email de contact"
              : "Nouveau mot de passe"}
          </label>
          <input
            className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 w-full  mt-1 mb-3 shadow-lg"
            type="email"
            name="email"
            value={pathname === "/company" ? CompanyProfil[0].mail : ""}
            {...register("email")}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label className="text-xl">
            {pathname === "/company"
              ? "Adresse"
              : "Confirmer le nouveau mot de passe"}
          </label>
          <input
            className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 w-full  mt-1 mb-3 shadow-lg"
            type="adress"
            name="address"
            value={pathname === "/company" ? CompanyProfil[0].address : ""}
            {...register("address")}
          />
        </div>
        {pathname === "/company" ? (
          <div className="flex flex-col items-start w-full">
            <label className="text-xl">
              {pathname === "/company" ? "Téléphone" : ""}
            </label>
            <input
              className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 w-full  mt-1 mb-3 shadow-lg"
              type="phone"
              name="phone"
              value={pathname === "/company" ? CompanyProfil[0].phone : ""}
              {...register("phone")}
            />
          </div>
        ) : (
          ""
        )}
        <button className="py-2 w-28 text-center text-white text-base bg-darkBlue hover:bg-opacity-90 rounded-full mt-12">
          Enregistrer
        </button>
      </form>
    </div>
  );
}

export default FieldsCompany;
