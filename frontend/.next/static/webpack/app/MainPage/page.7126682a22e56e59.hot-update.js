"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/MainPage/page",{

/***/ "(app-client)/./src/app/MainPage/page.js":
/*!**********************************!*\
  !*** ./src/app/MainPage/page.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction MainPage(param) {\n    let { name } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(name);\n    }, []);\n    Index.getInitialProps = async (param)=>{\n        let { query } = param;\n        const { name } = query;\n        return {\n            name\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"center-align\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Bienvenido !\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\MainPage\\\\page.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/images/timmy's dad.png\",\n                width: 200,\n                height: 300,\n                alt: \"image\",\n                priority: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\MainPage\\\\page.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\MainPage\\\\page.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(MainPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MainPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainPage);\nvar _c;\n$RefreshReg$(_c, \"MainPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9NYWluUGFnZS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRStCO0FBQ0c7QUFFbEMsU0FBU0UsU0FBUyxLQUFRO1FBQVIsRUFBRUMsSUFBSSxFQUFFLEdBQVI7O0lBQ2hCRixnREFBU0EsQ0FBQztRQUNSRyxRQUFRQyxHQUFHLENBQUNGO0lBQ2QsR0FBRyxFQUFFO0lBRUxHLE1BQU1DLGVBQWUsR0FBRztZQUFPLEVBQUVDLEtBQUssRUFBRTtRQUN0QyxNQUFNLEVBQUVMLElBQUksRUFBRSxHQUFHSztRQUVqQixPQUFPO1lBQUVMO1FBQUs7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNYLG1EQUFLQTtnQkFDSlksS0FBSTtnQkFDSkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsS0FBSTtnQkFDSkMsVUFBVTs7Ozs7Ozs7Ozs7O0FBSWxCO0dBdkJTZDtLQUFBQTtBQXlCVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL01haW5QYWdlL3BhZ2UuanM/NzMxNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIE1haW5QYWdlKHsgbmFtZSB9KSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lIH0gPSBxdWVyeTtcclxuXHJcbiAgICByZXR1cm4geyBuYW1lIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjZW50ZXItYWxpZ24nPlxyXG4gICAgICA8aDM+QmllbnZlbmlkbyAhPC9oMz5cclxuICAgICAgPEltYWdlXHJcbiAgICAgICAgc3JjPVwiL2ltYWdlcy90aW1teSdzIGRhZC5wbmdcIlxyXG4gICAgICAgIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgaGVpZ2h0PXszMDB9XHJcbiAgICAgICAgYWx0PSdpbWFnZSdcclxuICAgICAgICBwcmlvcml0eT17dHJ1ZX1cclxuICAgICAgPjwvSW1hZ2U+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlRWZmZWN0IiwiTWFpblBhZ2UiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsIkluZGV4IiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicHJpb3JpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/MainPage/page.js\n"));

/***/ })

});