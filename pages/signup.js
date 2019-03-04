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
              <Input s={6} label="First Name" type="text" />

              <Input s={6} label="Last Name" type="text" />
            </Row>
            <Row>
              <Input s={12} label="Email" type="email" />
            </Row>
            <Row>
              <Input s={12} label="Password" type="password" />
            </Row>
            <Row>
              <Input s={12} label="Confirm Password" type="password" />
            </Row>
            <Row>
              <Input s={6} label="Phone Number" type="text" />
              <Input name="gender" value="male" label="Male" type="radio" />
              <Input name="gender" value="female" label="Female" type="radio" />
            </Row>
            <Row>
              <Input type="date" label="Birthday" s={6} />
              <Input type="text" label="ZipCode" s={6} />
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
