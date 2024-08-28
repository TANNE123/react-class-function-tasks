import { Component } from "react";
import CardComponent from "./card-component";

import { successToasts } from "../components/toast";

class BulbComponent extends Component {
  state = {
    // src: [],
    useData: [
      {
        title: "Bulb On off function",
        text: "welcome to jsx...",
        src: "",
        OnCount: 0,
        OffCount: 0,
      },
    ],
  };
  componentDidMount() {
    this.Permanent();
  }

  Permanent = () => {
    const src3 ="https://i.pinimg.com/736x/30/41/e2/3041e2d0e7716bf1bb6eb8a05f87a25a.jpg"
    const PermanentUrl = this.state.useData.map((res) => ({
      ...res,
      src: src3,
    }));
    this.setState(
      {
        useData: PermanentUrl,
      },
      () => {
        // console.log(this.state.useData);
      }
    );
  };

  BtnOn = (index) => {
    const src1 ="https://i.pinimg.com/474x/1e/86/da/1e86da938714a1223c42e9c9c89e093e.jpg"
    const updateData = [...this.state.useData];

    updateData[index].src = src1;
    updateData[index].OnCount += 1;

    this.setState(
      {
        useData: updateData,
      },
      () => {
        successToasts("Bulb turned on!", "top-right");
      }
    );
  };

  BtnOff = (index) => {
    const src2 ="https://i.pinimg.com/736x/30/41/e2/3041e2d0e7716bf1bb6eb8a05f87a25a.jpg"
    const updateData1 = [...this.state.useData];
    updateData1[index].src = src2;
    updateData1[index].OffCount += 1;
    this.setState({
      useData: updateData1,
    });
  };

  AddCard = () => {
    const newCard = {
      title: "Bulb On off function",
      text: "welcome to jsx...",
      OnCount: 0,
      OffCount: 0,
    };

    const updateData2 = [...this.state.useData, newCard];

    this.setState(
      {
        useData: updateData2,
      },
      () => {
        this.Permanent();
        console.log(this.state.useData);
      }
    );
  };

  render() {
    return (
      <>
        <button style={{ display: "block" }} onClick={this.AddCard}>
          Add Card
        </button>
        {this.state.useData.map((eachData, index) => {
          return (
            <div
              key={index}
              style={{ display: "inline-block", margin: "10px" }}
            >
              <CardComponent
                index={index}
                title={eachData.title}
                text={eachData.text}
                BtnOn={this.BtnOn}
                BtnOff={this.BtnOff}
                src={eachData.src}
                OnCount={eachData.OnCount}
                OffCount={eachData.OffCount}
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default BulbComponent;
