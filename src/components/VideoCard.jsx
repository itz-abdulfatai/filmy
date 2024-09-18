import { assets } from "../assets/icons"

function VideoCard({index}) {
  return (
    <div className=" bg-secondary border border-accent2 rounded-md flex-col flex justify-end h-full">

      <div className=" flex justify-start gap-5 items-center w-full h-5">
        <span>{index}</span>
        <img src={assets.arrowRight} alt="" />
      </div>


    </div>
  )
}

export default VideoCard