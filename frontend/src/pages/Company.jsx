import { Link } from "react-router-dom";
import dataProducts from "../data/DataProducts";

function Company() {
  return (
    <main id="Company" className="w-4/5 m-auto relative">
      <h1>Company</h1>
      <p>
        {dataProducts.map((company) => (
          <Link to={`/company/${company.id}`} key={company.id}>
            {company.name}
          </Link>
        ))}
      </p>
    </main>
  );
}

export default Company;
