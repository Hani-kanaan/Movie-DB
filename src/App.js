import './App.css';
import Header from "./Header";
import Footer from './Pages/Footer'
import Trending from "./Pages/Trending";
import Movies from "./Pages/Movies";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Pagination from './Pages/Pagination';
import SingleMovie from './Pages/SingleMovie';
function App() {
  return (
<BrowserRouter>

      <header className="App-header">
       aa
      
     <Header/>
     <Routes>

     {/* <Route path="/" element={<Trending />} exact /> */}
     <Route path="/movies" element={<Movies/>} /> 
     <Route path ="/trending" element={<Trending/>} ></Route>
     <Route path="/movie/:id" element={<SingleMovie />} />
     {/* <Route path="*" element={<Error />} />  */}
    </Routes>
    <Footer/>
      
        
         
       
      </header>

  </BrowserRouter>
  );
}

export default App;
