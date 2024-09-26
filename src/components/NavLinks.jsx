// react routerd dom
import { Link } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <li key={link.name}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
