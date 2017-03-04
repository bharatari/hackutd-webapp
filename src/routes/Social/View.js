import React, { PropTypes } from 'react';
import classes from './styles.scss';
import classNames from 'classnames';
import Navbar from '../../components/Navbar';
import CardList from '../../components/CardList';

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
        <Navbar />
      </div>
    );
  }
}
