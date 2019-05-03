import Layout from "../components/Layouts/Layout";
import { withRouter } from "next/router";
import SearchBody from "../components/Search/SearchBody";

const Content = withRouter(props => (
  <div>
    <SearchBody value={props.router.query.value} />
  </div>
));

const Search = props => (
  <Layout>
    <Content />
  </Layout>
);

export default Search;
