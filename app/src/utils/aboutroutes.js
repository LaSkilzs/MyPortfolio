import Info from "../components/about/Info";
import Experience from "../components/about/Experience";
import Education from "../components/about/Education";
import Skills from "../components/about/Skills";
import Interests from "../components/about/Interests";

const aboutRoutes = [
  { path: "/about:info", exact: true, component: Info },
  { path: "/about:education", exact: true, component: Education },
  { path: "/about:experience", exact: true, component: Experience },
  { path: "/about:interests", exact: true, component: Interests },
  { path: "/about:skills", exact: true, component: Skills }
];

export default aboutRoutes;
