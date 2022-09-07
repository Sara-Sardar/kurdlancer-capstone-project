import { useState } from "react";
import Modal from "react-modal";

export default function ContractModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center">
        <button
          className="shadow-md hover:shadow-lg  bg-blue-900 hover:bg-blue-800 text-white px-6 py-4 rounded-lg text-xl font-semibold m-5"
          onClick={openModal}
        >
          New Contract
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        //style={customStyles}
        contentLabel="Example Modal"
      >
        <div className=" flex felx-cols justify-center">
          <div>
            <h2 className="text-3xl mt-10 text-amber-400 font-bold ">
              The Contract
            </h2>
          </div>
        </div>
        <div className=" flex felx-cols justify-center">
          <div>
            <h2 className="text-xl px-32 mt-10 text-blue-900 font-semibold ">
              This contract has been made between two parties on their own wills
              after reading and accepting the Kurdlancers rules , privacies and
              policies , Any party that let go or step back of any part of this
              contract will face fines and lows.
            </h2>
          </div>
        </div>

        <div className="flex justify-around text-blue-900 mt-72 mb-32 text-lg font-medium">
          <div>
            <p className="text-amber-500 text-2xl">First Side </p>
            <p>Name: Ali Kareem Saeid</p>
            <p>Signiture:</p>
          </div>
          <div>
            <p className="text-amber-500 text-2xl">Information </p>
            <p>Date:DD/MM/YYYY</p>
            <p>Payment Amout: 10000$</p>
            <p>Payment Method: Card</p>
          </div>
          <div>
            {" "}
            <p className="text-amber-500 text-2xl">Second Side</p>
            <p>Name: Ara Hassan Faraj</p>
            <p>Signiture:</p>
          </div>
        </div>

        <div className="flex justify-center  my-20">
          <button className="shadow-md hover:shadow-lg  bg-blue-900 hover:bg-blue-800 text-white px-6 py-4 rounded-lg text-xl font-semibold m-5">
            Save Contract{" "}
            {/*onClick={alert('Contract Done Congradulations!')}*/}
          </button>
          <button
            className="shadow-md  hover:shadow-lg  bg-blue-900 hover:bg-blue-800 text-white px-6 py-4 rounded-lg text-xl font-semibold m-5"
            onClick={closeModal}
          >
            Close Contract
          </button>
        </div>
      </Modal>
    </div>
  );
}