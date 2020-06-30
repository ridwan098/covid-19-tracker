import React from 'react';
import KoFi from './Kofi/KoFi';



const Footer = () => {
    return (
        <div>
            {/* <!-- Footer--> */}
            <footer className="footer text-center cent" id="location" style={{ 'margin-top': '20' }}>
                <div className=" container">
                    <div className="row">
                        {/* <!-- Footer Location--> */}
                        <div className="col-lg-3 mb-4 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Github Repo</h4>
                            <p className="lead mb-0">Checkout on <a target="_blank" rel="noopener noreferrer" href="https://github.com/ridwan098/covid-19-tracker"
                                style={{ 'text-decoration': 'none' }}>Github</a> <br />
                            </p>
                        </div>


                        {/* <!-- Footer Social Icons--> */}
                        <div className="col-lg-3 mb-4 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Around the Web</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="mailto:ridwanishola97@gmail.com" title="Email me"><i
                                className="fab fa-fw  fas fa-envelope-open-text"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/ridwan098" target="_blank"
                                rel="noopener noreferrer" title="visit my Github"><i className="fab fa-fw fa-github"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/ridwan-ishola-117033189/"
                                target="_blank" rel="noopener noreferrer" title="go to my linkedIn"><i className="fab fa-fw fa-linkedin-in"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://www.freecodecamp.org/ridwan098" target="_blank"
                                title="see my freecodecamp profile" rel="noopener noreferrer"><i className="fab fa-free-code-camp"></i>
                            </a>

                        </div>


                        {/* <!-- Footer about ko-fi Icons--> */}
                        <div className="col-lg-3 mb-4 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Buy Me A ko-fi</h4>
                            <KoFi color="#29abe0" id="R1D1M1LL" label="Support Me on Ko-fi" />

                        </div>


                        {/* <!-- Footer about sharing site--> */}
                        <div className="col-lg-3 mb-4 mb-lg-0 ">
                            <h4 className="text-uppercase mb-4">Share Page</h4>
                            {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
                            <script type="text/javascript"
                                src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5eb5ecac59028179"></script>

                            {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
                            <div className="addthis_inline_share_toolbox"></div>

                        </div>



                    </div>
                </div>

                {/* // <!-- Copyright Section--> */}
                <section className="copyright py-4 text-center text-white">
                    <div className="container"><small>Copyright © <a href="https://ridwan.co.uk" target="_blank" rel="noopener noreferrer">Ridwan
            Gbadamosi </a>
          2020</small></div>
                </section>
            </footer>
        </div>
    );
}


export default Footer;