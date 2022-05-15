import Especies from "./Especies";
import ajoloe from '../img/Ajolote.png'
import datosJson from "../DatosJson/datos.json";
import Form from 'react-bootstrap/Form';
import { Button, FormControl} from 'react-bootstrap'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";



function Listado() {

    const data = datosJson;
    const nombreCient= data["Nombre cientifico"];
    const nombreComun = data["Nombres comunes"];
    const fam = data.familia;
    const gen = data.genero;
    const norm = data["Norma Oficial Mexicana NOM-059"];
    const dist = data["Tipo distribucion"];
    const esp = data.especie;
    const bucle = [];

    const contador = Object.values(nombreCient).length;
    for (let index = 0; index < contador; index++) {
        bucle.push(index);
    }

    const [state, setState] = useState('');
    const [index, setIndex] = useState('');

    const handleInputChange = (event) =>{
        if(event.target.value == ''){
            setIndex('');
        }
        setState(event.target.value)
    }

    const enviarNombre = (event) =>{
        event.preventDefault();
        const nombre = Object.values(nombreCient);
        if(nombre.includes(state)){
            const indice = (element) => element == state;
            setIndex(nombre.findIndex(indice));
            // console.log(nombre.findIndex(indice));
            console.log(index);
        }
        console.log(nombre.includes(state));
        console.log(state);
    }

    return (     
    
    <div className="containerListado" id="especies">
            
            <h1 className="titleEspecies">Especies en peligro de extincion</h1>
            <div className="ajolote">
            <img src={ajoloe} className="logoEspecies"></img>
            </div>
            <Form onSubmit={enviarNombre} className="d-flex searchForm">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={handleInputChange}
                        
                    />
                    {console.log(state)}
                    <Button type="submit" variant="outline-success" className="btnSearch" >Search</Button>
                   
            </Form>
            <Row xs={1} md={1} className="rowCard">
                <Col>
                {index == '' && bucle.map(i =>
                    <Col>
                    <Especies nombreCientifico={nombreCient[i]} nombresComunes={nombreComun[i]} familia={fam[i]} genero={gen[i]} norma={norm[i]} distribucion={dist[i]} especie={esp[i]} imgUrl={i}></Especies>    
                    </Col>
                )}
                
                {index != '' && (<Col className="colCard">
                <Especies nombreCientifico={nombreCient[index]} nombresComunes={nombreComun[index]} familia={fam[index]} genero={gen[index]} norma={norm[index]} distribucion={dist[index]} especie={esp[index]} imgUrl={index}></Especies>
                </Col>)
                }


                {/* {bucle.map(i =>
                    <Especies nombreCientifico={nombreCient[i]} nombresComunes={nombreComun[i]} familia={fam[i]} genero={gen[i]} norma={norm[i]} distribucion={dist[i]} especie={esp[i]} imgUrl={i}></Especies>    
                )} */}
                </Col>
            </Row>
    </div>

    // <div>   
    //   <Especies nombreCientifico={nombreCient[0]} nombresComunes={nombreCient[0]} familia={fam[0]} genero={gen[0]} norma={norm[0]} distribucion={dist[0]} especie={esp[0]}></Especies>    
    // </div>
    );
}

export default Listado;