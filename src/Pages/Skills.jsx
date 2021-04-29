import React from 'react';
import styled from 'styled-components';
import Card from '../Components/Card/Card.jsx';
import VSC from '../assets/visual-studio-code.svg';
import Postman from '../assets/getpostman-icon.svg';
import {
	faJsSquare,
	faHtml5,
	faCss3Alt,
	faSass,
	faBootstrap,
	faGitAlt,
	faReact,
	faNodeJs,
	faNpm,
	faSlack,
	faFigma,
	faTrello,
} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
	return (
		<>
			<SkillsContainer>
				<h2 className='skill-title'>Habilidades</h2>
				<CardContainer className='skill-technologies'>
					<Card name='JavaScript' icon={faJsSquare} color='#fce51c' />
					<Card name='Html 5' icon={faHtml5} color='#fc3404' />
					<Card name='Css 3' icon={faCss3Alt} color='#28a0fc' />
					<Card name='Sass' icon={faSass} color='#d474a0' />
					<Card name='Boostrap' icon={faBootstrap} color='#442474' />
					<Card name='Git' icon={faGitAlt} color='#e43c14' />
					<Card name='React js' icon={faReact} color='#64dcfc' />
					<Card name='Node Js' icon={faNodeJs} color='#83bc04' />
				</CardContainer>
				<h2 className='skill-title'>Herramientas</h2>
				<CardContainer>
					<Card name='npm' icon={faNpm} color='' />
					<Card name='Slack' icon={faSlack} color='#3a133b' />
					<Card name='Figma' icon={faFigma} color='#f76040' />
					<Card name='Trello' icon={faTrello} color='#459ccc' />
					<div className='card-vsc'>
						<img className='card-vsc__image' src={VSC} alt='' />
						<p>VS Code</p>
					</div>
					<div className='card-vsc'>
						<img className='card-vsc__image' src={Postman} alt='' />
						<p>Postman</p>
					</div>
				</CardContainer>
			</SkillsContainer>
		</>
	);
};

export default Skills;

const SkillsContainer = styled.div`
	width: 90%;
	margin: auto;
	.skill-title {
		text-align: center;
		letter-spacing: 3px;
		font-size: 2rem;
		font-weight: 900;
		margin: 3rem 2rem;
	}
`;

const CardContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 90%;
	margin: 4rem auto;
	.card-vsc {
		width: 5rem;
	    height: 6rem;
		display: flex;
		flex-direction: column;
		text-align: center;
		.card-vsc__image{
			margin: auto;
			width: 3rem;
			height: 3rem;
		}
		}
	}
`;
