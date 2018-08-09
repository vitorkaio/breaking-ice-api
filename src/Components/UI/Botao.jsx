import React from 'react';
import styled from 'styled-components';

const Botao = (props) => {
	return(
		<BotaoWrapper onClick={props.randomClick} block={props.block} >
			<span>Random</span>
		</BotaoWrapper>
	);
};


const BotaoWrapper = styled.div`
	background-color: cornflowerblue;
	padding: 15px 15px;
	cursor: pointer;

	display: ${props => props.block ? 'none' : 'inline'};

	& > span{
		color: white;
		font-size: 28px;
	}

	&:hover {
		background-color: white;
		border: 1px solid cornflowerblue;
	}

	&:hover > span {
		color: cornflowerblue;
	}

`;


export default Botao;