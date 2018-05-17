import React, {Component} from 'react'

import BoxHeader from './box/boxHeader'
import BoxFooter from './box/boxFooter'
import BoxContent from './box/boxContent'

class Box extends Component {

  constructor(props) {
    super(props)
    this.headerChildren = []
    this.contentChildren = []
    this.footerChildren = []
  }

  componentWillMount() {
    if (this.props.children) {
      let children = []
      if (!(this.props.children instanceof Array)) {
        children.push(this.props.children)  
      } else {
        children = this.props.children
      }
      children.map(child => {
            switch (child.type.name) {
                case 'BoxHeader':
                this.headerChildren.push(React.cloneElement(child))
                    break
                case 'BoxFooter':
                this.footerChildren.push(React.cloneElement(child))
                    break
                default:
                this.contentChildren.push(React.cloneElement(child))
                    break
            }
          return null
        })
    }
  }

  render() {
    return (
      <div className={`box${this.props.className ? ` ${this.props.className}` : ' box-widget'}`}>
        {this.headerChildren}
        {this.contentChildren}
        {this.footerChildren}
      </div>
    )
  }
}

Box.Header  = BoxHeader
Box.Footer  = BoxFooter
Box.Content = BoxContent

export default Box