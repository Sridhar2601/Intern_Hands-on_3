// export default function Home() {
//     return (
//         <div>
//             <div class="bg-primary text-white py-5">
//                 <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
//                     <div>
//                         <h1 class="ms-5 ps-5" style={{fontSize:'45px'}}>We provide <br /><u class="text-info">solutions</u><br />for your business
//                             &<br />education!</h1>
//                         <div class="d-flex gap-3 mt-3 ms-5 ps-5">
//                             <button class="btn btn-info text-white">Get started</button>
//                             <button class="btn btn-outline-light">Our services</button>
//                         </div>
//                     </div>
//                     <img src="https://www.kreevtechsolutions.com/images/intro-img.svg" class="img-fluid mt-4 mt-md-0 me-2"
//                         alt="Illustration" style={{maxWidth:"550px",height:'500px'}}></img>
//                 </div>
//             </div>
//         </div>
//     )
// }


export default function Home() {
    return (
        <div>
            <div className="bg-primary text-white py-5">
                <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                    {/* Text Section */}
                    <div className="text-center text-md-start px-3">
                        <h1 style={{ fontSize: '2.5rem' }}>
                            We provide <br />
                            <u className="text-info">solutions</u><br />
                            for your business &<br />education!
                        </h1>
                        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mt-3">
                            <button className="btn btn-info text-white">Get started</button>
                            <button className="btn btn-outline-light">Our services</button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="d-flex justify-content-center mt-4 mt-md-0">
                        <img
                            src="https://www.kreevtechsolutions.com/images/intro-img.svg"
                            className="img-fluid"
                            alt="Illustration"
                            style={{ maxWidth: "100%", height: 'auto', maxHeight: '500px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
