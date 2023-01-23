import { FC, ReactElement, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Grid, Typography,Button } from "@mui/material";

import { getMovie } from "../states/_movieSlice";
import { RootState } from "../redux/store";

type MovieTypes = {
  getMovie: (id: string) => void;
  movie: any;
};

const Movie: FC<any> = (props: MovieTypes): ReactElement => {
  const { getMovie, movie } = props;
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getMovie(id);
    }
  }, [id,getMovie]);

  return (
    <>
      <Grid
        container
        flexDirection={"row"}
        flexWrap="nowrap"
        sx={{
          gap: 8,
        }}
      >
        <Grid
          item
          sx={{
            xs: 12,
            sm: 12,
            md: 4,
            lg: 3,
          }}
        >
          <img src={movie?.Poster} alt={movie?.Title} />
        </Grid>
        <Grid
          item
          sx={{
            xs: 12,
            sm: 12,
            md: 4,
            lg: 3,
          }}
        >
          <Typography align="left" variant="h3" component="h2" gutterBottom>
            {movie?.Title}
          </Typography>
          <Typography align="left" variant="h5" component="h5" gutterBottom>
            Year: {movie?.Year}
          </Typography>
          <Typography align="left" variant="body1" component="p" gutterBottom>
            {movie?.Plot}
          </Typography>
          <Typography align="left" variant="h6" component="h6" gutterBottom>
            Director: {movie?.Director}
          </Typography>
        </Grid>
      </Grid>
      <Box>
        <Button variant="contained" onClick={() => navigate("/")}>
          Back
        </Button>
      </Box>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getMovie: (id: string) => {
      dispatch(getMovie(id));
    },
  };
};

const mapStateToProps = (state: RootState) => ({
  movie: state.movie.movie,
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
