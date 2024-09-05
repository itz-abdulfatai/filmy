import React, { useContext, useState } from "react";
import "../../assets/fonts/Manrope/font.css";
import { homeText } from "../../assets";
import { assets } from "../../assets/icons";
import Button from "../../components/Button";
import Cta from "../../components/Cta";
import { UserContext } from "../../contexts/UserContext";
import Hero from "./components/Hero";
import DevicesGrid from "./components/DevicesGrid";
import Faq from "./components/Faq";
import PriceCard from "./components/PriceCard";

export default function HomePage() {
  const { user, setUser, loggedIn, setLoggedIn } = useContext(UserContext);
  const [frequency, setFrequency] = useState("yearly")

  console.log("username is: " + user.userName + ", password: " + user.password);

  // function handleFreq(freq) {
  //   if (freq = 'monthly' && frequency == 'yearly') {
  //     setFrequency("monthly")


  //   } else if (freq = 'yearly' && frequency == 'monthly') {
  //     setFrequency("yearly")

  //   }

  // }

  function handleToM() {
    if(frequency !== 'monthly') {
      setFrequency("monthly")
    }
    
  }

  function handleToY() {
    if(frequency !== 'yearly') {
      setFrequency("yearly")
    }
    
  }

  return (

    // when client is logged in something should change 
    <main>
      {/* hero */}
      <Hero />

      {/* categories */}

      {/* devices */}
      <section className=" px-5 md:px-10 py-10 bg-secondary">
        <div className="">
          <h2 className=" font-bold text-2xl">
            We provide you streaming opportunities accross various devices.
          </h2>
          <p className=" ash-text">
            with Filmy, you can enjoy all your favourite movies and tv shows
            anytime, anywhere.
          </p>
        </div>
        <DevicesGrid/>
      </section>

      {/* faqs */}
      <section className=" px-5 md:px-10 py-10">
        <div className=" flex  flex-col md:flex-row justify-between  px-5 md:px-10 py-5 items-start gap-5 md:items-center">
        <div className="">
          <h2 className=" font-bold text-2xl mb-3">
            Frequently Asked Questions
          </h2>
          <p className=" ash-text">
            got Questions? we've got answers! check out our FAQ sectiion to find answers to to the most common questions about Filmy
          </p>
        </div>
        <Button text={'ask a question'} bg={'accent'}/>

        </div>
        <Faq/>


      </section>

      {/* pricing */}
      <section className=" bg-secondary">
      <div className=" flex  flex-col md:flex-row justify-between  px-5 md:px-10 py-5 items-start gap-5 md:items-center">
        <div className="">
          <h2 className=" font-bold text-2xl mb-3 capitalize">
            choose the plan that's right for you
          </h2>
          <p className=" ash-text">
            join Filmy and enjoy from our flexible subscription options tailored to suit your viewing prefarences. Get ready for non-stop entertainment!
          </p>
        </div>
        <div className=" w-40 md:h-12 h-16 rounded-lg border border-secondary bg-primary flex items-stretch p-1">
          <button   onClick={handleToM} className={`  w-1/2 flex justify-center items-center rounded-lg  px-2 ${frequency == "monthly"?" bg-secondary hover:bg-[#080808]":"bg-primary"}`} >
            monthly
          </button >
          <button  onClick={handleToY} className={`  w-1/2 flex justify-center items-center rounded-lg  px-2 ${frequency == "yearly"?" bg-secondary hover:bg-[#080808]":"bg-primary"}`} >
            yearly
          </button>
        </div>

        </div>
        <PriceCard frequency={frequency}/>
      </section>

      {/* cta */}
      <Cta />
    </main>
  );
}
