"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

var _react = _interopRequireDefault(require("react"));

var _get = _interopRequireDefault(require("rc-util/es/utils/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ProFormDependency = function ProFormDependency(_ref) {
  var name = _ref.name,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["name", "children"]);

  return /*#__PURE__*/_react.default.createElement(_form.default.Item, _extends({}, rest, {
    noStyle: true,
    shouldUpdate: function shouldUpdate(prevValues, nextValues) {
      return name.some(function (nameItem) {
        var arrayName = Array.isArray(nameItem) ? nameItem : [nameItem];
        return (0, _get.default)(prevValues, arrayName) !== (0, _get.default)(nextValues, arrayName);
      });
    }
  }), function (form) {
    var values = form.getFieldsValue(name);
    return children === null || children === void 0 ? void 0 : children(values, form);
  });
};

var _default = ProFormDependency;
exports.default = _default;