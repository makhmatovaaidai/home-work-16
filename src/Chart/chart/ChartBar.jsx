import React, { Component } from 'react';
import classes from './ChartBar.module.css';

export default class ChartBar extends Component {
  render() {
    const { value, maxValue, label } = this.props;
    let barFillHeight = '0%';
    if (maxValue > 0) {
      barFillHeight = Math.round((value / maxValue) * 100) + '%';
    }
    return (
      <div className={classes.chart_bar}>
        <div className={classes.chart_bar__inner}>
          <div
            className={classes.chart_bar__fill}
            style={{ height: barFillHeight }}
          ></div>
        </div>
        <div className={classes.chart_bar__label}>{label}</div>
      </div>
    );
  }
}
