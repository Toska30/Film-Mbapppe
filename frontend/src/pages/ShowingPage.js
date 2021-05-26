import { useContext, useEffect } from "react";

import MovieInfo from "../components/MovieInfoOnShowingPage";
import SeatingMap from "../components/SeatingMap";
import { MovieContext } from "../contexts/MovieContext";

const ShowingPage = (props) => {
  const { showingId } = props.match.params;

  const { getShowingsById, getMovieById, showing } = useContext(MovieContext);

  useEffect(() => {
    getShowingsById(showingId);
  }, []);

  return (
    <div>
      <MovieInfo showing={showing} />
      <SeatingMap saloon={showing.saloon} />
    </div>
  );
};

export default ShowingPage;
