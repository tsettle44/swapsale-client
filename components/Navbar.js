import Link from "next/link";
import { Button, Navbar, NavItem } from "react-materialize";

const Nav = () => (
  <Navbar
    style={{ paddingRight: "10px", paddingLeft: "10px" }}
    brand="SwapSale"
    right
  >
    <Link href="/about">
      <NavItem style={{ marginRight: "10px" }}>About</NavItem>
    </Link>
    <Link href="/login">
      <Button style={{ marginRight: "10px" }} waves="light">
        Log In
      </Button>
    </Link>
    <Link style={{ textAlign: "center" }} href="/signup">
      <Button waves="light">Sign Up</Button>
    </Link>
  </Navbar>
);

export default Nav;
