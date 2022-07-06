/* eslint-disable import/no-unresolved */
import Fields from "@components/common/Fields";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import UserExport from "@contexts/UserContext";

function Profil() {
  const { user } = useContext(UserExport.UserContext);

  const [setDatas] = useState(null);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}user/${user.company_group_id}`)
      .then((res) => {
        setDatas(res.data);
      });
  }, []);

  return (
    <main>
      <h1 className="flex justify-center text-3xl font-bold font-barlow text-darkBlue mb-14 mt-14">
        Mon profil
      </h1>
      <Fields />
    </main>
  );
}

export default Profil;
