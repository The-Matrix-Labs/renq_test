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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SlickSlider_SlickSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SlickSlider/SlickSlider */ \"./components/SlickSlider/SlickSlider.jsx\");\n/* harmony import */ var _WhyChooseUsItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WhyChooseUsItem */ \"./components/WhyChooseUs/WhyChooseUsItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst WhyChooseUs = ()=>{\n    _s();\n    const slickSettings = {\n        dots: false,\n        infinite: true,\n        speed: 1000,\n        autoplay: true,\n        arrows: false,\n        slidesToShow: 4,\n        slidesToScroll: 1,\n        responsive: [\n            {\n                breakpoint: 1200,\n                settings: {\n                    slidesToShow: 3,\n                    slidesToScroll: 1,\n                    infinite: true\n                }\n            },\n            {\n                breakpoint: 992,\n                settings: {\n                    slidesToShow: 2,\n                    slidesToScroll: 1\n                }\n            },\n            {\n                breakpoint: 767,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    arrows: false\n                }\n            },\n            {\n                breakpoint: 575,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    arrows: false\n                }\n            }\n        ]\n    };\n    const slider_items = [\n        {\n            src: \"/img/icon/choose_icon01.svg\",\n            alt: \"\",\n            link: \"/\",\n            title: \"Vault\",\n            description: \"Multichain Yield Optimizer that allows its users to earn compound interest on their crypto holdings.\"\n        },\n        {\n            src: \"/img/icon/choose_icon02.svg\",\n            alt: \"\",\n            link: \"/\",\n            title: \"Lending Protocol\",\n            description: \"Lend and borrow, with pools of assets and floating interest rates algorithmically determined by the supply and demand for the asset.\"\n        },\n        {\n            src: \"/img/icon/choose_icon03.svg\",\n            alt: \"\",\n            link: \"/\",\n            title: \"DeFi & NFT Launchpad\",\n            description: \"Governed by its community, via forum discussions and, when pertinent, voting on proposals by the RENQ Holders.\"\n        },\n        {\n            src: \"/img/icon/  .svg\",\n            alt: \"\",\n            link: \"/\",\n            title: \"Wallet\",\n            description: \"Multi Chain All-in-one solution for all of your trading requirements.\"\n        },\n        {\n            src: \"/img/icon/choose_icon01.svg\",\n            alt: \"\",\n            link: \"/\",\n            title: \"Aggregator\",\n            description: \"Instantly analyzes thousands of quotes and fees across multiple DEXes to provide users with the best rates.\"\n        },\n        {\n            src: \"/img/icon/choose_icon03.svg\",\n            alt: \"\",\n            link: \"/\",\n            title: \"Exchange\",\n            description: \"Trade your favorite crypto assets across all chains.\"\n        },\n        {\n            src: \"/img/icon/choose_icon04.svg\",\n            alt: \"\",\n            link: \"/\",\n            title: \"Perpetuals Futures\",\n            description: \"Long or short, high leverage traders can trade with up to 100x leverage.\"\n        }\n    ];\n    const initalState = 0;\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initalState);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setCount((old)=>old == 6 ? 0 : old + 1);\n        }, 3000);\n        return ()=>clearInterval(interval);\n    }, []);\n    const toMultiply = 100 / slider_items.length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"choose-area pb-130\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row justify-content-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-xl-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"section-title text-center mb-50\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"sub-title\",\n                                    children: \"why Choose us \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"title\",\n                                    children: [\n                                        \"Why choose our Renq \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Token\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                                            lineNumber: 122,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row choose-active\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SlickSlider_SlickSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        settings: slickSettings,\n                        children: slider_items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-lg-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WhyChooseUsItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    item: item\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                                lineNumber: 131,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slide-progressbar\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            // width: `${count * toMultiply}%`,\n                            backgroundSize: \"\".concat(count * toMultiply, \"% 100%\")\n                        },\n                        className: \"slide-filler\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                        lineNumber: 139,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                    lineNumber: 138,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CODEX\\\\Desktop\\\\sss\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WhyChooseUs, \"APFonlZUZrAD65jVAhgGjmf94Uo=\");\n_c = WhyChooseUs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WhyChooseUs);\nvar _c;\n$RefreshReg$(_c, \"WhyChooseUs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1doeUNob29zZVVzL1doeUNob29zZVVzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDRTtBQUNMO0FBRWhELE1BQU1LLGNBQWMsSUFBTTs7SUFDeEIsTUFBTUMsZ0JBQWdCO1FBQ3BCQyxNQUFNLEtBQUs7UUFDWEMsVUFBVSxJQUFJO1FBQ2RDLE9BQU87UUFDUEMsVUFBVSxJQUFJO1FBQ2RDLFFBQVEsS0FBSztRQUNiQyxjQUFjO1FBQ2RDLGdCQUFnQjtRQUNoQkMsWUFBWTtZQUNWO2dCQUNFQyxZQUFZO2dCQUNaQyxVQUFVO29CQUNSSixjQUFjO29CQUNkQyxnQkFBZ0I7b0JBQ2hCTCxVQUFVLElBQUk7Z0JBQ2hCO1lBQ0Y7WUFDQTtnQkFDRU8sWUFBWTtnQkFDWkMsVUFBVTtvQkFDUkosY0FBYztvQkFDZEMsZ0JBQWdCO2dCQUNsQjtZQUNGO1lBQ0E7Z0JBQ0VFLFlBQVk7Z0JBQ1pDLFVBQVU7b0JBQ1JKLGNBQWM7b0JBQ2RDLGdCQUFnQjtvQkFDaEJGLFFBQVEsS0FBSztnQkFDZjtZQUNGO1lBQ0E7Z0JBQ0VJLFlBQVk7Z0JBQ1pDLFVBQVU7b0JBQ1JKLGNBQWM7b0JBQ2RDLGdCQUFnQjtvQkFDaEJGLFFBQVEsS0FBSztnQkFDZjtZQUNGO1NBQ0Q7SUFDSDtJQUVBLE1BQU1NLGVBQWU7UUFDbkI7WUFDRUMsS0FBSztZQUNMQyxLQUFLO1lBQ0xDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxhQUFhO1FBQ2Y7UUFDQTtZQUNFSixLQUFLO1lBQ0xDLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLGFBQWE7UUFDZjtRQUNBO1lBQ0VKLEtBQUs7WUFDTEMsS0FBSztZQUNMQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsYUFBYTtRQUNmO1FBQ0E7WUFDRUosS0FBSztZQUNMQyxLQUFLO1lBQ0xDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxhQUFhO1FBQ2Y7UUFDQTtZQUNFSixLQUFLO1lBQ0xDLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLGFBQWE7UUFDZjtRQUNBO1lBQ0VKLEtBQUs7WUFDTEMsS0FBSztZQUNMQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsYUFBYTtRQUNmO1FBQ0E7WUFDRUosS0FBSztZQUNMQyxLQUFLO1lBQ0xDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxhQUFhO1FBQ2Y7S0FDRDtJQUVELE1BQU1DLGNBQWM7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUd2QiwrQ0FBUUEsQ0FBQ3FCO0lBRW5DdEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU15QixXQUFXQyxZQUFZLElBQU07WUFDakNGLFNBQVMsQ0FBQ0csTUFBU0EsT0FBTyxJQUFJLElBQUlBLE1BQU0sQ0FBQztRQUMzQyxHQUFHO1FBRUgsT0FBTyxJQUFNQyxjQUFjSDtJQUM3QixHQUFHLEVBQUU7SUFFTCxNQUFNSSxhQUFhLE1BQU1iLGFBQWFjLE1BQU07SUFFNUMscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDQzs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNFO29DQUFLRixXQUFVOzhDQUFZOzs7Ozs7OENBQzVCLDhEQUFDRztvQ0FBR0gsV0FBVTs7d0NBQVE7c0RBQ0EsOERBQUNFO3NEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU1sQyw4REFBQ0Q7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUM5QixnRUFBV0E7d0JBQUNhLFVBQVVWO2tDQUNwQlcsYUFBYW9CLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDdkIsOERBQUNMO2dDQUFnQkQsV0FBVTswQ0FDekIsNEVBQUM3Qix3REFBZUE7b0NBQUNrQyxNQUFNQTs7Ozs7OytCQURmQzs7Ozs7Ozs7Ozs7Ozs7OzhCQU9oQiw4REFBQ0w7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUNDTSxPQUFPOzRCQUNMLG1DQUFtQzs0QkFDbkNDLGdCQUFnQixHQUFzQixPQUFuQmpCLFFBQVFNLFlBQVc7d0JBQ3hDO3dCQUNBRyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXRCO0dBMUpNNUI7S0FBQUE7QUE0Sk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaHlDaG9vc2VVcy9XaHlDaG9vc2VVcy5qc3g/MTBmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpY2tTbGlkZXIgZnJvbSBcIi4uL1NsaWNrU2xpZGVyL1NsaWNrU2xpZGVyXCI7XHJcbmltcG9ydCBXaHlDaG9vc2VVc0l0ZW0gZnJvbSBcIi4vV2h5Q2hvb3NlVXNJdGVtXCI7XHJcblxyXG5jb25zdCBXaHlDaG9vc2VVcyA9ICgpID0+IHtcclxuICBjb25zdCBzbGlja1NldHRpbmdzID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNTc1LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2xpZGVyX2l0ZW1zID0gW1xyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltZy9pY29uL2Nob29zZV9pY29uMDEuc3ZnXCIsXHJcbiAgICAgIGFsdDogXCJcIixcclxuICAgICAgbGluazogXCIvXCIsXHJcbiAgICAgIHRpdGxlOiBcIlZhdWx0XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk11bHRpY2hhaW4gWWllbGQgT3B0aW1pemVyIHRoYXQgYWxsb3dzIGl0cyB1c2VycyB0byBlYXJuIGNvbXBvdW5kIGludGVyZXN0IG9uIHRoZWlyIGNyeXB0byBob2xkaW5ncy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1nL2ljb24vY2hvb3NlX2ljb24wMi5zdmdcIixcclxuICAgICAgYWx0OiBcIlwiLFxyXG4gICAgICBsaW5rOiBcIi9cIixcclxuICAgICAgdGl0bGU6IFwiTGVuZGluZyBQcm90b2NvbFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJMZW5kIGFuZCBib3Jyb3csIHdpdGggcG9vbHMgb2YgYXNzZXRzIGFuZCBmbG9hdGluZyBpbnRlcmVzdCByYXRlcyBhbGdvcml0aG1pY2FsbHkgZGV0ZXJtaW5lZCBieSB0aGUgc3VwcGx5IGFuZCBkZW1hbmQgZm9yIHRoZSBhc3NldC5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1nL2ljb24vY2hvb3NlX2ljb24wMy5zdmdcIixcclxuICAgICAgYWx0OiBcIlwiLFxyXG4gICAgICBsaW5rOiBcIi9cIixcclxuICAgICAgdGl0bGU6IFwiRGVGaSAmIE5GVCBMYXVuY2hwYWRcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiR292ZXJuZWQgYnkgaXRzIGNvbW11bml0eSwgdmlhIGZvcnVtIGRpc2N1c3Npb25zIGFuZCwgd2hlbiBwZXJ0aW5lbnQsIHZvdGluZyBvbiBwcm9wb3NhbHMgYnkgdGhlIFJFTlEgSG9sZGVycy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1nL2ljb24vICAuc3ZnXCIsXHJcbiAgICAgIGFsdDogXCJcIixcclxuICAgICAgbGluazogXCIvXCIsXHJcbiAgICAgIHRpdGxlOiBcIldhbGxldFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJNdWx0aSBDaGFpbiBBbGwtaW4tb25lIHNvbHV0aW9uIGZvciBhbGwgb2YgeW91ciB0cmFkaW5nIHJlcXVpcmVtZW50cy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1nL2ljb24vY2hvb3NlX2ljb24wMS5zdmdcIixcclxuICAgICAgYWx0OiBcIlwiLFxyXG4gICAgICBsaW5rOiBcIi9cIixcclxuICAgICAgdGl0bGU6IFwiQWdncmVnYXRvclwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJJbnN0YW50bHkgYW5hbHl6ZXMgdGhvdXNhbmRzIG9mIHF1b3RlcyBhbmQgZmVlcyBhY3Jvc3MgbXVsdGlwbGUgREVYZXMgdG8gcHJvdmlkZSB1c2VycyB3aXRoIHRoZSBiZXN0IHJhdGVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltZy9pY29uL2Nob29zZV9pY29uMDMuc3ZnXCIsXHJcbiAgICAgIGFsdDogXCJcIixcclxuICAgICAgbGluazogXCIvXCIsXHJcbiAgICAgIHRpdGxlOiBcIkV4Y2hhbmdlXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRyYWRlIHlvdXIgZmF2b3JpdGUgY3J5cHRvIGFzc2V0cyBhY3Jvc3MgYWxsIGNoYWlucy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1nL2ljb24vY2hvb3NlX2ljb24wNC5zdmdcIixcclxuICAgICAgYWx0OiBcIlwiLFxyXG4gICAgICBsaW5rOiBcIi9cIixcclxuICAgICAgdGl0bGU6IFwiUGVycGV0dWFscyBGdXR1cmVzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkxvbmcgb3Igc2hvcnQsIGhpZ2ggbGV2ZXJhZ2UgdHJhZGVycyBjYW4gdHJhZGUgd2l0aCB1cCB0byAxMDB4IGxldmVyYWdlLlwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBpbml0YWxTdGF0ZSA9IDA7XHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShpbml0YWxTdGF0ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0Q291bnQoKG9sZCkgPT4gKG9sZCA9PSA2ID8gMCA6IG9sZCArIDEpKTtcclxuICAgIH0sIDMwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHRvTXVsdGlwbHkgPSAxMDAgLyBzbGlkZXJfaXRlbXMubGVuZ3RoO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hvb3NlLWFyZWEgcGItMTMwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGUgdGV4dC1jZW50ZXIgbWItNTBcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj53aHkgQ2hvb3NlIHVzIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIFdoeSBjaG9vc2Ugb3VyIFJlbnEgPHNwYW4+VG9rZW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY2hvb3NlLWFjdGl2ZVwiPlxyXG4gICAgICAgICAgPFNsaWNrU2xpZGVyIHNldHRpbmdzPXtzbGlja1NldHRpbmdzfT5cclxuICAgICAgICAgICAge3NsaWRlcl9pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgPFdoeUNob29zZVVzSXRlbSBpdGVtPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2xpY2tTbGlkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtcHJvZ3Jlc3NiYXJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAvLyB3aWR0aDogYCR7Y291bnQgKiB0b011bHRpcGx5fSVgLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBgJHtjb3VudCAqIHRvTXVsdGlwbHl9JSAxMDAlYCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGUtZmlsbGVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZS1wcm9ncmVzc1wiXHJcbiAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxyXG4gICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxyXG4gICAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyX19sYWJlbCBzci1vbmx5XCI+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoeUNob29zZVVzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNsaWNrU2xpZGVyIiwiV2h5Q2hvb3NlVXNJdGVtIiwiV2h5Q2hvb3NlVXMiLCJzbGlja1NldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJhdXRvcGxheSIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInNsaWRlcl9pdGVtcyIsInNyYyIsImFsdCIsImxpbmsiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW5pdGFsU3RhdGUiLCJjb3VudCIsInNldENvdW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm9sZCIsImNsZWFySW50ZXJ2YWwiLCJ0b011bHRpcGx5IiwibGVuZ3RoIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInNwYW4iLCJoMiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/WhyChooseUs/WhyChooseUs.jsx\n"));

/***/ })

});