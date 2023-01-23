import { FC, ReactElement } from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import { Movie } from "../types/_movieTypes";

type MovieListType = {
  searchResults: any;
};

const MovieList: FC<any> = (props: MovieListType): ReactElement => {
  const { searchResults } = props;
  const movieList: Movie[] = searchResults?.Search || [];

  return (
    <>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid item xs={12}>
          <Typography variant="h5" component="p" gutterBottom>
            {searchResults?.totalResults} results found
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {movieList?.map((item: any, index) => (
              <Grid key={index} item>
                <Link to={`/movie/${item.imdbID}`}>
                  <Card
                    sx={{
                      maxWidth: { xs: "100%", sm: 200, md: 250, xl: 300 },
                      maxHeight: { xs: "100%", sm: 600 },
                    }}
                  >
                    <CardMedia
                      component="img"
                      // height="240"
                      image={item.Poster}
                      alt={item.Title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h5"
                        sx={{
                          width: "100%",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        title={item.Title}
                      >
                        {item.Title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.Year}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  searchResults: state.movie.searchResult,
});

export default connect(mapStateToProps, null)(MovieList);
