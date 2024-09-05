import { useState } from "react";
import { faqs } from "../../../assets";
import { assets } from "../../../assets/icons";

function Faq() {
  const [activeQ, setActiveQ] = useState(faqs ? faqs[0] : null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-10 gap-x-20">
      {faqs.map((faq, index) => (
        <div key={index} className=" flex flex-col items-stretch gap-x-5 gap-y-5 py-5  relative overflow-hidden    ">
          <div className=" flex items-center justify-start gap-x-5 z-20 bg-primary">
            <div className=" h-10 w-10 bg-secondary rounded-lg border border-accent2 flex justify-center items-center font-bold text-ash">0{index + 1}</div>
            <h3 onClick={() => {if(activeQ.question == faq.question ){setActiveQ({})} else {setActiveQ(faq)}}} className=" text-ash font-bold cursor-pointer" >{faq.question}</h3>
            <button onClick={() => {if(activeQ.question == faq.question ){setActiveQ({})} else {setActiveQ(faq)}}} className=" ml-auto">
              <img
                src={
                  faq.question == activeQ.question ? assets.minus : assets.plus
                }
                alt=""
              />
            </button>
          </div>
          {/* relative left-0 right-0 faq */}
          <div className= {`  z-10  ${faq.question == activeQ.question ? 'max-h-full' : '' } max-h-0 overflow-hidden faq `}>
            {/* {faq.question == activeQ.question &&  } */}
            <p className={` ash-text  `}>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;
