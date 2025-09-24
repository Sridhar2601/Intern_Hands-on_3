// import './CSS/Nav.css'
// export default function Nav()
// {
//     return(
//         <div className='main-one'>
//             <nav class="nb">
//                 <div> <img src="https://www.kreevtechsolutions.com/images/image-removebg-preview.png" height="60px"
//                     width="300px" alt="company logo"></img></div>
//                 <div class="n">
//                     <li> <a href="/">Home</a></li>
//                     <li> <a href="/About">About us</a></li>
//                     <li> <a href="/Service">Service</a></li>
//                     <li> <a href="/Product">Product</a></li>
//                     <li> <a href="/Contact">Contact us</a></li>
//                 </div>
//             </nav>
//         </div>
//     )
// }


import './CSS/Nav.css';
import { useState } from 'react';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="main-one">
            <nav className="nb d-flex flex-column flex-md-row justify-content-between align-items-center p-3">
                {/* Logo */}
                <div className="mb-2 mb-md-0 text-center text-md-start">
                    <img
                        src="https://www.kreevtechsolutions.com/images/image-removebg-preview.png"
                        height="60"
                        width="200"
                        alt="company logo"
                    />
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="d-md-none text-end">
                    <button
                        className="btn btn-outline-dark"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>

                {/* Navigation Links */}
                <ul
                    className={`n list-unstyled d-flex flex-column flex-md-row align-items-center gap-3 mb-0 ${
                        isOpen ? 'd-flex' : 'd-none d-md-flex'
                    }`}
                >
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About us</a></li>
                    <li><a href="/Service">Service</a></li>
                    <li><a href="/Product">Product</a></li>
                    <li><a href="/Contact">Contact us</a></li>
                </ul>
            </nav>
        </div>
    );
}
