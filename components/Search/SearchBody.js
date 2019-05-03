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
import Router from "next/router";

class SearchBody extends React.Component {
  state = {
    items: [],
    rows: 0,
    search: ""
  };

  componentDidMount() {
    fetch(`http://localhost:5000/api/items/search/${this.props.value}`, {
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

  SearchValue = e => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  };

  Search = e => {
    e.preventDefault();
    window.location.assign(`/search?value=${this.state.search}`);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.Search}>
          <Input
            label="Search"
            onChange={this.SearchValue}
            placeholder={this.props.value}
          />
        </form>
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
    );
  }
}

export default SearchBody;
