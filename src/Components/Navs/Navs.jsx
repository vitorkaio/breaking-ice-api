import React, { Component } from 'react';
import styled from 'styled-components'
import RandomPokes from './../../Screens/RandomPokes/RandomPokes.jsx';
import InfoPokes from './../../Screens/InfoPokes/InfoPokes.jsx';
import { connect } from 'react-redux';
import * as pokeActions from './../../redux/actions/pokeActions.js';


class Navs extends Component {

	componentDidMount() {
		this.props.requestAddPoke(2);
	}

  render() {
  	const urlBack = this.props.pokeReducer.data.get('url');
    return (
      <NavsWrapper backUrl={urlBack}>
				<InfoPokes flex={1} />
				<RandomPokes flex={1} />
      </NavsWrapper>
    );
  }
}

const NavsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-image: url(${props => props.backUrl});
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;

	@media (max-width: 700px) {
		background-position: center;
  }

`;

const mapStateToProps = (state) => {
  return {
    pokeReducer: state.pokeReducer
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		requestAddPoke: (id) => {
      dispatch(pokeActions.requestAddPoke(id))
		}
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Navs);