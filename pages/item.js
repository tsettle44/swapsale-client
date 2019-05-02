import Layout from "../components/Layouts/Layout";
import { withRouter } from "next/router";
import ItemBody from "../components/Item/ItemBody";

const Content = withRouter(props => (
  <div>
    <ItemBody id={props.router.query.id} />
  </div>
));

const Item = props => (
  <Layout>
    <Content />
  </Layout>
);

export default Item;
