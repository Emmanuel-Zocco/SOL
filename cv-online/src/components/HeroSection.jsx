import { Container } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const HeroSection = () => {
    return (
      <Container
        sx={{
          height: '400px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          interval={5000} // Intervalo de 5 segundos
        >
          <div>
            <img src="/images/mushi.jpg" alt="Imagen 1" />
            <p className="legend">Imagen 1</p>
          </div>
          
          <div>
           
            <img src="https://tse3.mm.bing.net/th?id=OIP.zgGkpzobdQ41zGH_vgFvyQHaEK&pid=Api&P=0&h=180" alt="Imagen 2" />
            <p className="legend">Imagen 2</p>
          </div>
          <div>
           
            <img src="https://tse3.mm.bing.net/th?id=OIP.Bwf9HfnebbUgCbT7g1bWHAHaEK&pid=Api&P=0&h=180" alt="Imagen 3" />
            <p className="legend">Imagen 2</p>
          </div>

          <div>
            <img src="https://tse3.mm.bing.net/th?id=OIP.16QZLW33wV7GqsIO6WZTmgHaEo&pid=Api&P=0&h=180" alt="Imagen 4" />
            <p className="legend">Imagen 2</p>
          </div>
        
        </Carousel>
      
      </Container>
    );
  };
  
  export default HeroSection;
  