import { configureStore } from '@reduxjs/toolkit'
import { carApi } from '../apis/carApi'
import carsReducer from './slices/carSlice'

export const store = configureStore({
  reducer: {
    [carApi.reducerPath]: carApi.reducer,
    cars: carsReducer
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(carApi.middleware)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch