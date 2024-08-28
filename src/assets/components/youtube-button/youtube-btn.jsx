import { Component } from "react";
import CardComponent from "../boostrap-react/cards";
import Counter from "./count";
import NewCard from "./newcard";
class YoutubeButton extends Component {
  state = {
    isSubscribe: false,
    text1: "Subscribe",
    text2: "Subscribed",
  };

  ClickMe = () => {
    this.setState(
      {
        isSubscribe: !this.state.isSubscribe,
      },
      () => {}
    );
  };

  render() {
    return (
      <>
        <button onClick={this.ClickMe}>
          {this.state.isSubscribe ? this.state.text2 : this.state.text1}
        </button>

        {this.state.isSubscribe ? (
          <>
            <Counter />

            <div>
              <CardComponent />
            </div>
            <NewCard />
          </>
        ) : (
          <h2>pls subscribed the chanel</h2>
        )}
      </>
    );
  }
}
export default YoutubeButton;
