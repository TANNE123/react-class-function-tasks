import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import data from "./card-data";

function CardComponent() {
  return data.map((result,index) => {
    return (
      <Card key={index}
        style={{
          width: "18rem",
          height: "auto",
          display: "inline-block",
          verticalAlign: "top",
          textAlign: "center",
          margin: "20px 6px",
        }}
      >
        <Card.Img
          variant="top"
          src={result.image}
          style={{ width: "150px", height: "150px" }}
        />

        <Card.Body>
          <Card.Title>{result.title}</Card.Title>
          <Card.Text>{result.text}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  });
}

export default CardComponent;
