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
    const content = () => (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="card event-card">
              <div className="card-content">
                <span className="card-title">{this.props.event.name}</span>
                <p>{this.props.event.description}</p>
                <br />
                <div className="row">
                  <div className="col s2 m1">
                    <i className="material-icons">schedule</i>
                  </div>
                  <div className="col s10 m11">
                    <p>{this.props.event.start}{this.props.event.end ? ' | ' + this.props.event.end : ''}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col s2 m1">
                    <i className="material-icons">location_on</i>
                  </div>
                  <div className="col s10 m11">
                    <p>{this.props.event.location}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col s2 m1">
                    <i className="material-icons">subject</i>
                  </div>
                  <div className="col s10 m11">
                    <p>{this.props.event.description}</p>
                  </div>
                </div>
              </div>
              <div className="card-action">
                <a href="/">Back to schedule</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <Navbar />
        <div className="container schedule">
          <div className="row">
            <div className="col s12 l8 offset-l2">
              { this.props.event ? content() : null }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
