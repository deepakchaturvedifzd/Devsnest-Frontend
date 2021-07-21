import { Carousel } from "react-bootstrap"

const MyCarousel = ()=>{
    return <>
    <div className="carousel">
        <Carousel fade>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100 img-fluid"
            style={{backgroundImage:'url(../../imgs/1.jpeg)',backgroundPosition:'center',backgroundSize:'cover'}}
            alt=""
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
           <img
            className="d-block w-100 img-fluid"
            style={{backgroundImage:'url(../../imgs/4.png)',backgroundPosition:'center',backgroundSize:'cover'}}
            alt=""
            />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
           <img
            className="d-block w-100 img-fluid"
            style={{backgroundImage:'url(../../imgs/3.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}
            alt=""
            />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
    </>
}

export default MyCarousel