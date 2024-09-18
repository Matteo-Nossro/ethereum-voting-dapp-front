import './App.css';
import Login from './screens/Login'
import Home from './screens/Home'
import {TopBar} from "./components/TopBar";

function App() {
  return (
    <div className="App min-h-screen bg-stone-50">
        {/*<div className="bg-amber-300 blur-3xl h-1/3  w-1/3 absolute rounded-full left-18% top-34% ">*/}

        {/*</div>*/}
        <header className="w-full">
            <TopBar/>
        </header>
        <main className="max-w-7xl mx-auto h-fit  ">
            <Home/>
        </main>
    </div>
  );
}

export default App;
