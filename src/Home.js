import React from 'react';
import './Home.css';
import Slider from './Slider/Slider';
import SlidesData from './Slider/SlideData';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <Slider images={SlidesData} />
            <div className="home__row">
                <Product
                    id={1}
                    title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)"
                    price={149.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SX679_.jpg" 
                />
                <Product
                    id={2}
                    title="Amazon Basics USB 2.0 to 10/100 Ethernet Port LAN Internet Network Adapter"
                    price={29.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61-FY5Y9xCL._AC_SX679_.jpg" 
                />
            </div>
            <div className="home__row">
                <Product
                    id={3}
                    title="Dell XPS 9365 2-in-1 13.3in FHD Touchscreen Laptop PC - Intel Core i7-7Y75 1.3GHz, 16GB, 512GB SSD, Bluetooth, Webcam, Windows 10 Pro - Silver (Renewed)"
                    price={749.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/718XgRId5NL._AC_SL1500_.jpg" 
                />
                <Product
                    id={4}
                    title="JUST MY SIZE Women's Plus Size Long Sleeve Tee"
                    price={9.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81fZ8y211GL._AC_UY500_.jpg" 
                />
                <Product
                    id={5}
                    title="Nike Women's Revolution 5 Running Shoe "
                    price={48.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71qn627N96L._AC_UX500_.jpg" 
                />
            </div>
            <div className="home__row">
                <Product
                    id={6}
                    title="LG 38WN75C-B 38-Inch Class 21:9 Curved UltraWide QHD+ (3840 x 1600) IPS Display with HDR 10 and Tilt/Height Adjustable Stand, Black"
                    price={509.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81yKnnBfM-L._AC_SL1500_.jpg" 
                />  
            </div>
        </div>
    )
}

export default Home;
/**
 * {
 * 
 * "HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA) "
 * "$149.99"
 * 5
 * }
 * "https://images-na.ssl-images-amazon.com/images/I/61-FY5Y9xCL._AC_SX679_.jpg"
 * "Amazon Basics USB 2.0 to 10/100 Ethernet Port LAN Internet Network Adapter "
 * 
 * 
 * {
 * "https://images-na.ssl-images-amazon.com/images/I/718XgRId5NL._AC_SL1500_.jpg"
 * "Dell XPS 9365 2-in-1 13.3in FHD Touchscreen Laptop PC - Intel Core i7-7Y75 1.3GHz, 16GB, 512GB SSD, Bluetooth, Webcam, Windows 10 Pro - Silver (Renewed)"
 * 
 * }
 * 
 * {
 * "https://images-na.ssl-images-amazon.com/images/I/81fZ8y211GL._AC_UY500_.jpg"
 * "JUST MY SIZE Women's Plus Size Long Sleeve Tee"
 *  $6.99 - $17.95 
 * }
 * 
 * {
 * "https://images-na.ssl-images-amazon.com/images/I/71qn627N96L._AC_UX500_.jpg"}
 * Nike Women's Revolution 5 Running Shoe 
 */

