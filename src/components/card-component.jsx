import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent({src,alt,title,text,OnCount,OffCount,BtnOn,BtnOff,index}) {
  return (
    <Card style={{ width: '21rem', }}>
      <Card.Img variant="top" src={src} style={{height:"250px"}} alt={alt}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text>{text}</Card.Text>

        <Card.Text style={{display:'inline-block'}} >On Count: {OnCount}</Card.Text>
        <Button variant="primary" style={{margin:"10px"}} onClick={()=>BtnOn(index)}>On</Button>

        <Card.Text style={{display:'inline-block'}} >Off Count: {OffCount}</Card.Text>
        <Button variant="primary" onClick={()=>BtnOff(index)}>Off</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;