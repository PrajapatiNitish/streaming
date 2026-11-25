import {Route, Routes} from "react-router";

// All pages

import GetVideos from "./pages/GetVideos/GetVideos.jsx";
import Upload from "./pages/Upload/Upload.jsx";


export default function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<GetVideos />} />
        <Route path="/" element={<Upload />} />
      </Routes>
    );
}