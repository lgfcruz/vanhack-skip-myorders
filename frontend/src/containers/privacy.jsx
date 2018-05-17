import React, {Component} from 'react'

import Content from '../components/content'

export default class Privacy extends Component {
  render() {
    return (
      <div className="legal">
        <Content.Header title="Privacy Policy" />
        <Content>
          <h2>Article 1 – Lorem ipsum</h2>
          <article>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor tortor leo, et vehicula magna maximus vel. Donec viverra neque nec nisi malesuada blandit. 
            Maecenas in scelerisque risus. Proin eget hendrerit tellus. Fusce eleifend massa vitae eros pulvinar, sit amet semper metus gravida. Class aptent taciti 
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ac eros sed nulla convallis dapibus. Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Donec sed viverra lorem. Vivamus blandit ante est, id pretium elit elementum quis. Suspendisse gravida sapien tortor. Aliquam laoreet ut 
            dolor in semper. Nulla facilisi. Ut congue ligula mauris, et tincidunt lectus suscipit vel. Donec eget interdum nisi.
          </article>
          <article>
            Donec elementum sem iaculis quam pharetra pulvinar. Sed vitae lobortis ante. Donec vulputate mollis massa ut dignissim. Cras sed varius diam, cursus interdum 
            lectus. Vivamus quam metus, venenatis sed turpis fermentum, facilisis vestibulum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada 
            fames ac turpis egestas. Donec a est ac ex interdum tincidunt ac a erat. Phasellus consequat erat eu lacus tristique venenatis.
          </article>
          <h3>Dolor sit amet</h3>
          <article>
            Donec vel pharetra quam. Sed interdum dui nulla, vel laoreet elit facilisis ut. In dictum, augue vel maximus euismod, metus massa aliquam mi, eget viverra 
            nisi erat eget sem. Sed eget pharetra neque. In porttitor tellus tristique libero aliquam semper. Mauris facilisis libero cursus risus efficitur, nec ornare 
            odio fermentum. Nam et arcu eget dolor elementum commodo.
          </article>
          <h3>Aliquam fermentum eros a ex ullamcorper egestas</h3>
          <article>
            Suspendisse hendrerit, tellus sed hendrerit facilisis, tortor ex blandit tortor, ullamcorper lobortis sem leo ac orci.<br /><br />
            <ul>
              <li>Phasellus nec commodo velit;</li>
              <li>Donec luctus leo laoreet elementum lacinia;</li>
              <li>In luctus magna sed ipsum efficitur, eu tempus lectus iaculis;</li>
              <li>Etiam tristique euismod sem, eget pharetra ligula suscipit ac;</li>
              <li>Maecenas et tortor a sapien porta vestibulum;</li>
              <li>Cras congue dapibus justo, eget fermentum neque tempor eget;</li>
              <li>Vestibulum laoreet neque non nibh lacinia auctor;</li>
              <li>Vivamus ornare bibendum ante, a tempus libero venenatis vel;</li>
              <li>Duis vel aliquet nulla, sed aliquet ipsum.</li>
            </ul>
          </article>
        </Content>
      </div>
    )
  }
}