import React, { Component } from 'react';
import Herosection3 from '../../widgets/herosection/herosection3';
import Header3 from '../../layout/header/header3';
import Features from '../../widgets/featurebox/services';
import {Link} from "react-router-dom";

class Index extends Component {
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
            <Herosection3 />
            {/*hero section end*/} 
            {/*body content start*/}
            <div className="page-content">
              {/*how it work start*/}
              <section className="position-relative">
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                      <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                          Como funciona
                        </span>
                        <h2 className="mt-3 font-w-5 mb-0">Tres simples pasos para el traslado de tus cosas</h2>
                      </div>
                    </div>
                  </div>
                  {/* / .row */}
                  <div className="row align-items-center justify-content-between mb-10">
                    <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                      <img src={require(`../../assets/images/steps/moving.png`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <div>
                        <h2> <span className="badge badge-primary-soft p-2">
                            01
                          </span>
                        </h2>
                        <h4 className="mt-3">¿Tienes problemas moviendo tus cosas?</h4>
                        <p className="lead mb-0">No hay problema define tu dirección de retiro y destino con una(s) foto(s) y descripción de lo que quieres mover.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center justify-content-between mb-10">
                    <div className="col-12 col-lg-6 order-lg-1 mb-6 mb-lg-0">
                      <img src={require(`../../assets/images/steps/deal.png`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <div>
                        <h2> <span className="badge badge-primary-soft p-2">
                            02
                          </span>
                        </h2>
                        <h4 className="mt-3">Negocia el precio</h4>
                        <p className="lead mb-0">Obten la mejor oferta para mover lo que deseas desde la comodidad de tu smarphone.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                      <img src={require(`../../assets/images/steps/relax.png`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <div>
                        <h2> <span className="badge badge-primary-soft p-2">
                            03
                          </span>
                        </h2>
                        <h4 className="mt-3">Relajate</h4>
                        <p className="lead mb-0">Sigue todo el traslado y relajate, todos los traslados estan asegurados</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/*how it work end*/}
              {/*services start*/}
              <section className="bg-light">
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                      <div className="mb-8">
                        <h2 className="mt-3 font-w-5">Características</h2>
                      </div>
                    </div>
                  </div>
                  {/* / .row */}
                    <div className="row align-items-center ">
                      <div className="col-xl-4 col-lg-4 mb-8 mb-lg-0">
                        <div className={`px-4 py-7 rounded hover-translate text-center bg-white shadow`}>
                          <div>
                            <img className="img-fluid" src={require(`../../assets/images/features/tracking.png`)} alt="" />
                          </div>
                          <h5 className="mt-4 mb-3">Monitorea tu carga</h5>
                          <p>Puedes ver el progreso mientras el servicio está en proceso..</p>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-sm-6">
                        <div className={`px-4 py-7 rounded hover-translate text-center bg-white shadow`}>
                          <div>
                            <img className="img-fluid" src={require(`../../assets/images/features/save.png`)} alt="" />
                          </div>
                          <h5 className="mt-4 mb-3">Negocia el precio</h5>
                          <p>Negocia el precio  para obtener el mejor trato.</p>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-sm-6 mt-6 mt-sm-0">
                        <div className={`px-4 py-7 rounded hover-translate text-center bg-white shadow`}>
                          <div>
                            <img className="img-fluid" src={require(`../../assets/images/features/userExperience.png`)} alt="" />
                          </div>
                          <h5 className="mt-4 mb-3">Mejor Experiencia de usuario</h5>
                          <p>Nuestra amigable interfaz de usuario hará que la experiencia sea fácil.</p>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center pt-5">
                      <div className="col-xl-4 col-lg-4 mb-8 mb-lg-0">
                        <div className={`px-4 py-7 rounded hover-translate text-center bg-white shadow`}>
                          <div>
                            <img className="img-fluid" src={require(`../../assets/images/features/security.png`)} alt="" />
                          </div>
                          <h5 className="mt-4 mb-3">Verificación de antecedentes</h5>
                          <p>Verificamos los antecedentes de nuestros conductores para garantizar tu seguridad.</p>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-sm-6">
                        <div className={`px-4 py-7 rounded hover-translate text-center bg-white shadow`}>
                          <div>
                            <img className="img-fluid" src={require(`../../assets/images/features/schedule.png`)} alt="" />
                          </div>
                          <h5 className="mt-4 mb-3">Puedes Agendar tu Camion</h5>
                          <p>Puedes pedir el servicio en el mismo momento o puedes programar de acuerdo a tu conveniencia.</p>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-sm-6 mt-6 mt-sm-0">
                        <div className={`px-4 py-7 rounded hover-translate text-center bg-white shadow`}>
                          <div>
                            <img className="img-fluid" src={require(`../../assets/images/features/payment.png`)} alt="" />
                          </div>
                          <h5 className="mt-4 mb-3">Paga y Califica a través de la Aplicación</h5>
                          <p>Puedes pagar y calificar nuestros servicios a través de la aplicación.</p>
                        </div>
                      </div>
                    </div>
                 </div>
              </section>
              {/*services end*/}
              {/*join start*/}
              {/*join end*/}
              <section className="bg-primary" style={{ backgroundImage: `url(${require(`../../assets/images/bg/01.jpg`)}` , backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} data-overlay={6}>
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-12 col-lg-10 col-xl-8">
                      {/* Heading */}
                      <h1 className="display-4 text-white font-weight-bold">
                        Conviértete en un conductor de Procarga.
                      </h1>
                      {/* Text */}
                      <p className="lead text-light">Sé tu propio jefe y transforma klómetros en dinero ayudando a las personas a mover sus cosas.</p>
                      {/* Buttons */} <Link to="/" className="btn btn-primary mr-1">
                      Inscríbete ahora
                    </Link>
                    </div>
                  </div>
                  {/* / .row */}
                </div>
                {/* / .container */}
              </section>
              {/*app start*/}
              <section>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-5 col-xl-6 order-lg-2 mb-8 mb-lg-0">
                      {/* Image */}
                      <img src={require(`../../assets/images/hero/05.png`)} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-12 col-lg-7 col-xl-6 order-lg-1">
                      {/* Heading */}
                      <h1 className="display-4 mt-3">
                        Descarga la aplicación desde apple store o play store.
                      </h1>
                      {/* Text */}
                      <p className="lead text-muted">Comienza a mover tus cosas de forma rapida y segura.</p>
                      {/* Buttons */}
                      <Link to="/" className="btn btn-primary text-white text-left mr-1"> <i className="la la-apple mr-2 ic-2x d-inline-block" />
                        <div className="d-inline-block"> <small className="d-block">Available On The</small>
                          App Store</div>
                      </Link>
                      <Link to="/" className="btn btn-dark text-white text-left"> <i className="la la-android mr-2 ic-2x d-inline-block" />
                        <div className="d-inline-block"> <small className="d-block">Android App On</small>
                          Google Play</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              {/*app end*/}
            </div>
            {/*body content end*/}
          </div>
        );
    }
}

export default Index;
