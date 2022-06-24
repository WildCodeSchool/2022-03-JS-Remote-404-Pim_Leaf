/* eslint-disable no-restricted-syntax */
import Popup from "reactjs-popup";

function ButtonFunction() {
  return (
    <Popup
      trigger={
        <button
          className="button m-10 mt-5 py-2 text-center text-white text-base bg-lightBlue hover:bg-opacity-90 rounded-full"
          type="submit"
        >
          TEST MODAL
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal bg-darkBlue text-white">
          <button className="close" onClick={close} type="submit">
            &times;
          </button>
          <div className="header">Test titre</div>
          <div className="content">INFORMATIONS MODIFIEES AVEC SUCCES</div>
          <div className="actions">
            <Popup
              trigger={
                <button className="button" type="submit">
                  Trigger
                </button>
              }
              position="top center"
              nested
            >
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                magni omnis delectus nemo, maxime molestiae dolorem numquam
                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                sapiente! Laudantium, aperiam doloribus. Odit, aut.
              </span>
            </Popup>
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
              type="submit"
            >
              close modal
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default ButtonFunction;
