import Star1 from "../../shared/Star_fill.svg"
import Star2 from "../../shared/Star.svg"
import "./Card.css"

const Card = ({ data }: { data: Coffee }) => {
    if (!data) {
        return null;
    }

    const { id, name, image, price, rating, votes, popular, available } = data;

    return (
        <div className="card-container">
            <img className="coffee-img" src={image} alt={name} />
            {popular && <div className="popularity">Popular</div>}
            <p className="coffee-type">{name}</p>
            <div className="stars-container">
                <img className="star" src={votes === 0 ? Star2 : Star1} alt="" />
                <p className="stars">{rating}</p>
                {votes != 0 ? <p className="votes">({votes} votes)</p> : <p className="votes">No votes</p>}
            </div>
            <div className="price">{price}</div>
            {available || <p className="sold-out">Sold Out</p>}
        </div>
    );
};

export default Card;