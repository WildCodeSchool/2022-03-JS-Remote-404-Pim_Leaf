import IconDownload from "../assets/icon_download.svg";

function DownloadButton() {
  return (
    <div>
      <button type="button" onClick={() => console.warn("edit button")}>
        <img
          src={IconDownload}
          alt="icon-edit"
          className="w-16 transition duration-120 ease-out hover:scale-110 mr-16"
        />
      </button>
    </div>
  );
}

export default DownloadButton;
