import { deviceInfos } from "../../../assets"

function DevicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-7 ">
        {
            deviceInfos.map ((device) => (

                <div  key={device.name} className="grid grid-rows-2 p-10  border border-accent2 rounded-xl bg-gradient-to-tr from-[#0a0a0a] to-[#e500001c] hover:border-[#e5000028] ease-linear duration-1000 from-70%  hover:to-[#e5000038]">
                    <div className=" flex justify-start gap-4 items-center" >
                        <div className=" h-12 w-12 bg-[#111111] rounded-lg flex justify-center items-center"><img src={device.icon} alt={device.name} className=" max-w-[70%] max-h-[70%] object-cover " /></div>
                    <h3 className=" capitalize font-semibold ">{device.name}</h3>

                    </div>
                <p className=" ash-text">{device.text}</p>
                </div>

            ))
        }

    </div>
  )
}

export default DevicesGrid