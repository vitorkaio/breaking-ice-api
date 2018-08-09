import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import Card from './../../Components/UI/Card.jsx'
import Texto from './../../Components/UI/Texto.jsx'


const title = "Pokes Saga";

class InfoPokes extends Component {

  render() {
    const infoReducer = this.props.pokeReducer.data.get('name');
    const infoTitle = <Texto text={title} size="30px" color="cornflowerblue" weight="bold" />
    const info = infoReducer.length === 0 ? infoTitle : <Card info={this.props.pokeReducer.data} />;
    return (
      <InfoWrapper flex={this.props.flex}>
				{info}
      </InfoWrapper>
    );
  }
}

const InfoWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
  width: 100%;
  margin-top: 30px;

  flex: ${props => props.flex}

`;

const mapStateToProps = (state) => {
  return {
    pokeReducer: state.pokeReducer
  }
}

export default connect(mapStateToProps, null)(InfoPokes);