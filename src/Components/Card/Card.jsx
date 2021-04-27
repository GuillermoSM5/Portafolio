import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ name, icon, color = 'transparent' }) => {
	return (
		<CardContainer color={color}>
			<div className='card__logo'>
				<FontAwesomeIcon icon={icon} />
			</div>
			<p className='Name'>{name}</p>
		</CardContainer>
	);
};

export default Card;

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 5rem;
	height: 6rem;
	.card__logo {
		font-size: 3rem;
		color: ${({ color }) => color};
	}
`;
