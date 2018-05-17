import React, {Component} from 'react'
import { FormGroup, Label, Input, InputGroup, InputGroupAddon, FormFeedback } from 'reactstrap'
import Ionicon from 'react-ionicons'

export default class inputText extends Component {
  render() {
    const {
      feedbackIcon,
      input,
      label,
      type,
      placeholder,
      icon,
      hiddenLabel,
      meta: { touched, error, warning },
      ...props
    } = this.props

    let message
    if ( touched && ( error || warning ) ) {
        message = <span>{ error || warning }</span>
    }

    return (
      <FormGroup>
        <Label hidden={hiddenLabel === true ? true : false}>{ label }</Label>
        <InputGroup>
          <Input { ...input }
                  type={ type }
                  placeholder={ placeholder }
                  { ...props } 
                  invalid={touched && message ? true : false}
                  />
          {icon && <InputGroupAddon addonType="append">
              <Ionicon icon={icon} color="#495057" fontSize="26px" />
          </InputGroupAddon>}
          {touched && message && <FormFeedback>{error}</FormFeedback>}
        </InputGroup>
      </FormGroup>
    )
  }
}