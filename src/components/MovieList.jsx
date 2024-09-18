import SliderNav from "./SliderNav";
import Slider from "./Slider";

function MovieList({ title, children }) {
  const id = Math.floor(Math.random() * 999);

  return (
    <div className="rounded-lg flex w-full flex-col justify-between items-stretch h-[300px] border border-secondary my-3 py-4">
      <div className=" flex justify-between items-center px-4">
        <span className=" font-semibold text-lg capitalize">{title}</span>
        <div className=" hidden sm:inline-block">

        <SliderNav id={id}/>
        </div>

      </div>
      <div>
        <Slider id={id}>
            {children}
        </Slider>

      </div>
    </div>
  );
}

export default MovieList;
