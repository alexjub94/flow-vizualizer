import React, { useState } from 'react';
import NavBar from "../AppNavBar/NavBar";
import './App.css';
import config from '../config/views.constants'
import ViewLister from "../ViewLister/ViewLister";
import ViewDisplay from "../ViewLister/ViewDisplay";
import ViewConfig from "../config/viewConfig.interface";

function App() {
    const [view, setView] = useState<ViewConfig|null>(null);

    function refreshView() {
        console.log("refreshClbk");
    }

    function selectView(id: string) {
        console.log("Selected : " + id);
        let view = config.find(v => v.id === id);
        if (view)
            setView(view);
    }

    function back() {
        setView(null);
    }

    function listViews() : {id: string, name: string}[] {
        let views: {id: string, name: string}[] = [];
        config.forEach(view => views.push({ id: view.id, name: view.name}));
        return views;
    }

    const display = (view !== null) ?
        ViewDisplay(view, back)
        : <ViewLister views={listViews()} selectView={selectView}/>;

    return (
        <div className="App">
            <NavBar refreshClbk={refreshView}/>
            {display}
        </div>
    );
}

export default App;
