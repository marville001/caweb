import React from "react";
import Navbar from "./components/Navbar_";

import { Switch, Route } from "react-router-dom"
import BounceLoader from "react-spinners/BounceLoader"
import "./styles/main.scss"
import Loading from "./components/Loading";
import Footer from "./components/Footer";

const loading = (
  <div style={{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column-reverse"
  }}>
    <BounceLoader color="crimson" loading={true} size={20} />
  </div>
)

// Pages
const Home = React.lazy(() => import("./pages/Home"))
const About = React.lazy(() => import("./pages/About"))
const Contact = React.lazy(() => import("./pages/Contact"))
const EventsAndActivities = React.lazy(() => import("./pages/EventsAndActivities"))
const Gallery = React.lazy(() => import("./pages/Gallery"))
const Leadership = React.lazy(() => import("./pages/Leadership"))
const Library = React.lazy(() => import("./pages/Library"))
const Prayers = React.lazy(() => import("./pages/Prayers"))
const Readings = React.lazy(() => import("./pages/Readings"))
const Scc = React.lazy(() => import("./pages/Scc"))
const News = React.lazy(() => import("./pages/News"))

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount() {
    this.setState({ isLoading: false })
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />
    }
    return (
      <div>
        <React.Suspense fallback={loading}>
          <Navbar />
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route exact path="/home" render={props => <Home {...props} />} />
            <Route exact path="/about" render={props => <About {...props} />} />
            <Route exact path="/news" render={props => <News {...props} />} />
            <Route exact path="/events-activities" render={props => <EventsAndActivities {...props} />} />
            <Route exact path="/leadership" render={props => <Leadership {...props} />} />
            <Route exact path="/scc" render={props => <Scc {...props} />} />
            <Route exact path="/gallery" render={props => <Gallery {...props} />} />
            <Route exact path="/library" render={props => <Library {...props} />} />
            <Route exact path="/readings" render={props => <Readings {...props} />} />
            <Route exact path="/prayers" render={props => <Prayers {...props} />} />
            <Route exact path="/contact" render={props => <Contact {...props} />} />
          </Switch>
          {/* Footer */}
          <Footer />
        </React.Suspense>
      </div>
    );
  }
}

export default App;
