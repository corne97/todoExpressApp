import ReactDOM from "react-dom/client";
import { App } from "@app/App";

const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

ReactDOM.createRoot(root).render(<App />);