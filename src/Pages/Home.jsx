import React from 'react';
import styled from 'styled-components';
import CV from '../assets/guillermo__soto_c.pdf';

const Home = () => {
	return (
		<>
			<HomeContainer>
				<div className='home__text'>
					<div className='home__text-greetings'>
						<h2 className='home__text-title'>Hola!</h2>
						<p className='home__text-paragraph'>
							Mi nombre es{' '}
							<span className='home__text-name'>Guillermo Soto</span> soy un
							desarrollador Frontend. En esta pagina te comparto algunos de los
							proyectos en los que he trabajado.
						</p>
					</div>
					<a
						className='home__text-link'
						href={CV}
						download='CvGuillermoSoto.pdf'
					>
						Cv
					</a>
				</div>
			</HomeContainer>
		</>
	);
};

export default Home;

const HomeContainer = styled.div`
	width: 90%;
	margin: 11rem auto;
	display: flex;
	align-items: center;
	justify-content: center;

	.home__text {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		.home__text-greetings {
			display: flex;
			text-align: center;
			.home__text-title {
				font-size: 8rem;
				margin: 0;
				text-align: start;
			}
			.home__text-paragraph {
				margin: 0 0 0 1rem;
				width: 400px;
				text-align: start;
				align-items: center;
				line-height: 28px;
				font-size: 1rem;
				padding-top: 1rem;
				letter-spacing: 3px;
				.home__text-name {
					padding: 3px 7px;
					margin-bottom: 10px;
					border-radius: 10px;
					background-color: #e48900;
					color: #000000;
					font-weight: 700;
				}
			}
		}
		.home__text-link {
			background-color: #e48900;
			width: 9rem;
			padding: 0.5rem 1rem;
			border-radius: 20px;
			text-decoration: none;
			color: #000000;
			font-weight: 700;
			letter-spacing: 2px;
			margin-bottom: 1rem;

			&:hover {
				background-color: #c06014;
			}
		}
	}
`;
