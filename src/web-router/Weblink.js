import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Nav from "./Nav";
import Product from './Product';
import Service from './Service';
export default function Weblink(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={[<Nav/>,<Home/>]}></Route>
                <Route path="/About" element={[<Nav/>,<About/>]}></Route>
                <Route path="/Service" element={[<Nav/>,<Service/>]}></Route>
                <Route path="/Product" element={[<Nav/>,<Product/>]}></Route>
                <Route path="/Contact" element={[<Nav/>,<Contact/>]}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}