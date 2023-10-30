import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import requests from './request';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner fetchUrl={requests.fetchTrending} />
        <Row isPoster={true} title='NetflixOriginals' fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title='TopRated' fetchUrl={requests.fetchTopRated}/>
        <Row title='Action' fetchUrl={requests.fetchActionMovies}/>
        <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
        <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
        <Row title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
    
  );
}

export default App;
