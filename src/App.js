import React from "react";

import { Switch, Route } from "react-router-dom"
import BounceLoader from "react-spinners/BounceLoader"
import "./styles/main.scss"
import Loading from "./components/Loading";
import Admin from "./Admin";
import Wrapper from "./pages/Wrapper";

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


const loading = (
  <div style={{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column-reverse"
  }}>
    <BounceLoader color="crimson" loading={true} size={40} />
  </div>
)

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
          <Switch>
            <Route exact path="/" render={props => <Wrapper><Home {...props} /></Wrapper>} />
            <Route exact path="/home" render={props => <Wrapper><Home {...props} /></Wrapper>} />
            <Route exact path="/about" render={props => <Wrapper><About {...props} /></Wrapper>} />
            <Route exact path="/news" render={props => <Wrapper><News {...props} /></Wrapper>} />
            <Route exact path="/events-activities" render={props => <Wrapper><EventsAndActivities {...props} /></Wrapper>} />
            <Route exact path="/leadership" render={props => <Wrapper><Leadership {...props} /></Wrapper>} />
            <Route exact path="/scc" render={props => <Wrapper><Scc {...props} /></Wrapper>} />
            <Route exact path="/gallery" render={props => <Wrapper><Gallery {...props} /></Wrapper>} />
            <Route exact path="/library" render={props => <Wrapper><Library {...props} /></Wrapper>} />
            <Route exact path="/readings" render={props => <Wrapper><Readings {...props} /></Wrapper>} />
            <Route exact path="/prayers" render={props => <Wrapper><Prayers {...props} /></Wrapper>} />
            <Route exact path="/contact" render={props => <Wrapper><Contact {...props} /></Wrapper>} />
            <Route path="/admin" render={props => <Admin {...props} />} />
          </Switch>
          {/* Footer */}
          {/* <Footer /> */}
        </React.Suspense>
      </div>
    );
  }
}

export default App;
