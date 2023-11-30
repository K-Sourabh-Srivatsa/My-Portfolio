import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						{/* <div className="contact-logo">
							<Logo width={46} />
						</div> */}
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Connect!
						</div>

						<div className="subtitle contact-subtitle">
						<p>I love hearing from you! Whether you have a project in mind, want to discuss collaboration opportunities, or just want to say hello, feel free to reach out. You can drop me a message through any of the below social platforms. Let's create something amazing together!</p>
							<p><b>Email:</b> &nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a></p>
							<p><b>Contact No:</b> &nbsp;{" "} +91 8978777266</p>
							<p><b>LinkedIn</b> &nbsp; {" "}
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								Sourabh Srivatsa
							</a> </p>
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					{/* <div className="page-footer">
						<Footer />
					</div> */}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
