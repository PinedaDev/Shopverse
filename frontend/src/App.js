import { Suspense } from "react";
import Router from "./routes/Router";

function App() {
  return (
    <Suspense fallback={<p>Loading</p>} >
      <Router />
    </Suspense>
  );
}

export default App;
