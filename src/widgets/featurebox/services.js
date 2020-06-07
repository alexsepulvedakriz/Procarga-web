import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Features extends Component {
    render() {
        return (
            <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4 mb-8 mb-lg-0">
                    <div className={`px-4 py-7 rounded hover-translate text-center bg-white shadow`}>
                        <div>
                            <img className="img-fluid" src={require(`../../assets/images/svg/01.svg`)} alt="" />
                        </div>
                        <h5 className="mt-4 mb-3">Verificación de antecedentes</h5>
                        <p>Hacemos una verificación de antecedentes de nuestros conductores para garantizar tu seguridad.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className={`px-4 py-7 rounded hover-translate text-center bg-white shadow`}>
                        <div>
                            <img className="img-fluid" src={require(`../../assets/images/svg/02.svg`)} alt="" />
                        </div>
                        <h5 className="mt-4 mb-3">Precio instantáneo</h5>
                        <p>Selecciona tu dirección de retiro y destino obtén un precio de forma inmediata.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6 mt-6 mt-sm-0">
                    <div className={`px-4 py-7 rounded hover-translate text-center bg-white shadow`}>
                        <div>
                            <img className="img-fluid" src={require(`../../assets/images/svg/03.svg`)} alt="" />
                        </div>
                        <h5 className="mt-4 mb-3">Mejor Experiencia de usuario</h5>
                        <p>Nuestra amigable interfaz de usuario hará que la experiencia sea fácil.</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Features;
