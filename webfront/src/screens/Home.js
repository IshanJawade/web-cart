import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slideshow from "../components/Slideshow";
import img1 from '/Users/ishan/Projects/web-cart/webfront/src/Images/img1.webp';
import img2 from '/Users/ishan/Projects/web-cart/webfront/src/Images/img2.webp';
import img3 from '/Users/ishan/Projects/web-cart/webfront/src/Images/img3.webp';
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
  return (
    <> 
     <div>
        {/* Hero section */}
        <section className="hero bg-primary text-white text-center py-5">
            <div className="container">
            <h1>Welcome to Puppy's Art Gallery</h1>
            <p>Discover exquisite artworks and paintings</p>
            </div>
        </section>

        {/* Featured artworks section */}
        <section className="py-5">
            <div className="container">
            <h2 className="text-center mb-4">Featured Artworks</h2>
            <div className="row">

                {/* Sample artwork cards  - Cards imported from Components*/}
                
                <Card CardTitle = "Product 1" 
                CardText = "Kucch Bhi"
                ImagePath = {img1}
                />
               
                <Card CardTitle = "Product 2" 
                CardText = "Kucch Bhi"
                ImagePath = {img2}
                />

                <Card CardTitle = "Product 3" 
                CardText = "Kucch Bhi"
                ImagePath = {img3}
                />
                
            </div>
            </div>
        </section>
        <section className="py-5">
            <div className="container">
            <h2 className="text-center mb-4">Read Blogs</h2>
            <div className="row">
                {/* Sample artwork cards */}
                
                <Card CardTitle = "Blogpost 1" 
                CardText = "Kucch Bhi"
                />
               
                <Card CardTitle = "Blogpost 2" 
                CardText = "Kucch Bhi"
                />

                <Card CardTitle = "Blogpost 3" 
                CardText = "Kucch Bhi"
                />
                
            </div>
            </div>
        </section>
        </div>
    </>
  );
}

export default Home;

