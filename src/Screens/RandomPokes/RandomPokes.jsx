import React, { Component } from 'react';
import styled from 'styled-components';
import Botao from './../../Components/UI/Botao.jsx';
import { connect } from 'react-redux';
import * as pokeActions from './../../redux/actions/pokeActions.js';

import { MdAutorenew } from "react-icons/md";

class RandomPokes extends Component {

  randomHandler = () => {
    const rands = Math.floor((Math.random() * 251) + 1);
    //console.log(rands);
    this.props.requestAddPoke(rands);
    /*ApiService.getPoke(rands).then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });*/
  }

  render() {
    const {loading} = this.props.pokeReducer;
    //console.log(loading);
    return (
      <RandomWrapper flex={this.props.flex}>
				{ loading 
          ? 
          <RotateIcon>
            <MdAutorenew size={45} color='cornflowerblue'/>
          </RotateIcon> 
          :
          <Botao randomClick={this.randomHandler} block={loading} />}
      </RandomWrapper>
    );
  }
}

const RandomWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
  width: 100%;
  flex: ${props => props.flex}
`;

const RotateIcon = styled.div`
  animation:spin 3s linear infinite;
  @keyframes spin { 
    100% { 
      transform:rotate(360deg); 
    } 
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

export default connect(mapStateToProps, mapDispatchToProps)(RandomPokes);