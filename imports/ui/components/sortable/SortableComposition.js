import React from 'react';
import { swapArrayElements, isMouseBeyond } from './helpers.js';

/*** Higher-order component - this component works like a factory for draggable items */

export function SortableComposition(Component) {

  var elementEdge = 0;
  var updateEdge = true;

  return React.createClass({

    proptypes: {
      items: React.PropTypes.array.isRequired,
      updateState: React.PropTypes.func.isRequired,
      sortId: React.PropTypes.number,
      outline: React.PropTypes.string.isRequired, // list | grid
      draggingIndex: React.PropTypes.number,
      childProps: React.PropTypes.object,
    },

    getInitialState() {
      return {
        draggingIndex: null
      }
    },

    getDefaultProps() {
      return {
        moveInMiddle: false
      }
    },

    componentWillReceiveProps(nextProps) {
      this.setState({
        draggingIndex: nextProps.draggingIndex
      });
    },

    sortEnd(e) {
      e.preventDefault();
      this.props.updateState({
        draggingIndex: null
      });
    },

    sortStart(e) {
      const draggingIndex = e.currentTarget.dataset.id;

      this.props.updateState({
        draggingIndex: draggingIndex
      });
      this.setState({
        draggingIndex: draggingIndex
      });

      let dt = e.dataTransfer;
      if (dt !== undefined) {
        e.dataTransfer.setData('text', e.target.innerHTML);

        //fix http://stackoverflow.com/questions/27656183/preserve-appearance-of-dragged-a-element-when-using-html5-draggable-attribute
        if (dt.setDragImage && e.currentTarget.tagName.toLowerCase() === 'a') {
          dt.setDragImage(e.target, 0, 0);
        }
      }
      updateEdge = true;
    },

    dragOver(e) {
      e.preventDefault();
      var mouseBeyond;
      var positionX, positionY;
      var height, topOffset;
      var items = this.props.items;
      const overEl = e.currentTarget; //underlying element
      const indexDragged = Number(overEl.dataset.id); //index of underlying element in the set DOM elements
      const indexFrom = Number(this.state.draggingIndex);

      height = overEl.getBoundingClientRect().height;

      positionX = e.clientX;
      positionY = e.clientY;
      topOffset = overEl.getBoundingClientRect().top;

      if (this.props.outline === "list") {
        mouseBeyond = isMouseBeyond(positionY, topOffset, height, this.props.moveInMiddle)
      }

      if (this.props.outline === "grid") {
        mouseBeyond = isMouseBeyond(positionX, overEl.getBoundingClientRect().left, overEl.getBoundingClientRect().width, this.props.moveInMiddle)
      }

      if (indexDragged !== indexFrom && mouseBeyond) {
        items = swapArrayElements(items, indexFrom, indexDragged);
        this.props.updateState({
          items: items, draggingIndex: indexDragged
        });
      }

    },

    isDragging() {
      return this.props.draggingIndex == this.props.sortId;
    },

    render() {
      var draggingClassName = Component.displayName + "-dragging"
      return (
        <Component
          className={this.isDragging() ? draggingClassName : ""}
          draggable={true}
          onDragOver={this.dragOver}
          onDragStart={this.sortStart}
          onDragEnd={this.sortEnd}
          onDrop={this.sortEnd}
          onTouchStart={this.sortStart}
          onTouchMove={this.dragOver}
          onTouchEnd={this.sortEnd}
          children={this.props.children}
          data-id={this.props.sortId}
          {...(this.props.childProps || {}) }
          />
      )
    }

  })
}
