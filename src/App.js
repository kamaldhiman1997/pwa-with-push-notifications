import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { Routes } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          {" "}
          <Routes />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
