import Home from "./Pages/home/Home";
import TopBar from "./Components/topBar/TopBar";
import Single from "./Pages/Single/Single";
import Write from "./Components/Write/Write";
import Setting from "./Pages/Setting/Setting";
import Login from "./Pages/Login/login";
import Register from "./Pages/register/Register";
function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login"> {user ? <Home /> : <Login />}</Route>
        <Route path="/register"> {user ? <Home /> : <Register />}</Route>
        <Route path="/write"> {user ? <Write /> : <Register />}</Route>
        <Route path="/setting"> {user ? <Setting /> : <Register />}</Route>
        <Route path="/post/:postId">
          {" "}
          <Single />
        </Route>
      </Switch>
      <Register />
    </Router>
  );
}

export default App;
