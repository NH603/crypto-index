import React from 'react'
import PropTypes from 'prop-types'
import MainMenu from '../screens/user/shared/MainMenu'

export default WrappedComponent => class extends React.Component {
  static displayName = 'withMainMenu(...)'

  static propTypes = {
    children: PropTypes.node,
    helpers: PropTypes.object.isRequired
  }

  static defaultProps = {}

  render() {
    const {helpers} = this.props

    return (
      <div className="columns with-menu">
        <div className="column is-2">
          <MainMenu helpers={helpers} />
        </div>

        <div className="column is-offset-1">
          <WrappedComponent {...this.props} />
        </div>
      </div>
    )
  }
}
