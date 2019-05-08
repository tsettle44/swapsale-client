import Layout from "../components/Layouts/Layout";
import Router from "next/router";
import Link from "next/link";
import { Row, Input, Button, Col, Card, CardTitle } from "react-materialize";

class Profile extends React.Component {
  state = {
    name: "",
    items: [],
    zipCode: 0
  };

  componentDidMount() {
    fetch(
      `http://localhost:5000/api/users/${document.cookie.substring(
        4,
        document.cookie.length - 1
      )}`,
      {
        method: "GET"
      }
    )
      .then(r => {
        return r.json();
      })
      .then(res => {
        this.setState({
          name: res.firstName + " " + res.lastName,
          items: res.items,
          zipCode: res.zipCode
        });
      });
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Profile</h3>
          <h5>{this.state.name}</h5>
          <p>{this.state.zipCode}</p>
          <h4>Items</h4>
          <Row>
            {this.state.items.map((item, i) => (
              <Link key={i} href={`/item?id=${item._id}`}>
                <Col l={4} m={6} s={12} key={i}>
                  <Card
                    style={{ cursor: "pointer" }}
                    header={<CardTitle />}
                    actions={[
                      <a>${item.price}</a>,
                      <a>Zip Code: {item.zipCode}</a>
                    ]}
                    title={item.name}
                  >
                    {item.description}
                  </Card>
                </Col>
              </Link>
            ))}
          </Row>
        </div>
      </Layout>
    );
  }
}

export default Profile;
