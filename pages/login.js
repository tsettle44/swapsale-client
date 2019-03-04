import Layout from "../components/Layout";
import Link from "next/link";
import { Row, Input, Button } from "react-materialize";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <Layout>
        <div className="container">
          <h3 style={{ textAlign: "center" }}>Log In</h3>
          <form style={{ maxWidth: "500px", margin: "0 auto" }}>
            <Row>
              <Input s={12} label="Email" type="email" />
            </Row>
            <Row>
              <Input s={12} label="Password" type="password" />
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
