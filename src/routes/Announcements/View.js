import React, { PropTypes } from 'react';
import classes from './styles.scss';
import classNames from 'classnames';
import { Sidebar, List } from 'components/';

export default class ScheduleView extends React.Component {
  static propTypes = {
    actions: PropTypes.object,
    user: PropTypes.object,
  };
  componentDidMount() {
    this.props.actions.fetchEvents();
  }
  render() {
    return (
      <div>
        <Sidebar />
        <List data={this.props.events} />
      </div>
    );
  }
}
