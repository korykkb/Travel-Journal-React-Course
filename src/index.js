import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

const root=ReactDOM.createRoot(document.getElementById("root")); 
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

//ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"))