import { Link } from "react-router-dom";
import dataCompany from "../data/DataCompany";

function Company() {
  return (
    <main id="Company" className="w-4/5 m-auto relative">
      <h1>Company</h1>
      <p>
        {dataCompany.map((company) => (
          <Link to={`/company/${company.id}`} key={company.id}>
            <p>{company.name}</p>
          </Link>
        ))}
      </p>
    </main>
  );
}

export default Company;
