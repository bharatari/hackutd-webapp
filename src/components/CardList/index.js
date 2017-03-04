import React, { PropTypes } from 'react';
import classes from './styles.scss';
import classNames from 'classnames';

export default class Sidebar extends React.Component {
  static propTypes = {
    onClick: PropTypes.object,
    data: PropTypes.object,
  };
  handleClick = (id) => {
    this.props.onClick(id);
  };
  render() {
    const rows = () => {
      let array = [];

      for (let i = 0; i < this.props.data.length; i++) {
        const element = (
          <div key={i} className="card">
            <div className="card-content">
              <span className="card-title">{this.props.data[i].name}</span>
              <p dangerouslySetInnerHTML={this.props.data[i].description}></p>
              <p className="card-time">{this.props.data[i].time}</p>
              <br />
              {this.props.actions ? (
                <div className="card-action reactions">
                  <a href="#"><i className="material-icons">thumb_up</i> 142</a>
                  <a href="#"><i className="material-icons">thumb_down</i> 20</a>
                </div>
              ) : null}
            </div>
          </div>
        );

        array.push(element);
      }

      return array;
    };

    return (
      <div>
        {this.props.data ? rows() : null}
      </div>
    );
  }
}
