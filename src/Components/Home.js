import { Button} from 'react-bootstrap';
import gaviota from "../img/Gaviotas.png";
import sol from "../img/Sol.png";
import playa from "../img/Playa.png";

function Home() {
    return (
    <>

    <div className='SectionHome' id='home'>

    <img src={gaviota} className='Gaviota imagesHome'/>
    <img src={sol} className="Sol imagesHome"/>
    <img src={playa} className="Playa imagesHome"/>

    <div className='containerHome'>

   

    <div className='containerText'>
    <h1 className='Title'>Bienvenido Marinero</h1>
    <p className='TextHome'>La abundancia en flora y fauna que caracteriza a las zonas del país hacen de México un  país con una gran diversidad de especies</p>
    <p className='TextHome'>
    Sin embargo actualmente se ha acentuado la  alerta debido a la rápida extinción de algunas especies siendo una de las primeras a nivel mundial. 
    </p>
    <Button variant="outline-primary" className='btnVermas' href='#about'>Ver mas</Button>
    </div>
    
    

    </div>    

    </div>

    
    

    
    
    {/* <div className='containerHome'>
    <h1 className='Title'>Bienvenido Marinero</h1>
    <div className='containerText'>
    <p className='TextHome'>La abundancia en flora y fauna que caracteriza a las zonas del país hacen de México un  país con una gran diversidad de especies</p>
    <p className='TextHome'>
    Sin embargo actualmente se ha acentuado la  alerta debido a la rápida extinción de algunas especies siendo una de las primeras a nivel mundial. 
    </p>
    <Button variant="outline-primary" className='btnVermas'>Ver mas</Button>
    </div>
    </div> */}
    </> );
}

export default Home;