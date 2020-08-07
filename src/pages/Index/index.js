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
                        <p className="lead mb-0">No te compliques, ingresa los datos de dirección de origen y destino, indicar si necesitas ayuda y fotos para el traslado de tu carga.</p>
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
                        <p className="lead mb-0">Obtén y elige la mejor oferta para el traslado de tu carga, en la comodidad del lugar donde estés, desde tu smarphone.</p>
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
                        <p className="lead mb-0">Todo el traslado de tu carga lo puedes monitorear a través de tu smarphone o incluso acompañando al conductor </p>
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
                            <img className="img-fluid" src={require(`../../assets/images/features/security.png`)} alt="" />
                          </div>
                          <h5 className="mt-4 mb-3">Revisión de antecedentes</h5>
                          <p>Revisaremos los antecedentes de nuestros conductores para garantizar tu seguridad.</p>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-sm-6">
                        <div className={`px-4 py-7 rounded hover-translate text-center bg-white shadow`}>
                          <div>
                            <img className="img-fluid" src={require(`../../assets/images/features/schedule.png`)} alt="" />
                          </div>
                          <h5 className="mt-4 mb-3">Al instante o agenda</h5>
                          <p>Puedes solicitar tu servicio de transporte en tiempo real o programarlo, de acuerdo a tu conveniencia.</p>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-sm-6">
                        <div className={`px-4 py-7 rounded hover-translate text-center bg-white shadow`}>
                          <div>
                            <img className="img-fluid" src={require(`../../assets/images/features/save.png`)} alt="" />
                          </div>
                          <h5 className="mt-4 mb-3">Negocia el precio</h5>
                          <p>Tú decides cuanto pagaras por el servicio de transporte de tu carga.</p>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center pt-5">
                      <div className="col-xl-4 col-lg-4 mb-8 mb-lg-0">
                        <div className={`px-4 py-7 rounded hover-translate text-center bg-white shadow`}>
                          <div>
                            <img className="img-fluid" src={require(`../../assets/images/features/tracking.png`)} alt="" />
                          </div>
                          <h5 className="mt-4 mb-3">Monitorea tu carga en todo momento</h5>
                          <p>Puedes ver en tiempo real todo el recorrido del traslado de tu carga.</p>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-sm-6 mt-6 mt-sm-0">
                        <div className={`px-4 py-7 rounded hover-translate text-center bg-white shadow`}>
                          <div>
                            <img className="img-fluid" src={require(`../../assets/images/features/userExperience.png`)} alt="" />
                          </div>
                          <h5 className="mt-4 mb-3">Una mejor experiencia de usuario</h5>
                          <p>Contaras con una interfaz amigable que mejora la experiencia de usuario.</p>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-sm-6 mt-6 mt-sm-0">
                        <div className={`px-4 py-7 rounded hover-translate text-center bg-white shadow`}>
                          <div>
                            <img className="img-fluid" src={require(`../../assets/images/features/payment.png`)} alt="" />
                          </div>
                          <h5 className="mt-4 mb-3">Paga y califica a través de la aplicación</h5>
                          <p>Puedes pagar con diferentes medios de pago en la aplicación o en efectivo, y calificar nuestros servicios.</p>
                        </div>
                      </div>
                    </div>
                 </div>
              </section>
              {/*services end*/}
            </div>
            {/*body content end*/}
          </div>
        );
    }
}

export default Index;
