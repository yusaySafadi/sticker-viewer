
import './App.css';
import { Catalog } from './Catalog';
import {Viewer} from "./Viewer";


function App() {
  return (
    <div className="App">
      <h1>Sticker Viewer</h1>

        <Viewer />
        <Catalog />
          

    </div>
  );
}

export default App;
