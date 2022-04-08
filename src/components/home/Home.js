import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "../product/Product";
import "./Home.css";
import IMG0 from "../../images/amazon0.jpg";
import IMG1 from "../../images/amazon1.jpg";
import IMG2 from "../../images/amazon2.jpg";
import IMG3 from "../../images/amazon3.jpg";
import IMG4 from "../../images/amazon4.jpg";
import img1 from "../../images/p1.jpg";
import img2 from "../../images/p2.jpg";
import img3 from "../../images/p3.jpg";
import img4 from "../../images/p4.jpg";
import img5 from "../../images/p5.jpg";
import img6 from "../../images/p6.jpg";
import img7 from "../../images/p7.jpg";
import img8 from "../../images/p8.jpg";
import img9 from "../../images/p9.jpg";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        
      <div className="row">
                        <div className="col-12">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={IMG0}
                                        alt="First slide"
                                    />
                                   
                               </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={IMG1}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={IMG2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={IMG3}
                                        alt="forth slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={IMG4}
                                        alt="fivth slide"
                                    />
                                </Carousel.Item>

                            </Carousel>
                        </div>
                        </div>

          <div className="row__container">
          <div className="home__row frist">
          <Product
            id="1"
            title="Chefman Multifunctional Digital Air Fryer+ Rotisserie, Dehydrator, Convection Oven, 17 Touch Screen Presets Fry, Roast, Dehydrate & Bake, Auto Shutoff, Accessories Included, XL 10L Family Size, Black"
            price={119.99}
            image={img1}
            rating={4}
          />
           <Product
            id="8"
            title="Neutrogena Makeup Remover Cleansing Face Wipes, Daily Cleansing Facial Towelettes to Remove Waterproof Makeup and Mascara, Alcohol-Free, Value Twin Pack, 25 Count, 2 Pack"
            price={17.98}
            image={img8}
            rating={4}
          />
          
        </div>
        
        <div className="home__row">
        <Product
            id="8"
            title="Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Backlit Gaming Mouse 3200 DPI for Windows PC Gamers (Black)"
            price={35.99}
            image={img7}
            rating={5}
          />
         
            <Product
            id="5"
            title="Pokemon Pikachu 8 Plush Officially Licensed and Stuffed Animal Material"
            price={21.95}
            image={img5}
            rating={4}
          />
            <Product
            id="3"
            title="Razer Blade 15 Gaming Laptop: NVIDIA GeForce RTX 3070 Ti - 12th Gen Intel 14-Core i7 CPU - 15.6” FHD 360Hz - 16GB DDR5 RAM - 1TB PCIe SSD - Windows 11 - CNC Aluminum - Chroma RGB - Thunderbolt 4"
            price={2999.99}
            image={img3}
            rating={5}
          />
           
         
        
        </div>
        <div className="home__row">
          
        <Product
            id="4"
            title="Apple iPhone 12 Pro Max, 128GB, Pacific Blue - Unlocked (Renewed Premium)"
            price={979.0}
            image={img4}
            rating={3}
          />
          <Product
            id="9"
            title="Tech-A Dancing Cactus Plush Baby Toy - Tiktok Singing Electronic Repeating Songs - Wriggle Dancing Cactus for Kids (Dancing Cactus Hawaii Style)"
            price={12.75}
            image={img9}
            rating={4}
          />
          <Product
            id="2"
            title="Bass GH Men's Pullover Crew Sweatshirt Volcom Insulate Pullover Fleece"
            price={26.98}
            image={img2}
            rating={4}
          />
          
        </div>
        


        <div className="home__row">
          <Product
            id="6"
            title="LG OLED C1 Series 65” Alexa Built-in 4k Smart TV (3840 x 2160), 120Hz Refresh Rate, AI-Powered 4K, Dolby Cinema, WiSA Ready, Gaming Mode (OLED65C1PUB, 2021)"
            price={1700.0}
            image={img6}
            rating={5}
          />
        </div>
          </div>




      </div>
    </div>
  );
}

export default Home;
