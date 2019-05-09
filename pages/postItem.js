import Layout from "../components/Layouts/Layout";
import Router from "next/router";
import { Row, Input, Button } from "react-materialize";

class PostItem extends React.Component {
  state = {
    img: "",
    name: "",
    price: 0,
    desc: "",
    status: "",
    zipCode: 0
  };

  componentDidMount() {
    if (!document.cookie) {
      Router.push("/login");
    }
  }

  formatFiles = e => {
    e.preventDefault();
    this.setState({
      img: e.target.value
    });
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
    console.log(document.getElementById("img").files[0]);
    let formData = new FormData();

    formData.append("img", document.getElementById("img").files[0]);
    formData.append("name", this.state.name);
    formData.append(
      "userId",
      document.cookie.substring(4, document.cookie.length - 1)
    );
    formData.append("price", this.state.price);
    formData.append("desc", this.state.desc);
    formData.append("zipCode", this.state.zipCode);
    fetch("http://localhost:5000/api/items", {
      method: "POST",
      body: formData
    }).then(r => {
      console.log(r);
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
                label="Upload Pictures"
                type="file"
                multiple
                name="img"
                id="img"
                placeholder="Upload one or more files"
              />
            </Row>
            <Row>
              <Input
                s={12}
                name="name"
                label="Name"
                type="text"
                onChange={this.formatName}
              />
            </Row>
            <Row>
              <Input
                s={12}
                name="price"
                label="Price ($ USD)"
                type="number"
                onChange={this.formatPrice}
              />
            </Row>
            <Row>
              <Input
                s={12}
                name="desc"
                label="Description"
                type="textarea"
                onChange={this.formatDesc}
              />
            </Row>
            <Row>
              <Input
                s={12}
                name="zipCode"
                label="ZipCode"
                type="number"
                onChange={this.formatZip}
              />
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Button type="submit">Post Item</Button>
            </Row>
          </form>
        </div>
      </Layout>
    );
  }
}

export default PostItem;
