import { useContext } from "react";


function Button({ icon, bg, text, onClick, style }) {
  console.log(typeof onClick)
  return (
    <button onClick={onClick}
      className={`px-4 py-3 ${bg === 'accent'? 'bg-accent': bg === 'primary'? 'bg-primary': bg === 'secondary'? 'bg-secondary': `bg-${bg}`} md:hover:bg-secondary  text-xs flex justify-center gap-1 items-center rounded capitalize font-semibold active:bg-primary ${style} sm:w-auto`}
    >


      {icon && <img src={icon} alt={text} />}
      {text}


      

      

    </button>
  );
}

export default Button;
