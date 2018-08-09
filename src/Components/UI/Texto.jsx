import React from 'react';
import styled from 'styled-components';

const Texto = (props) => {
	return(
		<TextoWrapper size={props.size} color={props.color} weight={props.weight}>
			{props.text}
		</TextoWrapper>
	);
};


const TextoWrapper = styled.span`
	font-size: ${props => props.size};
	color: ${props => props.color};
	font-weight: ${props => props.weight};
`;


export default Texto;