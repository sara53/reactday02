import "./App.css";
import About from "./componets/about";
import Counter from "./componets/counter";

import MyNav from "./componets/myNav";
import MySlider from "./componets/mySlider";
import Products from "./componets/products";
import { productList } from "./models/productList";

export function App() {
  let title = "Front End Product";

  return (
    <div className="">
      <MyNav />
      <MySlider />
      <Products
        productList={productList}
        sectionTitle={title}
        des="lorem Text"
      />
      <About
        bgColor="bg-dark text-light"
        title="Welcome From ITI"
        desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolor
          at amet quis architecto, id iste ducimus pariatur nesciunt non odit
          molestias sapiente aliquam libero asperiores sed repellendus illo
          eius."
        btnTitle="Show More"
      >
        <button className="btn btn-info">Show More</button>
      </About>
      <About
        bgColor="bg-secondary text-dark"
        title="Welcome Front End"
        desc="Sara Atef"
        btnTitle="Welcome!"
      >
        <button className="btn btn-dark">Show More</button>
        <button className="btn btn-success">Click Now</button>
      </About>
      <Counter />
    </div>
  );
}

/**
 * Class Component
 *========================= 
    JSX -- javascript xml --- javascript Code
 *
 */
