import Layout from "../components/Layout";
import Link from "next/link";
import { Row, Input, Button } from "react-materialize";

class SignUp extends React.Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <Layout>
        <div className="container">
          <h3 style={{ textAlign: "center" }}>Sign Up</h3>
          <form style={{ maxWidth: "500px", margin: "0 auto" }}>
            <Row>
              <Input placeholder="Email" s={12} label="Email" type="email" />
            </Row>
            <Row>
              <Input
                placeholder="Password"
                s={12}
                label="Password"
                type="password"
              />
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Button>Sign Up</Button>
            </Row>
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
