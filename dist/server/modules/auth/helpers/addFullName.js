"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addFullName = void 0;

var addFullName = function addFullName(params) {
  return (params.type === 'givenNameFirst' ? [params.givenName, params.middleName, params.familyName] : [params.familyName, params.middleName, params.givenName]).filter(function (name) {
    return name;
  }).join(' ');
};

exports.addFullName = addFullName;
//# sourceMappingURL=addFullName.js.map