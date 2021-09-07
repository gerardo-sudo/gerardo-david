import React from "react";

const Contact = () => {
	return (
		<>
			<section className="section contact" id="contact">
				<h2 className="heading white">Contáctame</h2>
				<div className="container">
					<div className="social">
						<div className="icon-container">
							<a
								target="_blank"
								href="https://www.facebook.com/gerardoenrique.davidvega/"
								rel="noopener noreferrer"
							>
								<img src="/img/facebook.png" />
							</a>
						</div>
						<div className="icon-container">
							<a
								target="_blank"
								href="https://www.linkedin.com/in/gerardo-enrique-david-vega-3a8a34129/"
								rel="noopener noreferrer"
							>
								<img src="/img/linkedin.png" />
							</a>
						</div>
						<div className="icon-container">
							<a
								href="https://github.com/gerardo-sudo"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img src="/img/github.png" />
							</a>
						</div>
					</div>
					<div className="btn-container">
						<a href="/img/cv/cv.pdf" download className="btn success radius">
							Resumen (CV) <span>Descargar</span>
						</a>
					</div>
				</div>
			</section>
			<footer className="footer">
				<p>Gerardo David. &copy; Todos los derechos reservados.</p>
			</footer>
		</>
	);
};

export default Contact;
