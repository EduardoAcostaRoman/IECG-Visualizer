"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Registration/page",{

/***/ "(app-client)/./src/app/Registration/page.js":
/*!**************************************!*\
  !*** ./src/app/Registration/page.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Registration() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const submitUser = (e)=>{\n        e.preventDefault();\n        const enteredName = nameRef.current.value;\n        const enteredEmail = emailRef.current.value;\n        const enteredPassword = passwordRef.current.value;\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:4000/users\", {\n            name: enteredName,\n            email: enteredEmail,\n            password: enteredPassword\n        }).then((response)=>{\n            console.log(response);\n        }).catch((error)=>console.log(error));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col s12 m6 l3 offset-m3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"card-title\",\n                                children: \"Registro\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"input-field\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"username\",\n                                                type: \"text\",\n                                                className: \"validate\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"username\",\n                                                children: \"Nombre\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"input-field\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"email\",\n                                                type: \"email\",\n                                                className: \"validate\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"email\",\n                                                children: \"Correo Electr\\xf3nico\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"input-field\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"password\",\n                                                type: \"password\",\n                                                className: \"validate\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"password\",\n                                                children: \"Contrase\\xf1a\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/Registration\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn waves-effect waves-light\",\n                                            type: \"submit\",\n                                            name: \"action\",\n                                            children: [\n                                                \"Continuar\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"material-icons right\",\n                                                    children: \"send\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        class: \"waves-effect waves-light btn modal-trigger\",\n                                        href: \"#modal1\",\n                                        children: \"Modal\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"modal1\",\n                                        class: \"modal\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                class: \"modal-content\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                        children: \"Modal Header\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: \"A bunch of text\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                                lineNumber: 73,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                class: \"modal-footer\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"#modal1\",\n                                                    class: \"modal-close waves-effect waves-green btn-flat\",\n                                                    children: \"Agree\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lalo_\\\\Documents\\\\Developer Projects\\\\MERN STACK\\\\IECG-Visualizer\\\\frontend\\\\src\\\\app\\\\Registration\\\\page.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Registration, \"M/AU26EL1k3UvxWNq72hrl7CO4Y=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Registration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Registration);\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9SZWdpc3RyYXRpb24vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUV5QztBQUNHO0FBQ2Y7QUFDSDtBQUUxQixTQUFTSzs7SUFDUCxNQUFNQyxTQUFTSiwwREFBU0E7SUFFeEIsTUFBTUssVUFBVU4sNkNBQU1BO0lBQ3RCLE1BQU1PLFdBQVdQLDZDQUFNQTtJQUN2QixNQUFNUSxjQUFjUiw2Q0FBTUE7SUFFMUIsTUFBTVMsYUFBYSxDQUFDQztRQUNsQkEsRUFBRUMsY0FBYztRQUVoQixNQUFNQyxjQUFjTixRQUFRTyxPQUFPLENBQUNDLEtBQUs7UUFDekMsTUFBTUMsZUFBZVIsU0FBU00sT0FBTyxDQUFDQyxLQUFLO1FBQzNDLE1BQU1FLGtCQUFrQlIsWUFBWUssT0FBTyxDQUFDQyxLQUFLO1FBRWpEWCw2Q0FBS0EsQ0FDRmMsSUFBSSxDQUFDLCtCQUErQjtZQUNuQ0MsTUFBTU47WUFDTk8sT0FBT0o7WUFDUEssVUFBVUo7UUFDWixHQUNDSyxJQUFJLENBQUMsQ0FBQ0M7WUFDTEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkLEdBQ0NHLEtBQUssQ0FBQyxDQUFDQyxRQUFVSCxRQUFRQyxHQUFHLENBQUNFO0lBQ2xDO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBS0QsV0FBVTswQ0FBYTs7Ozs7OzBDQUM3Qiw4REFBQ0U7O2tEQUNDLDhEQUFDSDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNHO2dEQUFNQyxJQUFHO2dEQUFXQyxNQUFLO2dEQUFPTCxXQUFVOzs7Ozs7MERBQzNDLDhEQUFDTTtnREFBTUMsU0FBUTswREFBVzs7Ozs7Ozs7Ozs7O2tEQUU1Qiw4REFBQ1I7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDRztnREFBTUMsSUFBRztnREFBUUMsTUFBSztnREFBUUwsV0FBVTs7Ozs7OzBEQUN6Qyw4REFBQ007Z0RBQU1DLFNBQVE7MERBQVE7Ozs7Ozs7Ozs7OztrREFFekIsOERBQUNSO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ0c7Z0RBQU1DLElBQUc7Z0RBQVdDLE1BQUs7Z0RBQVdMLFdBQVU7Ozs7OzswREFDL0MsOERBQUNNO2dEQUFNQyxTQUFROzBEQUFXOzs7Ozs7Ozs7Ozs7a0RBRTVCLDhEQUFDakMsa0RBQUlBO3dDQUFDa0MsTUFBSztrREFDVCw0RUFBQ0M7NENBQ0NULFdBQVU7NENBQ1ZLLE1BQUs7NENBQ0xmLE1BQUs7O2dEQUNOOzhEQUVDLDhEQUFDb0I7b0RBQUVWLFdBQVU7OERBQXVCOzs7Ozs7Ozs7Ozs7Ozs7OztrREFJeEMsOERBQUNXO3dDQUNDQyxPQUFNO3dDQUNOSixNQUFLO2tEQUNOOzs7Ozs7a0RBSUQsOERBQUNUO3dDQUFJSyxJQUFHO3dDQUFTUSxPQUFNOzswREFDckIsOERBQUNiO2dEQUFJYSxPQUFNOztrRUFDVCw4REFBQ0M7a0VBQUc7Ozs7OztrRUFDSiw4REFBQ0M7a0VBQUU7Ozs7Ozs7Ozs7OzswREFFTCw4REFBQ2Y7Z0RBQUlhLE9BQU07MERBQ1QsNEVBQUNEO29EQUNDSCxNQUFLO29EQUNMSSxPQUFNOzhEQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXJCO0dBckZTcEM7O1FBQ1FILHNEQUFTQTs7O0tBRGpCRztBQXVGVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL1JlZ2lzdHJhdGlvbi9wYWdlLmpzPzZhNjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmZ1bmN0aW9uIFJlZ2lzdHJhdGlvbigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgbmFtZVJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGVtYWlsUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcGFzc3dvcmRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0VXNlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZW50ZXJlZE5hbWUgPSBuYW1lUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkRW1haWwgPSBlbWFpbFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID0gcGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3VzZXJzJywge1xyXG4gICAgICAgIG5hbWU6IGVudGVyZWROYW1lLFxyXG4gICAgICAgIGVtYWlsOiBlbnRlcmVkRW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IGVudGVyZWRQYXNzd29yZCxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCBzMTIgbTYgbDMgb2Zmc2V0LW0zJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtY29udGVudCc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJkLXRpdGxlJz5SZWdpc3Rybzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0ndXNlcm5hbWUnIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0ndmFsaWRhdGUnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VybmFtZSc+Tm9tYnJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWZpZWxkJz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdlbWFpbCcgdHlwZT0nZW1haWwnIGNsYXNzTmFtZT0ndmFsaWRhdGUnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+Q29ycmVvIEVsZWN0csOzbmljbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1maWVsZCc+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0ncGFzc3dvcmQnIHR5cGU9J3Bhc3N3b3JkJyBjbGFzc05hbWU9J3ZhbGlkYXRlJyAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncGFzc3dvcmQnPkNvbnRyYXNlw7FhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL1JlZ2lzdHJhdGlvbic+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2FjdGlvbidcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbnRpbnVhclxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMgcmlnaHQnPnNlbmQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPSd3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIG1vZGFsLXRyaWdnZXInXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9JyNtb2RhbDEnXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIE1vZGFsXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD0nbW9kYWwxJyBjbGFzcz0nbW9kYWwnPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+TW9kYWwgSGVhZGVyPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cD5BIGJ1bmNoIG9mIHRleHQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1mb290ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPScjbW9kYWwxJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9J21vZGFsLWNsb3NlIHdhdmVzLWVmZmVjdCB3YXZlcy1ncmVlbiBidG4tZmxhdCdcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBZ3JlZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiYXhpb3MiLCJSZWdpc3RyYXRpb24iLCJyb3V0ZXIiLCJuYW1lUmVmIiwiZW1haWxSZWYiLCJwYXNzd29yZFJlZiIsInN1Ym1pdFVzZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkTmFtZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRFbWFpbCIsImVudGVyZWRQYXNzd29yZCIsInBvc3QiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImZvcm0iLCJpbnB1dCIsImlkIiwidHlwZSIsImxhYmVsIiwiaHRtbEZvciIsImhyZWYiLCJidXR0b24iLCJpIiwiYSIsImNsYXNzIiwiaDQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/Registration/page.js\n"));

/***/ })

});