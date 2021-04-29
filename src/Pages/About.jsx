import React from 'react';
import styled from 'styled-components';
import Perfil from '../assets/aboutme.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const About = () => {
	return (
		<AboutContainer className='div'>
			<h2 className='about__title'>Sobre mí</h2>
			<div className='about__content'>
				<div className='about__content-img'>
					<img src={Perfil} alt='' />
				</div>
				<p className='about__content-text'>
					Soy un aficionado a la tecnología y a la programación, actualmente me
					encuentro estudiando FullStack JavaScript en la academia de Bedu que
					finaliza en el mes de junio. Soy una persona alegre y positiva siempre
					busco seguir aprendiendo para mejorar mis conocimientos y mis
					habilidades. A continuación te dejo mi correo y algunas otros lugares
					donde puedes contactar .
				</p>
			</div>
			<h2 className='about__title'>Contactame</h2>
			<div className='about__contact'>
				<a
					className='contact__link'
					href='https://github.com/GuillermoSM5'
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a
					className='contact__link'
					href='https://www.linkedin.com/in/guillermo-soto-marquez'
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a
					className='contact__link'
					href='mailto:guillermosotomarquez5@gmail.com'
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon icon={faEnvelopeOpen} />
				</a>
				<a
					className='contact__link'
					href='https://twitter.com/memote_149'
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
			</div>
		</AboutContainer>
	);
};

export default About;

const AboutContainer = styled.div`
	width: 90%;
	margin: auto;
	.about__title {
		text-align: center;
		letter-spacing: 3px;
		font-size: 2rem;
		font-weight: 900;
		margin: 2rem;
	}
	.about__content {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 5rem;
		.about__content-img {
			width: 13rem;
			height: 13rem;
			border-radius: 50%;
			overflow: hidden;
			position: relative;
			margin: 0 3rem;
			img {
				width: 100%;
				position: absolute;
				top: 0;
			}
		}
		.about__content-text {
			margin: 0;
			width: 35rem;
			text-align: start;
			line-height: 20px;
			font-size: 1rem;
			letter-spacing: 3px;
		}
	}
	.about__contact {
		text-align: center;
		.contact__link {
			margin: 0 2rem;
			color: #e48900;
			font-size: 2.5rem;
			&:hover {
				color: #c06014;
			}
		}
	}
	@media (max-width: 770px) {
		.about__content {
			flex-direction: column;
			margin-bottom: 4rem;
			.about__content-img {
				width: 8rem;
				height: 8rem;
				margin-bottom: 1rem;
			}
			.about__content-text {
				width: 100%;
				text-align: center;
				letter-spacing: 1px;
				line-height: 1.375rem;
			}
		}
		.about__contact {
			.contact__link {
				font-size: 2rem;
			}
		}
	}
`;
