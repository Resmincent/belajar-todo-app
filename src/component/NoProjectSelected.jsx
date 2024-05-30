import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="img"
        className="h-16 w-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-gray-600 my-4">
        Tidak ada todo yang di pilih
      </h2>
      <p className="text-gray-600 mb-4">Pilih todo atau buat todo baru</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Buat Todo</Button>
      </p>
    </div>
  );
}
