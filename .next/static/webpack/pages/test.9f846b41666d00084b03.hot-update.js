self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/gameFundalmentals/ProceduleTerrain.js":
/*!**********************************************************!*\
  !*** ./components/gameFundalmentals/ProceduleTerrain.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReturnTerrainPointer": function() { return /* binding */ ReturnTerrainPointer; },
/* harmony export */   "generateTerrain": function() { return /* binding */ generateTerrain; },
/* harmony export */   "generateTerrainChunk": function() { return /* binding */ generateTerrainChunk; },
/* harmony export */   "getTerrainHeight": function() { return /* binding */ getTerrainHeight; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Algorithms/VectorUtils */ "./components/Algorithms/VectorUtils.js");
/* harmony import */ var _Core_API_gemotryManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core-API/gemotryManager */ "./components/Core-API/gemotryManager.js");
/* harmony import */ var _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core-API/PerlinNoise/PerlingNoise */ "./components/Core-API/PerlinNoise/PerlingNoise.js");
/* module decorator */ module = __webpack_require__.hmd(module);
// Written By Harvey Randall \\





var SimplexNoise = __webpack_require__(/*! simplex-noise */ "./node_modules/simplex-noise/simplex-noise.js");

var currentTerrain;
function ReturnTerrainPointer() {
  return currentTerrain;
}
/*eslint complexity: ["error", 20]*/

_c = ReturnTerrainPointer;
function generateTerrain(seed, SceneToGet) {
  //------------[MAIN FUNCTION VARIABLES]------------\\
  var simplex = new SimplexNoise(seed);
  var geometry = new three__WEBPACK_IMPORTED_MODULE_3__.PlaneBufferGeometry(500, 500, 100, 100);
  var colours = [];
  var positionAttribute = geometry.getAttribute("position"); //------------[Edit the Geomtry Accordingly]------------\\

  for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {
    // Get Data position
    var vertex = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
    vertex.fromBufferAttribute(positionAttribute, i); // Check Height from Perlin Noise Generator

    var height = simplex.noise2D(vertex.x / 128, vertex.y / 128) * 30; // Set the height accordingly

    geometry.attributes.position.array[i * 3 + 2] = height; // Update Vertice colours accordinly

    if (height > 23) {
      colours.push(1, 1, 1);
    } else if (height > 5) {
      colours.push(0.56, 0.54, 0.48);
    } else if (height < 2) {
      colours.push(0.501, 0.772, 0.87);
    } else {
      colours.push(0.56, 0.68, 0.166);
    }
  } //------------[Create Material]------------\\


  var material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhongMaterial({
    vertexColors: colours,
    reflectivity: 0,
    roughness: 1,
    flatShading: true
  }); //------------[Create Mesh]------------\\

  var plane2 = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, material);
  plane2.receiveShadow = true;
  plane2.castShadow = true;
  plane2.position.y = -3;
  plane2.rotateX(Math.PI / 2 + Math.PI); //------------[Edit colour attribute]------------\\

  geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_3__.BufferAttribute(new Float32Array(colours), 3)); //geometry.computeVertexNormals();
  //------------[Add to Base Scene]------------\\

  currentTerrain = plane2;
  plane2.name = "MAIN_TERRAIN";
  SceneToGet.add(plane2);
}
function generateTerrainChunk(seed, Position, gain, divisor) {
  //------------[MAIN FUNCTION VARIABLES]------------\\
  //const simplex = new SimplexNoise(seed);
  var geometry = new three__WEBPACK_IMPORTED_MODULE_3__.PlaneBufferGeometry(500, 500, 30, 30);
  var colours = [];
  var fbm = new _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_2__.FBM({
    seed: seed,
    scale: 0.007,
    octaves: 6,
    persistance: 0.5,
    lacunarity: 2,
    redistribution: 2,
    height: 40
  });
  var simplex = new _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_2__.Perlin(seed); //------------[Create Material]------------\\

  var material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhongMaterial({
    vertexColors: colours,
    reflectivity: 0,
    flatShading: true,
    blending: false
  }); //------------[Create Mesh]------------\\

  var plane2 = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, material);
  plane2.receiveShadow = true;
  plane2.castShadow = true;
  plane2.position.set(Position.x, -3, Position.y);
  plane2.rotateX(Math.PI / 2 + Math.PI);
  var positionAttribute = geometry.getAttribute("position"); //------------[Edit the Geomtry Accordingly]------------\\

  for (var i = 0; i < positionAttribute.count; i++) {
    // Get Data position
    var vertex = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
    vertex.fromBufferAttribute(positionAttribute, i);
    plane2.localToWorld(vertex); // Check Height from Perlin Noise Generator

    var location = new three__WEBPACK_IMPORTED_MODULE_3__.Vector2((vertex.x + Position.x) * divisor, (vertex.y - Position.y) * divisor);
    var height = fbm.get2(location) * gain * 4; // Set the height accordingly

    if (location.x <= 200 && location.y >= -60 && location.x >= -250 && location.y <= 100) {
      console.log(location); //height = 500
    }

    positionAttribute.setZ(i, height); //geometry.attributes.position.array[i * 3 + 2] = height;
    // Update Vertice colours accordinly

    if (height > 100) {
      colours.push(1, 1, 1);
    } else if (height > 50) {
      colours.push(0.56, 0.54, 0.48);
    } else if (height > 8) {
      colours.push(0.56, 0.68, 0.166);
    } else if (height > 5) {
      colours.push(0.9922, 0.8745, 0.466);
    } else {
      var heightSecondary = simplex.get2(new three__WEBPACK_IMPORTED_MODULE_3__.Vector2((vertex.x + Position.x) * divisor, (vertex.y - Position.y) * divisor)) * 0.75;
      geometry.attributes.position.array[i * 3 + 2] = heightSecondary;
      colours.push(0, (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromInterval)(400, 500) / 1000, (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromInterval)(700, 800) / 1000);
    }
  } //------------[Edit colour attribute]------------\\


  geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_3__.BufferAttribute(new Float32Array(colours), 3)); //------------[Add to Base Scene]------------\\

  currentTerrain = plane2;
  plane2.name = "Terrain_Chunk_".concat(Position.x, ":").concat(Position.y);
  return plane2;
}
function getTerrainHeight(position, seed, gain, divisor, scene) {
  var fbm = new _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_2__.FBM({
    seed: seed,
    scale: 0.007,
    octaves: 6,
    persistance: 0.5,
    lacunarity: 2,
    redistribution: 2,
    height: 40
  }); //console.table(position)

  var height = fbm.get2(new three__WEBPACK_IMPORTED_MODULE_3__.Vector2(position.x * divisor, -position.z * divisor)) * gain * 4;
  /*let cube = debugCube()
  scene.add(cube)
  cube.position.set(position.x , height, position.z)
  cube.material.color = new Color(height*2)*/

  return height - 3;
}

var _c;

$RefreshReg$(_c, "ReturnTerrainPointer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9Qcm9jZWR1bGVUZXJyYWluLmpzIl0sIm5hbWVzIjpbIlNpbXBsZXhOb2lzZSIsInJlcXVpcmUiLCJjdXJyZW50VGVycmFpbiIsIlJldHVyblRlcnJhaW5Qb2ludGVyIiwiZ2VuZXJhdGVUZXJyYWluIiwic2VlZCIsIlNjZW5lVG9HZXQiLCJzaW1wbGV4IiwiZ2VvbWV0cnkiLCJQbGFuZUJ1ZmZlckdlb21ldHJ5IiwiY29sb3VycyIsInBvc2l0aW9uQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiaSIsImwiLCJhdHRyaWJ1dGVzIiwicG9zaXRpb24iLCJjb3VudCIsInZlcnRleCIsIlZlY3RvcjMiLCJmcm9tQnVmZmVyQXR0cmlidXRlIiwiaGVpZ2h0Iiwibm9pc2UyRCIsIngiLCJ5IiwiYXJyYXkiLCJwdXNoIiwibWF0ZXJpYWwiLCJNZXNoUGhvbmdNYXRlcmlhbCIsInZlcnRleENvbG9ycyIsInJlZmxlY3Rpdml0eSIsInJvdWdobmVzcyIsImZsYXRTaGFkaW5nIiwicGxhbmUyIiwiTWVzaCIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93Iiwicm90YXRlWCIsIk1hdGgiLCJQSSIsInNldEF0dHJpYnV0ZSIsIkJ1ZmZlckF0dHJpYnV0ZSIsIkZsb2F0MzJBcnJheSIsIm5hbWUiLCJhZGQiLCJnZW5lcmF0ZVRlcnJhaW5DaHVuayIsIlBvc2l0aW9uIiwiZ2FpbiIsImRpdmlzb3IiLCJmYm0iLCJGQk0iLCJzY2FsZSIsIm9jdGF2ZXMiLCJwZXJzaXN0YW5jZSIsImxhY3VuYXJpdHkiLCJyZWRpc3RyaWJ1dGlvbiIsIlBlcmxpbiIsImJsZW5kaW5nIiwic2V0IiwibG9jYWxUb1dvcmxkIiwibG9jYXRpb24iLCJWZWN0b3IyIiwiZ2V0MiIsImNvbnNvbGUiLCJsb2ciLCJzZXRaIiwiaGVpZ2h0U2Vjb25kYXJ5IiwicmFuZG9tSW50RnJvbUludGVydmFsIiwiZ2V0VGVycmFp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QUFyRCxDQUFULElBQTBFRCxJQUExRSxHQUFpRixDQUE5RjtBQUNBO0FBQ0o7QUFDQTtBQUNBOztBQUNJLFNBQU8xQixNQUFNLEdBQUcsQ0FBaEI7QUFDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0LjlmODQ2YjQxNjY2ZDAwMDg0YjAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcclxuXHJcbmltcG9ydCB7XHJcbiAgICBCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBDb2xvcixcclxuICAgIE1lc2gsXHJcbiAgICBNZXNoUGhvbmdNYXRlcmlhbCxcclxuICAgIFBsYW5lQnVmZmVyR2VvbWV0cnksXHJcbiAgICBWZWN0b3IyLFxyXG4gICAgVmVjdG9yMyxcclxufSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgcmFuZG9tSW50RnJvbUludGVydmFsIH0gZnJvbSBcIi4uL0FsZ29yaXRobXMvVmVjdG9yVXRpbHNcIjtcclxuaW1wb3J0IHsgZGVidWdDdWJlIH0gZnJvbSBcIi4uL0NvcmUtQVBJL2dlbW90cnlNYW5hZ2VyXCI7XHJcblxyXG5pbXBvcnQgeyBQZXJsaW4sIEZCTSB9IGZyb20gXCIuLi9Db3JlLUFQSS9QZXJsaW5Ob2lzZS9QZXJsaW5nTm9pc2VcIjtcclxudmFyIFNpbXBsZXhOb2lzZSA9IHJlcXVpcmUoXCJzaW1wbGV4LW5vaXNlXCIpO1xyXG5cclxubGV0IGN1cnJlbnRUZXJyYWluO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJldHVyblRlcnJhaW5Qb2ludGVyKCkge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRUZXJyYWluO1xyXG59XHJcblxyXG4vKmVzbGludCBjb21wbGV4aXR5OiBbXCJlcnJvclwiLCAyMF0qL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUZXJyYWluKHNlZWQsIFNjZW5lVG9HZXQpIHtcclxuICAgIC8vLS0tLS0tLS0tLS0tW01BSU4gRlVOQ1RJT04gVkFSSUFCTEVTXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIGNvbnN0IHNpbXBsZXggPSBuZXcgU2ltcGxleE5vaXNlKHNlZWQpO1xyXG4gICAgbGV0IGdlb21ldHJ5ID0gbmV3IFBsYW5lQnVmZmVyR2VvbWV0cnkoNTAwLCA1MDAsIDEwMCwgMTAwKTtcclxuICAgIGxldCBjb2xvdXJzID0gW107XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25BdHRyaWJ1dGUgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtFZGl0IHRoZSBHZW9tdHJ5IEFjY29yZGluZ2x5XS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5jb3VudDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIC8vIEdldCBEYXRhIHBvc2l0aW9uXHJcbiAgICAgICAgY29uc3QgdmVydGV4ID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICB2ZXJ0ZXguZnJvbUJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbkF0dHJpYnV0ZSwgaSk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIEhlaWdodCBmcm9tIFBlcmxpbiBOb2lzZSBHZW5lcmF0b3JcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gc2ltcGxleC5ub2lzZTJEKHZlcnRleC54IC8gMTI4LCB2ZXJ0ZXgueSAvIDEyOCkgKiAzMDtcclxuICAgICAgICAvLyBTZXQgdGhlIGhlaWdodCBhY2NvcmRpbmdseVxyXG4gICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlbaSAqIDMgKyAyXSA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIFZlcnRpY2UgY29sb3VycyBhY2NvcmRpbmx5XHJcbiAgICAgICAgaWYgKGhlaWdodCA+IDIzKSB7XHJcbiAgICAgICAgICAgIGNvbG91cnMucHVzaCgxLCAxLCAxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA+IDUpIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTYsIDAuNTQsIDAuNDgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0IDwgMikge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMC41MDEsIDAuNzcyLCAwLjg3KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMC41NiwgMC42OCwgMC4xNjYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtDcmVhdGUgTWF0ZXJpYWxdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgdmFyIG1hdGVyaWFsID0gbmV3IE1lc2hQaG9uZ01hdGVyaWFsKHtcclxuICAgICAgICB2ZXJ0ZXhDb2xvcnM6IGNvbG91cnMsXHJcbiAgICAgICAgcmVmbGVjdGl2aXR5OiAwLFxyXG4gICAgICAgIHJvdWdobmVzczogMSxcclxuICAgICAgICBmbGF0U2hhZGluZzogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0NyZWF0ZSBNZXNoXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIHZhciBwbGFuZTIgPSBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG4gICAgcGxhbmUyLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xyXG4gICAgcGxhbmUyLmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgcGxhbmUyLnBvc2l0aW9uLnkgPSAtMztcclxuICAgIHBsYW5lMi5yb3RhdGVYKE1hdGguUEkgLyAyICsgTWF0aC5QSSk7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bRWRpdCBjb2xvdXIgYXR0cmlidXRlXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcclxuICAgICAgICBcImNvbG9yXCIsXHJcbiAgICAgICAgbmV3IEJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbG91cnMpLCAzKVxyXG4gICAgKTtcclxuICAgIC8vZ2VvbWV0cnkuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtBZGQgdG8gQmFzZSBTY2VuZV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBjdXJyZW50VGVycmFpbiA9IHBsYW5lMjtcclxuICAgIHBsYW5lMi5uYW1lID0gXCJNQUlOX1RFUlJBSU5cIjtcclxuICAgIFNjZW5lVG9HZXQuYWRkKHBsYW5lMik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRlcnJhaW5DaHVuayhzZWVkLCBQb3NpdGlvbiwgZ2FpbiwgZGl2aXNvcikge1xyXG4gICAgLy8tLS0tLS0tLS0tLS1bTUFJTiBGVU5DVElPTiBWQVJJQUJMRVNdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgLy9jb25zdCBzaW1wbGV4ID0gbmV3IFNpbXBsZXhOb2lzZShzZWVkKTtcclxuICAgIGxldCBnZW9tZXRyeSA9IG5ldyBQbGFuZUJ1ZmZlckdlb21ldHJ5KDUwMCwgNTAwLCAzMCwgMzApO1xyXG4gICAgbGV0IGNvbG91cnMgPSBbXTtcclxuICAgIGNvbnN0IGZibSA9IG5ldyBGQk0oe1xyXG4gICAgICAgIHNlZWQ6IHNlZWQsXHJcbiAgICAgICAgc2NhbGU6IDAuMDA3LFxyXG4gICAgICAgIG9jdGF2ZXM6IDYsXHJcbiAgICAgICAgcGVyc2lzdGFuY2U6IDAuNSxcclxuICAgICAgICBsYWN1bmFyaXR5OiAyLFxyXG4gICAgICAgIHJlZGlzdHJpYnV0aW9uOiAyLFxyXG4gICAgICAgIGhlaWdodDogNDAsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzaW1wbGV4ID0gbmV3IFBlcmxpbihzZWVkKVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0NyZWF0ZSBNYXRlcmlhbF0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICB2YXIgbWF0ZXJpYWwgPSBuZXcgTWVzaFBob25nTWF0ZXJpYWwoe1xyXG4gICAgICAgIHZlcnRleENvbG9yczogY29sb3VycyxcclxuICAgICAgICByZWZsZWN0aXZpdHk6IDAsXHJcbiAgICAgICAgZmxhdFNoYWRpbmc6IHRydWUsXHJcbiAgICAgICAgYmxlbmRpbmc6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtDcmVhdGUgTWVzaF0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICB2YXIgcGxhbmUyID0gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgIHBsYW5lMi5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgIHBsYW5lMi5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgIHBsYW5lMi5wb3NpdGlvbi5zZXQoUG9zaXRpb24ueCwgLTMsIFBvc2l0aW9uLnkpO1xyXG4gICAgcGxhbmUyLnJvdGF0ZVgoTWF0aC5QSSAvIDIgKyBNYXRoLlBJKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBwb3NpdGlvbkF0dHJpYnV0ZSA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpO1xyXG4gICAgLy8tLS0tLS0tLS0tLS1bRWRpdCB0aGUgR2VvbXRyeSBBY2NvcmRpbmdseV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBmb3IgKHZhciBpID0gMDsgIGkgPCBwb3NpdGlvbkF0dHJpYnV0ZS5jb3VudCA7aSsrKSB7XHJcbiAgICAgICAgLy8gR2V0IERhdGEgcG9zaXRpb25cclxuICAgICAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIHZlcnRleC5mcm9tQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uQXR0cmlidXRlLCBpKTtcclxuXHJcbiAgICAgICAgcGxhbmUyLmxvY2FsVG9Xb3JsZCh2ZXJ0ZXgpXHJcblxyXG4gICAgICAgIC8vIENoZWNrIEhlaWdodCBmcm9tIFBlcmxpbiBOb2lzZSBHZW5lcmF0b3JcclxuXHJcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgICh2ZXJ0ZXgueCArIChQb3NpdGlvbi54KSkgKiBkaXZpc29yLCAgXHJcbiAgICAgICAgICAgICh2ZXJ0ZXgueSAtIChQb3NpdGlvbi55KSkgKiBkaXZpc29yXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBsZXQgaGVpZ2h0ID0gZmJtLmdldDIobG9jYXRpb24pICogZ2FpbiAqIDRcclxuICAgICAgICAvLyBTZXQgdGhlIGhlaWdodCBhY2NvcmRpbmdseVxyXG4gICAgICAgIGlmIChsb2NhdGlvbi54IDw9IDIwMCAmJiBsb2NhdGlvbi55ID49IC02MCAmJiBsb2NhdGlvbi54ID49IC0yNTAgJiYgbG9jYXRpb24ueSA8PSAxMDAgKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxyXG4gICAgICAgICAgICAvL2hlaWdodCA9IDUwMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9zaXRpb25BdHRyaWJ1dGUuc2V0WihpLCBoZWlnaHQpXHJcbiAgICAgICAgLy9nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5W2kgKiAzICsgMl0gPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBWZXJ0aWNlIGNvbG91cnMgYWNjb3JkaW5seVxyXG4gICAgICAgIGlmIChoZWlnaHQgPiAxMDApIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDEsIDEsIDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0ID4gNTApIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTYsIDAuNTQsIDAuNDgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0ID4gOCkge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMC41NiwgMC42OCwgMC4xNjYpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0ID4gNSl7XHJcbiAgICAgICAgICAgIGNvbG91cnMucHVzaCgwLjk5MjIsIDAuODc0NSwgMC40NjYpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0U2Vjb25kYXJ5ID0gc2ltcGxleC5nZXQyKG5ldyBWZWN0b3IyKCh2ZXJ0ZXgueCArIChQb3NpdGlvbi54KSkgKiBkaXZpc29yLCAodmVydGV4LnkgLSAoUG9zaXRpb24ueSkpICogZGl2aXNvcikpICogMC43NVxyXG4gICAgICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5W2kgKiAzICsgMl0gPSBoZWlnaHRTZWNvbmRhcnk7XHJcbiAgICAgICAgICAgIGNvbG91cnMucHVzaCgwLCByYW5kb21JbnRGcm9tSW50ZXJ2YWwoNDAwLCA1MDApIC8gMTAwMCwgcmFuZG9tSW50RnJvbUludGVydmFsKDcwMCwgODAwKSAvIDEwMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtFZGl0IGNvbG91ciBhdHRyaWJ1dGVdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgIFwiY29sb3JcIixcclxuICAgICAgICBuZXcgQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sb3VycyksIDMpXHJcbiAgICApO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0FkZCB0byBCYXNlIFNjZW5lXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIGN1cnJlbnRUZXJyYWluID0gcGxhbmUyO1xyXG4gICAgcGxhbmUyLm5hbWUgPSBgVGVycmFpbl9DaHVua18ke1Bvc2l0aW9uLnh9OiR7UG9zaXRpb24ueX1gO1xyXG4gICAgcmV0dXJuIHBsYW5lMjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXJyYWluSGVpZ2h0KHBvc2l0aW9uLCBzZWVkLCBnYWluLCBkaXZpc29yLCBzY2VuZSkge1xyXG4gICAgY29uc3QgZmJtID0gbmV3IEZCTSh7XHJcbiAgICAgICAgc2VlZDogc2VlZCxcclxuICAgICAgICBzY2FsZTogMC4wMDcsXHJcbiAgICAgICAgb2N0YXZlczogNixcclxuICAgICAgICBwZXJzaXN0YW5jZTogMC41LFxyXG4gICAgICAgIGxhY3VuYXJpdHk6IDIsXHJcbiAgICAgICAgcmVkaXN0cmlidXRpb246IDIsXHJcbiAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgIH0pO1xyXG4gICAgLy9jb25zb2xlLnRhYmxlKHBvc2l0aW9uKVxyXG4gICAgbGV0IGhlaWdodCA9IGZibS5nZXQyKG5ldyBWZWN0b3IyKChwb3NpdGlvbi54KSAqIGRpdmlzb3IsICgtcG9zaXRpb24ueiApICogZGl2aXNvcikpICogZ2FpbiAqIDRcclxuICAgIC8qbGV0IGN1YmUgPSBkZWJ1Z0N1YmUoKVxyXG4gICAgc2NlbmUuYWRkKGN1YmUpXHJcbiAgICBjdWJlLnBvc2l0aW9uLnNldChwb3NpdGlvbi54ICwgaGVpZ2h0LCBwb3NpdGlvbi56KVxyXG4gICAgY3ViZS5tYXRlcmlhbC5jb2xvciA9IG5ldyBDb2xvcihoZWlnaHQqMikqL1xyXG4gICAgcmV0dXJuIGhlaWdodCAtIDNcclxufSJdLCJzb3VyY2VSb290IjoiIn0=