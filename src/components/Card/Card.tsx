import { Car } from "../../redux/slices/carSlice"
import './Card.scss'

interface ICard {
    car: Car
}

const Card : React.FC<ICard> =  ({car}) => {
    return (
        <div className="card">
            <img src={car.image} />
            <h2>{car.make} {car.model} {car.year}</h2>
            <span>Odometer: {car.mileage}</span>
            <span>Price: {car.price}$</span>
        </div>
    )
}

export default Card