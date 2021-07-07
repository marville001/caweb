import React from "react";
import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom"

import "./styles/main.scss"

const Loading = (
  <div>
    <h4>Loading...</h4>
  </div>
)

// Pages
const Home = React.lazy(()=>import("./pages/Home"))
const About = React.lazy(()=>import("./pages/About"))
const Contact = React.lazy(()=>import("./pages/Contact"))
const EventsAndActivities = React.lazy(()=>import("./pages/EventsAndActivities"))
const Gallery = React.lazy(()=>import("./pages/Gallery"))
const Leadership = React.lazy(()=>import("./pages/Leadership"))
const Library = React.lazy(()=>import("./pages/Library"))
const Prayers = React.lazy(()=>import("./pages/Prayers"))
const Readings = React.lazy(()=>import("./pages/Readings"))

function App() {
  return (
    <React.Suspense fallback={Loading}>
      <Navbar />
      <Switch>
        <Route exact path="/" render={props=><Home {...props} />} />
        <Route exact path="/" component={Home} />
      </Switch>
    </React.Suspense>
  );
}

export default App;
