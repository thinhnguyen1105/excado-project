"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitLoginForm = void 0;

var submitLoginForm = function submitLoginForm(idToken) {
  var form = document.getElementById('form');
  var input = document.createElement('input');
  input.type = 'text';
  input.name = 'token';
  input.value = idToken;
  form.appendChild(input);
  form.submit();
};

exports.submitLoginForm = submitLoginForm;
//# sourceMappingURL=submitLoginForm.js.map