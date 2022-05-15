import CardAbout from "./CardAbout";

function About() {
    return ( 
        <div className="containerAbout" id="about">
        
        <h1 className="titleAbout">Acerca de nosotros</h1>

        <p className="textAbout">Somos un grupo de jovenes que busca crear un pensamiento de conciencia en las personas para promover el cuidado de la fauna marina. Persuadir a las personas para llevar sus actividades de una forma mas responsable.</p>
        <CardAbout titulo="Misión" texto= "Dar a conocer una de las consecuencias de los actos irresponsables que el ser humano realiza, dañando a la biodiversidad de nuestro pais que es tan importante para la vida." image ={0}></CardAbout>

        <CardAbout titulo="Visión" texto="Ser una empresa con presencia nacional que comparte informacion sobre la biodiversidad de Mexico." image={1}></CardAbout>

        <CardAbout titulo="Objetivo" texto="SConsientizar a las personas sobre el impacto que tienen sus acciones sobre el entorno." image={2}></CardAbout>
        </div>
     );
}

export default About;