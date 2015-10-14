"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _tabHeader = require("./tab-header");

var _tab = require("./tab");

var _tabAddForm = require("./tab-add-form");

var _Identity = require("./Identity");

var TabHolder = (function (_React$Component) {
  _inherits(TabHolder, _React$Component);

  function TabHolder(props) {
    _classCallCheck(this, TabHolder);

    _get(Object.getPrototypeOf(TabHolder.prototype), "constructor", this).call(this, props);
    var tabs = Immutable.List.of({ Id: 1, Active: true, Header: "Header of first tab", Content: "Hello from first tab" }, { Id: 2, Active: false, Header: "Header of second tab", Content: "Hello from second tab" }); //window.localStorage.getItem("tabs");
    this.state = { tabs: tabs, showAddForm: false };
  }

  _createClass(TabHolder, [{
    key: "onHeaderClick",
    value: function onHeaderClick(id) {
      console.log("Clicked tab with id " + id);

      var updatedList = this.state.tabs.map(function (value) {
        value.Active = value.Id == id;
        return value;
      });
      this.setState({ tabs: updatedList });
    }
  }, {
    key: "onHeaderDelete",
    value: function onHeaderDelete(id) {
      console.log("Delete tab with id " + id);

      var updatedList = this.state.tabs.filter(function (value) {
        return value.Id != id;
      });
      this.setState({ "tabs": updatedList });
    }
  }, {
    key: "onTabAdd",
    value: function onTabAdd(header, content) {
      var tabToAdd = { Header: header, Content: content, Active: true, Id: _Identity.Identity.next() };
      var updatedList = this.state.tabs.push(tabToAdd);
      this.setState({ tabs: updatedList });
    }
  }, {
    key: "toggleAddForm",
    value: function toggleAddForm() {
      this.setState({ showAddForm: !this.state.showAddForm });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      console.log("I fired");
      var contentNode;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.state.tabs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tab = _step.value;

          if (tab.Active) {
            contentNode = React.createElement(_tab.Tab, { Content: tab.Content });
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var tabAddForm = React.createElement(_tabAddForm.TabAddForm, { onTabAdd: this.onTabAdd.bind(this) });
      var tabHeaders = this.state.tabs.map(function (tab, index) {
        return React.createElement(_tabHeader.TabHeader, { key: index,
          onHeaderClick: _this.onHeaderClick.bind(_this),
          onDeleteClick: _this.onHeaderDelete.bind(_this),
          Id: tab.Id,
          Header: tab.Header,
          Active: tab.Active });
      });
      return React.createElement(
        "div",
        { className: "tab-holder" },
        React.createElement(
          "div",
          { className: "tab-headers" },
          tabHeaders
        ),
        React.createElement(
          "div",
          { className: "tab-content" },
          contentNode
        ),
        React.createElement(
          "div",
          { className: "tab-tools" },
          React.createElement(
            "span",
            { onClick: this.toggleAddForm.bind(this), className: "tab-tools__add" },
            "+"
          ),
          React.createElement(
            "div",
            null,
            this.state.showAddForm ? tabAddForm : null
          )
        )
      );
    }
  }]);

  return TabHolder;
})(React.Component);

exports.TabHolder = TabHolder;