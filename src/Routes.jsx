import { Route, Routes } from "react-router-dom";

import HomePage from "./components/Home";
import PropertyPage from "./components/propertyPage/Property";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/property" element={<PropertyPage/>} />
            
      </Routes>
    </>
  );
};

export default AppRoutes;
