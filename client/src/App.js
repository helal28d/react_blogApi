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
    <>
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/login" element={user ? <Home /> : <Login />} />

          <Route path="/register" element={user ? <Home /> : <Register />} />

          <Route path="/write" element={user ? <Write /> : <Register />} />

          <Route path="/setting" element={user ? <Setting /> : <Register />} />

          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
