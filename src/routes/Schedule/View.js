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
              <List data={this.props.events ? this.props.events : tempEvents} onClick={this.props.navigate} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
