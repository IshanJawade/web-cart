import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  const [search, setSearch] = useState('');
  const [artItem, setArtItem] = useState([]);
  const [category, setCategory] = useState([]);

  // Load data from Backend to Frontend
  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/items', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    response = await response.json();

    setArtItem(response[0]);
    setCategory(response[1]);
  }

  // When to load data from Backend to Frontend
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div> < Navbar /> </div>
      <div>
        <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
              <div className="form-inline d-flex">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onchange={(e) => { setSearch(e.target.value) }} />
              </div>
            </div>
            <div className="carousel-item active">
              <img className="d-block w-100" style={{ filter: "brightness(60%)" }} src="https://source.unsplash.com/random/1920x800/?Art" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" style={{ filter: "brightness(60%)" }} src="https://source.unsplash.com/random/1920x800/?burger" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" style={{ filter: "brightness(60%)" }} src="https://source.unsplash.com/random/1920x800/?noodles" alt="Third slide" />
            </div>
          </div>

          <Link className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only"></span>
          </Link>
          <Link className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only"></span>
          </Link>
        </div>
      </div>
      <div className='container'>
        {
          category == []
            ? <div> No categories found ! </div>
            :
            category.map((data) => {
              return (
                <div className='row mb-3'>
                  <div key={data._id} className='fs-3 m-3'> {data.CategoryName} </div>
                  <hr />
                  {
                    artItem == [] ? <div> No art items found</div>
                      : artItem.filter((items) => (items.CategoryName == data.CategoryName) && (items.name.toLowerCase().includes(search.toLocaleLowerCase())))
                        .map(filteredItems => {
                          return (
                            <div key={ filteredItems._id } className='col-12 col-md-6 col-lg-3'>
                              <Card itemName={ filteredItems.name }
                                    itemDec={ filteredItems.description }
                                    itemImg={ filteredItems.img }
                                    itemPrice={ filteredItems.options[1] }
                              />
                            </div>
                          )
                        })
                  }
                </div>
              )
            })
        }
      </div>
      <div> <Footer /> </div>
    </div>
  )
}

