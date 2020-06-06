import React, { Component } from 'react';
import Herosection3 from '../../widgets/herosection/herosection3';
import Header3 from '../../layout/header/header3';
import FeatureServices from '../../widgets/featurebox/services';
import {Link} from "react-router-dom";

class Index4 extends Component {
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
              <section className="custom-py-2 position-relative" data-bg-img={require(`../../assets/images/bg/02.png`)}>
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                      <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                          How It Work
                        </span>
                        <h2 className="mt-3 font-w-5 mb-0">Three Simple Step To Started Working Process</h2>
                      </div>
                    </div>
                  </div>
                  {/* / .row */}
                  <div className="row align-items-center justify-content-between mb-10">
                    <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                      <img src={require(`../../assets/images/svg/04.svg`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <div>
                        <h2> <span className="badge badge-primary-soft p-2">
                            01
                          </span>
                        </h2>
                        <h4 className="mt-3">Choose Project</h4>
                        <p className="lead mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center justify-content-between mb-10">
                    <div className="col-12 col-lg-6 order-lg-1 mb-6 mb-lg-0">
                      <img src={require(`../../assets/images/svg/05.svg`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <div>
                        <h2> <span className="badge badge-primary-soft p-2">
                            02
                          </span>
                        </h2>
                        <h4 className="mt-3">Start Creating</h4>
                        <p className="lead mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                      <img src={require(`../../assets/images/svg/06.svg`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <div>
                        <h2> <span className="badge badge-primary-soft p-2">
                            03
                          </span>
                        </h2>
                        <h4 className="mt-3">Get Result</h4>
                        <p className="lead mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
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
              {/*services start*/}
              <section className="bg-light">
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
                  <FeatureServices />
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
                        Download the app and start your journey now.
                      </h1>
                      {/* Text */}
                      <p className="lead text-muted">Build a Beautiful, Clean &amp; Modern Design website with flexible Bootstrap components.</p>
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

export default Index4;
