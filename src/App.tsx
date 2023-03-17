import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ChessBoard from "./components/ChessBoard/ChessBoard";
import SelectedContext from "./selectedContext";

function App() {

    const [selected, updateSelected] = useState("");

    const setSelected = (s:string) => {
        updateSelected(s);
    };

    return (
        <div className="App">
            <SelectedContext.Provider value={{selected, setSelected}}>
              <ChessBoard/>
            </SelectedContext.Provider>
        </div>
    );
}

export default App;
