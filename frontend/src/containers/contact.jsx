import React, {Component} from 'react'

import Content from '../components/content'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Content.Header title="Contact Us" />
        <Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id arcu pharetra, ornare ligula ac, fermentum massa. Mauris vitae turpis urna. Fusce ut 
            sodales leo, pulvinar semper enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed maximus, elit a 
            pretium lacinia, augue ante tincidunt nunc, eget pharetra orci eros eget massa. Nulla facilisi. Sed luctus tempor turpis ut consectetur. Orci varius 
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
            cubilia Curae; Aliquam sit amet ullamcorper erat. Aliquam nec ligula et sem ullamcorper ornare.
          </p>
          <h2>
            <a href="mailto:lgfcruz@gmail.com" target="_blank" rel="noopener noreferrer">lgfcruz@gmail.com</a>
          </h2>
        </Content>
      </div>
    )
  }
}