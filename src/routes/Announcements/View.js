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
    this.props.actions.fetchAnnouncements();
  }
  render() {
    let showAnnouncements = () => (
      <div>
        <div className="container schedule hide-on-small-only">
          <div className="row">
            <div className="col s12 l8 offset-l2">
              <h3>Announcements</h3>
              <CardList data={this.props.announcements ? this.props.announcements : null} onClick={this.navigate} actions={false} />
            </div>
          </div>
        </div>
        <div className="schedule hide-on-med-and-up">
          <CardList data={this.props.announcements ? this.props.announcements : null}  onClick={this.navigate} actions={false} />
        </div>
      </div>
    );

    let showError = () => (
      <div className="container">
        <div className="row">
          <div className="col s12 l8 offset-l2">
            <h3 className="hide-on-small-only">Announcements</h3>
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

    return (
      <div>
        <Navbar />
        {this.props.announcements ? showAnnouncements() : (this.props.requesting ? null : showError())}
      </div>
    );
  }
}
