import { useContext, useEffect } from "react";
import MovieInfo from "../components/MovieInfo";
import SeatingMap from "../components/SeatingMap";
import { MovieContext } from "../contexts/MovieContext";
import Booking from '../components/Booking';
import styles from "../css/booking.module.css";
import { BookingContext } from "../contexts/BookingContext";

const ShowingPage = (props) => {
  const { showingId } = props.match.params;

  const { getShowingsById, showing } = useContext(MovieContext);
  const { getAllBookedSeatsForShowing } = useContext(BookingContext);

  useEffect(() => {
    getShowingsById(showingId);
    // eslint-disable-next-line
    getAllBookedSeatsForShowing(showingId)
  }, []);

  return (
    <div>
      <MovieInfo showing={showing} />
      <div className={styles.booking_wrapper}>
        <Booking />
        {showing && <SeatingMap saloon={showing.saloon} />}
      </div>

    </div>
  );
};

export default ShowingPage;
