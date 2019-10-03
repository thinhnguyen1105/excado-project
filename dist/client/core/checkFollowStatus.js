"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkFollowStatus = void 0;

var checkFollowStatus = function checkFollowStatus(profileState, item) {
  return profileState && profileState.authUser && item && item.followBy.indexOf(profileState.authUser.id) !== -1 ? true : false;
};

exports.checkFollowStatus = checkFollowStatus;
//# sourceMappingURL=checkFollowStatus.js.map