import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import Logo from '../../images/logo.png';
import footerBg from '../../images/background/footer.jpg';
import ptImg1 from '../../images/shap/wave-blue.png';
import ptImg2 from '../../images/shap/circle-dots.png';
import ptImg3 from '../../images/shap/plus-blue.png';
import ptImg4 from '../../images/shap/wave-blue.png';



class aboutSection extends Component{
	render(){
		return(
			<>
				
				<footer className="footer" style={{backgroundImage: "url("+footerBg+")"}}>
					<div className="footer-top">
						<div className="container">
							<div className="row">
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="widget widget_info">
										<div className="footer-logo">
											<Link to="/"><img src={Logo} alt=""/></Link>
										</div>
										<div className="ft-contact">
											<p>Dr. Sangeeta Gomes is the best gynaecologist & fertility specialist in Sarjapur, Bangalore. She's currently working at Motherhood Hospitals, Sarjapur, Bangalore</p>
											<div className="contact-bx">
												<div className="icon"><i className="fas fa-phone-alt"></i></div>
												<div className="contact-number">
													<span>Contact Us</span>
													<h4 className="number">(+91) 9986761411</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-6">
									<div className="widget footer_widget ml-50">
										<h3 className="footer-title">Quick Links</h3>
										<ul>
											<li><Link to="/about-us"><span>About Us</span></Link></li>
											<li><Link to="/services"><span>Services</span></Link></li>
											<li><Link to="/booking"><span>Booking</span></Link></li>
											<li><Link to="/faq"><span>Faq's</span></Link></li>
											<li><Link to="/blog-grid"><span>Blogs</span></Link></li>
											<li><Link to="/team"><span>Out Team</span></Link></li>
										</ul>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-6">
									<div className="widget footer_widget">
										<h3 className="footer-title">Our Service</h3>
										<ul>
											<li><Link to="/service-detail"><span>Dental Care</span></Link></li>
											<li><Link to="/service-detail"><span>Cardiac Clinic</span></Link></li>
											<li><Link to="/service-detail"><span>Massege Therapy</span></Link></li>
											<li><Link to="/service-detail"><span>Cardiology</span></Link></li>
											<li><Link to="/service-detail"><span>Precise Diagnosis</span></Link></li>
											<li><Link to="/service-detail"><span>Abmbulance Services</span></Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="container">
						<div className="footer-bottom">
							<div className="row">
								<div className="col-12 text-center">
									<p className="copyright-text">Copyright © 2023 Design & Developed by <a href="https://themeforest.net/user/themetrades" rel="noreferrer" target="_blank" className="text-secondary">ThemeTrades</a></p>
								</div>
							</div>
						</div>
					</div> */}
					<img className="pt-img1 animate-wave" src={ptImg1} alt=""/>
					<img className="pt-img2 animate1" src={ptImg2} alt=""/>
					<img className="pt-img3 animate-rotate" src={ptImg3} alt=""/>
					<img className="pt-img4 animate-wave" src={ptImg4} alt=""/>
				</footer>
			
			</>
		);
	}
}

export default aboutSection;