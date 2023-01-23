import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import MovieApp from "./saga_movie_app";
import moveStore from "./saga_movie_app/redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={moveStore}>
      <MovieApp />
    </Provider>
  </React.StrictMode>
);
