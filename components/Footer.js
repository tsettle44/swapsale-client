//import Link from "next/link";
import { Footer } from "react-materialize";

const Bottom = () => (
  <Footer
    copyrights="&copy 2019 Copyright Text"
    moreLinks={<a />}
    links={<ul />}
    className="example"
    style={{ position: "relative", bottom: "0", width: "100%" }}
  >
    <h5 className="white-text">Footer Content</h5>
    <p className="grey-text text-lighten-4">
      You can use rows and columns here to organize your footer content.
    </p>
  </Footer>
);

export default Bottom;
