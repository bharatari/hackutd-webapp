import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import View from './View';
import { routerActions } from 'react-router-redux';
import * as event from 'modules/event/actions';

const mapStateToProps = (state, ownProps) => ({
  currentUrl: ownProps.location.pathname,
  id: ownProps.params.id,
  event: state.event.fetchEvent.event,
});

const actionCreators = {
  ...routerActions,
  ...event,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
