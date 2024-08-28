import { Component } from "react";
import CustomCard from "./card-component";

class RandomCard extends Component {
  state = {
    details: [
      { id: 1, name: "ramu", role: "react developer" },
      { id: 2, name: "raju", role: "java developer" },
    ],
    Id: 2,
  };
  AddCard = () => {
    const newDetails = [
      { name: "madhav", role: "angler" },
      { name: "mallesh", role: "python " },
      { name: "sandeep", role: "python " },
      { name: "rajesh", role: "python " },
    ];

    const RandomData = Math.floor(Math.random() * newDetails.length);

    const AddRandomCard = newDetails[RandomData];

    const uniqueIds = this.state.details.map((res) => res.id);
    let newId = this.state.Id;

    while (uniqueIds.includes(newId)) {
      newId += 1;
    }

    const newCard = { id: newId, ...AddRandomCard };
    const newData = [...this.state.details, newCard];

    this.setState(
      {
        details: newData,
        Id: newId,
      },
      () => {
        console.log(this.state.details);
      }
    );
  };

  RemoveCard = (IdIndex) => {
    const FilterData = this.state.details.filter(
      (result) => result.id != IdIndex
    );

    this.setState({
      details: FilterData,
    });
  };

  render() {
    return (
      <>
        <div>
          <button onClick={this.AddCard}>Add Card</button>
        </div>
        {this.state.details.map((eachEmploy, id) => {
          return (
            <span key={id}>
              <CustomCard
                title={eachEmploy.name}
                text={eachEmploy.role}
                IdIndex={eachEmploy.id}
                RemoveCard={this.RemoveCard}
              />
            </span>
          );
        })}
      </>
    );
  }
}

export default RandomCard;
