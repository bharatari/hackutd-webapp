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
  render() {
  
    let tempEvents = [
      {
        name: 'Registration',
        start: '9:00am',
      },
      {
        name: 'Opening Ceremony',
        start: '11:00am',
        end: '12:00pm'
      },
      {
        name: 'Hacking Begins',
        start: '12:00pm',
      },
      {
        name: 'Lunch',
        start: '1:00pm',
      },
    ];

    return (
      <div>
        <Navbar />
        <div className="container schedule">
          <div className="row">
            <div className="col s12 l8 offset-l2">
              <h3>Schedule</h3>
              <List data={this.props.events ? this.props.events : tempEvents} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
