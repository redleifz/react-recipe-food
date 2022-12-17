import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import RecipeInfo from "./components/RecipeInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Main />} />
        <Route path="/:id" element={<RecipeInfo />} />
      </Routes>
     
    </>
  );
}

export default App;
