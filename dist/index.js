Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');
var React = require('react');
var reactRouterDom = require('react-router-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

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

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var React__namespace = /*#__PURE__*/_interopNamespace(React);

var callApi = function (_a) {
    var key = _a.key, shelter_id = _a.shelter_id;
    var history = reactRouterDom.useNavigate();
    return axios__default["default"].get("https://api.adoptapet.com/search/pets_at_shelter?key=".concat(key, "output=xml&shelter_id=").concat(shelter_id))
        .then(function () {
        console.log('funrufou');
        history('/qualquer');
    });
};
var ButtonComponent = function (_a) {
    var props = _a.props;
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement("span", null, "Teste N\u00B0 375647356758678787867999999"),
        React__namespace.createElement("button", { onClick: function () { return callApi(props); } }, "DESGRA\u00C7AAAAA")));
};

exports.ButtonComponent = ButtonComponent;
//# sourceMappingURL=index.js.map
