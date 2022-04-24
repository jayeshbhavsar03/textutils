import React from 'react';


export default function TextForm(props) {
    return (
        <>
            <section className="mb-4">


                <h1 style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} className="h1-responsive font-weight-bold text-center my-4">Contact us</h1>

                <p style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} className="row">

                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" placeholder='Your Name' className="form-control my-3" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" placeholder='Your email' className="form-control my-3" />
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" placeholder='Subject' className="form-control my-3" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="md-form">
                                        <textarea type="text" id="message" placeholder='Your message' name="message" rows="2" className="form-control md-textarea my-3"></textarea>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div className="text-center text-md-left">
                            <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div className="status"></div>
                    </div>
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <h4 className='my-3 text-bold'>&#x261B; Deogiri College, Aurangabad</h4>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <h5>&#x260E; + 01 234 567 89</h5>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <h5>&#x2709; Omkargiri@gmail.com</h5>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>
        </>
    )
}
