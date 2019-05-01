import Layout from "../components/Layouts/Layout";
import Link from "next/link";
import Router from "next/router";
import { Row, Input, Button } from "react-materialize";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  formatEmail = e => {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  };

  formatPass = e => {
    e.preventDefault();
    this.setState({
      password: e.target.value
    });
  };

  LogIn = e => {
    e.preventDefault();
    fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then(r => {
      if (r.status === 200) {
        console.log(r);
        Router.push("/");
      }
    });
  };

  render() {
    return (
      <Layout>
        <div className="container">
          <h3 style={{ textAlign: "center" }}>Log In</h3>
          <form
            style={{ maxWidth: "500px", margin: "0 auto" }}
            onSubmit={this.LogIn}
          >
            <Row>
              <Input
                s={12}
                label="Email"
                type="email"
                onChange={this.formatEmail}
              />
            </Row>
            <Row>
              <Input
                s={12}
                label="Password"
                type="password"
                onChange={this.formatPass}
              />
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Button>Log In</Button>
            </Row>
          </form>
          <div style={{ textAlign: "center" }}>
            <Link href="signup">
              <a>Don't have an account?</a>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Login;
