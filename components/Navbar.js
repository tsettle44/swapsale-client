import Link from "next/link";
import { Button, Navbar, NavItem } from "react-materialize";

const Nav = () => (
  <Navbar brand="SwapSale" right>
    <Link href="/about">
      <NavItem>About</NavItem>
    </Link>
    <Link href="/login">
      <Button waves="light">Log In</Button>
    </Link>
    <Link href="/signup">
      <Button waves="light">Sign Up</Button>
    </Link>
  </Navbar>
);

export default Nav;
