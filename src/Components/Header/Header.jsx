import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	const [menuActive, setMenuActive] = useState(false);

	const menu = () => {
		setMenuActive(!menuActive);
		console.log(menuActive);
	};
	return (
		<HeaderContent open={menuActive}>
			<div onClick={menu} className='menuIcon'>
				<FontAwesomeIcon icon={faBars} />
			</div>
			<nav className='header-content'>
				<div onClick={menu} className='header-content__icon'>
					<FontAwesomeIcon icon={faTimes} />
				</div>
				<Link onClick={menu} to='/' className='header-content__link'>
					Hola!
				</Link>
				<Link onClick={menu} to='/skills' className='header-content__link'>
					Habilidades
				</Link>
				<Link onClick={menu} to='/projects' className='header-content__link'>
					Proyectos
				</Link>
				<Link onClick={menu} to='/about' className='header-content__link'>
					Sobre mí
				</Link>
			</nav>
		</HeaderContent>
	);
};

export default Header;

const HeaderContent = styled.div`
	align-self: flex-start;
	width: 90%;
	border-bottom: 0.0625rem solid #e48900;
	margin: auto;
	.menuIcon {
		font-size: 2em;
		padding: 0.5rem;
		display: none;
	}
	.header-content {
		display: flex;
		justify-content: center;
		padding: 1.75rem 0;
		.header-content__icon {
			display: none;
		}
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
	@media (max-width: 770px) {
		.menuIcon {
			display: block;
			color: #e48900;
		}
		.header-content {
			width: 60%;
			position: absolute;
			top: 0;
			left: 0;
			transition: transform 0.5s ease-in-out;
			transform: ${({ open }) =>
				open ? 'translatex(0)' : 'translatex(-100%)'};
			bottom: 0;
			flex-direction: column;
			justify-content: flex-start;
			padding: 0;
			background-color: #000;
			z-index: 30;
			.header-content__icon {
				font-size: 2.5rem;
				padding: 1rem;
				color: #e48900;
				display: block;
			}
			.header-content__link {
				padding: 1rem 2rem;
				&::before {
					left: 0;
					display: none;
				}
				&:hover {
					transform: none;

					&::before {
						transform: none;
						transition: none;
						display: block;
					}
				}
			}
		}
	}
`;
