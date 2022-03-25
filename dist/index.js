Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var router = require('next/router');

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

// import axios from 'axios';
// const handleError = () => {
//   const router = useRouter();
//   router.push('/gluteo-esquerdo')
// }
// const handleButtonClick = (repoOwner: String) => {
//   return new Promise<String>(async resolve => {
//     return await axios.get(`https://api.github.com/orgs/${repoOwner}/repos`)
//     .then(res => {
//       alert(res.data);
//       handleSuccess()
//       resolve('');
//     })
//     // .catch(err => {
//     //   alert(err);
//     //   handleError()
//     //   resolve('');
//     // })
//   });
// }
var ButtonComponent = function (_a) {
    var repoOwner = _a.repoOwner;
    var handleSuccess = function () {
        var router$1 = router.useRouter();
        router$1.push('/gluteo-direito');
    };
    console.log(repoOwner);
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement("span", null, "Teste N\u00B0 375647356758678787867999999"),
        React__namespace.createElement("button", { onClick: function () { return handleSuccess(); } }, "DESGRA\u00C7AAAAA")));
};

exports.ButtonComponent = ButtonComponent;
//# sourceMappingURL=index.js.map
