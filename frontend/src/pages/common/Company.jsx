/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */

// import { useForm } from "react-hook-form";

import { useState, useEffect, useContext } from "react";
import axios from "axios";

import FormField from "@components/common/FormField";

import UserExport from "@contexts/UserContext";

function Company() {
  const { user } = useContext(UserExport.UserContext);
  // const { register, handleSubmit } = useForm();

  const [data, setDatas] = useState(null);

  useEffect(() => {
    axios
      .get(
        // `${import.meta.env.VITE_BACKEND_URL}company/${user.company_group_id}`
        `${import.meta.env.VITE_BACKEND_URL}company/3`
      )
      .then((res) => {
        setDatas(res.data);
      });
  }, []);

  return (
    <main>
      <h1 className="flex justify-center text-3xl font-bold font-barlow text-darkBlue mb-14 mt-14">
        Mon entreprise
      </h1>

      <form className="font-redHat flex flex-col min-w-max w-4/5 m-auto">
        <FormField name="Nom" labels="name" placeholder={data.user_id} />

        <FormField
          name="Domaine d'activité"
          labels="domain"
          placeholder={data.domain}
        />

        <FormField
          name="Description"
          labels="description"
          placeholder={data.description}
        />

        <FormField name="Adresse" labels="address" placeholder={data.address} />

        <FormField
          name="Code postal"
          labels="postcode"
          placeholder={data.postcode}
        />

        <FormField name="Ville" labels="city" placeholder={data.city} />

        <FormField
          name="Email de contact"
          labels="email"
          placeholder={data.company_mail}
        />

        <FormField name="Téléphone" labels="phone" placeholder={data.phone} />
      </form>
    </main>
  );
}

export default Company;
