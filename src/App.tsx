import { useState } from 'react'
import './App.scss'
import { useGetCarsQuery } from './apis/carApi'
import Card from './components/Card/Card'
import { useAppSelector } from './redux/hooks'
import { Car, getCars } from './redux/slices/carSlice'
import { Link } from 'react-router-dom'
import { PlusCircle, XCircle } from 'react-feather'

function App() {
  useGetCarsQuery(undefined)
  const carsraw = useAppSelector(getCars)
  
  const makes = [...new Set(carsraw.map(car => car.make))]
  const years = [...new Set(carsraw.map(car => car.year))]
  const colors = [...new Set(carsraw.map(car => car.color))]
  const engines = [...new Set(carsraw.map(car => car.engine))]

  const [make, setMake] = useState('');
  const [year, setYear] = useState(0);
  const [color, setColor] = useState('');
  const [engine, setEngine] = useState('');
  
  function clearFilters() {
    setMake('')
    setYear(0)
    setColor('')
    setEngine('')
  }
  
  let cars : Car[] = carsraw
  
  if (make != '') { cars = cars.filter(car => car.make == make) }
  if (year != 0) { cars = cars.filter(car => car.year == year) }
  if (color != '') { cars = cars.filter(car => car.color == color) }
  if (engine != '') { cars = cars.filter(car => car.engine == engine) }

  return (
    <>
    <div className="header">
      <h1>TIME WASTER (CAR EDITION)</h1>
    </div>
    <div className="bottom">
      <div className="filters">
        <span className='filter'>
          <h2>Make</h2>
          <select onChange={(e) => {setMake(e.target.value)}}>
            <option disabled selected value='' style={{display: "none"}}>Select an option</option>
            {makes.map(make => (
              <option key={make} value={make}>{make}</option>
            ))}
          </select>
        </span>
        <span className='filter'>
          <h2>Year</h2>
          <select onChange={(e) => {setYear(+e.target.value)}}>
            <option disabled selected value='' style={{display: "none"}}>Select an option</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </span>
        <span className='filter'>
          <h2>Color</h2>
          <select onChange={(e) => {setColor(e.target.value)}}>
            <option disabled selected value='' style={{display: "none"}}>Select an option</option>
            {colors.map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </span>
        <span className='filter'>
          <h2>Engine</h2>
          <select onChange={(e) => {setEngine(e.target.value)}}>
            <option disabled selected value='' style={{display: "none"}}>Select an option</option>
            {engines.map(engine => (
              <option key={engine} value={engine}>{engine}</option>
            ))}
          </select>
        </span>
        <button onClick={clearFilters}><XCircle size={16}/> Clear Filters</button>
        <Link to={'/addcar'}><button><PlusCircle size={16}/> Add Car</button></Link>
      </div>
      <div className="cars">
        {cars.map(car => (
          <Card key={car.id} car={car}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
