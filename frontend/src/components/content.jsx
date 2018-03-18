import React, {Component} from 'react'

import ContentHeader from './content/contentHeader'

class Content extends Component {
  render() {
    return (
      <section className="content">
        {this.props.children}
      </section>
    )
  }
}

Content.Header = ContentHeader

export default Content