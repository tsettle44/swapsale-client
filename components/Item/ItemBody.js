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
        this.setState({ item: res });
      });
  }

  render() {
    return (
      <div>
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
