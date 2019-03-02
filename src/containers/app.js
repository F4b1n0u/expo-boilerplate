import { connect } from 'react-redux'

import App from '#components/app'

import {
  startLoading,
} from '#modules/app'

import {
  isLoaded,
} from '#selectors/app'


const mapStateToProps = state => ({
  isLoaded: isLoaded(state),
})

const mapDispatchToProps = dispatch => ({
  startLoading: () => dispatch(startLoading()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
