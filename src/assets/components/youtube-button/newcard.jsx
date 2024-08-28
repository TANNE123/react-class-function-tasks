import { Component } from "react";
import AddCardComponent from "./Add-cord-component";

class NewCard extends Component {
  state = {
    cards: [],
  };

  addCard = () => {
    this.setState({
      cards: [
        ...this.state.cards,
        {
          id:crypto.randomUUID(),
          title: "Rajesh",
          text: "Welcome To React",
          image:
            "https://icon2.cleanpng.com/20231028/po/transparent-youtube-img-bright-and-colorful-energetic-1711041698089.webp",
        },
      ],
    });
  };

  removeCard = (id) => {
    console.log(this.state.cards[0].id)
    this.setState({
      cards: this.state.cards.filter((ele) => ele.id!== id),
    });
  };

  render() {
    return (
      <>
        <button onClick={this.addCard}>Add Card</button>
        <div>
          {this.state.cards.map((card, index) => (
            <AddCardComponent
              key={index}
              title={card.title}
              text={card.text}
              image={card.image}
               id={card.id}
              state={this.state}
              setState={this.setState}
              removeCard={this.removeCard}
            />
          ))}
        </div>
      </>
    );
  }
}

export default NewCard;
