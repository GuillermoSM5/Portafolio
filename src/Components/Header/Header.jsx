import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<HeaderContent>
			<nav className='header-content'>
				<Link to='/' className='header-content__link'>
					Hola!
				</Link>
				<Link to='/skills' className='header-content__link'>
					Habilidades
				</Link>
				<Link to='/projects' className='header-content__link'>
					Proyectos
				</Link>
				<Link to='/about' className='header-content__link'>
					Sobre mi
				</Link>
			</nav>
		</HeaderContent>
	);
};

export default Header;

const HeaderContent = styled.div`
	width: 90%;
	border-bottom: 0.0625rem solid #e48900;
	margin: auto;
	.header-content {
		display: flex;
		justify-content: center;
		padding: 1.75rem 0;
		.header-content__link {
			font-size: 1.5rem;
			padding: 0 2rem;
			position: relative;
			overflow: hidden;
			text-decoration: none;
			color: inherit;
			&::before {
				content: '';
				background-color: #e48900;
				position: absolute;
				top: 0;
				left: -100%;
				width: 100%;
				height: 100%;
				z-index: -10;
			}
			&:hover {
				transform: scale(1.2);
				transition: all 0.5s ease;
				color: #000;
				&::before {
					transform: translateX(100%);
					transition: all 0.5s ease-out;
				}
			}
		}
	}
`;
