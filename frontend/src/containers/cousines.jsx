/*
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import { getCousines } from '../actions/cousines'
import { getStores } from '../actions/stores'

import Stores from './stores'

class Cousines extends Component {

  componentWillMount() {
    this.props.getCousines()
    //this.props.setCousineSelected()
    this.props.getStores(this.props.cousinesReducer.selected)
  }

  handleCounsineTab(id) {
     //this.props.setCousineSelected(id)
     this.props.getStores(id)
  }

  renderCousinesTabs(cousines, selected) {
    if (selected === undefined) {
        return cousines.map((cousine, index) => (
            <li className={index === 0 ? 'active' : ''} key={index}>
                <a href={`javascript:;`} title={cousine.name} onClick={() => this.handleCounsineTab(cousine.id)}>{cousine.name}</a>
            </li>
        ))
    } else {
        return cousines.map((cousine, index) => (
            <li className={cousine.id === parseInt(selected, 10) ? 'active' : ''} key={index}>
                <a href={`javascript:;`} title={cousine.name} onClick={() => this.handleCounsineTab(cousine.id)}>{cousine.name}</a>
            </li>
        ))
    }
  }

  renderCousinesTabContent(cousines) {
    return cousines.map((cousine, index) => (
      <div className={`tab-pane${index === 0 ? ' active' : ''}`} id={`#tab_${index}`} key={index}>
        <p>
          {cousine.name}
        </p>
      </div>
    ))
  }

  render() {
    const { cousines, selected } = this.props.cousinesReducer
    return (
     <div className="nav-tabs-custom">
        <ul className="nav nav-tabs">
          {this.renderCousinesTabs(cousines, selected)}
        </ul>
        <div className="tab-content">
            <div className='tab-pane active' id="#tab_0">
                <Stores cousine={selected} />
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ cousinesReducer: state.cousinesReducer })
const mapDispatchToProps = dispatch => bindActionCreators({ getCousines, getStores }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Cousines)
*/