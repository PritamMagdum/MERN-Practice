import { createRoot } from "react-dom/client";
import Main from "./Main";
// import Counter from "./Counter";
import "./Global.css";
// import Table from "./Table";
import Faker from "./Faker";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<Main />);
// root.render(<Counter />);
// root.render(<Table />);

// root.render(<Faker />);
