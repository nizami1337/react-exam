import { createSlice } from '@reduxjs/toolkit'
import { carApi } from '../../apis/carApi'
import { RootState } from '../store';

export interface Car {
    id: number;
    make: string;
    model: string;
    year: number;
    color: string;
    mileage: number;
    price: number;
    fuelType: string;
    transmission: string;
    engine: string;
    horsepower: number;
    features: string[];
    owners: number;
    image: string;
  }

interface CarsState {
  cars: Car[],
  car: Car
}

const initialState: CarsState = {
  cars: [],
  car: {
    id: 0,
    make: '',
    model: '',
    year: 2024,
    color: '',
    mileage: 0,
    price: 0,
    fuelType: '',
    transmission: '',
    engine: '',
    horsepower: 0,
    features: [],
    owners: 0,
    image: ''
  }
}

export const carSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(carApi.endpoints.getCars.matchFulfilled, (state, payload) => {state.cars = payload.payload})
    builder.addMatcher(carApi.endpoints.getCar.matchFulfilled, (state, payload) => {state.car = payload.payload})
  },
})

export const { /* increment, decrement, incrementByAmount */ } = carSlice.actions
export const getCars = (state: RootState) => state.cars.cars
export const getCar = (state: RootState) => state.cars.car
export default carSlice.reducer