import { Link } from "react-router-dom";
import { footerWidgets, socials } from "../assets";

export default function Footer() {
  return (
    <footer className=" px-[40px] pt-[60px] pb-[20px] min-h-[45vh] flex flex-col justify-between items-center ">
      <div className=" w-full flex flex-col md:flex-row justify-between items-center  md:items-start">
      {footerWidgets.map((widget, index) => (
        <div key={index} className=" capitalize  flex-col justify-between items-center md:items-start mb-10">
          <div  className=" font-bold mb-3 text-xl md:text-sm">
            {widget.title}
          </div>
          <div className=" flex flex-col justify-between items-center md:items-start text-ash text-sm md:text-xs gap-2">
            {widget.children.map((child, index) => (
              <Link key={index} className=" hover:text-accent" to={child.link}> {child.name} </Link>
            ))}
          </div>
        </div>
      ))}
      <div className="capitalize flex flex-col justify-betweem items-center md:items-start mb-10">
        <div className=" font-bold mb-3 text-sm">connect with us</div>

        <div className=" flex justify-between w-full items-center">
          {socials.map((social, index) => (
            <a key={index} target="blank" className=" w-[35px] h-[35px] bg-secondary rounded flex justify-center items-center p-1" href={social.link}>
              <img src={social.image} alt={social.name} />
            </a>
          ))}
        </div>
      </div>
      </div>

      {/* copyright section */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between border-t-[1px] w-full text-ash text-xs pt-5 border-ash capitalize border-opacity-20">
        <div className="text-center md:text-left mb-5 md:mb-0">@2024 Abdulfatai Aliyu, alrights reserved</div>
        <div className="flex gap-3 justify-center md:justify-start ">
          <Link className=" hover:text-accent " to="/terms">terms of use</Link>
          <Link className=" hover:text-accent " to="/privace">privace policy</Link>
          <Link className=" hover:text-accent " to="/cookie">cookie policy</Link>
        </div>
      </div>
    </footer>
  );
}
