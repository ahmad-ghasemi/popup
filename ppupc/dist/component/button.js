"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

require("./globals.scss");

function Button(_ref) {
  let {
    children,
    type = '',
    onClick = () => {},
    className = '',
    loading = false,
    disabled = false
  } = _ref;
  const types = [{
    type: 'primary',
    bgColor: '#007bff',
    color: 'white'
  }, {
    type: 'secondary',
    bgColor: '#6c757d',
    color: 'white'
  }, {
    type: 'success',
    bgColor: '#28a745',
    color: 'white'
  }, {
    type: 'danger',
    bgColor: '#dc3545',
    bgLoading: 'rgb(210, 82, 94)',
    color: 'white'
  }, {
    type: 'warning',
    bgColor: '#ffc107',
    color: '#212529'
  }, {
    type: 'info',
    bgColor: '#12A3BA',
    color: 'white'
  }, {
    type: 'light',
    bgColor: '#f8f9fa',
    color: '#212529'
  }, {
    type: 'dark',
    bgColor: '#343a40',
    color: 'white'
  }];
  return /*#__PURE__*/React.createElement("div", null, type ? types.map(i => {
    if (type == i.type) {
      return /*#__PURE__*/React.createElement("button", {
        disabled: disabled,
        className: className,
        onClick: onClick,
        className: "button ".concat(className),
        style: {
          backgroundColor: loading ? i.bgLoading : i.bgColor,
          color: i.color
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: 'content_btn'
      }, loading && /*#__PURE__*/React.createElement("div", {
        className: 'loading'
      }), /*#__PURE__*/React.createElement("span", null, children)));
    }
  }) : /*#__PURE__*/React.createElement("button", {
    className: className,
    onClick: onClick,
    className: "$button_default ".concat(className),
    style: {
      backgroundColor: '#fff',
      color: '#212529'
    }
  }, children));
}