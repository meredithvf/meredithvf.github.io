import React, { Suspense } from "react";
import Loader from "./Components/common/Loader.js";
const App = React.lazy(() => import("./App"));

export default (
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>
);
