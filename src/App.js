import React from 'react';
import Body from './components/Body/Body';
import Foter from './components/Foter/Foter';
import Header from './components/Header/Header';

import  { Component } from 'react';

export default class App extends Component {
  state = {
    adi: 'adam',
    yas:23,
    cours:'react'
  }
   
  render() {

    return <div>
<Body baslik=' merhaba'/>
  <Foter
  adi= {this.state.adi}
  yas ={this.state.yas}
  kurs ={this.state.cours}
  />
  <Header/>


    </div>;
  }
}

