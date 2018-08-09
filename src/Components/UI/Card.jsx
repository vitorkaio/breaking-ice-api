import React from 'react';
import styled from 'styled-components';
import Texto from './Texto.jsx';

const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

const Card = (props) => {
	const id = props.info.get('id');
	const name = props.info.get('name');
	const url = props.info.get('url');
	const abilities = props.info.get('abilities');
	return(
		<CardWrapper>
			<Texto text={capitalize(name)} size="45px" color="white" weight="bold"/>
			<Texto text={id} size="25px" color="white" weight="bold"/>
			<Texto text="Habilidades:" size="25px" color="white" weight="bold"/>
			<AbilitiesWrapper>
				{abilities.map(item => {
				return <Texto key={item.ability.name} 
					text={item.ability.name} 
					size="15px" 
					color="white"
					weight="bold" />
			})}				
			</AbilitiesWrapper>
			<BotaoDowload href={url} download={name}>Baixar Wallpaper</BotaoDowload>
		</CardWrapper>
	);
};


const CardWrapper = styled.div`
	width: 30rem;
	height: 20rem;
	border: 1px solid white;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

const AbilitiesWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
`;

const BotaoDowload = styled.a`
	&:link {
		color: white;
		font-weight: bold;
		font-size: 20px;
	}
	&:hover {
		color: black;
		font-weight: bold;
		font-size: 20px;	
	}
`;


export default Card;