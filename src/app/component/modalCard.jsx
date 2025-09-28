import React from "react";

const ModalCard = ({ modal, setIsOpenProp }) => {
  return (
    <div
      className="fixed font-mont inset-0 mx-auto w-full min-h-screen bg-black/70 flex justify-center items-center z-[1000]"
      onClick={() => setIsOpenProp(false)} // click background to close
    >
      {/* Modal content */}
      <div
        className="h-auto w-[720px] text-[#4B5564] rounded-[12px] bg-white py-8 px-6"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h1 className="text-[#0F4082] font-bold text-[32px]">{modal.titleone}</h1>
        <p className="pt-6">{modal.textone}</p>

        <h2 className="text-[#0F4082] font-bold pt-6 text-[24px]">{modal.titletwo}</h2>
        <ul className="list-disc mt-3 marker:text-[#82510F] flex flex-col gap-3 pl-5">
          <li>{modal.listone}</li>
          <li>{modal.listtwo}</li>
          <li>{modal.listthree}</li>
          <li>{modal.listfour}</li>
        </ul>

        <div className="mt-12 py-8 px-6 bg-[#eceffb] rounded-[12px]">
          <h1 className="text-[#0F4082] text-[20px] font-bold">{modal.titlethree}</h1>
          <p>{modal.texttwo}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
