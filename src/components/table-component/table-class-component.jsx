import { Component } from "react";
import ThComponent, { TdComponent } from "./table-td-th-components";
import axios from "axios";
import "./table-modules.css";

class TableComponent extends Component {
  state = {
    result: [],
  };
  componentDidMount() {
    this.FetchData();
  }

  FetchData = async () => {
    const { status, data } = await axios.get("https://dummyjson.com/recipes");
    if (status == 200) {
      this.setState(
        {
          result: data.recipes,
        },
        () => {
          console.log(this.state.result);
        }
      );
    }
  };

  render() {
    return (
      <table className="table">
        <>
          <ThComponent list="Ingredients" list2="Instructions" name="Name" img="Images" />
        </>
        {this.state.result.map((eachRecipes) => {
          return (
            <>
              <TdComponent
                list5={eachRecipes.ingredients}
                list6={eachRecipes.ingredients}
                name1={eachRecipes.name}
                src={eachRecipes.image}
              />
            </>
          );
        })}
      </table>
    );
  }
}

export default TableComponent;
