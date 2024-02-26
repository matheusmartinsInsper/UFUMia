import Header from './Components/Header'
import Main from './Components/Main'
import Section from './Components/Section'
import MainMission from './Components/MainMission';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="background">
       <Header/>
       <Main/>
       <Section/>
       <MainMission/>
      </div>
    </div>
  );
}

export default App;
