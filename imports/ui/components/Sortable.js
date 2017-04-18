import React from 'react';
import { Motion, spring } from 'react-motion';
import { Badge } from 'react-bootstrap';

function reinsert(arr, from, to) {
  const _arr = arr.slice(0);
  const val = _arr[from];
  _arr.splice(from, 1);
  _arr.splice(to, 0, val);
  return _arr;
}
function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
}
const springConfig = {stiffness: 300, damping: 50};

const Sortable = React.createClass({
  getInitialState( props ) {

    let fields = this.props.promofields;
    let _fields = [];
    for(let item of fields) {
      _fields.push(item._id)
    }
    return {
      topDeltaY: 0,
      mouseY: 0,
      isPressed: false,
      originalPosOfLastPressed: 0,
      order: _fields,
      fields: fields
    };
  },
  componentDidMount() {
      window.addEventListener('touchmove', this.handleTouchMove);
      window.addEventListener('touchend', this.handleMouseUp);
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('mouseup', this.handleMouseUp);
  },
  componentWillUnount() {
      window.removeEventListener('touchmove', this.handleTouchMove.unbind(this));
      window.removeEventListener('touchend', this.handleMouseUp.unbind(this));
      window.removeEventListener('mousemove', this.handleMouseMove.unbind(this));
      window.removeEventListener('mouseup', this.handleMouseUp.unbind(this));
  },
  handleTouchStart(key, pressLocation, e) {
    this.handleMouseDown(key, pressLocation, e.touches[0]);
  },
  handleTouchMove(e) {
    e.preventDefault();
    this.handleMouseMove.bind(this,e.touches[0]);

  },

  handleMouseDown(pos, pressY, {pageY}) {
// if (this.refs.sortable_wrap) {
    this.setState({
      topDeltaY: pageY - pressY,
      mouseY: pressY,
      isPressed: true,
      originalPosOfLastPressed: pos,
    });
  // }
  },

  handleMouseMove({pageY}) {
    const {topDeltaY,mouseY,isPressed,originalPosOfLastPressed,order,fields} = this.state;
    const itemsCount = this.state.fields.length;

    if (isPressed) {
      const mouseY = pageY - topDeltaY;
      const currentRow = clamp(Math.round(mouseY / 70), 0, itemsCount - 1);
      let newOrder = order;

      if (currentRow !== order.indexOf(originalPosOfLastPressed)){
        newOrder = reinsert(order, order.indexOf(originalPosOfLastPressed), currentRow);
      }

      this.setState({mouseY: mouseY, order: newOrder});

    }
  },

  handleMouseUp() {    
    if (this.refs.sortable) {
      this.setState({isPressed: false, topDeltaY: 0});
      let pageid = this.props.params._id;
      let order = this.state.order;
      const updateOrder = { pageid, order };
      Meteor.call('orderFields', updateOrder);
    }
  },

  render( fields ) {
    const {mouseY, isPressed, originalPosOfLastPressed, order} = this.state;

    return (
      <div className="demo8" ref="sortable_wrap">
        { this.state.fields.map(({ _id, title }) => {
          const style = originalPosOfLastPressed === _id && isPressed
            ? {
                scale: spring(1.02, springConfig),
                shadow: spring(8, springConfig),
                y: mouseY,
                // zIndex: 999
              }
            : {
                scale: spring(1, springConfig),
                shadow: spring(1, springConfig),
                y: spring(order.indexOf(_id) * 70, springConfig),
              };
          return (
            <Motion ref="sortable" style={style} key={_id}>
              {({scale, shadow, y}) =>
                <div
                  ref="sortableItem"
                  onMouseDown={this.handleMouseDown.bind(this, _id, y)}
                  onTouchStart={this.handleTouchStart.bind(this, _id, y)}
                  className="demo8-item roboto bold listItem"
                  style={{
                    boxShadow: `rgba(0, 0, 0, 0.2) 0px ${shadow}px ${2 * shadow}px 0px`,
                    transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                    WebkitTransform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                    zIndex: _id === originalPosOfLastPressed ? 999 : 9,
                  }}>
                  <Badge className="bg-blue">{order.indexOf(_id) + 1}</Badge> { title }
                </div>
              }
            </Motion>
          );
        })}
      </div>
    );
  },
});

export default Sortable;
