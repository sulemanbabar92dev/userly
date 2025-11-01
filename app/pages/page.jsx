'use client';
import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
const page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <button
        className="px-4 py-2 bg-black text-white rounded hover:bg-white hover:text-black transition"
        onClick={() => setModalOpen(true)}
      >
        Open modal
      </button>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title =""
      >
        <h1></h1>
      </Modal>
    </div>
  );
};
export default page;