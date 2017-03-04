import React, { PropTypes } from 'react';
import classes from './styles.scss';
import classNames from 'classnames';
import { Navbar, List } from 'components/';

export default class ScheduleView extends React.Component {
  static propTypes = {
    actions: PropTypes.object,
    user: PropTypes.object,
  };
  componentDidMount() {
    this.props.actions.fetchEvent(this.props.id);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container schedule">
          <div className="row">
            <div className="col s12 l8 offset-l2">
              <h3>Schedule</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
