import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/meetups" />
        </Route>
        <Route path="/meetups" exact>
          <AllMeetups />
        </Route>
        <Route path="/meetups/new" exact>
          <NewMeetup />
        </Route>
        <Route path="/meetups/favorites" exact>
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
