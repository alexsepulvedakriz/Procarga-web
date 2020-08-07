import React, { Component } from 'react';
import ContactForm1 from '../../../widgets/contact/contactform1';
import Pageheading from '../../../widgets/Pageheading';
import {Link} from "react-router-dom";
import Header3 from "../../../layout/header/header3";

class Contact1 extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
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
        <section className="bg-primary" style={{ backgroundImage: `url(${require(`../../../assets/images/bg/04.jpg`)}` , backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} data-overlay={6}>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-12 col-lg-10 col-xl-8">
                {/* Heading */}
                <h1 className="display-4 text-white font-weight-bold">
                  Contáctanos.
                </h1>
                {/* Text */}
                <p className="lead text-light">¿Tienes alguna consulta?, estamos para ayudarte solo debes completar el formulario de
                  más abajo y nos pondremos en contacto a la brevedad.</p>
              </div>
            </div>
            {/* / .row */}
          </div>
          {/* / .container */}
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          <section>
            <div className="container">
              <div className="row text-center">
                <div className="col-lg-6 col-md-12">
                  <div>
                    <svg className="feather feather-map-pin" xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none" stroke="#007da3" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx={12} cy={10} r={3} /></svg>
                    <h4 className="mt-5">Escríbenos:</h4>
                    <span className="text-black">contacto@procarga.cl</span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div>
                    <svg className="feather feather-phone-call" xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none" stroke="#007da3" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    <h4 className="mt-5">Numero de contacto</h4>
                    <a href="tel:+912345678900">+91-234-567-8900</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row justify-content-center mb-5 text-center">
                <div className="col-12 col-lg-8">
                  <div> <span className="badge badge-primary-soft p-2">
                    <i className="la la-envelope-o ic-3x rotation" />
                  </span>
                    <h2 className="mt-4 mb-0">Formulario de Contacto</h2>
                    <p className="lead mb-0">Póngase en contacto y díganos cómo podemos ayudarlo. Rellene el formulario y nos pondremos en contacto lo antes posible..</p>
                  </div>
                </div>
              </div>
              <ContactForm1 />
            </div>
          </section>
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default Contact1;
