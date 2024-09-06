import { homeText } from "../../../assets"
import { assets } from "../../../assets/icons"
import Button from "../../../components/Button"

function Hero() {
  return (
    <>
          <section className=" h-screen flex justify-center place-items-end pb-20 text-center hero relative px-3 ">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary z-[5] bg-gradient-to-b from-transparent from-10% to-black bg-opacity-55 sm:bg-opacity-75"></div>
        <div className=" w-full md:w-[50%] h-[35%] flex flex-col justify-between items-center z-10">
          <h1 className=" capitalize text-4xl font-bold">
            the best streaming experience
          </h1>
          <p className="text-clip md:line-clamp-none line-clamp-2   ash-text">
            {homeText}
          </p>
          <Button icon={assets.play} text="start watching now" bg="accent" />
        </div>
      </section>
    </>
  )
}

export default Hero