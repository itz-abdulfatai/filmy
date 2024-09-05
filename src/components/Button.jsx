import { useContext } from "react";


function Button({ icon, bg, text, onClick, style }) {
  console.log(typeof onClick)
  return (
    <button onClick={onClick}
      className={`px-4 py-3 ${bg === 'accent'? 'bg-accent': bg === 'primary'? 'bg-primary': bg === 'secondary'? 'bg-secondary': `bg-${bg}`} hover:bg-secondary  text-xs flex justify-between gap-1 items-center rounded capitalize font-semibold active:bg-accent ${style}`}
    >


      {icon && <img src={icon} alt={text} />}
      {text}


      

      

    </button>
  );
}

export default Button;
