import Link from "next/link";
import Router from "next/router";
import { Button, Navbar, NavItem } from "react-materialize";

class Nav extends React.Component {
  componentDidMount() {
    if (document.cookie.substring(0, 2) === "id") {
      document.getElementById("logout").style.display = "inline";
      document.getElementById("login").style.display = "none";
      document.getElementById("signin").style.display = "none";
    }
  }

  logout = () => {
    document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    Router.push("/login");
  };

  render() {
    return (
      <Navbar
        style={{ paddingRight: "10px", paddingLeft: "10px" }}
        brand="SwapSale"
        right
      >
        <Link href="/about">
          <NavItem style={{ marginRight: "10px" }}>About</NavItem>
        </Link>
        <Link href="/login">
          <Button id="login" style={{ marginRight: "10px" }} waves="light">
            Log In
          </Button>
        </Link>
        <Link href="/signup">
          <Button id="signin" waves="light">
            Sign Up
          </Button>
        </Link>
        <Button
          onClick={this.logout}
          id="logout"
          style={{ display: "none" }}
          waves="light"
        >
          Log Out
        </Button>
      </Navbar>
    );
  }
}

export default Nav;
