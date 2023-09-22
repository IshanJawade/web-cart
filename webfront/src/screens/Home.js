import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {



    return (
      <>
        <div> <Navbar /> </div>
        <div><Carousel /> </div>
        <section>
          <div className='container m-2'>
          <h2 className="text-center mb-4">Popular in your area</h2>
            <div className="row">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </section>
        <div> <Footer /> </div>
      </>
    )
  }

