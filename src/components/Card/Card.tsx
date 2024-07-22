import { Link } from "react-router-dom"
import { useAppDispatch } from "../../redux/hooks"
import { Car, deleteCar, editCar } from "../../redux/slices/carSlice"
import { ExternalLink, Trash2, Edit, ArrowLeft, PlusCircle } from 'react-feather';
import { useState } from "react";
import Modal from "../EditCar/EditCar";
import './Card.scss'

interface ICard {
    car: Car
}

const Card : React.FC<ICard> =  ({car}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch()

    const [make, setMake] = useState(car.make);
    const [model, setModel] = useState(car.model);
    const [year, setYear] = useState(car.year);
    const [engine, setEngine] = useState(car.engine);
    const [price, setPrice] = useState(car.price);
    const [color, setColor] = useState(car.color);
    const [transmission, setTransmission] = useState(car.transmission);
    const [fuelType, setFuelType] = useState(car.fuelType);
    const [mileage, setMileage] = useState(car.mileage);
    const [horsepower, setHorsepower] = useState(car.horsepower);
    const [owners, setOwners] = useState(car.owners);
    const [features, setFeatures] = useState<string[]>(car.features)

    const carx : Car = {
        id: car.id,
        make: make,
        model: model,
        year: year,
        engine: engine,
        price: price,
        color: color,
        features: features,
        mileage: mileage,
        fuelType: fuelType,
        transmission: transmission,
        horsepower: horsepower,
        owners: owners,
        image: car.image
    }

    function handleEditCar() {
        if (mileage < 0) { alert('Invalid Mileage'); return }
        if (horsepower < 0) { alert('Invalid Horsepower'); return }
        if (price < 0) { alert('Wow! So generous of you to give money on top of a car!'); return }
        if (year < 1800 && year > 2024) { alert('Double check the year'); return }
        if (owners < 0) { alert('Invalid Previous Owners'); return }
        if (make.length < 2 || model.length < 2 || engine.length < 2 || color.length < 2 || transmission.length < 2 || fuelType.length < 2) { alert("Don't leave the fields empty!"); return }
        dispatch(editCar(carx))
        alert('Car edited successfully!')
    }

    return (
        <div className="card">
            <img src={car.image} />
            <h2>{car.make} {car.model} {car.year} <Link to={`/car/${car.id}`}><ExternalLink size={16}/></Link></h2>
            <span>Odometer: {car.mileage}</span>
            <span>Price: {car.price}$</span>
            <div className="buttons">
                <button onClick={() => setIsOpen(true)}>Edit <Edit size={16}/></button>
                <button onClick={() => dispatch(deleteCar(car.id))}>Delete <Trash2 size={16}/></button>
            </div>
            <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
                <div className="editCar">
                <div className="editCar__field">
                    <span>Make: </span>
                    <input type="text" onChange={(e) => setMake(e.target.value)} defaultValue={car.make} placeholder='Make'/>
                </div>
                <div className="editCar__field">
                    <span>Model: </span>
                    <input type="text" onChange={(e) => setModel(e.target.value)} defaultValue={car.model} placeholder='Model'/>
                </div>
                <div className="editCar__field">
                    <span>Year: </span>
                    <input type="text" onChange={(e) => setYear(+e.target.value)} defaultValue={car.year} placeholder='Year'/>
                </div>
                <div className="editCar__field">
                    <span>Engine: </span>
                    <input type="text" onChange={(e) => setEngine(e.target.value)} defaultValue={car.engine} placeholder='Engine'/>
                </div>
                <div className="editCar__field">
                    <span>Price: </span>
                    <input type="text" onChange={(e) => setPrice(+e.target.value)} defaultValue={car.price} placeholder='Price'/>
                </div>
                <div className="editCar__field">
                    <span>Color: </span>
                    <input type="text" onChange={(e) => setColor(e.target.value)} defaultValue={car.color} placeholder='Color'/>
                </div>
                <div className="editCar__field">
                    <span>Odometer: </span>
                    <input type="text" onChange={(e) => setMileage(+e.target.value)} defaultValue={car.mileage} placeholder='Mileage'/>
                </div>
                <div className="editCar__field">
                    <span>Horsepower: </span>
                    <input type="text" onChange={(e) => setHorsepower(+e.target.value)} defaultValue={car.horsepower} placeholder='Horsepower'/>
                </div>
                <div className="editCar__field">
                    <span>Owners: </span>
                    <input type="text" onChange={(e) => setOwners(+e.target.value)} defaultValue={car.owners} placeholder='Previous owners count'/>
                </div>
                <div className="editCar__field">
                    <span>Transmission: </span>
                    <select onChange={(e) => setTransmission(e.target.value)} defaultValue={car.transmission}>
                        <option value="Automatic">Automatic</option>
                        <option value="CVT">CVT</option>
                        <option value="Manual">Manual</option>
                    </select>
                </div>
                <div className="editCar__field">
                    <span>Fuel Type: </span>
                    <select onChange={(e) => setFuelType(e.target.value)} defaultValue={car.fuelType}>
                        <option value="Gasoline">Gasoline</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Electric">Electric</option>
                    </select>
                </div>
                <div className="editCar__field">
                    <span>Features: </span>
                    <textarea onChange={(e) => setFeatures(e.target.value.split(','))} defaultValue={car.features.join(', ')} placeholder='Features (seperated by comma)'/>
                </div>
                <div className="editCar__buttons">
                    <button onClick={handleEditCar}><Edit size={18}/> Edit Car</button>
                </div>
            </div>
            </Modal>
        </div>
    )
}

export default Card