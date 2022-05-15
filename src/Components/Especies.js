import Card from "react-bootstrap/Card";
import { Button} from 'react-bootstrap'
import imagenes from './Imagenes'
function Especies(props) {
    return (
    <div className="containerCard">
        
            <Card style={{ width: '18rem' }} className="cardEspecie"> 
            <Card.Img variant="top" src={imagenes[props.imgUrl]} style={{width: '18rem;', height:'12rem'}}/>
                <Card.Body>
                    <Card.Title>{props.nombreCientifico}</Card.Title>
                    <Card.Text className="cardTexto">
                    <p>Nombres comunes: {props.nombresComunes}</p>
                    <p>Familia: {props.familia}</p>
                    <p>Genero: {props.genero}</p>
                    <p>Especie: {props.especie}</p>
                    <p>Norma oficial Mexicana Nom-059: {props.norma}</p>
                    <p>Tipo de distribución: {props.distribucion}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        
    </div>);
}

export default Especies;