"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/WhyChooseUs/WhyChooseUs.jsx":
/*!************************************************!*\
  !*** ./components/WhyChooseUs/WhyChooseUs.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SlickSlider_SlickSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SlickSlider/SlickSlider */ \"./components/SlickSlider/SlickSlider.jsx\");\n/* harmony import */ var _WhyChooseUsItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WhyChooseUsItem */ \"./components/WhyChooseUs/WhyChooseUsItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst WhyChooseUs = ()=>{\n    _s();\n    const slickSettings = {\n        dots: false,\n        infinite: true,\n        speed: 1000,\n        autoplay: true,\n        arrows: false,\n        slidesToShow: 4,\n        slidesToScroll: 1,\n        responsive: [\n            {\n                breakpoint: 1200,\n                settings: {\n                    slidesToShow: 3,\n                    slidesToScroll: 1,\n                    infinite: true\n                }\n            },\n            {\n                breakpoint: 992,\n                settings: {\n                    slidesToShow: 2,\n                    slidesToScroll: 1\n                }\n            },\n            {\n                breakpoint: 767,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    arrows: false\n                }\n            },\n            {\n                breakpoint: 575,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    arrows: false\n                }\n            }\n        ]\n    };\n    const slider_items = [\n        {\n            src: \"/img/icon/choose_icon01.svg\",\n            alt: \"\",\n            link: \"/\",\n            title: \"Multi Chain Dex\",\n            description: \"Connecting all isolated blockchains and establish a cross-chain asset exchange network, providing all necessary underlying support for the Defi ecosystem.      \"\n        },\n        {\n            src: \"/img/icon/choose_icon02.svg\",\n            alt: \"\",\n            link: \"/\",\n            title: \"Never Ending Liquidity\",\n            description: \"Renq obtains its liquidity from a variety of exchanges and has the capacity to distribute a single trade transaction across multiple DEXs in order to obtain the most competitive prices.\"\n        },\n        {\n            src: \"/img/icon/choose_icon03.svg\",\n            alt: \"\",\n            link: \"/\",\n            title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: \"Protect the identity\"\n            }, void 0, false),\n            description: \"Add new, trending and rare artwork to your collection.\"\n        },\n        {\n            src: \"/img/icon/  .svg\",\n            alt: \"\",\n            link: \"/\",\n            title: \"Sercurity & control over money\",\n            description: \"Add new, trending and rare artwork to your collection.\"\n        },\n        {\n            src: \"/img/icon/choose_icon01.svg\",\n            alt: \"\",\n            link: \"/\",\n            title: \"Lifetime free transaction\",\n            description: \"Add new, trending and rare artwork to your collection.\"\n        },\n        {\n            src: \"/img/icon/choose_icon03.svg\",\n            alt: \"\",\n            link: \"/\",\n            title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: \"Protect the identity\"\n            }, void 0, false),\n            description: \"Add new, trending and rare artwork to your collection.\"\n        },\n        {\n            src: \"/img/icon/choose_icon04.svg\",\n            alt: \"\",\n            link: \"/\",\n            title: \"Sercurity & control over money\",\n            description: \"Add new, trending and rare artwork to your collection.\"\n        }\n    ];\n    const initalState = 0;\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initalState);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setCount((old)=>old == 6 ? 0 : old + 1);\n        }, 3000);\n        return ()=>clearInterval(interval);\n    }, []);\n    const toMultiply = 100 / slider_items.length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"choose-area pb-130\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row justify-content-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-xl-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"section-title text-center mb-50\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"sub-title\",\n                                    children: \"why Choose us \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"title\",\n                                    children: [\n                                        \"Why choose our Renq \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Token\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                                            lineNumber: 122,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row choose-active\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SlickSlider_SlickSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        settings: slickSettings,\n                        children: slider_items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-lg-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WhyChooseUsItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    item: item\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                                lineNumber: 131,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slide-progressbar\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            // width: `${count * toMultiply}%`,\n                            backgroundSize: \"\".concat(count * toMultiply, \"% 100%\")\n                        },\n                        className: \"slide-filler\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                        lineNumber: 139,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                    lineNumber: 138,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WhyChooseUs, \"APFonlZUZrAD65jVAhgGjmf94Uo=\");\n_c = WhyChooseUs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WhyChooseUs);\nvar _c;\n$RefreshReg$(_c, \"WhyChooseUs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1doeUNob29zZVVzL1doeUNob29zZVVzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDRTtBQUNMO0FBRWhELE1BQU1LLGNBQWMsSUFBTTs7SUFDeEIsTUFBTUMsZ0JBQWdCO1FBQ3BCQyxNQUFNLEtBQUs7UUFDWEMsVUFBVSxJQUFJO1FBQ2RDLE9BQU87UUFDUEMsVUFBVSxJQUFJO1FBQ2RDLFFBQVEsS0FBSztRQUNiQyxjQUFjO1FBQ2RDLGdCQUFnQjtRQUNoQkMsWUFBWTtZQUNWO2dCQUNFQyxZQUFZO2dCQUNaQyxVQUFVO29CQUNSSixjQUFjO29CQUNkQyxnQkFBZ0I7b0JBQ2hCTCxVQUFVLElBQUk7Z0JBQ2hCO1lBQ0Y7WUFDQTtnQkFDRU8sWUFBWTtnQkFDWkMsVUFBVTtvQkFDUkosY0FBYztvQkFDZEMsZ0JBQWdCO2dCQUNsQjtZQUNGO1lBQ0E7Z0JBQ0VFLFlBQVk7Z0JBQ1pDLFVBQVU7b0JBQ1JKLGNBQWM7b0JBQ2RDLGdCQUFnQjtvQkFDaEJGLFFBQVEsS0FBSztnQkFDZjtZQUNGO1lBQ0E7Z0JBQ0VJLFlBQVk7Z0JBQ1pDLFVBQVU7b0JBQ1JKLGNBQWM7b0JBQ2RDLGdCQUFnQjtvQkFDaEJGLFFBQVEsS0FBSztnQkFDZjtZQUNGO1NBQ0Q7SUFDSDtJQUVBLE1BQU1NLGVBQWU7UUFDbkI7WUFDRUMsS0FBSztZQUNMQyxLQUFLO1lBQ0xDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxhQUFhO1FBQ2Y7UUFDQTtZQUNFSixLQUFLO1lBQ0xDLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLGFBQWE7UUFDZjtRQUNBO1lBQ0VKLEtBQUs7WUFDTEMsS0FBSztZQUNMQyxNQUFNO1lBQ05DLHFCQUFPOzBCQUFFOztZQUNUQyxhQUFhO1FBQ2Y7UUFDQTtZQUNFSixLQUFLO1lBQ0xDLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLGFBQWE7UUFDZjtRQUNBO1lBQ0VKLEtBQUs7WUFDTEMsS0FBSztZQUNMQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsYUFBYTtRQUNmO1FBQ0E7WUFDRUosS0FBSztZQUNMQyxLQUFLO1lBQ0xDLE1BQU07WUFDTkMscUJBQU87MEJBQUU7O1lBQ1RDLGFBQWE7UUFDZjtRQUNBO1lBQ0VKLEtBQUs7WUFDTEMsS0FBSztZQUNMQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsYUFBYTtRQUNmO0tBQ0Q7SUFFRCxNQUFNQyxjQUFjO0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHdkIsK0NBQVFBLENBQUNxQjtJQUVuQ3RCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNeUIsV0FBV0MsWUFBWSxJQUFNO1lBQ2pDRixTQUFTLENBQUNHLE1BQVNBLE9BQU8sSUFBSSxJQUFJQSxNQUFNLENBQUM7UUFDM0MsR0FBRztRQUVILE9BQU8sSUFBTUMsY0FBY0g7SUFDN0IsR0FBRyxFQUFFO0lBRUwsTUFBTUksYUFBYSxNQUFNYixhQUFhYyxNQUFNO0lBRTVDLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVO2tCQUNqQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDRTtvQ0FBS0YsV0FBVTs4Q0FBWTs7Ozs7OzhDQUM1Qiw4REFBQ0c7b0NBQUdILFdBQVU7O3dDQUFRO3NEQUNBLDhEQUFDRTtzREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFNbEMsOERBQUNEO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDOUIsZ0VBQVdBO3dCQUFDYSxVQUFVVjtrQ0FDcEJXLGFBQWFvQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3ZCLDhEQUFDTDtnQ0FBZ0JELFdBQVU7MENBQ3pCLDRFQUFDN0Isd0RBQWVBO29DQUFDa0MsTUFBTUE7Ozs7OzsrQkFEZkM7Ozs7Ozs7Ozs7Ozs7Ozs4QkFPaEIsOERBQUNMO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDQzt3QkFDQ00sT0FBTzs0QkFDTCxtQ0FBbUM7NEJBQ25DQyxnQkFBZ0IsR0FBc0IsT0FBbkJqQixRQUFRTSxZQUFXO3dCQUN4Qzt3QkFDQUcsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWV0QjtHQTFKTTVCO0tBQUFBO0FBNEpOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV2h5Q2hvb3NlVXMvV2h5Q2hvb3NlVXMuanN4PzEwZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWNrU2xpZGVyIGZyb20gXCIuLi9TbGlja1NsaWRlci9TbGlja1NsaWRlclwiO1xyXG5pbXBvcnQgV2h5Q2hvb3NlVXNJdGVtIGZyb20gXCIuL1doeUNob29zZVVzSXRlbVwiO1xyXG5cclxuY29uc3QgV2h5Q2hvb3NlVXMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2xpY2tTZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogMTAwMCxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDU3NSxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNsaWRlcl9pdGVtcyA9IFtcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWcvaWNvbi9jaG9vc2VfaWNvbjAxLnN2Z1wiLFxyXG4gICAgICBhbHQ6IFwiXCIsXHJcbiAgICAgIGxpbms6IFwiL1wiLFxyXG4gICAgICB0aXRsZTogXCJNdWx0aSBDaGFpbiBEZXhcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiQ29ubmVjdGluZyBhbGwgaXNvbGF0ZWQgYmxvY2tjaGFpbnMgYW5kIGVzdGFibGlzaCBhIGNyb3NzLWNoYWluIGFzc2V0IGV4Y2hhbmdlIG5ldHdvcmssIHByb3ZpZGluZyBhbGwgbmVjZXNzYXJ5IHVuZGVybHlpbmcgc3VwcG9ydCBmb3IgdGhlIERlZmkgZWNvc3lzdGVtLiAgICAgIFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWcvaWNvbi9jaG9vc2VfaWNvbjAyLnN2Z1wiLFxyXG4gICAgICBhbHQ6IFwiXCIsXHJcbiAgICAgIGxpbms6IFwiL1wiLFxyXG4gICAgICB0aXRsZTogXCJOZXZlciBFbmRpbmcgTGlxdWlkaXR5XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlJlbnEgb2J0YWlucyBpdHMgbGlxdWlkaXR5IGZyb20gYSB2YXJpZXR5IG9mIGV4Y2hhbmdlcyBhbmQgaGFzIHRoZSBjYXBhY2l0eSB0byBkaXN0cmlidXRlIGEgc2luZ2xlIHRyYWRlIHRyYW5zYWN0aW9uIGFjcm9zcyBtdWx0aXBsZSBERVhzIGluIG9yZGVyIHRvIG9idGFpbiB0aGUgbW9zdCBjb21wZXRpdGl2ZSBwcmljZXMuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltZy9pY29uL2Nob29zZV9pY29uMDMuc3ZnXCIsXHJcbiAgICAgIGFsdDogXCJcIixcclxuICAgICAgbGluazogXCIvXCIsXHJcbiAgICAgIHRpdGxlOiA8PlByb3RlY3QgdGhlIGlkZW50aXR5PC8+LFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJBZGQgbmV3LCB0cmVuZGluZyBhbmQgcmFyZSBhcnR3b3JrIHRvIHlvdXIgY29sbGVjdGlvbi5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1nL2ljb24vICAuc3ZnXCIsXHJcbiAgICAgIGFsdDogXCJcIixcclxuICAgICAgbGluazogXCIvXCIsXHJcbiAgICAgIHRpdGxlOiBcIlNlcmN1cml0eSAmIGNvbnRyb2wgb3ZlciBtb25leVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJBZGQgbmV3LCB0cmVuZGluZyBhbmQgcmFyZSBhcnR3b3JrIHRvIHlvdXIgY29sbGVjdGlvbi5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1nL2ljb24vY2hvb3NlX2ljb24wMS5zdmdcIixcclxuICAgICAgYWx0OiBcIlwiLFxyXG4gICAgICBsaW5rOiBcIi9cIixcclxuICAgICAgdGl0bGU6IFwiTGlmZXRpbWUgZnJlZSB0cmFuc2FjdGlvblwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJBZGQgbmV3LCB0cmVuZGluZyBhbmQgcmFyZSBhcnR3b3JrIHRvIHlvdXIgY29sbGVjdGlvbi5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1nL2ljb24vY2hvb3NlX2ljb24wMy5zdmdcIixcclxuICAgICAgYWx0OiBcIlwiLFxyXG4gICAgICBsaW5rOiBcIi9cIixcclxuICAgICAgdGl0bGU6IDw+UHJvdGVjdCB0aGUgaWRlbnRpdHk8Lz4sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFkZCBuZXcsIHRyZW5kaW5nIGFuZCByYXJlIGFydHdvcmsgdG8geW91ciBjb2xsZWN0aW9uLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWcvaWNvbi9jaG9vc2VfaWNvbjA0LnN2Z1wiLFxyXG4gICAgICBhbHQ6IFwiXCIsXHJcbiAgICAgIGxpbms6IFwiL1wiLFxyXG4gICAgICB0aXRsZTogXCJTZXJjdXJpdHkgJiBjb250cm9sIG92ZXIgbW9uZXlcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiQWRkIG5ldywgdHJlbmRpbmcgYW5kIHJhcmUgYXJ0d29yayB0byB5b3VyIGNvbGxlY3Rpb24uXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGluaXRhbFN0YXRlID0gMDtcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKGluaXRhbFN0YXRlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBzZXRDb3VudCgob2xkKSA9PiAob2xkID09IDYgPyAwIDogb2xkICsgMSkpO1xyXG4gICAgfSwgMzAwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdG9NdWx0aXBseSA9IDEwMCAvIHNsaWRlcl9pdGVtcy5sZW5ndGg7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjaG9vc2UtYXJlYSBwYi0xMzBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZSB0ZXh0LWNlbnRlciBtYi01MFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPndoeSBDaG9vc2UgdXMgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgV2h5IGNob29zZSBvdXIgUmVucSA8c3Bhbj5Ub2tlbjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjaG9vc2UtYWN0aXZlXCI+XHJcbiAgICAgICAgICA8U2xpY2tTbGlkZXIgc2V0dGluZ3M9e3NsaWNrU2V0dGluZ3N9PlxyXG4gICAgICAgICAgICB7c2xpZGVyX2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICA8V2h5Q2hvb3NlVXNJdGVtIGl0ZW09e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TbGlja1NsaWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1wcm9ncmVzc2JhclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIC8vIHdpZHRoOiBgJHtjb3VudCAqIHRvTXVsdGlwbHl9JWAsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IGAke2NvdW50ICogdG9NdWx0aXBseX0lIDEwMCVgLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZS1maWxsZXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlLXByb2dyZXNzXCJcclxuICAgICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXHJcbiAgICAgICAgICBhcmlhLXZhbHVlbWluPVwiMFwiXHJcbiAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXJfX2xhYmVsIHNyLW9ubHlcIj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2h5Q2hvb3NlVXM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2xpY2tTbGlkZXIiLCJXaHlDaG9vc2VVc0l0ZW0iLCJXaHlDaG9vc2VVcyIsInNsaWNrU2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsImF1dG9wbGF5IiwiYXJyb3dzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwic2xpZGVyX2l0ZW1zIiwic3JjIiwiYWx0IiwibGluayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbml0YWxTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwib2xkIiwiY2xlYXJJbnRlcnZhbCIsInRvTXVsdGlwbHkiLCJsZW5ndGgiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3BhbiIsImgyIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WhyChooseUs/WhyChooseUs.jsx\n"));

/***/ })

});