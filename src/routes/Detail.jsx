import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
      )
    ).json();

    setLoading(false);
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{movie.title}</h1>
          <div>
            <img src={movie.large_cover_image} alt={movie.title} />
            <hr />
            <span>연도:{movie.year}</span>
            <span>평점:{movie.rating}</span>
            <div>
              <span>설명</span>
            </div>
            <p>
              {movie.description_full === ""
                ? "nothing"
                : movie.description_full}
            </p>
            <ul>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
          <nav>
            <Link to="..">홈으로 돌아가기</Link>
          </nav>
        </>
      )}
    </div>
  );
}

export default Detail;
