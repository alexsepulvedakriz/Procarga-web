import React, { Component } from 'react';
import Herosection3 from '../../widgets/herosection/herosection3';
import Header3 from '../../layout/header/header3';
import Features from '../../widgets/featurebox/services';
import {Link} from "react-router-dom";
import Featureskill from "../../widgets/featurebox/featureskill";
import ContactForm1 from "../../widgets/contact/contactform1";

class Partners extends Component {
    constructor(props)
    {
        super(props)
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                {/*header start*/}
                <Header3 />
                {/*header end*/}
                {/*hero section start*/}
                <section className="bg-primary" style={{ backgroundImage: `url(${require(`../../assets/images/bg/01.jpg`)}` , backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} data-overlay={6}>
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-lg-10 col-xl-8">
                                {/* Heading */}
                                <h1 className="display-4 text-white font-weight-bold">
                                    Obten ruedas para las entregas de tu tienda
                                </h1>
                                {/* Text */}
                                <p className="lead text-light">Deja que ProCarga se encargue de despachar todos tus productos y dedicale más tiempo a lo que
                                    realmente te importa que es tu negocio.</p>
                                {/* Buttons */}
                                <Link to="/" className="btn btn-light">
                                    Registra tu empresa
                                </Link>
                            </div>
                        </div>
                        {/* / .row */}
                    </div>
                    {/* / .container */}
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    {/*Partners Procarga start*/}
                    <section className="p-3">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12 col-md-12 col-lg-8 mb-8">
                                    <div> <span className="badge badge-primary-soft p-2">
                    <i className="la la-users ic-3x rotation" />
                  </span>
                                        <h2 className="mt-3">¿Por qué ser un partner de Procarga?</h2>
                                        <p className="lead mb-0">Procarga es una app que ayuda a conectar usuarios que necesitan mover cosas que no caben en un auto convencional con conductores que cuentan con camionetas, cargo van, camiones y gruas.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-12 text-lg-right">
                                    <div className="d-flex align-items-start mb-8">
                                        <div className="order-lg-1 ml-lg-3">
                                            <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3 mr-lg-0"> <i className="la la-hourglass ic-2x" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5>Simplicidad</h5>
                                            <p className="mb-0">Olvidate de los
                                                despachos.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start mb-8">
                                        <div className="order-lg-1 ml-lg-3">
                                            <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3 mr-lg-0"> <i className="la la-calendar ic-2x" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5>Focalízate </h5>
                                            <p className="mb-0">Dedicale más tiempo
                                                a tu negocio.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <div className="order-lg-1 ml-lg-3">
                                            <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3 mr-lg-0"> <i className="la la-map-pin ic-2x" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5>Seguimiento</h5>
                                            <p className="mb-0">Puedes saber el estado en que
                                                está el despacho en todo momento .</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 my-5 my-lg-0">
                                    <img src={require(`../../assets/images/about/partners.png`)} alt="Image" className="img-fluid" />
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="d-flex align-items-start mb-8">
                                        <div>
                                            <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3"> <i className="la la-car ic-2x" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5>Flota propia</h5>
                                            <p className="mb-0">Puedes tener una flota a tu disposición
                                                sin el gasto de mantener las camionetas.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start mb-8">
                                        <div>
                                            <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3"> <i className="la la-smile-o ic-2x" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5>Clientes felices</h5>
                                            <p className="mb-0">No más clientes enojados por tener que
                                                esperar tanto tiempo por el despacho.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <div>
                                            <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3"> <i className="la la-shield ic-2x" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5>Seguro</h5>
                                            <p className="mb-0">Todo se realiza de forma
                                                digital y segura.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Partners Procarga start*/}
                    {/*Partners Procarga mail start*/}
                    <section>
                        <div className="container">
                            <div className="row justify-content-center mb-5 text-center">
                                <div className="col-12 col-lg-8">
                                    <div> <span className="badge badge-primary-soft p-2">
                    <i className="la la-envelope-o ic-3x rotation" />
                  </span>
                                        <h2 className="mt-4 mb-0">Formulario de Contacto</h2>
                                        <p className="lead mb-0">Póngase en contacto para asociarnos. Rellene el formulario y nos pondremos en contacto lo antes posible..</p>
                                    </div>
                                </div>
                            </div>
                            <ContactForm1 />
                        </div>
                    </section>
                    {/*Partners Procarga mail end*/}
                </div>
                {/*body content end*/}
            </div>
        );
    }
}

export default Partners;
