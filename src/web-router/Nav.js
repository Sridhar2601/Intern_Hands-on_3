import './CSS/Nav.css'
export default function Nav()
{
    return(
        <div className='main-one'>
            <nav class="nb">
                <div> <img src="https://www.kreevtechsolutions.com/images/image-removebg-preview.png" height="60px"
                    width="300px" alt="company logo"></img></div>
                <div class="n">
                    <li> <a href="/">Home</a></li>
                    <li> <a href="/About">About us</a></li>
                    <li> <a href="/Service">Service</a></li>
                    <li> <a href="/Product">Product</a></li>
                    <li> <a href="/Contact">Contact us</a></li>
                </div>
            </nav>
        </div>
    )
}