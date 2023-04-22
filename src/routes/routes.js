import { Route, Routes as DRoutes } from "react-router-dom";
import Home from "../components/Home";
import Users from "../components/Users";
import About from "../components/About";

export const Routes = () => {
  return (
    <>
      <DRoutes>
        <Route path="/" Component={Home} />
        <Route path="/users" Component={Users} />
        <Route path="/about" Component={About} />
      </DRoutes>
    </>
  );
};
