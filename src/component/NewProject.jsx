import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const judul = useRef();
  const desc = useRef();
  const date = useRef();

  function handleSave() {
    const enteredJudul = judul.current.value;
    const enteredDesc = desc.current.value;
    const enteredDate = date.current.value;

    if (
      enteredJudul.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      judul: enteredJudul,
      desc: enteredDesc,
      date: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="close">
        <h3 className="text-xl font-bold text-gray-600 my-4">
          Gagal Memasukkan Todo
        </h3>
        <p className="text-gray-600 mb-4">Lengkapi terlebih dahulu formnya</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <main className="flex items-center justify-end gap-4 my-4">
          <button
            className="bg-white w-[125px] px-4 py-2 rounded-md md:text-black hover:bg-gray-400 hover:text-white"
            style={{
              fontSize: "14px",
              lineHeight: "18px",
              border: "1px solid",
              borderColor: "slategrey",
            }}
            onClick={onCancel}
          >
            Batal
          </button>
          <button
            className="bg-gray-600 w-[125px] px-4 py-2 rounded-md md:text-white  hover:bg-gray-400 hover:text-black"
            onClick={handleSave}
            style={{ fontSize: "14px", lineHeight: "18px" }}
          >
            Simpan
          </button>
        </main>
        <div>
          <Input type="text" ref={judul} label="Judul" />
          <Input ref={desc} label="Keterangan" textarea />
          <Input type="date" ref={date} label="Waktu Todo" />
        </div>
      </div>
    </>
  );
}
