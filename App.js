    const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:'child1'},[React.createElement("h1",{},"this is h1 tag"),React.createElement("h2",{},"this is h2 tag")]))
    
    const heading = React.createElement("h1",{},"Hello world Reactjs");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render([parent,heading]);