import React, { Component } from 'react';
import AccordionDemo from '../../../widgets/featuare/accordiondemo';
import Pageheading from '../../../widgets/Pageheading';
import Header3 from "../../../layout/header/header3";
import {Accordion, AccordionItem, AccordionItemBody, AccordionItemTitle} from "react-accessible-accordion";

class Faq extends Component {
  constructor(props) {
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
                <section className="bg-primary" style={{ backgroundImage: `url(${require(`../../../assets/images/bg/04.jpg`)}` , backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} data-overlay={6}>
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-lg-10 col-xl-8">
                                {/* Heading */}
                                <h1 className="display-4 text-white font-weight-bold">
                                    Preguntas Frecuentes.
                                </h1>
                                {/* Text */}
                                <p className="lead text-light">Aca podras encontrar las preguntas frecuentes con sus respuestas, si alguna de tus dudas no es resuelta
                                    no dudes en escribirnos por medio del fomulario de contacto.</p>
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
                  <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                      <img src={require(`../../../assets/images/about/04.png`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                        <Accordion>
                            <AccordionItem className="accordion__item mb-2" expanded >
                                <AccordionItemTitle className="border mb-0 bg-transparent card-header">
                                    <h6 className="mb-0">
                                        <a className="text-dark" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true">¿Nuestra misión ?</a>
                                    </h6>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="text-muted">Como empresa comprometida con las nuevas tecnologías, buscamos revolucionar el mercado de los fletes, grúas, mudanzas, otorgando la posibilidad de crear nuevas opciones de mercado, mediando la interacción con choferes del rubro gracias a nuestra aplicación móvil. Hacemos que los traslados de distintos objetos dentro de las ciudad sean más prácticos, veloces y de manera profesional en base a las necesidades de los diferentes usuarios y a la comodidad de su bolsillo.</div>
                                </AccordionItemBody>
                            </AccordionItem>

                            <AccordionItem className="accordion__item mb-2">
                                <AccordionItemTitle className="border mb-0 bg-transparent card-header">
                                    <h6 className="mb-0">
                                        <a className="text-dark" data-toggle="collapse" data-parent="#accordion" href="#collapse2">¿Nuestra visión?</a>
                                    </h6>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="text-muted">Nuestra meta es lograr ser el facilitador de traslados más utilizado del país, otorgando confiabilidad, transparencia, un servicio óptimo y mayores opciones en el mercado, tanto para usuarios interesados como a choferes del rubro fletero .</div>
                                </AccordionItemBody>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemTitle className="border mb-0 bg-transparent card-header">
                                    <h6 className="mb-0">
                                        <a className="text-dark" data-toggle="collapse" data-parent="#accordion" href="#collapse3">¿Cómo Funciona?</a>
                                    </h6>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="text-muted">Las Personas (Clientes), ingresan a la App,  selecciona el lugar de retiro y el lugar de despacho. Aportan una fotografía de la cosa que van a ser trasladada se busca al Driver mas cercano o bien al que está apto en el momento permitiendo negociar el precio y al aceptar la tarifa. El Driver tiene como ganancias el 80% del valor indicado.</div>
                                </AccordionItemBody>
                            </AccordionItem>
                        </Accordion>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/*body content end*/}
          </div>
        );
    }
}

export default Faq;
