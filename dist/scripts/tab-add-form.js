'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabAddForm = (function (_React$Component) {
  _inherits(TabAddForm, _React$Component);

  function TabAddForm() {
    _classCallCheck(this, TabAddForm);

    _get(Object.getPrototypeOf(TabAddForm.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(TabAddForm, [{
    key: 'handleAdd',
    value: function handleAdd(e) {
      e.preventDefault();
      var header = this.refs.header.value.trim();
      var content = this.refs.content.value.trim();
      if (!header || !content) {
        return;
      }
      this.props.onTabAdd(header, content);
      this.refs.header.value = '';
      this.refs.content.value = '';
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel(e) {
      e.preventDefault();
      this.refs.header.value = '';
      this.refs.content.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'addForm' },
        React.createElement(
          'span',
          null,
          'Header'
        ),
        React.createElement('input', { placeholder: 'Enter tab title here', type: 'text', ref: 'header' }),
        React.createElement(
          'span',
          null,
          'Content'
        ),
        React.createElement('input', { placeholder: 'Enter article content here', type: 'text', ref: 'content' }),
        React.createElement(
          'button',
          { onClick: this.handleAdd.bind(this) },
          'Add'
        ),
        React.createElement(
          'button',
          { onClick: this.handleCancel.bind(this) },
          'Cancel'
        )
      );
    }
  }]);

  return TabAddForm;
})(React.Component);

exports.TabAddForm = TabAddForm;