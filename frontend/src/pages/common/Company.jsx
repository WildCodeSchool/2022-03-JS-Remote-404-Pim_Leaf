/* eslint-disable import/no-unresolved */
import Fields from "@components/common/Fields";
// import FieldName from "@components/common/FieldName";
// import FieldEmail from "@components/common/FieldEmail";
// import FieldPwdOld from "@components/common/FieldPwdOld";
// import FieldPwdNew from "@components/common/FieldPwdNew";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import UserExport from "@contexts/UserContext";

function Company() {
  const { user } = useContext(UserExport.UserContext);

  const [data, setDatas] = useState(null);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}company/${user.company_group_id}`
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

      <Fields company={data} />

      {/* <FieldName /> */}
    </main>
  );
}

export default Company;
