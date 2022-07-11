/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import FormField from "@components/common/FormField";

import UserExport from "@contexts/UserContext";

function Company() {
  const { user } = useContext(UserExport.UserContext);

  const [datas, setDatas] = useState();
  const [newDatas, setNewDatas] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}company/${user.user_id}`)
      .then((res) => {
        setDatas(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function updateDatas() {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}company/${user.user_id}`,
        newDatas
      )
      .then(() => {
        alert("Vos données ont bien été modifiées.");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const changeInfos = (event) => {
    const changeDatas = { ...newDatas };
    changeDatas[event.target.name] = event.target.value;
    setNewDatas(changeDatas);
    setDatas({ ...datas, ...changeDatas });
  };

  if (!datas) return "Données en cours de chargement";

  return (
    <main className="font-redHat flex flex-col w-4/5 m-auto">
      <h1 className="flex justify-center text-3xl font-bold font-barlow text-darkBlue mb-14 mt-14">
        Mon entreprise
      </h1>

      <form>
        <FormField
          name="company_name"
          label="nom de l'entreprise"
          placeholder={datas && datas.company_name}
          changeInfos={changeInfos}
        />
        <div className="text-xl font-bold">Domaine d{`'`}activité</div>
        <div className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 mt-1 mb-3 shadow-lg placeholder-darkBlue">
          <p>{datas && datas.domain}</p>
        </div>

        <FormField
          name="description"
          label="description"
          placeholder={datas && datas.description}
          changeInfos={changeInfos}
        />
        <fieldset className="flex justify-between">
          <FormField
            name="address"
            label="adresse"
            placeholder={datas && datas.address}
            changeInfos={changeInfos}
          />

          <FormField
            name="postcode"
            label="Code postal"
            placeholder={datas && datas.postcode}
            changeInfos={changeInfos}
          />

          <FormField
            name="city"
            label="Ville"
            placeholder={datas && datas.city}
            changeInfos={changeInfos}
          />
        </fieldset>

        <FormField
          name="company_mail"
          label="Email"
          placeholder={datas && datas.company_mail}
          changeInfos={changeInfos}
        />

        <FormField
          name="phone"
          label="Téléphone de l'entreprise"
          placeholder={datas && datas.phone}
          changeInfos={changeInfos}
        />
      </form>

      <button
        onClick={() => updateDatas()}
        type="button"
        className="py-6 w-1/4 text-white text-base bg-darkBlue hover:bg-opacity-80 rounded-full  m-auto my-12"
      >
        Enregistrer
      </button>
    </main>
  );
}

export default Company;
