import Layout from "../components/Layouts/Layout";
import Link from "next/link";
import Router from "next/router";
import { Row, Input, Button, Col, Preloader } from "react-materialize";
import fetch from "isomorphic-unfetch";

class SignUp extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: "",
    phone: 0,
    zipCode: 0
  };

  validate = e => {
    e.preventDefault();
    const password = this.state.password;
    const confirmPass = this.state.confirmPass;
    if (password === confirmPass) {
      this.setState({ password: password });
    } else {
      alert("Passwords do not match");
      return;
    }

    this.SignUp();
  };

  formatFname = e => {
    e.preventDefault();
    this.setState({
      firstName: e.target.value
    });
  };

  formatLname = e => {
    e.preventDefault();
    this.setState({
      lastName: e.target.value
    });
  };

  formatEmail = e => {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  };

  formatPhone = e => {
    e.preventDefault();
    this.setState({
      phone: e.target.value
    });
  };

  formatPass = e => {
    e.preventDefault();
    this.setState({
      password: e.target.value
    });
  };

  formatConfirmPass = e => {
    e.preventDefault();
    this.setState({
      confirmPass: e.target.value
    });
  };

  formatZip = e => {
    e.preventDefault();
    this.setState({
      zipCode: e.target.value
    });
  };

  SignUp = () => {
    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.phone === "" ||
      this.state.zipCode === ""
    ) {
      alert("Please fill in all fields.");
    } else {
      document.getElementById("form").style.display = "none";

      document.getElementById("loader").style.display = "block";

      fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          phone: parseInt(this.state.phone),
          zipCode: parseInt(this.state.zipCode)
        })
      })
        .then(r => {
          return r.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          var d = new Date();
          d.setTime(d.getTime() + 0.1 * 24 * 60 * 60 * 1000);
          var expires = "expires=" + d.toUTCString();
          document.cookie =
            "id" + "=" + JSON.stringify(myJson) + ";" + expires + ";path=/";
          Router.push("/");
        });
    }
  };

  render() {
    return (
      <Layout>
        <div className="container">
          <h3 style={{ textAlign: "center" }}>Sign Up</h3>
          <form
            onSubmit={this.validate}
            style={{ maxWidth: "500px", margin: "0 auto" }}
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
                  s={6}
                  label="First Name"
                  type="text"
                  name="fName"
                  onChange={this.formatFname}
                />

                <Input
                  s={6}
                  label="Last Name"
                  type="text"
                  name="lName"
                  onChange={this.formatLname}
                />
              </Row>
              <Row>
                <Input
                  s={12}
                  label="Email"
                  type="email"
                  name="email"
                  onChange={this.formatEmail}
                />
              </Row>
              <Row>
                <Input
                  s={12}
                  label="Password"
                  type="password"
                  name="password"
                  onChange={this.formatPass}
                />
              </Row>
              <Row>
                <Input
                  s={12}
                  label="Confirm Password"
                  type="password"
                  name="confirmPass"
                  onChange={this.formatConfirmPass}
                />
              </Row>
              <Row>
                <Input
                  s={12}
                  label="Phone Number"
                  type="text"
                  name="phone"
                  onChange={this.formatPhone}
                />
              </Row>
              <Row>
                <Input
                  type="text"
                  label="ZipCode"
                  s={12}
                  name="zipCode"
                  onChange={this.formatZip}
                />
              </Row>
              <Row style={{ textAlign: "center" }}>
                <Button>Sign Up</Button>
              </Row>
            </div>
          </form>
          <div style={{ textAlign: "center" }}>
            <Link href="login">
              <a>Already have an account?</a>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}

export default SignUp;
