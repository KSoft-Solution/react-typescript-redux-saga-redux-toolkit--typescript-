import { TextField } from "@mui/material";
import { useState, useEffect, FC, ReactElement } from "react";
import { connect } from "react-redux";
// import { RootState } from "../redux/store";
import { getMoviesWithName } from "../states/_movieSlice";
import { styles } from "../config/globalStyle";

type SearchProps = {
  getMovies: (movieName: string) => void;
  searchResults?: any;
};

const Search: FC<any> = (props: SearchProps): ReactElement => {
  const { getMovies } = props;
  const [movieName, setMovieName] = useState<string>("spider");
  //   const dispatch = useDispatch();
  //   const { searchResult, movie } = useSelector(
  //     (state: RootState) => state.movie
  //   );

  useEffect(() => {
    getMovies(movieName);
    // dispatch(getMoviesWithName(movieName));
  }, [movieName,getMovies]);

  return (
    <>
      <h2 style={styles.title}>Movie Search App</h2>
      <form
        style={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <TextField
          sx={{ m: 1, width: "55ch" }}
          type="text"
          fullWidth
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getMovies: (movieName: string) => {
      dispatch(getMoviesWithName(movieName));
    },
  };
};

// const mapStateToProps = (state: RootState) => ({
//   searchResults: state.movie.searchResult,
// });

export default connect(null, mapDispatchToProps)(Search) as typeof Search;
