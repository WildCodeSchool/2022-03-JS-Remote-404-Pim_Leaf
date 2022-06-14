import FieldsProfil from "../components/FieldsProfil";
import FieldsEdit from "../components/FieldsEdit";

function Profil() {
  return (
    <main>
      <h1 className="flex justify-center text-3xl font-bold font-barlow text-darkBlue mb-14 mt-14">
        Mon Profil
      </h1>
      <FieldsProfil />
      <FieldsEdit />
    </main>
  );
}

export default Profil;
