import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/meetups'>
          <AllMeetups/>
        </Route>
        <Route path='/meetups/new' exact>
          <NewMeetup/>
        </Route>
        <Route path='/meetups/favorites'  exact>
          <AllMeetups/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
