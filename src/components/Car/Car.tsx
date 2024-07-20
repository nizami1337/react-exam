import { useParams } from 'react-router-dom'
import { getCar } from '../../redux/slices/carSlice'
import { useGetCarQuery } from '../../apis/carApi'
import { useAppSelector } from '../../redux/hooks'
import '../../App.scss'
import './Car.scss'

const CarMenu = () => {
    const { carId } = useParams()
    useGetCarQuery(carId)
    const car = useAppSelector(getCar)

    // console.log(car)

    return (
        <>
        <div className="header">
            <h1>TIME WASTER (CAR EDITION)</h1>
        </div>
        <div className="carmenu">
            <div className="carmenu__left">
                <img src={car.image}/>
            </div>
            <div className="carmenu__right">
                <h2>{car.make} {car.model}</h2>
                <span>Release Year: {car.year}</span>
                <span>Engine: {car.engine} ({car.horsepower} hp)</span>
                <span>Fuel type: {car.fuelType}</span>
                <span>Transmission: {car.transmission}</span>
                <span>Odometer: {car.mileage} miles</span>
                <span>Previous owners count: {car.owners}</span>
                <span>Features: {car.features.join(", ")}</span>
            </div>
        </div>
        </>
    )
}

export default CarMenu