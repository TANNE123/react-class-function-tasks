import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function AddCardComponent({ title, text, image, id, removeCard}) {
  return (
    <Card
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
        src={image}
        style={{ width: "150px", height: "150px" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" onClick={() => removeCard(id)}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
}

export default AddCardComponent;
