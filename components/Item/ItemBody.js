import { Row, Col, Preloader } from "react-materialize";

class ItemBody extends React.Component {
  state = {
    item: [],
    id: this.props.id
  };

  componentDidMount() {
    fetch(`http://localhost:5000/api/items/${this.state.id}`, {
      method: "GET"
    })
      .then(r => {
        return r.json();
      })
      .then(res => {
        document.getElementById("loader").style.display = "none";
        this.setState({ item: res });
      });
  }

  render() {
    return (
      <div>
        <Row
          id="loader"
          style={{ paddingTop: "30vh", textAlign: "center", display: "block" }}
        >
          <Col s={12}>
            <Preloader />
          </Col>
        </Row>
        {this.state.item.map((item, i) => (
          <div>
            <h1>{item.name}</h1>
            <p>{item.createdAt}</p>
            <p>$ {item.price}</p>
            <p>{item.description}</p>
            <p>{item.zipCode}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ItemBody;
