import {
  Input,
  Button,
  Row,
  Col,
  Carousel,
  Chip,
  ProgressBar
} from "react-materialize";
import Link from "next/link";
import Router from "next/router";

class Body extends React.Component {
  state = {
    items: [],
    search: ""
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/items", {
      method: "GET"
    })
      .then(r => {
        return r.json();
      })
      .then(res => {
        document.getElementById("loader").style.display = "none";
        this.setState({
          items: res
        });
      });
  }

  FindItem = e => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  };

  Search = e => {
    e.preventDefault();
    Router.push(`/search?value=${this.state.search}`);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.Search}>
          <Input label="Search" onChange={this.FindItem} />
        </form>
        <Button onClick={this.Search}>Search</Button>
        <Link href="/postItem">
          <Button style={{ float: "right" }}>Post Item</Button>
        </Link>
        <Row>
          <Col
            id="loader"
            style={{ paddingTop: "100px", display: "block" }}
            s={12}
          >
            <ProgressBar />
          </Col>
        </Row>
        <Row>
          {this.state.items.map((item, i) => (
            <Link key={i} href={`/item?id=${item._id}`}>
              <Col l={4} m={6} s={12} key={i}>
                <div
                  style={{
                    maxWidth: "100%",
                    cursor: "pointer",
                    borderRadius: "5px",
                    marginBottom: "20px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                  }}
                >
                  <div>
                    <img
                      src={`http://localhost:5000/api/items/image/${
                        item.img[0].filename
                      }`}
                      style={{
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                        objectFit: "cover",
                        width: "100%",
                        height: "200px"
                      }}
                    />
                    <p
                      style={{
                        display: "inline",
                        padding: "10px",
                        fontSize: "1.5rem"
                      }}
                    >
                      {item.name}
                    </p>
                    <Chip
                      style={{
                        color: "#037200",
                        float: "right",
                        paddingRight: "10px"
                      }}
                    >
                      ${item.price}
                    </Chip>
                    <p style={{ padding: "10px" }}>Zip Code: {item.zipCode}</p>
                  </div>
                </div>
              </Col>
            </Link>
          ))}
        </Row>
      </div>
    );
  }
}

export default Body;
