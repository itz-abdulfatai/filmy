import SliderNav from "./SliderNav";
import Slider from "./Slider";
import useFetchLists from "../hooks/useFetchLists";
import Loading from "./Loading";
import LoadingError from "./LoadingError";
import VideoCard from "./VideoCard";

function MovieList({ title, endpoint }) {
  const id = Math.floor(Math.random() * 999);

  const { data, loading, error, fetchList } = useFetchLists(endpoint);

  return (
    <div className="rounded-lg flex w-full flex-col justify-between items-stretch h-[300px] border border-secondary my-3 py-4">
      <div className=" flex justify-between items-center px-4">
        <span className=" font-semibold text-lg capitalize">{title}</span>
        <div className=" hidden sm:inline-block">
          {data && <SliderNav id={id} />}
        </div>
      </div>
      <div>
        {loading && <Loading />}

        {error && (
          <LoadingError
            error={error}
            command={() => {
              fetchList(endpoint);
            }}
          />
        )}

        {data && (
          <Slider id={id}>
            {data.results.map((result) => (
              <VideoCard
                key={result.title || result.name}
                index={result.title || result.name}
              />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default MovieList;
