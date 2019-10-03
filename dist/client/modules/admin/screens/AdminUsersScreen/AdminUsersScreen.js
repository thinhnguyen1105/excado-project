"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminUsersScreen = void 0;

require("antd/lib/table/style");

var _table = _interopRequireDefault(require("antd/lib/table"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/dropdown/style");

var _dropdown = _interopRequireDefault(require("antd/lib/dropdown"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/tag/style");

var _tag = _interopRequireDefault(require("antd/lib/tag"));

require("antd/lib/menu/style");

var _menu = _interopRequireDefault(require("antd/lib/menu"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireDefault(require("react"));

require("./AdminUsersScreen.less");

var _moment = _interopRequireDefault(require("moment"));

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _services = require("../../../../services");

var _UserModal = _interopRequireDefault(require("./components/UserModal"));

var _components = require("../../../../components");

var _store = require("../../../../store");

var _i18n = require("../../../../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AdminUsers =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminUsers, _React$Component);

  function AdminUsers() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AdminUsers);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AdminUsers)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      search: '',
      roles: [],
      data: [],
      before: undefined,
      after: undefined,
      sortBy: 'createdAt|desc',
      pageSize: 10,
      loading: {
        table: false,
        modal: false
      },
      modal: {
        create: false
      },
      rolesData: undefined
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(value) {
        var idToken, serviceProxy, result;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    table: true
                  })
                });

                _context.prev = 1;
                _context.next = 4;
                return _app.default.auth().currentUser.getIdToken();

              case 4:
                idToken = _context.sent;
                serviceProxy = (0, _services.getServiceProxy)(idToken);
                _context.next = 8;
                return serviceProxy.findUsers(value, _this.state.roles.map(function (item) {
                  return item._id;
                }), _this.state.pageSize, _this.state.sortBy, undefined, undefined);

              case 8:
                result = _context.sent;

                _this.setState({
                  data: result.data,
                  before: result.before,
                  after: result.after,
                  loading: _objectSpread({}, _this.state.loading, {
                    table: false
                  })
                });

                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);

                _message2.default.error(_context.t0.response);

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    table: false
                  })
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 12]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "activateUser",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(userId) {
        var idToken, serviceProxy;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    table: true
                  })
                });

                _context2.prev = 1;
                _context2.next = 4;
                return _app.default.auth().currentUser.getIdToken();

              case 4:
                idToken = _context2.sent;
                serviceProxy = (0, _services.getServiceProxy)(idToken);
                _context2.next = 8;
                return serviceProxy.updateUser(userId, {
                  operation: 'activate'
                });

              case 8:
                _this.setState({
                  data: _this.state.data.map(function (item) {
                    return item._id === userId ? _objectSpread({}, item, {
                      isActive: true
                    }) : item;
                  }),
                  loading: _objectSpread({}, _this.state.loading, {
                    table: false
                  })
                });

                _message2.default.success(_this.props.t('admin-users:Activate user success'));

                _context2.next = 16;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](1);

                _message2.default.error(_context2.t0.response);

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    table: false
                  })
                });

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 12]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "deactivateUser",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(userId) {
        var idToken, serviceProxy;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    table: true
                  })
                });

                _context3.prev = 1;
                _context3.next = 4;
                return _app.default.auth().currentUser.getIdToken();

              case 4:
                idToken = _context3.sent;
                serviceProxy = (0, _services.getServiceProxy)(idToken);
                _context3.next = 8;
                return serviceProxy.updateUser(userId, {
                  operation: 'deactivate'
                });

              case 8:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    table: false
                  }),
                  data: _this.state.data.map(function (item) {
                    return item._id === userId ? _objectSpread({}, item, {
                      isActive: false
                    }) : item;
                  })
                });

                _message2.default.success(_this.props.t('admin-users:Deactivate user success'));

                _context3.next = 16;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](1);

                _message2.default.error(_context3.t0.response);

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    table: false
                  })
                });

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 12]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "openUserModal",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(user) {
        var rolesData, idToken, serviceProxy, result;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                rolesData = _this.state.rolesData;

                if (rolesData) {
                  _context4.next = 11;
                  break;
                }

                _context4.next = 5;
                return _app.default.auth().currentUser.getIdToken();

              case 5:
                idToken = _context4.sent;
                serviceProxy = (0, _services.getServiceProxy)(idToken);
                _context4.next = 9;
                return serviceProxy.getAllRoles();

              case 9:
                result = _context4.sent;
                rolesData = result.roles;

              case 11:
                _this.setState({
                  modal: _objectSpread({}, _this.state.modal, {
                    create: user ? undefined : {},
                    update: user ? user : undefined
                  }),
                  rolesData: rolesData
                });

                _context4.next = 17;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](0);

                _message2.default.error(_context4.t0.message);

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 14]]);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "closeUserModal", function () {
      _this.setState({
        modal: _objectSpread({}, _this.state.modal, {
          create: undefined,
          update: undefined
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(values, formikBag) {
        var idToken, serviceProxy, result, selectedRoles, _selectedRoles, newInfo;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    modal: true
                  })
                });

                _context5.prev = 1;
                _context5.next = 4;
                return _app.default.auth().currentUser.getIdToken();

              case 4:
                idToken = _context5.sent;
                serviceProxy = (0, _services.getServiceProxy)(idToken);

                if (!_this.state.modal.create) {
                  _context5.next = 14;
                  break;
                }

                selectedRoles = [];

                _this.state.rolesData.forEach(function (item) {
                  if (values.roles.indexOf(item.name) > -1) {
                    selectedRoles.push(item._id);
                  }
                });

                _context5.next = 11;
                return serviceProxy.createUser(_objectSpread({}, values, {
                  roles: selectedRoles
                }));

              case 11:
                result = _context5.sent;
                _context5.next = 19;
                break;

              case 14:
                _selectedRoles = [];

                _this.state.rolesData.forEach(function (item) {
                  if (values.roles.indexOf(item.name) > -1) {
                    _selectedRoles.push(item._id);
                  }
                });

                newInfo = _objectSpread({}, _this.state.modal.update, values, {
                  fullName: [values.familyName, values.givenName].join(' '),
                  roles: _selectedRoles
                });
                _context5.next = 19;
                return serviceProxy.updateUser(_this.state.modal.update._id, {
                  operation: 'updateDetail',
                  payload: newInfo
                });

              case 19:
                _message2.default.success(_this.state.modal.create ? _this.props.t('admin-users:Create user success') : _this.props.t('admin-users:Update user success'));

                _this.setState({
                  data: _this.state.modal.create ? [_objectSpread({}, result, values, {
                    _id: result.id,
                    fullName: [values.familyName, values.givenName].join(' '),
                    loginDetail: {
                      provider: 'email',
                      email: values.email
                    },
                    roles: _this.state.rolesData.filter(function (item) {
                      return values.roles.indexOf(item.name) > -1;
                    }),
                    isActive: true,
                    createdAt: new Date().getTime()
                  })].concat(_toConsumableArray(_this.state.data)) : _this.state.data.map(function (item) {
                    if (item._id === _this.state.modal.update._id) {
                      return _objectSpread({}, _this.state.modal.update, values, {
                        fullName: [values.familyName, values.givenName].join(' '),
                        roles: _this.state.rolesData.filter(function (ite) {
                          return values.roles.indexOf(ite.name) > -1;
                        })
                      });
                    } else {
                      return item;
                    }
                  }),
                  loading: _objectSpread({}, _this.state.loading, {
                    modal: false
                  }),
                  modal: _objectSpread({}, _this.state.modal, {
                    create: undefined,
                    update: undefined
                  })
                });

                formikBag.resetForm({});
                _context5.next = 28;
                break;

              case 24:
                _context5.prev = 24;
                _context5.t0 = _context5["catch"](1);

                _message2.default.error(JSON.parse(_context5.t0.response).message);

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    modal: false
                  })
                });

              case 28:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 24]]);
      }));

      return function (_x5, _x6) {
        return _ref5.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "loadPrevisousPage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6() {
      var idToken, serviceProxy, result;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  table: true
                })
              });

              _context6.prev = 1;
              _context6.next = 4;
              return _app.default.auth().currentUser.getIdToken();

            case 4:
              idToken = _context6.sent;
              serviceProxy = (0, _services.getServiceProxy)(idToken);
              _context6.next = 8;
              return serviceProxy.findUsers(_this.state.search, _this.state.roles.map(function (item) {
                return item._id;
              }), _this.state.pageSize, _this.state.sortBy, _this.state.before, undefined);

            case 8:
              result = _context6.sent;

              _this.setState({
                data: result.data,
                before: result.before,
                after: result.after,
                loading: _objectSpread({}, _this.state.loading, {
                  table: false
                })
              });

              _context6.next = 16;
              break;

            case 12:
              _context6.prev = 12;
              _context6.t0 = _context6["catch"](1);

              _message2.default.error(_context6.t0.response);

              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  table: false
                })
              });

            case 16:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[1, 12]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "loadNextPage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee7() {
      var idToken, serviceProxy, result;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  table: true
                })
              });

              _context7.prev = 1;
              _context7.next = 4;
              return _app.default.auth().currentUser.getIdToken();

            case 4:
              idToken = _context7.sent;
              serviceProxy = (0, _services.getServiceProxy)(idToken);
              _context7.next = 8;
              return serviceProxy.findUsers(_this.state.search, _this.state.roles.map(function (item) {
                return item._id;
              }), _this.state.pageSize, _this.state.sortBy, undefined, _this.state.after);

            case 8:
              result = _context7.sent;

              _this.setState({
                data: result.data,
                before: result.before,
                after: result.after,
                loading: _objectSpread({}, _this.state.loading, {
                  table: false
                })
              });

              _context7.next = 16;
              break;

            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](1);

              _message2.default.error(_context7.t0.response);

              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  table: false
                })
              });

            case 16:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[1, 12]]);
    })));

    return _this;
  }

  _createClass(AdminUsers, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8() {
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.handleSearch('');

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;

      var actionsDropdown = function actionsDropdown(user) {
        return _react.default.createElement(_menu.default, null, _react.default.createElement(_menu.default.Item, null, _react.default.createElement("a", {
          rel: "noopener noreferrer",
          onClick: function onClick() {
            return _this2.openUserModal(user);
          }
        }, translate('admin-users:Edit'))), _react.default.createElement(_menu.default.Item, null, _react.default.createElement("a", {
          rel: "noopener noreferrer",
          onClick: function onClick() {
            return _this2.activateUser(user._id);
          }
        }, translate('admin-users:Activate'))), _react.default.createElement(_menu.default.Item, null, _react.default.createElement("a", {
          rel: "noopener noreferrer",
          onClick: function onClick() {
            return _this2.deactivateUser(user._id);
          }
        }, translate('admin-users:Deactivate'))));
      };

      var userColumns = [{
        title: translate('admin-users:Name'),
        key: 'fullName',
        dataIndex: 'fullName'
      }, {
        title: translate('admin-users:Account'),
        key: 'email',
        dataIndex: 'email',
        render: function render(_text, record) {
          switch (record.loginDetail.provider) {
            case 'phone':
              return record.loginDetail.phoneNo;

            case 'facebook':
              return record.loginDetail.email;

            case 'google':
              return record.loginDetail.email;

            case 'email':
              return record.loginDetail.email;
          }
        }
      }, {
        title: translate('admin-users:Sign in method'),
        key: 'loginDetail',
        dataIndex: 'loginDetail',
        render: function render(_text, record) {
          return record.loginDetail ? _react.default.createElement(_tag.default, {
            color: "cyan"
          }, record.loginDetail.provider) : '';
        }
      }, {
        title: translate('admin-users:Roles'),
        key: 'roles',
        dataIndex: 'roles',
        render: function render(_text, record) {
          return _react.default.createElement("div", null, record.roles.map(function (item, index) {
            return _react.default.createElement(_tag.default, {
              key: index,
              color: "magenta"
            }, item.name);
          }));
        }
      }, {
        title: translate('admin-users:Status'),
        key: 'isActive',
        dataIndex: 'isActive',
        render: function render(_text, record) {
          return _react.default.createElement(_tag.default, {
            key: record._id,
            color: record.isActive ? 'green' : 'red'
          }, record.isActive ? 'Active' : 'In-Active');
        }
      }, {
        title: translate('admin-users:Created At'),
        key: 'createdAt',
        dataIndex: 'createdAt',
        render: function render(_text, record) {
          return (0, _moment.default)(new Date(record.createdAt)).format('DD/MM/YYYY HH:mm');
        }
      }, {
        title: translate('admin-users:Actions'),
        key: 'actions',
        dataIndex: 'actions',
        render: function render(_text, record) {
          return _react.default.createElement(_dropdown.default, {
            overlay: actionsDropdown(record),
            trigger: ['click']
          }, _react.default.createElement("a", {
            className: "ant-dropdown-link"
          }, translate('admin-users:Actions'), " ", _react.default.createElement(_icon.default, {
            type: "down"
          })));
        }
      }];
      return _react.default.createElement("div", {
        className: "users-container"
      }, _react.default.createElement(_row.default, {
        type: "flex",
        style: {
          marginBottom: '24px'
        },
        justify: "space-between"
      }, _react.default.createElement(_col.default, {
        xs: 12,
        xl: 8
      }, _react.default.createElement(_input.default.Search, {
        enterButton: true,
        placeholder: translate('admin-users:Search name/email/phone'),
        onSearch: this.handleSearch
      })), _react.default.createElement(_col.default, {
        xs: 10,
        style: {
          display: 'flex',
          justifyContent: 'flex-end'
        }
      }, _react.default.createElement(_button.default, {
        type: "primary",
        onClick: function onClick() {
          return _this2.openUserModal();
        }
      }, translate('admin-users:Create')))), _react.default.createElement(_row.default, {
        type: "flex"
      }, _react.default.createElement(_col.default, {
        xs: 24
      }, _react.default.createElement(_table.default, {
        bordered: true,
        columns: userColumns,
        dataSource: this.state.data,
        loading: this.state.loading.table,
        pagination: false,
        scroll: {
          x: 1000
        },
        style: {
          marginBottom: '24px'
        },
        rowKey: function rowKey(record) {
          return record._id;
        }
      }), _react.default.createElement("div", {
        className: "pagination",
        style: {
          display: 'flex',
          justifyContent: 'flex-end'
        }
      }, this.state.before && _react.default.createElement(_button.default, {
        onClick: this.loadPrevisousPage
      }, _react.default.createElement(_icon.default, {
        type: "left"
      }), " ", translate('admin-users:Prev')), this.state.after && _react.default.createElement(_button.default, {
        onClick: this.loadNextPage
      }, translate('admin-users:Next'), " ", _react.default.createElement(_icon.default, {
        type: "right"
      }))))), (this.state.modal.create || this.state.modal.update) && _react.default.createElement(_UserModal.default, {
        title: this.state.modal.update ? translate('admin-users:Update user') : translate('admin-users:Create user'),
        visible: Boolean(this.state.modal.update) || Boolean(this.state.modal.create),
        handleSubmit: this.handleSubmit,
        closeModal: this.closeUserModal,
        initialValue: this.state.modal.update ? _objectSpread({}, this.state.modal.update, {
          roles: this.state.modal.update.roles.map(function (item) {
            return item.name;
          })
        }) : this.state.modal.create,
        rolesData: this.state.rolesData,
        loading: this.state.loading.modal
      }));
    }
  }]);

  return AdminUsers;
}(_react.default.Component);

var mapState = function mapState(rootState) {
  return {
    profileState: rootState.profileModel
  };
};

var mapDispatch = function mapDispatch(_rootReducer) {
  return {};
};

var AdminUsersScreen = (0, _components.Authorize)((0, _store.withRematch)(_store.initStore, mapState, mapDispatch)((0, _i18n.withNamespaces)('admin-users')(AdminUsers)), [], true, 'admin');
exports.AdminUsersScreen = AdminUsersScreen;
//# sourceMappingURL=AdminUsersScreen.js.map