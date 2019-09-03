import Home from "./containers/Home";
import About from "./containers/About";
import Blogs from "./containers/Blogs";
import Github from "./containers/Github";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";

const routes = [
  { path: "/", exact: true, component: Home },
  { path: "/about", exact: true, component: About },
  { path: "/blogs", exact: true, component: Blogs },
  { path: "/github", exact: true, component: Github },
  { path: "/portfolio", exact: true, component: Portfolio },
  { path: "/contact", exact: true, component: Contact }
];

export default routes;
