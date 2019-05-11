import Layout from "../components/Layouts/Layout";
import Router from "next/router";
import { Row, Input, Button } from "react-materialize";
import Compressor from "compressorjs";

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

  Post = e => {
    e.preventDefault();

    const files = document.getElementById("img").files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      new Compressor(files[i], {
        quality: 0.6,
        maxWidth: 512,
        success(result) {
          formData.append("img", result);

          if (i == files.length - 1) {
            formData.append("name", document.getElementById("name").value);
            formData.append(
              "userId",
              document.cookie.substring(4, document.cookie.length - 1)
            );
            formData.append("price", document.getElementById("price").value);
            formData.append("desc", document.getElementById("desc").value);
            formData.append(
              "zipCode",
              document.getElementById("zipCode").value
            );
            fetch("http://localhost:5000/api/items", {
              method: "POST",
              body: formData
            }).then(r => {
              console.log(r);
              if (r.status === 204) {
                Router.push("/");
              }
            });
          }
        }
      });
    }
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
              <Input s={12} id="name" name="name" label="Name" type="text" />
            </Row>
            <Row>
              <Input
                s={12}
                id="price"
                name="price"
                label="Price ($ USD)"
                type="number"
              />
            </Row>
            <Row>
              <Input
                s={12}
                id="desc"
                name="desc"
                label="Description"
                type="textarea"
              />
            </Row>
            <Row>
              <Input
                s={12}
                id="zipCode"
                name="zipCode"
                label="ZipCode"
                type="number"
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
