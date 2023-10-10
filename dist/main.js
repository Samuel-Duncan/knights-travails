/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_KnightMoves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/KnightMoves */ \"./src/modules/KnightMoves.js\");\n\n\nconst start = [0, 0];\nconst end = [4, 3];\nconst knight = new _modules_KnightMoves__WEBPACK_IMPORTED_MODULE_0__[\"default\"](start, end);\nconsole.log(knight.moves);\nknight.searchMoves();\n\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

/***/ }),

/***/ "./src/modules/KnightMoves.js":
/*!************************************!*\
  !*** ./src/modules/KnightMoves.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ KnightMoves)\n/* harmony export */ });\n/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ \"./src/modules/Node.js\");\n/* harmony import */ var _Queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Queue */ \"./src/modules/Queue.js\");\n\n\n\n// Function to Build the Tree (Generate Moves):\n// This function should take the current position as input and generate all\n// possible moves from that position. It can be a recursive function that\n// explores the tree, generating child nodes for each valid move.\n// The function should return the tree structure.\n\n// Function to Search the Tree: This function should take the tree structure\n// and the starting and ending positions as input. It uses a search\n// algorithm (e.g., BFS or DFS) to traverse the tree and find the shortest\n// path from the starting position to the ending position.\n\n// Main Function: This is the entry point of your program. It should call the\n// \"Build Tree\" function to create the tree and then call the \"Search Tree\"\n// function to find the shortest path. Finally, it should return or display\n// the path.\n\nclass KnightMoves {\n  constructor(start, end) {\n    this.start = start;\n    this.end = end;\n    this.moves = this.getMoves(start);\n  }\n\n  getMoves(\n    start,\n    moves = [\n      [1, 2],\n      [2, 1],\n      [2, -1],\n      [1, -2],\n      [-1, -2],\n      [-2, -1],\n      [-2, 1],\n      [-1, 2],\n    ],\n    root = new _Node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](start),\n  ) {\n    if (moves.length < 1) {\n      return root;\n    }\n\n    const move = moves.shift();\n    const newX = start[0] + move[0];\n    const newY = start[1] + move[1];\n\n    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {\n      const newMove = [newX, newY];\n      root.add(newMove);\n    }\n\n    return this.getMoves(start, moves, root);\n  }\n\n  // Level Order\n  searchMoves(start, end, moves = this.moves) {\n    if (moves == null) {\n      return;\n    }\n\n    const q = new _Queue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    q.enqueue(moves);\n\n    while (!q.isEmpty()) {\n      let n = q.size();\n\n      while (n > 0) {\n        const p = q.dequeue();\n        if (p == null) {\n          return;\n        }\n        console.log(p.data);\n\n        for (let i = 0; i < p.descendants.length; i++) {\n          q.enqueue(p.descendants[i]);\n          n--;\n          // if (JSON.stringify(p.data) !== JSON.stringify(end)) {\n          //   p.descendants[i].add(this.getMoves(p.descendants[i].data));\n          // }\n        }\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://knights-travails/./src/modules/KnightMoves.js?");

/***/ }),

/***/ "./src/modules/Node.js":
/*!*****************************!*\
  !*** ./src/modules/Node.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Node)\n/* harmony export */ });\nclass Node {\n  constructor(data) {\n    this.data = data;\n    this.descendants = [];\n  }\n\n  add(data) {\n    this.descendants.push(new Node(data));\n  }\n\n  remove(data) {\n    this.children = this.descendants.filter((node) => node.data !== data);\n  }\n}\n\n\n//# sourceURL=webpack://knights-travails/./src/modules/Node.js?");

/***/ }),

/***/ "./src/modules/Queue.js":
/*!******************************!*\
  !*** ./src/modules/Queue.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Queue)\n/* harmony export */ });\nclass Queue {\n  constructor() {\n    this.items = [];\n  }\n\n  enqueue(item) {\n    this.items.push(item);\n  }\n\n  dequeue() {\n    if (this.isEmpty()) {\n      return null;\n    }\n    return this.items.shift();\n  }\n\n  front() {\n    if (this.isEmpty()) {\n      return null;\n    }\n    return this.items[0];\n  }\n\n  isEmpty() {\n    return this.items.length === 0;\n  }\n\n  size() {\n    return this.items.length;\n  }\n\n  clear() {\n    this.items = [];\n  }\n}\n\n\n//# sourceURL=webpack://knights-travails/./src/modules/Queue.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;