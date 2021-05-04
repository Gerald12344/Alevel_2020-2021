webpackHotUpdate_N_E("pages/test",{

/***/ "./components/clouds.js":
/*!******************************!*\
  !*** ./components/clouds.js ***!
  \******************************/
/*! exports provided: GenerateClouds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GenerateClouds\", function() { return GenerateClouds; });\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n// Written By Harvey Randall \\\\\n // Randomly delplace cloud verticies\n\nvar map = function map(val, smin, smax, emin, emax) {\n  return (emax - emin) * (val - smin) / (smax - smin) + emin;\n};\n\nvar jitter = function jitter(geometry, per) {\n  for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {\n    geometry.attributes.position.array[i * 3] += map(Math.random(), 0, 1, -per, per);\n    geometry.attributes.position.array[i * 3 + 1] += map(Math.random(), 0, 1, -per, per);\n    geometry.attributes.position.array[i * 3 + 2] += map(Math.random(), 0, 1, -per, per);\n  }\n\n  ;\n};\n\nvar GenerateClouds = /*#__PURE__*/function () {\n  function GenerateClouds(pos, scene, speed, scale) {\n    Object(_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, GenerateClouds);\n\n    var group = new three__WEBPACK_IMPORTED_MODULE_2__[\"Group\"]();\n    var tuft1 = new three__WEBPACK_IMPORTED_MODULE_2__[\"SphereBufferGeometry\"](1.5 * scale, 100, 11);\n    tuft1.translate(-2 * scale, 0, 0);\n    var tuft3 = new three__WEBPACK_IMPORTED_MODULE_2__[\"SphereBufferGeometry\"](1.5 * scale, 7, 11);\n    tuft3.translate(2 * scale, 0, 0);\n    var tuft2 = new three__WEBPACK_IMPORTED_MODULE_2__[\"SphereBufferGeometry\"](2.0 * scale, 7, 11);\n    tuft2.translate(0, 0, 0);\n    jitter(tuft1, 0.1);\n    jitter(tuft2, 0.1);\n    jitter(tuft3, 0.1);\n    tuft1.computeVertexNormals();\n    var mat = new three__WEBPACK_IMPORTED_MODULE_2__[\"MeshPhongMaterial\"]({\n      color: 'white',\n      flatShading: true,\n      side: three__WEBPACK_IMPORTED_MODULE_2__[\"DoubleSide\"]\n    });\n    var cloud = new three__WEBPACK_IMPORTED_MODULE_2__[\"Mesh\"](tuft1, mat);\n    var cloud1 = new three__WEBPACK_IMPORTED_MODULE_2__[\"Mesh\"](tuft2, mat);\n    var cloud2 = new three__WEBPACK_IMPORTED_MODULE_2__[\"Mesh\"](tuft3, mat);\n    group.add(cloud);\n    group.add(cloud1);\n    group.add(cloud2);\n    scene.add(group);\n    group.castShadow = true;\n    group.receiveShadow = true;\n    group.position.x = pos.x;\n    group.position.y = pos.y;\n    group.position.z = pos.z;\n    this.grass = group;\n    this.speed = speed;\n    this.pos = pos;\n  }\n\n  Object(_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(GenerateClouds, [{\n    key: \"update\",\n    value: function update() {\n      var geos = this.grass;\n      geos.position.x += this.speed;\n\n      if (geos.position.x > 400) {\n        geos.position.x = this.pos.x;\n      }\n    }\n  }]);\n\n  return GenerateClouds;\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jbG91ZHMuanM/YjU5ZCJdLCJuYW1lcyI6WyJtYXAiLCJ2YWwiLCJzbWluIiwic21heCIsImVtaW4iLCJlbWF4Iiwiaml0dGVyIiwiZ2VvbWV0cnkiLCJwZXIiLCJpIiwibCIsImF0dHJpYnV0ZXMiLCJwb3NpdGlvbiIsImNvdW50IiwiYXJyYXkiLCJNYXRoIiwicmFuZG9tIiwiR2VuZXJhdGVDbG91ZHMiLCJwb3MiLCJzY2VuZSIsInNwZWVkIiwic2NhbGUiLCJncm91cCIsIkdyb3VwIiwidHVmdDEiLCJTcGhlcmVCdWZmZXJHZW9tZXRyeSIsInRyYW5zbGF0ZSIsInR1ZnQzIiwidHVmdDIiLCJjb21wdXRlVmVydGV4Tm9ybWFscyIsIm1hdCIsIk1lc2hQaG9uZ01hdGVyaWFsIiwiY29sb3IiLCJmbGF0U2hhZGluZyIsInNpZGUiLCJEb3VibGVTaWRlIiwiY2xvdWQiLCJNZXNoIiwiY2xvdWQxIiwiY2xvdWQyIiwiYWRkIiwiY2FzdFNoYWRvdyIsInJlY2VpdmVTaGFkb3ciLCJ4IiwieSIsInoiLCJncmFzcyIsImdlb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtDQUtBOztBQUNBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFZQyxJQUFaLEVBQWtCQyxJQUFsQixFQUF3QkMsSUFBeEI7QUFBQSxTQUFpQyxDQUFDQSxJQUFJLEdBQUdELElBQVIsS0FBaUJILEdBQUcsR0FBR0MsSUFBdkIsS0FBZ0NDLElBQUksR0FBR0QsSUFBdkMsSUFBK0NFLElBQWhGO0FBQUEsQ0FBWjs7QUFDQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxRQUFELEVBQVdDLEdBQVgsRUFBbUI7QUFDOUIsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBUixFQUFXQyxDQUFDLEdBQUdILFFBQVEsQ0FBQ0ksVUFBVCxDQUFvQkMsUUFBcEIsQ0FBNkJDLEtBQWpELEVBQXdE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QU4sR0FBc0IsSUFBdEI7QUFDQXBCLFNBQUssQ0FBQ1YsUUFBTixDQUFlK0IsQ0FBZixHQUFtQnpCLEdBQUcsQ0FBQ3lCLENBQXZCO0FBQ0FyQixTQUFLLENBQUNWLFFBQU4sQ0FBZWdDLENBQWYsR0FBbUIxQixHQUFHLENBQUMwQixDQUF2QjtBQUNBdEIsU0FBSyxDQUFDVixRQUFOLENBQWVpQyxDQUFmLEdBQW1CM0IsR0FBRyxDQUFDMkIsQ0FBdkI7QUFFQSxTQUFLQyxLQUFMLEdBQWF4QixLQUFiO0FBQ0EsU0FBS0YsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0g7O0FBeERMO0FBQUE7QUFBQSw2QkEwRGE7QUFDTCxVQUFJNkIsSUFBSSxHQUFHLEtBQUtELEtBQWhCO0FBQ0FDLFVBQUksQ0FBQ25DLFFBQUwsQ0FBYytCLENBQWQsSUFBbUIsS0FBS3ZCLEtBQXhCOztBQUNBLFVBQUkyQixJQUFJLENBQUNuQyxRQUFMLENBQWMrQixDQUFkLEdBQWtCLEdBQXRCLEVBQTJCO0FBQ3ZCSSxZQUFJLENBQUNuQyxRQUFMLENBQWMrQixDQUFkLEdBQWtCLEtBQUt6QixHQUFMLENBQVN5QixDQUEzQjtBQUNIO0FBQ0o7QUFoRUw7O0FBQUE7QUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvY2xvdWRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXG5cbmltcG9ydCB7IERvdWJsZVNpZGUsIEdyb3VwLCBNZXNoLCBNZXNoUGhvbmdNYXRlcmlhbCwgU3BoZXJlQnVmZmVyR2VvbWV0cnkgfSBmcm9tICd0aHJlZSc7XG5cblxuLy8gUmFuZG9tbHkgZGVscGxhY2UgY2xvdWQgdmVydGljaWVzXG5jb25zdCBtYXAgPSAodmFsLCBzbWluLCBzbWF4LCBlbWluLCBlbWF4KSA9PiAoZW1heCAtIGVtaW4pICogKHZhbCAtIHNtaW4pIC8gKHNtYXggLSBzbWluKSArIGVtaW5cbmNvbnN0IGppdHRlciA9IChnZW9tZXRyeSwgcGVyKSA9PiB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50OyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlbKGkgKiAzKV0gKz0gbWFwKE1hdGgucmFuZG9tKCksIDAsIDEsIC1wZXIsIHBlcilcbiAgICAgICAgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheVsoaSAqIDMpICsgMV0gKz0gbWFwKE1hdGgucmFuZG9tKCksIDAsIDEsIC1wZXIsIHBlcilcbiAgICAgICAgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheVsoaSAqIDMpICsgMl0gKz0gbWFwKE1hdGgucmFuZG9tKCksIDAsIDEsIC1wZXIsIHBlcilcbiAgICB9O1xufVxuXG5leHBvcnQgY2xhc3MgR2VuZXJhdGVDbG91ZHMge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgc2NlbmUsIHNwZWVkLCBzY2FsZSkge1xuXG5cbiAgICAgICAgY29uc3QgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcblxuICAgICAgICBjb25zdCB0dWZ0MSA9IG5ldyBTcGhlcmVCdWZmZXJHZW9tZXRyeSgxLjUgKiBzY2FsZSwgMTAwLCAxMSlcbiAgICAgICAgdHVmdDEudHJhbnNsYXRlKC0yICogc2NhbGUsIDAsIDApXG5cblxuICAgICAgICBjb25zdCB0dWZ0MyA9IG5ldyBTcGhlcmVCdWZmZXJHZW9tZXRyeSgxLjUgKiBzY2FsZSwgNywgMTEpXG4gICAgICAgIHR1ZnQzLnRyYW5zbGF0ZSgyICogc2NhbGUsIDAsIDApXG5cbiAgICAgICAgY29uc3QgdHVmdDIgPSBuZXcgU3BoZXJlQnVmZmVyR2VvbWV0cnkoMi4wICogc2NhbGUsIDcsIDExKVxuICAgICAgICB0dWZ0Mi50cmFuc2xhdGUoMCwgMCwgMClcblxuICAgICAgICBqaXR0ZXIodHVmdDEsIDAuMSlcbiAgICAgICAgaml0dGVyKHR1ZnQyLCAwLjEpXG4gICAgICAgIGppdHRlcih0dWZ0MywgMC4xKVxuXG4gICAgICAgIHR1ZnQxLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKClcblxuXG4gICAgICAgIGNvbnN0IG1hdCA9IG5ldyBNZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIGZsYXRTaGFkaW5nOiB0cnVlLFxuICAgICAgICAgICAgc2lkZTpEb3VibGVTaWRlLFxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBjbG91ZCA9IG5ldyBNZXNoKFxuICAgICAgICAgICAgdHVmdDEsXG4gICAgICAgICAgICBtYXRcbiAgICAgICAgKVxuICAgICAgICBsZXQgY2xvdWQxID0gbmV3IE1lc2goXG4gICAgICAgICAgICB0dWZ0MixcbiAgICAgICAgICAgIG1hdFxuICAgICAgICApXG4gICAgICAgIGxldCBjbG91ZDIgPSBuZXcgTWVzaChcbiAgICAgICAgICAgIHR1ZnQzLFxuICAgICAgICAgICAgbWF0XG4gICAgICAgIClcblxuICAgICAgICBncm91cC5hZGQoY2xvdWQpXG4gICAgICAgIGdyb3VwLmFkZChjbG91ZDEpXG4gICAgICAgIGdyb3VwLmFkZChjbG91ZDIpXG5cbiAgICAgICAgc2NlbmUuYWRkKGdyb3VwKVxuICAgICAgICBncm91cC5jYXN0U2hhZG93ID0gdHJ1ZVxuICAgICAgICBncm91cC5yZWNlaXZlU2hhZG93ID0gdHJ1ZVxuICAgICAgICBncm91cC5wb3NpdGlvbi54ID0gcG9zLnhcbiAgICAgICAgZ3JvdXAucG9zaXRpb24ueSA9IHBvcy55XG4gICAgICAgIGdyb3VwLnBvc2l0aW9uLnogPSBwb3MuelxuXG4gICAgICAgIHRoaXMuZ3Jhc3MgPSBncm91cFxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWRcbiAgICAgICAgdGhpcy5wb3MgPSBwb3NcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGxldCBnZW9zID0gdGhpcy5ncmFzc1xuICAgICAgICBnZW9zLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZFxuICAgICAgICBpZiAoZ2Vvcy5wb3NpdGlvbi54ID4gNDAwKSB7XG4gICAgICAgICAgICBnZW9zLnBvc2l0aW9uLnggPSB0aGlzLnBvcy54XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/clouds.js\n");

/***/ })

})