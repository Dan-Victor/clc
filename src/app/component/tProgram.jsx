import React, { useState } from 'react'
import { programs } from '../../../data/program'
import Link from 'next/link';

// Modal component
const PModalCard = ({ modal, setIsOpenProp }) => {
  return (
    <div
      className="fixed font-mont inset-0 mx-auto w-full min-h-screen bg-black/70 flex justify-center items-center z-[1000]"
      onClick={() => setIsOpenProp(null)} // close on background click
    >
      {/* Modal content */}
      <div
        className="h-auto w-[720px] text-[#4B5564] text-left rounded-[12px] bg-white py-8 px-6"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h1 className="text-[#0F4082] font-bold text-[32px]">{modal.title}</h1>
        <p className="pt-6">{modal.description}</p>
        <h2 className="text-[#0F4082] font-bold pt-6 text-[24px]">Program Details:</h2>
        {
            modal.details.map((detail,idx)=>(
                 <ul key={idx} className="list-disc mt-3 marker:text-[#82510F] flex flex-col gap-3 pl-5">
                   <li>{detail}</li>
                  </ul>
            ))
        }
       <div className='flex justify-center items-start text-left'>
        <div className='w-[50%]'>
            <h1 className='text-[#0F4082] font-bold pt-6 text-[24px]'>Eligibility</h1>
            <p className='h-auto w-[95%]'>{modal.eligibility}</p>
        </div>
        <div className=' w-[50%]'>
            <h1 className='text-[#0F4082] font-bold pt-6 text-[24px]'>Duration</h1>
            <p className='h-auto w-[100%]'>{modal.duration}</p>
        </div>
       </div>

        <div className="mt-12 py-8 px-6 bg-[#eceffb] rounded-[12px]">
          <h1 className="text-[#0F4082] text-[20px] font-bold">Next</h1>
          <p>{modal.admission}</p>
          <button className='px-3.5 py-3 bg-[#AD8E63] text-white rounded-2xl mt-5'>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

// Main component
const TransformativeProgram = () => {
  const [tProgram, settProgram] = useState(null);


  return (
    <div className=' pt-10  grid  gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
      {programs.map((program) => (
        <div
          className=" w-[340px] md:w-[459px] h-auto py-8 px-6 border-2 border-t-16 rounded-[12px] bg-white flex flex-col justify-between border-t-[#0F4082] border-[#E5E7EB]"
          key={program.id}
        >
          <h1 className='font-bold text-2xl text-[#0F4082] text-left'>{program.title}</h1>
          <p className='text-left text-[16px] pt-5 py-5 w-[90%]'>{program.summary}</p>

          {program.highlights.map((highlight, index) => (
            <ul
              key={index}
              className='text-left text-[16px] list-disc mt-3 pl-3 marker:text-[#82510F] pb-6'
            >
              <li className='pt-[10px]'>{highlight}</li>
            </ul>
          ))}

          <button
            className='bg-[#0F4082] cursor-pointer text-white font-medium py-3 rounded-2xl'
            onClick={() => settProgram(program)} // open modal with this program’s data
          >
            Learn More
          </button>
        </div>
      ))}

      {/* Render modal only if tProgram is set */}
      {tProgram && <PModalCard modal={tProgram} setIsOpenProp={settProgram} />}
    </div>
  );
};

export default TransformativeProgram;
