import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import View from './View';
import { routerActions } from 'react-router-redux';
import * as announcement from 'modules/announcement/actions';

const mapStateToProps = (state, ownProps) => ({
  currentUrl: ownProps.location.pathname,
  announcements: state.announcement.fetchAnnouncements.announcements,
  requesting: state.announcement.fetchAnnouncements.requesting,
});

const actionCreators = {
  ...routerActions,
  ...announcement,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
