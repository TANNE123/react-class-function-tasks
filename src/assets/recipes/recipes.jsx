import { Component } from "react";
import axios from "axios";
import Loading from "../loder-spinner/loading";
import Ingredients from "../ingredients/ingredients-list";
import Image from "../image-component/imgae";
import SecondaryHeading from "../heading-component/heading";

import "./recipes.css";
import "./recipes.modules.css";

class Recipes extends Component {
  state = {
    recipes: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.FetchData();
  }

  FetchData = async () => {
    const { status, data } = await axios.get("https://dummyjson.com/recipes");
    if (status == 200) {
      this.setState({
        recipes: data.recipes,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="body">
        <h1>Recipes...</h1>
        {this.state.loading ? (
          <Loading />
        ) : (
          <>
            <h2>Welcome To Recipes.....</h2>
            {this.state.recipes.map((eachRecipes) => {
              return (
                <div key={eachRecipes.id} className="Recipes-card">

                  <div className="images">
                    <h2>{eachRecipes.name}</h2>
                  </div>

                  <div className="images">
                    <Image img={eachRecipes.image} alt={eachRecipes.name} />
                  </div>

                  <div className="images">
                    <SecondaryHeading
                      heading={`Ingredients for ${eachRecipes.name}`}
                    />
                  </div>

                  <div  className="list">
                    <Ingredients list={eachRecipes.ingredients} />
                  </div>

                  <div className="images">
                    <SecondaryHeading
                      heading={`Instructions for ${eachRecipes.name}`}
                    />
                  </div>

                  <div className="list">
                    <Ingredients list={eachRecipes.instructions} />
                  </div>

                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default Recipes;
