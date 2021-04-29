import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return (
		<FooterContent>
			<div className='footer__contact'>
				<a
					href='https://github.com/GuillermoSM5'
					className='footer__contact-link'
				>
					<FontAwesomeIcon icon={faGithubAlt} />
				</a>
				<a
					href='https://www.linkedin.com/in/guillermo-soto-marquez'
					className='footer__contact-link'
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a
					href='mailto:guillermosotomarquez5@gmail.com'
					className='footer__contact-link'
				>
					<FontAwesomeIcon icon={faEnvelopeOpen} />
				</a>
			</div>
			<div className='footer__text'>
				<p>Este sitio fue creado por Guillermo Soto 😁 </p>
			</div>
		</FooterContent>
	);
};

export default Footer;

const FooterContent = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	border-top: 1px solid #e48900;
	display: flex;
	width: 90%;
	text-align: start;
	margin: auto;
	height: 3.5rem;
	align-items: center;
	justify-content: space-between;

	.footer__contact {
		padding: 0 1rem;
		text-align: start;
		.footer__contact-link {
			font-size: 1.5rem;
			color: #e48900;
			margin: 0 0.5rem;
			&:hover {
				color: #c06014;
			}
		}
	}
	.footer__text {
		padding: 0 1rem;
	}
	@media (max-width: 770px) {
		justify-content: space-around;
		flex-direction: column;
		.footer__contact {
			padding: 0;
			text-align: center;
			.footer__contact-link {
				font-size: 1.3rem;
			}
		}
		.footer__text {
			display: none;
		}
	}
`;
