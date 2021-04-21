import React from 'react';
import styled from 'styled-components';

const Home = () => {
	return (
		<>
			<HomeContainer>
				<div className='home__text'>
					<h2 className='home__text-title'>Hola!</h2>
					<p className='home__text-paragraph'>
						Mi nombre es <span className='home__text-name'>Guillermo Soto</span>{' '}
						soy un desarrollador Frontend En esta pagina te comparto alguno de
						los proyectos en los que eh trabajado.
					</p>
				</div>
			</HomeContainer>
		</>
	);
};

export default Home;

const HomeContainer = styled.div`
	width: 90%;
	margin: auto;
	display: flex;
	/* border: 1px solid red; */
	height: 78vh;
	text-align: end;
	.home__text {
		width: 100%;
		border: 1px solid red;
	}
`;
