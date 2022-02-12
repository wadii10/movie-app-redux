import './App.css';
import MovieList from './Components/MovieList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DetailMovie from './Components/DetailMovie';


function App() {
  return (
    <div className="App">

      <Router >

        <Routes>

          <Route path='/' element={<MovieList />} />
          <Route path='/detail/:id' element={<DetailMovie />} />

        </Routes>

      </Router>
     

    </div>
  );
}

export default App;
