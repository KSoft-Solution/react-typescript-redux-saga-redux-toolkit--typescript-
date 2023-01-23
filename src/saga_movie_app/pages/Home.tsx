import { FC, ReactElement } from "react";
import { MovieList, Search } from "../components";

const Home: FC<any> = (): ReactElement => {
  return (
    <>
      <Search />
      <MovieList />
    </>
  );
};

export default Home;
