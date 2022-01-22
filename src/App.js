
import InfoUsers from "./components/info/InfoUsers";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import MyPage from "./pages/home/MyPage";
import Footer from "./components/footer/Footer";
import AboutMe from "./pages/aboutMe/AboutMe";






function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
<Routes>
<Route path="/Gitub/users" index element={<InfoUsers/>} />

<Route path="/" index element={<MyPage/>} />

<Route path="/aboutMe" index element={<AboutMe/>} />
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
