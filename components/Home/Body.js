import {
  Input,
  Button,
  Row,
  Col,
  Card,
  CardTitle,
  ProgressBar
} from "react-materialize";
import Link from "next/link";
import Preloader from "react-materialize/lib/Preloader";

class Body extends React.Component {
  state = {
    items: [],
    rows: 0
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
        this.setState({ items: res, rows: Math.ceil(res.length / 3) });
      });
  }

  FindItem = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <Input label="Search" onChange={this.FindItem} />
        <Link href="/postItem">
          <Button>Post Item</Button>
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
                <Card
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
    );
  }
}

export default Body;
