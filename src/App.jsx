import { Route, Routes } from "react-router-dom"
// import HomePage from './pages/HomePage'
import MoviesPage from "./pages/MoviesPage"
// import MoviesAndShows from "./pages/Movies&Shows"
import Shows from "./pages/Shows"
import Subscription from "./pages/Subscription"
import Support from "./pages/Support"
import NotFound from "./pages/NotFound"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './assets/fonts/Manrope/font.css'
import SignInPage from "./pages/SignInPage"
import HomePage from "./pages/home/HomePage"
import MoviesAndShows from "./pages/movies&shows/Movies&Shows"



function App() {

  return (
    <div className=" bg-primary font-manrope text-neutral">
    <Header/>
      <Routes>
        
        <Route path="/" exact element={ <HomePage/> } />
        <Route path="movies" element={ <MoviesAndShows/> } />
        <Route path="movie" element={ <MoviesPage/> } />
        <Route path="shows" element={ <Shows/> } />
        <Route path="subscription" element={ <Subscription/> } />
        <Route path="support" element={ <Support/> } />
        <Route path="signin" element={<SignInPage/>} /> 
        <Route path="*" element={ <NotFound/> } />
      </Routes>

      <Footer/>
    

    </div>
  )
}

export default App
