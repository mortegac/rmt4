import React from "react";
import { Provider } from "react-redux";
// import { PreviewStoreProvider } from "gatsby-source-prismic";

import generateStore from "./store";

// eslint-disable-next-line react/display-name,react/prop-types
// export default ({ element }) => {
const App = ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = generateStore();
  return (
    <Provider store={store}>
      {/* <PreviewStoreProvider>{element}</PreviewStoreProvider> */}
      {element}
      {/* {element} */}
    </Provider>
  );
};

export default App;
