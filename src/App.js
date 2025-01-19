import { Routes, Route } from "react-router-dom";
import { FirstPage } from "./first-page/first-page";
import { DownloadTool } from "./download-tool/download-tool";
import { UnderConstruction } from "./construction/under-construction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/download-tool" element={<DownloadTool />} />
      <Route path="/under-construction" element={<UnderConstruction />} />
    </Routes>
  );
}

export default App;
