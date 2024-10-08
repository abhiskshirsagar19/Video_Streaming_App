/* eslint-disable react/prop-types */

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

// eslint-disable-next-line react/prop-types
function HrMovieCard({ movie }) {
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in">
      <img
        // eslint-disable-next-line react/prop-types
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-[110px] md:w-[260px] rounded-lg
    hover:border-[3px] border-gray-400 cursor-pointer
    "
      />
      <h2
        className="w-[100px] md:w-[240px] text-white
    mt-2"
      >
        {movie.title}
      </h2>
    </section>
  );
}

export default HrMovieCard;
