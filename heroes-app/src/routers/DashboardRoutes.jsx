import { Routes, Route } from "react-router-dom";
import { Navbar } from "../componets/ui/Navbar";
import { DCScreen } from "../componets/dc/DCScreen";
import { MarvelScreen } from "../componets/Marvel/MarvelScreen";
import { SearchScreen } from "../componets/search/SearchScreen";
import { HeroScreen } from "../componets/hero/HeroScreen";

export const DashboardRoutes = () => {
  return (<>
    <>
      <Navbar />
      <div className="m-5">
        <Routes>
          <Route path="/" element={<MarvelScreen />} />
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DCScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:id" element={<HeroScreen />} />
        </Routes>
      </div>
    </>
  </>);
};
