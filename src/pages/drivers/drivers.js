import React, { Component } from 'react';
import Herosection3 from '../../widgets/herosection/herosection3';
import Header3 from '../../layout/header/header3';
import Features from '../../widgets/featurebox/services';
import {Link} from "react-router-dom";
import Featureskill from "../../widgets/featurebox/featureskill";

class Drivers extends Component {
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
                {/*drivers section start*/}
                <section className="bg-primary" style={{ backgroundImage: `url(${require(`../../assets/images/bg/04.jpg`)}` , backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} data-overlay={6}>
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-lg-10 col-xl-8">
                                {/* Heading */}
                                <h1 className="display-4 text-white font-weight-bold">
                                    Gana dinero transportando.
                                </h1>
                                {/* Text */}
                                <p className="lead text-light">Se parte de la familia de conductores de Procarga y tranforma kilómetros en dinero mientras ayudas a las
                                    personas a mover sus cosas.</p>
                                {/* Buttons */}
                                <Link to="/" className="btn btn-primary text-white text-left mr-1"> <i className="la la-apple mr-2 ic-2x d-inline-block" />
                                    <div className="d-inline-block"> <small className="d-block">Disponible en</small>
                                        App Store</div>
                                </Link>
                                <Link to="/" className="btn btn-dark text-white text-left"> <i className="la la-android mr-2 ic-2x d-inline-block" />
                                    <div className="d-inline-block"> <small className="d-block">Disponible en</small>
                                        Google Play</div>
                                </Link>
                            </div>
                        </div>
                        {/* / .row */}
                    </div>
                    {/* / .container */}
                </section>
                {/*drivers section end*/}
                {/*body content start*/}
                <div className="page-content">
                    {/*services start*/}
                    {/*<section className="custom-pb-4" style={{ backgroundImage: `url(${require(`../../assets/images/bg/07.png`)}` , backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 700 }}>
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                                    <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                          Que ofrecemos
                        </span>
                                        <h2 className="mt-3 font-w-5">¿Que es Procarga?</h2>
                                        <p className="lead mb-0">Procarga es una app que ayuda a conectar usuarios que necesitan mover cosas que no caben en un auto convencional con conductores que cuentan con camionetas, cargo van, camiones y gruas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>*/}
                    {/*services end*/}
                    {/*Why be Drivers Procarga end*/}
                    <section className="p-3">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12 col-md-12 col-lg-8 mb-8">
                                    <div> <span className="badge badge-primary-soft p-2">
                    <i className="la la-cubes ic-3x rotation" />
                  </span>
                                        <h2 className="mt-3">¿Por qué ser un Driver de Procarga?</h2>
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
                                            <h5>Regularidad</h5>
                                            <p className="mb-0">Recibe el pago de tu
                                                trabajo de forma semanal.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start mb-8">
                                        <div className="order-lg-1 ml-lg-3">
                                            <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3 mr-lg-0"> <i className="la la-money ic-2x" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5>Gana dinero</h5>
                                            <p className="mb-0">Usa tu tiempo libre para
                                                ganar dinero extra.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <div className="order-lg-1 ml-lg-3">
                                            <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3 mr-lg-0"> <i className="la la-calendar ic-2x" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5>Flexibilidad</h5>
                                            <p className="mb-0">Se tu propio jefe y
                                                maneja tu horario .</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 my-5 my-lg-0">
                                    <img src={require(`../../assets/images/about/09.png`)} alt="Image" className="img-fluid" />
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="d-flex align-items-start mb-8">
                                        <div>
                                            <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3"> <i className="la la-dropbox ic-2x" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5>Servicio</h5>
                                            <p className="mb-0">Ayuda a la gente a mover
                                                sus cosas.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start mb-8">
                                        <div>
                                            <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3"> <i className="la la-comment ic-2x" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5>Instantáneo</h5>
                                            <p className="mb-0">Recibe notificaciones en tu smartphone de
                                                las solicitudes más cercanas a tu posición.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <div>
                                            <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary mr-3"> <i className="la la-heart-o ic-2x" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5>Beneficios</h5>
                                            <p className="mb-0">Beneficios especiales por ser parte
                                                de la familia Procarga.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Why be Partners Procarga start*/}
                    {/*what need Drivers Procarga start*/}
                    <section className="custom-pt-1 custom-pb-2 bg-dark position-relative" data-bg-img={require(`../../assets/images/bg/02.png`)}>
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-lg-4 col-md-6 mb-8 mb-lg-0 text-white">
                                    <div> <span className="badge badge-primary-soft p-2">
                                <i className="la la-cubes ic-3x rotation" />
                            </span>
                                        <h2 className="mt-3 mb-0">¿Qué necesito para ser un conductor de ProCarga?</h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="bg-primary-soft rounded p-5">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="mr-3">
                                                <img className="img-fluid" src={require(`../../assets/images/icon/02.svg`)} alt="" />
                                            </div>
                                            <h5 className="m-0 text-light">Smartphone</h5>
                                        </div>
                                        <p className="mb-0">Es necesario tener un smartphone con red 3G/4G y sistema operativo Android o IOS.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-6 mt-md-0">
                                    <div className="bg-primary-soft rounded p-5">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="mr-3">
                                                <img className="img-fluid" src={require(`../../assets/images/icon/01.svg`)} alt="" />
                                            </div>
                                            <h5 className="m-0 text-light">Licencia de conducir</h5>
                                        </div>
                                        <p className="mb-0">Es necesario ser mayor de edad y contar con licencia de conducir para poder ser Conductor de Procarga.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-6">
                                    <div className="bg-primary-soft rounded p-5">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="mr-3">
                                                <img className="img-fluid" src={require(`../../assets/images/icon/strong-img.png`)} alt="" />
                                            </div>
                                            <h5 className="m-0 text-light">Fuerte y Físicamente Capaz</h5>
                                        </div>
                                        <p className="mb-0">Debes ser fuerte y físicamente capaz de levantar al menos 30Kg.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-6">
                                    <div className="bg-primary-soft rounded p-5">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="mr-3">
                                                <img className="img-fluid" src={require(`../../assets/images/icon/boxTool.png`)} alt="" />
                                            </div>
                                            <h5 className="m-0 text-light">Herramientas</h5>
                                        </div>
                                        <p className="mb-0">Debes contar con las herramientas necesarias para asegurar la carga de los clientes..</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-6">
                                    <div className="bg-primary-soft rounded p-5">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="mr-3">
                                                <img className="img-fluid" src={require(`../../assets/images/icon/pickupCar.png`)} alt="" />
                                            </div>
                                            <h5 className="m-0 text-light">Vehiculo</h5>
                                        </div>
                                        <p className="mb-0">Debes contar con un vehiculo en condiciones adecuadas para transportar las cargas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shape-1" style={{height: '150px', overflow: 'hidden'}}>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                                <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                            </svg>
                        </div>
                        <div className="shape-1 bottom" style={{height: '200px', overflow: 'hidden'}}>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                            </svg>
                        </div>
                    </section>
                    {/*what need Procarga end*/}
                    {/*how it work start*/}
                    <section className="position-relative" data-bg-img={require(`../../assets/images/bg/02.png`)}>
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                                    <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                          4 simples pasos
                        </span>
                                        <h2 className="mt-3 font-w-5 mb-0">¿Cómo me puedo convertir en Driver?</h2>
                                    </div>
                                </div>
                            </div>
                            {/* / .row */}
                            <div className="row align-items-center justify-content-between mb-10">
                                <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                                    <img src={require(`../../assets/images/steps-to-drivers/download.png`)} alt="Image" className="img-fluid" />
                                </div>
                                <div className="col-12 col-lg-6 col-xl-5">
                                    <div>
                                        <h2> <span className="badge badge-primary-soft p-2">
                            01
                          </span>
                                        </h2>
                                        <h4 className="mt-3">Descargar la app</h4>
                                        <p className="lead mb-0">Descarga la APP desde Apple Store or Play Store.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-between mb-10">
                                <div className="col-12 col-lg-6 order-lg-1 mb-6 mb-lg-0">
                                    <img src={require(`../../assets/images/steps-to-drivers/upload.png`)} alt="Image" className="img-fluid" />
                                </div>
                                <div className="col-12 col-lg-6 col-xl-5">
                                    <div>
                                        <h2> <span className="badge badge-primary-soft p-2">
                            02
                          </span>
                                        </h2>
                                        <h4 className="mt-3">Sube la información</h4>
                                        <p className="lead mb-0">Sube toda la información soliitada en la App al momento de registrarte.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-between">
                                <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                                    <img src={require(`../../assets/images/steps-to-drivers/review.png`)} alt="Image" className="img-fluid" />
                                </div>
                                <div className="col-12 col-lg-6 col-xl-5">
                                    <div>
                                        <h2> <span className="badge badge-primary-soft p-2">
                            03
                          </span>
                                        </h2>
                                        <h4 className="mt-3">Revisión de antecedentes</h4>
                                        <p className="lead mb-0">La información subida será revisada y aprobada en caso de cumplir con todo lo necesario.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-between mb-10">
                                <div className="col-12 col-lg-6 order-lg-1 mb-6 mb-lg-0">
                                    <img src={require(`../../assets/images/steps-to-drivers/training.png`)} alt="Image" className="img-fluid" />
                                </div>
                                <div className="col-12 col-lg-6 col-xl-5">
                                    <div>
                                        <h2> <span className="badge badge-primary-soft p-2">
                            04
                          </span>
                                        </h2>
                                        <h4 className="mt-3">Entrenamiento</h4>
                                        <p className="lead mb-0">Entrenamiento para capacitar al driver en el uso de la aplicación, con esto ya estas listo para ayudar a las personas a mover sus cosas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shape-1" style={{height: '200px', overflow: 'hidden'}}>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                                <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                            </svg>
                        </div>
                        <div className="shape-1 bottom" style={{height: '200px', overflow: 'hidden'}}>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                            </svg>
                        </div>
                    </section>
                    {/*how it work end*/}
                </div>
                {/*body content end*/}
            </div>
        );
    }
}

export default Drivers;
