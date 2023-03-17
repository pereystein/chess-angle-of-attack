import React from "react";

interface ISelectedContext {
    selected: string;
    setSelected?: (s: string) => void;
}

const defaultState = {
    selected: ""
};


const SelectedContext = React.createContext<ISelectedContext>(defaultState);

export default SelectedContext;