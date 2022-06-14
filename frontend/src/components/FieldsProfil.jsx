import userProfil from "../data/ClementData";

function FieldsProfil() {
  const hidePassword = userProfil[0].password.split("");

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < hidePassword.length; i++) {
    hidePassword.splice(i, 1, "•").join("");
  }

  return (
    <div className="m-auto w-4/5 font-redHat">
      <p className="mt-5 mb-8 text-xl">
        Nom de mon entreprise : {userProfil[0].company}
      </p>
      {userProfil.map((user) => (
        <div key={user.id} className=" text-xl">
          Mon nom :
          <p className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 mt-1 mb-3 text-base">
            {user.name}
          </p>
          Adresse email :
          <p className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 mt-1 mb-3 text-base">
            {user.mail}
          </p>
          Ancien mot de passe :
          <p className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 mt-1 mb-3 text-base">
            {hidePassword}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FieldsProfil;
