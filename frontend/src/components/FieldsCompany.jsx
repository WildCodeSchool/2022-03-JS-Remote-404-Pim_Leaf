/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from "react-hook-form";

import CompanyProfil from "../data/ClementData2";

function FieldsCompany() {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form
        className="font-redHat flex flex-col items-center min-w-max w-4/5 m-auto"
        onSubmit={handleSubmit(handleSubmit)}
      >
        <div className="flex flex-col items-start w-full">
          <label className="text-xl">Domaine</label>
          <input
            className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 w-full  mt-1 mb-3"
            name="name"
            value={CompanyProfil[0].domaine}
            {...register("name")}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label className="text-xl">Description</label>
          <textarea
            cols="30"
            rows="5"
            className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 w-full mt-1
            mb-3"
            type="description"
            name="description"
            value={CompanyProfil[0].description}
            {...register("description")}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label className="text-xl">Email de contact</label>
          <input
            className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 w-full  mt-1 mb-3"
            type="email"
            name="email"
            value={CompanyProfil[0].mail}
            {...register("email")}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label className="text-xl">Adresse</label>
          <input
            className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 w-full  mt-1 mb-3"
            type="adress"
            name="address"
            value={CompanyProfil[0].address}
            {...register("address")}
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label className="text-xl">Téléphone</label>
          <input
            className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 w-full  mt-1 mb-3"
            type="phone"
            name="phone"
            value={CompanyProfil[0].phone}
            {...register("phone")}
          />
        </div>
        <button className="py-2 w-28 text-center text-white text-base bg-darkBlue hover:bg-opacity-90 rounded-full mt-12">
          Enregistrer
        </button>
      </form>
    </div>
  );
}

export default FieldsCompany;
