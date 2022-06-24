import { ThumbUpIcon } from "@heroicons/react/solid";
import Image from "next/image";

const Thumbnail = ({ result }) => {
  const TMDB_URL = `https://image.tmdb.org/t/p/original/${
    result.backdrop_path || result.poster_path
  }`;

  console.log(result);

  return (
    <div className="p-2 transition duration-200 ease-in-out transform cursor-pointer group sm:hover:scale-105 hover:z-50">
      <Image
        src={TMDB_URL}
        alt="image"
        width={1280}
        height={800}
        layout="responsive"
      />
      <div className="p-2">
        <p className="truncate">{result.overview}</p>
        <h2 className="text-xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {`${result.media_type} •`}{" "}
          {`${result.release_date || result.first_air_date} •`}{" "}
          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
