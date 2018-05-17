import React, {Component} from 'react'

import Content from '../components/content'

export default class About extends Component {
  render() {
    return (
      <div>
        <Content.Header title="About" />
        <Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor tortor leo, et vehicula magna maximus vel. Donec viverra neque nec nisi malesuada blandit. 
            Maecenas in scelerisque risus. Proin eget hendrerit tellus. Fusce eleifend massa vitae eros pulvinar, sit amet semper metus gravida. Class aptent taciti 
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ac eros sed nulla convallis dapibus. Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Donec sed viverra lorem. Vivamus blandit ante est, id pretium elit elementum quis. Suspendisse gravida sapien tortor. Aliquam laoreet ut 
            dolor in semper. Nulla facilisi. Ut congue ligula mauris, et tincidunt lectus suscipit vel. Donec eget interdum nisi.
          </p>
        </Content>
      </div>
    )
  }
}