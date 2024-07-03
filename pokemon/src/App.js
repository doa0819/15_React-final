import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./compoent/Main";
import Search from "./compoent/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="main" element={<Main/>}/>
          <Route path="search" element={<Search/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
