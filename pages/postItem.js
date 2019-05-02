import Layout from "../components/Layouts/Layout";
import Router from "next/router";
import { Row, Input, Button } from "react-materialize";

class PostItem extends React.Component {
  state = {
    name: "",
    price: 0,
    desc: "",
    status: "",
    zipCode: 0
  };

  formatName = e => {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  };

  formatPrice = e => {
    e.preventDefault();
    this.setState({
      price: e.target.value
    });
  };

  formatDesc = e => {
    e.preventDefault();
    this.setState({
      desc: e.target.value
    });
  };

  formatStatus = e => {
    e.preventDefault();
    this.setState({
      status: e.target.value
    });
  };

  formatZip = e => {
    e.preventDefault();
    this.setState({
      zipCode: e.target.value
    });
  };

  Post = e => {
    e.preventDefault();
    fetch("http://localhost:5000/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        userId: document.cookie.substring(4, document.cookie.length - 1),
        price: this.state.price,
        desc: this.state.desc,
        status: this.state.status,
        zipCode: this.state.zipCode
      })
    }).then(r => {
      if (r.status === 204) {
        Router.push("/");
      }
    });
  };

  render() {
    return (
      <Layout>
        <div className="container">
          <h3 style={{ textAlign: "center" }}>Post Item</h3>
          <form
            style={{ maxWidth: "500px", margin: "0 auto" }}
            onSubmit={this.Post}
          >
            <Row>
              <Input
                s={12}
                label="Name"
                type="text"
                onChange={this.formatName}
              />
            </Row>
            <Row>
              <Input
                s={12}
                label="Price ($ USD)"
                type="number"
                onChange={this.formatPrice}
              />
            </Row>
            <Row>
              <Input
                s={12}
                label="Description"
                type="textarea"
                onChange={this.formatDesc}
              />
            </Row>
            <Row>
              <Input
                s={12}
                label="ZipCode"
                type="number"
                onChange={this.formatZip}
              />
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Button>Post</Button>
            </Row>
          </form>
        </div>
      </Layout>
    );
  }
}

export default PostItem;
