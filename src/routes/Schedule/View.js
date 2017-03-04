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
    this.props.actions.fetchEvents();
  }
  navigate(id) {
    this.props.actions.push('/app/event/' + id);
  }
  render() {
    let showSchedule = () => {
      return (
        <div>
          <div className="container schedule hide-on-small-only">
            <div className="row">
              <div className="col s12 l8 offset-l2">
                <h3>Schedule</h3>
                <List data={this.props.events ? this.props.events : null} />
              </div>
            </div>
          </div>
          <div className="schedule hide-on-med-and-up">
            <List data={this.props.events ? this.props.events : null} />
          </div>
        </div>
      );
    };

    let showError = () => {
      return (
        <div className="container">
          <div className="row">
            <div className="col s12 l8 offset-l2">
              <h3 className="hide-on-small-only">Schedule</h3>
              <div className="card">
                <div className="card-content">
                  <span className="card-title center-align"><i className="material-icons">warning</i></span>
                  <p className="center-align">There was an error displaying the schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div>
        <Navbar />
        {this.props.events ? showSchedule() : (this.props.requesting ? null : showError())}
      </div>
    );
  }
}
