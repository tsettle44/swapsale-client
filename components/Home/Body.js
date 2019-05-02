import { Input, Button, Row, Col, Card } from "react-materialize";
import Link from "next/link";

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
          {this.state.items.map((item, i) => (
            <Link key={i} href={`/item?id=${item._id}`}>
              <Col l={4} m={6} s={12} key={i}>
                <Card
                  className="blue-grey darken-1"
                  textClassName="white-text"
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
