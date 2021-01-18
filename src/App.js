import React, { Component } from 'react'
import ReactDOM from 'react-router-dom'

import { Link } from 'react-router-dom'

//StyleSheets
import 'antd/dist/antd.css';
import './stylesheets/App.scss';

import { Layout, Col, Button } from 'antd';

export default class Home extends Component {
  render() {
    return (

      <Col className="home">
        <h1>Clean3000</h1>
        <h2>Avis de passage</h2>
        <Link to='/avisdepassage'>
          <Button className="button">Créer un avis de passage</Button>
        </Link>
      </Col>

    )
  }
}
