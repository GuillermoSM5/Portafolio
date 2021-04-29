import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Project = ({ Data }) => {
	return (
		<Container>
			<div className='content'>
				<h3 className='title'>{Data.title}</h3>
				<p className='description'>{Data.Descripcion}</p>
				<div className='links'>
					<a
						className='links__link'
						href={Data.repo}
						target='_blank'
						rel='noreferrer'
					>
						<span className='Links__link-icon'>
							<FontAwesomeIcon icon={faGithub} />
						</span>
						Repositorio
					</a>
					<a
						className='links__link'
						href={Data.web}
						target='_blank'
						rel='noreferrer'
					>
						<span className='Links__link-icon'>
							<FontAwesomeIcon icon={faGlobe} />
						</span>
						Sitio web
					</a>
				</div>
				<div className='content-image'>
					<img src={Data.image} alt='' />
				</div>
			</div>
		</Container>
	);
};

export default Project;

const Container = styled.div`
	width: 30rem;
	height: 26rem;
	text-align: center;
	margin: auto;

	.content {
		position: relative;
		height: 23rem;
		.description {
			height: 3.5rem;
			max-height: 3.5rem;
		}
		.links {
			.links__link {
				text-decoration: none;
				color: inherit;
				margin: 0 2rem;
				.Links__link-icon {
					margin: 0 0.75rem;
				}
			}
		}
		.content-image {
			width: 100%;
			position: absolute;
			top: 2rem;
			left: 0;
			img {
				width: 100%;
			}
		}
		&:hover .content-image {
			transform: translatey(7rem);
			transition: all 0.2s ease-in;
		}
	}
`;
