import { Link } from "react-router-dom"
import { useAppDispatch } from "../../redux/hooks"
import { Car, deleteCar } from "../../redux/slices/carSlice"
import './Card.scss'
import { ExternalLink, Trash2, Edit } from 'react-feather';

interface ICard {
    car: Car
}

const Card : React.FC<ICard> =  ({car}) => {
    const dispatch = useAppDispatch()

    return (
        <div className="card">
            <img src={car.image} />
            <h2>{car.make} {car.model} {car.year} <Link to={`/car/${car.id}`}><ExternalLink size={16}/></Link></h2>
            <span>Odometer: {car.mileage}</span>
            <span>Price: {car.price}$</span>
            <div className="buttons">
                <button onClick={() => console.log('not available yet')}>Edit <Edit size={16}/></button>
                <button onClick={() => dispatch(deleteCar(car.id))}>Delete <Trash2 size={16}/></button>
            </div>
        </div>
    )
}

export default Card