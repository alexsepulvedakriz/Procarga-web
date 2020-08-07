import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <footer className="py-11 bg-primary position-relative" data-bg-img="assets/images/bg/03.png">
                <div className="shape-1" style={{height: '150px', overflow: 'hidden'}}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                    <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                </svg>
                </div>
                <Container  className=" mt-11">
                <Row>
                    <div className="col-12 col-lg-6 col-xl-7">
                    <Row>
                        <Col className="col-12 col-sm-4 navbar-dark">
                        <h5 className="mb-4 text-white">Paginas</h5>
                        <ul className="navbar-nav list-unstyled mb-0">
                            <li className="mb-3 nav-item"><Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="mb-3 nav-item"><Link className="nav-link" to="/drivers">Conductores</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/contact-us">Contacto</Link>
                            </li>
                            <li className="mb-3 nav-item"><Link className="nav-link" to="/faq">Faq</Link>
                            </li>
                        </ul>
                        </Col>
                        <Col className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
                        <h5 className="mb-4 text-white">Legal</h5>
                        <ul className="navbar-nav list-unstyled mb-0">
                            <li className="mb-3 nav-item"><Link className="nav-link" to="/term-condition">Términos del Servicio</Link>
                            </li>
                            <li className="mb-3 nav-item"><Link className="nav-link" to="/privacy-policy">Políticas de privacidad</Link>
                            </li>
                        </ul>
                        </Col>
                        <Col className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
                            <h5 className="mb-4 text-white">Servicios</h5>
                            <ul className="navbar-nav list-unstyled mb-0">
                                <li className="mb-3 nav-item"><Link className="nav-link" to="#">Inscribirse como conductor</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="mt-5" >
                        <Col className="col-12 col-sm-6">
                            <Link className="footer-logo text-white h2 mb-0" to="/">
                                Pro<span className="font-weight-bold">Carga.</span>
                            </Link> 
                        </Col>
                        <Col className="col-12 col-sm-6 mt-6 mt-sm-0">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item"><Link className="text-light ic-2x" to="#"><i className="la la-facebook" /></Link> 
                            </li>
                            <li className="list-inline-item"><Link className="text-light ic-2x" to="#"><i className="la la-instagram" /></Link> 
                            </li>
                            <li className="list-inline-item"><Link className="text-light ic-2x" to="#"><i className="la la-twitter" /></Link> 
                            </li>
                            <li className="list-inline-item"><Link className="text-light ic-2x" to="#"><i className="la la-linkedin" /></Link> 
                            </li>
                        </ul>
                        </Col>
                    </Row>
                    </div>
                </Row>
                <Row className="text-white text-center mt-8">
                    <Col>
                    <hr className="mb-8" />Copyright 2020 Procarga  | Todos los derechos reservados</Col>
                </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;
