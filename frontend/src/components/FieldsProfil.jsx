import userProfil from "../data/ClementData";

function FieldsProfil() {
  const hidePassword = userProfil[0].password.split("");

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < hidePassword.length; i++) {
    hidePassword.splice(i, 1, "•").join("");
  }

  return (
    <div className="ml-20 mr-20">
      {userProfil.map((user) => (
        <div key={user.id}>
          Mon nom :
          <p className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 mt-1 mb-3">
            {user.name}
          </p>
          <p className="mt-5 mb-16">{user.company}</p>
          Adresse email :
          <p className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 mt-1 mb-3">
            {user.mail}
          </p>
          Ancien mot de passe :
          <p className="bg-middleBlue bg-opacity-50 text-darkBlue p-2 mt-1 mb-3">
            {hidePassword}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FieldsProfil;
