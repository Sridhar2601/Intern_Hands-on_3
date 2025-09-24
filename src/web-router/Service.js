// export default function Service() {
//     return (
//         <div>
//             <div id="service">
//                 <div class="container">
//                     <center className="bg-info p-3">
//                         <h2>Our Services</h2>
//                         <p class="text-muted" style={{ fontSize: 'xx-large' }}>Software Development Courses
//                         </p>
//                     </center>
//                     <div class="row mt-5">
//                         <div class="col-md-3 col-lg-4 mb-4">
//                             <div class="card" style={{ width: '18rem' }}>
//                                 <img src="https://www.kreevtechsolutions.com/images/KT_1.jpg" class="card-img-top" alt=""
//                                     height="200px"></img>
//                                 <div class="card-body">
//                                     <h5 class="card-title">Web Designing</h5>
//                                     <p class="card-text" style={{ textAlign: 'justify' }}>The process of creating and building
//                                         websites that are visually
//                                         appealing, user-friendly, and functional. It involves a combination of technical and
//                                         creative skills to design and develop websites.</p>
//                                     <center>
//                                         <a href="#" class="btn btn-primary">Get started</a>
//                                     </center>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-md-3 col-lg-4 mb-4" data-aos="fade-up-right">
//                             <div class="card" style={{ width: '18rem' }}>
//                                 <img src="https://www.kreevtechsolutions.com/images/KT_2.jpg" class="card-img-top" alt="..."
//                                     height="200px"></img>
//                                 <div class="card-body">
//                                     <h5 class="card-title">Web Development</h5>
//                                     <p class="card-text" style={{ textAlign: 'justify' }}>Web development is the process of building
//                                         and maintaining web
//                                         applications. It involves various technologies, programming languages, and tools.</p>
//                                     <br />
//                                     <center>
//                                         <a href="#" class="btn btn-primary">Get started</a>
//                                     </center>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-md-3 col-lg-4 mb-4" data-aos="fade-up-right">
//                             <div class="card" style={{ width: '18rem' }}>
//                                 <img src="https://www.kreevtechsolutions.com/images/KT_3.avif" class="card-img-top" alt="..."
//                                     height="200px"></img>
//                                 <div class="card-body">
//                                     <h5 class="card-title">Python Programming</h5>
//                                     <p class="card-text" style={{ textAlign: 'justify' }}>Python is a high-level programming
//                                         language that is widely used for
//                                         various purposes such as web development, scientific computing, data analysis,
//                                         artificial intelligence, and more.</p>
//                                     <center>
//                                         <a href="#" class="btn btn-primary">Get started</a>
//                                     </center>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="row mt-5">
//                         <div class="col-md-3 col-lg-4 mb-4" data-aos="fade-up-left">
//                             <div class="card" style={{ width: '18rem' }}>
//                                 <img src="https://www.kreevtechsolutions.com/images/KT_4.webp" class="card-img-top" alt="..."
//                                     height="200px"></img>
//                                 <div class="card-body">
//                                     <h5 class="card-title">Data Science & Machine Learning</h5>
//                                     <p class="card-text" style={{ textAlign: 'justify' }}>Data science leverages machine learning, a
//                                         subset of artificial
//                                         intelligence, to extract insights and knowledge from structured and unstructured data.
//                                     </p>
//                                     <center>
//                                         <a href="#" class="btn btn-primary">Get started</a>
//                                     </center>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-md-3 col-lg-4 mb-4" data-aos="fade-up-left">
//                             <div class="card" style={{ width: '18rem' }}>
//                                 <img src="https://www.kreevtechsolutions.com/images/KT_5.jpg" class="card-img-top" alt="..."
//                                     height="200px"></img>
//                                 <div class="card-body">
//                                     <h5 class="card-title">Java Programming</h5>
//                                     <p class="card-text" style={{ textAlign: 'justify' }}>Java is a high-level, object-oriented
//                                         programming language and platform
//                                         that enables developers to create robust, scalable, and secure applications for a wide
//                                         range of industries and uses.</p>
//                                     <center>
//                                         <a href="#" class="btn btn-primary">Get started</a>
//                                     </center>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-md-3 col-lg-4 mb-4" data-aos="fade-up-left">
//                             <div class="card" style={{ width: '18rem' }}>
//                                 <img src="https://www.kreevtechsolutions.com/images/KT_6" class="card-img-top" alt="..."
//                                     height="200px"></img>
//                                 <div class="card-body">
//                                     <h5 class="card-title">Flutter Development</h5>
//                                     <p class="card-text" style={{ textAlign: 'justify' }}>Transform your mobile strategy with
//                                         Flutter's fast, secure, and
//                                         scalable solutions. Build stunning, natively compiled applications for mobile, web, and
//                                         desktop with Flutter's powerful.</p>
//                                     <center>
//                                         <a href="#" class="btn btn-primary">Get started</a>
//                                     </center>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


export default function Service() {
    return (
        <div>
            <div id="service">
                <div className="container">
                    {/* Heading */}
                    <div className="bg-info text-center p-3">
                        <h2>Our Services</h2>
                        <p className="text-muted" style={{ fontSize: '1.5rem' }}>
                            Software Development Courses
                        </p>
                    </div>

                    {/* Services Row */}
                    <div className="row mt-5 g-4">
                        {/* Card 1 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card w-100 h-100">
                                <img
                                    src="https://www.kreevtechsolutions.com/images/KT_1.jpg"
                                    className="card-img-top"
                                    alt="Web Designing"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Web Designing</h5>
                                    <p className="card-text text-justify">
                                        The process of creating and building websites that are visually
                                        appealing, user-friendly, and functional. It involves a combination
                                        of technical and creative skills to design and develop websites.
                                    </p>
                                    <div className="mt-auto text-center">
                                        <a href="#" className="btn btn-primary">Get started</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card w-100 h-100">
                                <img
                                    src="https://www.kreevtechsolutions.com/images/KT_2.jpg"
                                    className="card-img-top"
                                    alt="Web Development"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Web Development</h5>
                                    <p className="card-text text-justify">
                                        Web development is the process of building and maintaining web
                                        applications. It involves various technologies, programming languages,
                                        and tools.
                                    </p>
                                    <div className="mt-auto text-center">
                                        <a href="#" className="btn btn-primary">Get started</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card w-100 h-100">
                                <img
                                    src="https://www.kreevtechsolutions.com/images/KT_3.avif"
                                    className="card-img-top"
                                    alt="Python Programming"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Python Programming</h5>
                                    <p className="card-text text-justify">
                                        Python is a high-level programming language that is widely used for
                                        web development, scientific computing, data analysis, artificial
                                        intelligence, and more.
                                    </p>
                                    <div className="mt-auto text-center">
                                        <a href="#" className="btn btn-primary">Get started</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card w-100 h-100">
                                <img
                                    src="https://www.kreevtechsolutions.com/images/KT_4.webp"
                                    className="card-img-top"
                                    alt="Data Science & ML"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Data Science & Machine Learning</h5>
                                    <p className="card-text text-justify">
                                        Data science leverages machine learning, a subset of artificial
                                        intelligence, to extract insights and knowledge from structured and
                                        unstructured data.
                                    </p>
                                    <div className="mt-auto text-center">
                                        <a href="#" className="btn btn-primary">Get started</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card w-100 h-100">
                                <img
                                    src="https://www.kreevtechsolutions.com/images/KT_5.jpg"
                                    className="card-img-top"
                                    alt="Java Programming"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Java Programming</h5>
                                    <p className="card-text text-justify">
                                        Java is a high-level, object-oriented programming language and platform
                                        that enables developers to create robust, scalable, and secure
                                        applications for a wide range of industries and uses.
                                    </p>
                                    <div className="mt-auto text-center">
                                        <a href="#" className="btn btn-primary">Get started</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card w-100 h-100">
                                <img
                                    src="https://www.kreevtechsolutions.com/images/KT_6"
                                    className="card-img-top"
                                    alt="Flutter Development"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Flutter Development</h5>
                                    <p className="card-text text-justify">
                                        Transform your mobile strategy with Flutter's fast, secure, and scalable solutions.
                                        Build stunning, natively compiled applications for mobile, web, and desktop.
                                    </p>
                                    <div className="mt-auto text-center">
                                        <a href="#" className="btn btn-primary">Get started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* End of Row */}
                </div> {/* End of Container */}
            </div>
        </div>
    );
}
