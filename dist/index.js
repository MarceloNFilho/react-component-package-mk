Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var ButtonComponent = function () {
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement("span", null, "Teste N\u00B0 375647356473489"),
        React__namespace.createElement("button", null, "DESGRA\u00C7AAAAA"),
        ")"));
};

exports["default"] = ButtonComponent;
//# sourceMappingURL=index.js.map
