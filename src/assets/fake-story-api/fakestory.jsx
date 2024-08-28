import axios from "axios";
import { Component } from "react";
import SecondaryHeading from "../heading-component/heading";
import Image from "../image-component/imgae";
import Paragraph from "../para-component/paragraph";
import DivHandel from "../div-component/div";

import "./shopping.css";
import "./shopping.modules.css";

class FakeStory extends Component {
  state = {
    shaping: [],
    shopping: [],
    resData: [],
  };

  componentDidMount() {
    this.FakeFetch();
  }

  FakeFetch = async () => {
    const { status, data } = await axios.get(
      "https://fakestoreapi.com/products"
    );
    if (status == 200) {
      this.setState({
        shaping: data,
        shopping: data,
      });
    }
  };

  CategoryData = async (product) => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/category/${product}`
    );

    this.setState({
      shaping: data,
    });
  };

  clickHandler = (product) => {
    this.CategoryData(product);
  };
  HomePage = () => {
    this.FakeFetch();
  };

  render() {
    const result = [
      { name: "men's clothing" },
      { name: "jewelery" },
      { name: "electronics" },
      { name: "women's clothing" },
    ];
    return (
      <div className="mainCard">
        <div className="nav">
          <button className="btn" onClick={this.HomePage}>
            Home
          </button>
          {result.map((res, index) => {
            return (
              <div className="nav_bar" key={index}>
                <button
                  className="btn"
                  onClick={() => this.clickHandler(res.name)}
                >
                  {res.name}
                </button>
              </div>
            );
          })}
        </div>

        {this.state.shaping.map((eachItem) => {
          return (
            <div className="ShoppingCard">
              <SecondaryHeading heading={eachItem.category} />
              <Image img={eachItem.image} alt={eachItem.category} />
              <SecondaryHeading heading={eachItem.title} />
              <Paragraph para={eachItem.description} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default FakeStory;
