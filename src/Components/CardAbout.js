import Card from "react-bootstrap/Card";
import { Button} from 'react-bootstrap';
import images from './ImagenesAbout';
function CardAbout(props) {
    return (
    <div className="containerCard">
        
            <Card style={{ width: '18rem' }} className="cardAbout"> 
            <Card.Img variant="top" src={images[props.image]} style={{width: '18rem;'}} className="imgAbout"/>
                <Card.Body>
                    <Card.Title>{props.titulo}</Card.Title>
                    <Card.Text className="cardTexto">
                    <p>{props.texto}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        
    </div>);
}

export default CardAbout;