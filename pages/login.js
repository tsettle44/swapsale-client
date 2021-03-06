import Layout from "../components/Layouts/Layout";
import Link from "next/link";
import Router from "next/router";
import { Row, Col, Input, Button, Preloader } from "react-materialize";

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

    document.getElementById("form").style.display = "none";

    document.getElementById("loader").style.display = "block";

    fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(r => {
        return r.json();
      })
      .then(function(myJson) {
        var d = new Date();
        d.setTime(d.getTime() + 0.1 * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie =
          "id" + "=" + JSON.stringify(myJson) + ";" + expires + ";path=/";
        Router.push("/");
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
            <Row
              id="loader"
              style={{
                textAlign: "center",
                display: "none",
                paddingTop: "10vh"
              }}
            >
              <Col s={12}>
                <Preloader />
              </Col>
            </Row>
            <div id="form">
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
                <Button>
                  <div id="text">Log In</div>
                </Button>
              </Row>
            </div>
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
