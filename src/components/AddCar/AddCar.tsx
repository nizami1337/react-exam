import { useState } from 'react'
import '../../App.scss'
import './AddCar.scss'
import { Car, addCar, getCars } from './../../redux/slices/carSlice'
import { ArrowLeft, PlusCircle } from 'react-feather'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks'

const AddCar = () => {
    const dispatch = useDispatch()

    const [make, setMake] = useState('BMW');
    const [model, setModel] = useState('M8 Competition');
    const [year, setYear] = useState(2020);
    const [engine, setEngine] = useState('2.0');
    const [price, setPrice] = useState(25000);
    const [color, setColor] = useState('Black');
    const [transmission, setTransmission] = useState('Automatic');
    const [fuelType, setFuelType] = useState('Gasoline');
    const [mileage, setMileage] = useState(0);
    const [horsepower, setHorsepower] = useState(400);
    const [owners, setOwners] = useState(0);
    const [features, setFeatures] = useState<string[]>(['Android Auto', 'Apple CarPlay'])

    const car : Car = {
        id: Math.round(Math.random()*10000000),
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
        image: 'https://fakeimg.pl/500x500/cccccc'
    }

    function handleAddCar() {
        if (mileage < 0) { alert('Invalid Mileage'); return }
        if (horsepower < 0) { alert('Invalid Horsepower'); return }
        if (price < 0) { alert('Wow! So generous of you to give money on top of a car!'); return }
        if (year < 1800 && year > 2024) { alert('Double check the year'); return }
        if (owners < 0) { alert('Invalid Previous Owners'); return }
        if (make.length < 2 || model.length < 2 || engine.length < 2 || color.length < 2 || transmission.length < 2 || fuelType.length < 2) { alert("Don't leave the fields empty!"); return }
        dispatch(addCar(car))
        alert('Car added successfully!')
    }
    // const carsraw = useAppSelector(getCars)
    // console.log(carsraw)


    return (
        <>
        <div className="header">
            <h1>TIME WASTER (CAR EDITION)</h1>
        </div>
        <div className="addCar">
            <div className="addCar__field">
                <span>Make: </span>
                <input type="text" onChange={(e) => setMake(e.target.value)} defaultValue={'BMW'} placeholder='Make'/>
            </div>
            <div className="addCar__field">
                <span>Model: </span>
                <input type="text" onChange={(e) => setModel(e.target.value)} defaultValue={'M8 Competition'} placeholder='Model'/>
            </div>
            <div className="addCar__field">
                <span>Year: </span>
                <input type="text" onChange={(e) => setYear(+e.target.value)} defaultValue={2020} placeholder='Year'/>
            </div>
            <div className="addCar__field">
                <span>Engine: </span>
                <input type="text" onChange={(e) => setEngine(e.target.value)} defaultValue={'2.0 v4'} placeholder='Engine'/>
            </div>
            <div className="addCar__field">
                <span>Price: </span>
                <input type="text" onChange={(e) => setPrice(+e.target.value)} defaultValue={25000} placeholder='Price'/>
            </div>
            <div className="addCar__field">
                <span>Color: </span>
                <input type="text" onChange={(e) => setColor(e.target.value)} defaultValue={'Black'} placeholder='Color'/>
            </div>
            <div className="addCar__field">
                <span>Odometer: </span>
                <input type="text" onChange={(e) => setMileage(+e.target.value)} defaultValue={0} placeholder='Mileage'/>
            </div>
            <div className="addCar__field">
                <span>Horsepower: </span>
                <input type="text" onChange={(e) => setHorsepower(+e.target.value)} defaultValue={400} placeholder='Horsepower'/>
            </div>
            <div className="addCar__field">
                <span>Owners: </span>
                <input type="text" onChange={(e) => setOwners(+e.target.value)} defaultValue={0} placeholder='Previous owners count'/>
            </div>
            <div className="addCar__field">
                <span>Transmission: </span>
                <select onChange={(e) => setTransmission(e.target.value)}>
                    <option value="Automatic">Automatic</option>
                    <option value="CVT">CVT</option>
                    <option value="Manual">Manual</option>
                </select>
            </div>
            <div className="addCar__field">
                <span>Fuel Type: </span>
                <select onChange={(e) => setFuelType(e.target.value)}>
                    <option value="Gasoline">Gasoline</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                </select>
            </div>
            <div className="addCar__field">
                <span>Features: </span>
                <textarea onChange={(e) => setFeatures(e.target.value.split(','))} defaultValue={'Android Auto,Apple Carplay'} placeholder='Features (seperated by comma)'/>
            </div>
            <div className="addCar__buttons">
                <Link to={'/'}><button><ArrowLeft size={18}/> Go Back</button></Link>
                <button onClick={handleAddCar}><PlusCircle size={18}/> Add Car</button>
            </div>
        </div>
        </>
    )
}

export default AddCar