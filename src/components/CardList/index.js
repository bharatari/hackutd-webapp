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
              <p>{this.props.data[i].description}</p>
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
