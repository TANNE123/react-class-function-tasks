import "./card-component.css";
import DnaComponent from "./dna-spnner";

const CustomCard = ({ source, alt, title, text, IdIndex, RemoveCard }) => {
  return (
    <div className="Main-cord">
      <div>
        <img src={source} alt={alt} />
      </div>
      <div>
        <DnaComponent />
      </div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <h3>{text}</h3>
      </div>
      <button
        style={{
          background: "#0d7eee",
          border: "none",
          borderRadius: "5px",
          color: "#fff",
          fontSize:"20px"
        }}
        onClick={() => RemoveCard(IdIndex)}
      >
        Remove
      </button>
    </div>
  );
};

export default CustomCard;
