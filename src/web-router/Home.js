export default function Home() {
    return (
        <div>
            <div class="bg-primary text-white py-5">
                <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                    <div>
                        <h1 class="ms-5 ps-5" style={{fontSize:'45px'}}>We provide <br /><u class="text-info">solutions</u><br />for your business
                            &<br />education!</h1>
                        <div class="d-flex gap-3 mt-3 ms-5 ps-5">
                            <button class="btn btn-info text-white">Get started</button>
                            <button class="btn btn-outline-light">Our services</button>
                        </div>
                    </div>
                    <img src="https://www.kreevtechsolutions.com/images/intro-img.svg" class="img-fluid mt-4 mt-md-0 me-2"
                        alt="Illustration" style={{maxWidth:"550px",height:'500px'}}></img>
                </div>
            </div>
        </div>
    )
}