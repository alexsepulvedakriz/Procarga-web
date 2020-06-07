import React, { Component } from 'react';
import Herosection3 from '../../widgets/herosection/herosection3';
import Header3 from '../../layout/header/header3';
import Features from '../../widgets/featurebox/services';
import {Link} from "react-router-dom";
import Featureskill from "../../widgets/featurebox/featureskill";

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
                                    Change the way
                                </h1>
                                {/* Text */}
                                <p className="lead text-light">Build a Beautiful, Clean &amp; Modern Design website with flexible Bootstrap components.</p>
                                {/* Buttons */} <Link to="/" className="btn btn-primary mr-1">
                                Learn More
                            </Link>
                                <Link to="/" className="btn btn-light">
                                    Get Started
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
                    {/*Description Procarga start*/}
                    <section>
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                                    <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                          What We Offerd
                        </span>
                                        <h2 className="mt-3 font-w-5">Creative Design And Creative Services</h2>
                                        <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                    </div>
                                </div>
                            </div>
                            {/* / .row */}
                        </div>
                    </section>
                    {/*Description Procarga end*/}
                    {/*Partners Procarga start*/}
                    <section className="p-0">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12 col-md-12 col-lg-8 mb-8">
                                    <div> <span className="badge badge-primary-soft p-2">
                    <i className="la la-cubes ic-3x rotation" />
                  </span>
                                        <h2 className="mt-3">Awesome Bootsland App Feature</h2>
                                        <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                    </div>
                                </div>
                            </div>
                            <Featureskill />
                        </div>
                    </section>
                    {/*Partners Procarga start*/}
                </div>
                {/*body content end*/}
            </div>
        );
    }
}

export default Partners;
