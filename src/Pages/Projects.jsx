import React from 'react';
import styled from 'styled-components';
import Proyectos from '../Components/Data/Data';
import Project from '../Components/Project/Project';

const Projects = () => {
	return (
		<Container>
			<h2 className='container-title'>Proyectos</h2>
			<ContainerProjects>
				{Proyectos.map((data, index) => (
					<Project key={index} Data={data} />
				))}
			</ContainerProjects>
		</Container>
	);
};

export default Projects;

const Container = styled.div`
	width: 90%;
	margin: auto;
	padding-bottom: 4.5rem;
	.container-title {
		text-align: center;
		letter-spacing: 3px;
		font-size: 2rem;
		font-weight: 900;
		margin: 3rem 2rem;
	}
`;

const ContainerProjects = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(4, 1fr);
	row-gap: 2rem;
	@media (max-width: 770px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(7, 1fr);
	}
`;
