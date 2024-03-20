import { useEffect, useState } from 'react'
import Card from '../card/Card.tsx';
import Vector from "../../shared/vector.svg"
import "./Catalog.css"

const Catalog = () => {

    const [coffees, setCoffees] = useState([]);
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCoffees(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleShowAvailableOnly = () => {
        setShowAvailableOnly(true);
    };

    const handleShowAllProducts = () => {
        setShowAvailableOnly(false);
    };

    const filteredCoffees = showAvailableOnly ? coffees.filter(coffee => coffee.available) : coffees;


    return (
        <div className="catalog-container">
            <img className="vector-img" src={Vector} alt="" />
            <div className="catalog-header">
                <h1>Our Collection</h1>
                <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                <div className="catalog-buttons">
                    <button onClick={handleShowAllProducts}>All Products</button>
                    <button onClick={handleShowAvailableOnly}>Available Now</button>
                </div>

            </div>
            <div className="coffees-container">
                {filteredCoffees.map((coffee: Coffee) => (
                    <Card key={coffee.id} data={coffee} />
                ))}
            </div>


        </div>
    )
}

export default Catalog