"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var wasm = _interopRequireWildcard(require("../pkg/simple_primitives"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

document.getElementById('canvas').setAttribute('width', document.documentElement.clientWidth);
document.getElementById('canvas').setAttribute('height', document.documentElement.clientHeight);
var label = document.getElementById('label');
var slider = document.getElementById('slider');
var btnGenerate = document.getElementById('btnGenerate');

slider.oninput = function () {
  label.innerHTML = slider.value;
  generate();
};

document.getElementById('shapes').onchange = function () {
  generate();
};

btnGenerate.onclick = function () {
  generate();
};

function generate() {
  var shape = document.getElementById('shapes').selectedIndex;
  var subdivisions = document.getElementById('slider').value;
  wasm.generate(shape, subdivisions);
}

wasm.generate(0, 1);