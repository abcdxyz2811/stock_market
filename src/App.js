import './App.css';
import Home from "./Component/Home"
import Nav from "./Component/Nav"
import Page from "./Component/Page"
import Money from './Component/Money';
import Blog from "./Component/Blog"
import { Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/page" element={<Page/>}/>
      <Route path="/money" element={<Money/>}/>
      <Route path="/Blog" element={<Blog/>}/>

    </Routes>
    {/* <Home/> */}
    </>
  );
}

export default App;
