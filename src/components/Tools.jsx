import { assets } from "../assets/icons";

function Tools() {
  return (
    <div className="hidden md:flex justify-start gap-5 items-center">
      <button><img src={assets.search} alt="" /></button>


      <button>
        <img src={assets.bell} alt="" />
      </button>
    </div>
  );
}

export default Tools;
