import './App.css';
//Estamos importando o classname vidio da pagina vidio 
import Video from './pages/Video'; 
//a tag <Video/> pega todos os dados da classname video da pg vidio.js 
function App() {
  return (
    <div className="App">
      <div className='app_videos'>
        <Video/>
        
      </div>
    </div>
  );
}

export default App;
