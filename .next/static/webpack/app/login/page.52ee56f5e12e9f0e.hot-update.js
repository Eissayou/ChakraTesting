"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/components/ui/AuthForm.jsx":
/*!****************************************!*\
  !*** ./src/components/ui/AuthForm.jsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SimpleLogin)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Heading,Input,VStack!=!@chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/box/box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Heading,Input,VStack!=!@chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/typography/heading.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Heading,Input,VStack!=!@chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/stack/v-stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Heading,Input,VStack!=!@chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/input/input.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Heading,Input,VStack!=!@chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/button/button.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction SimpleLogin() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const sleep = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        setLoading(true);\n        await new Promise((resolve)=>setTimeout(resolve, 0));\n        await sleep(2000); // Simulate delay\n        try {\n            const response = await fetch('/api/login', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            const data = await response.json();\n            if (response.ok) {\n                setMessage(\"Login successful!\");\n                console.log(\"Success:\", data);\n            // Perform any post-login actions (e.g., redirect)\n            } else {\n                setMessage(\"Login failed: \" + data.message);\n                console.error(\"Error:\", data);\n            }\n        } catch (error) {\n            setMessage(\"Network error, please try again later.\");\n            console.error(\"Network error:\", error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        as: \"form\",\n        onSubmit: handleSubmit,\n        maxW: \"400px\",\n        mx: \"auto\",\n        mt: \"10\",\n        p: \"6\",\n        borderWidth: \"1px\",\n        borderRadius: \"md\",\n        boxShadow: \"lg\",\n        bg: \"white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                as: \"h2\",\n                size: \"lg\",\n                mb: \"6\",\n                textAlign: \"center\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eissa\\\\JasonSchool\\\\ECS265\\\\ChakraTesting\\\\my-next-app\\\\src\\\\components\\\\ui\\\\AuthForm.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n                spacing: \"4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        placeholder: \"Email\",\n                        type: \"email\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eissa\\\\JasonSchool\\\\ECS265\\\\ChakraTesting\\\\my-next-app\\\\src\\\\components\\\\ui\\\\AuthForm.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        placeholder: \"Password\",\n                        type: \"password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eissa\\\\JasonSchool\\\\ECS265\\\\ChakraTesting\\\\my-next-app\\\\src\\\\components\\\\ui\\\\AuthForm.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        colorScheme: \"teal\",\n                        width: \"full\",\n                        type: \"submit\",\n                        isLoading: loading,\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eissa\\\\JasonSchool\\\\ECS265\\\\ChakraTesting\\\\my-next-app\\\\src\\\\components\\\\ui\\\\AuthForm.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        mt: \"4\",\n                        color: \"red.500\",\n                        children: message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eissa\\\\JasonSchool\\\\ECS265\\\\ChakraTesting\\\\my-next-app\\\\src\\\\components\\\\ui\\\\AuthForm.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\eissa\\\\JasonSchool\\\\ECS265\\\\ChakraTesting\\\\my-next-app\\\\src\\\\components\\\\ui\\\\AuthForm.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\eissa\\\\JasonSchool\\\\ECS265\\\\ChakraTesting\\\\my-next-app\\\\src\\\\components\\\\ui\\\\AuthForm.jsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(SimpleLogin, \"YmdP5tBQhbPINzoiw41WEyz75fg=\");\n_c = SimpleLogin;\nvar _c;\n$RefreshReg$(_c, \"SimpleLogin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL0F1dGhGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVpQztBQUNzQztBQUV4RCxTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYSxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1lLFFBQVEsQ0FBQ0MsS0FBTyxJQUFJQyxRQUFRLENBQUNDLFVBQVlDLFdBQVdELFNBQVNGO0lBRW5FLE1BQU1JLGVBQWUsT0FBT0M7UUFDMUJBLE1BQU1DLGNBQWM7UUFDcEJWLFdBQVc7UUFDWCxNQUFNLElBQUlLLFFBQVEsQ0FBQ0MsVUFBWUMsV0FBV0QsU0FBUztRQUNuRCxNQUFNSCxNQUFNLE9BQU8saUJBQWlCO1FBQ3BDLElBQUk7WUFDRixNQUFNUSxXQUFXLE1BQU1DLE1BQU0sY0FBYztnQkFDekNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFdEI7b0JBQU9FO2dCQUFTO1lBQ3pDO1lBRUEsTUFBTXFCLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtZQUVoQyxJQUFJUixTQUFTUyxFQUFFLEVBQUU7Z0JBQ2ZsQixXQUFXO2dCQUNYbUIsUUFBUUMsR0FBRyxDQUFDLFlBQVlKO1lBQ3hCLGtEQUFrRDtZQUNwRCxPQUFPO2dCQUNMaEIsV0FBVyxtQkFBbUJnQixLQUFLakIsT0FBTztnQkFDMUNvQixRQUFRRSxLQUFLLENBQUMsVUFBVUw7WUFDMUI7UUFDRixFQUFFLE9BQU9LLE9BQU87WUFDZHJCLFdBQVc7WUFDWG1CLFFBQVFFLEtBQUssQ0FBQyxrQkFBa0JBO1FBQ2xDLFNBQVU7WUFDUnZCLFdBQVc7UUFDYjtJQUNGO0lBRUEscUJBQ0UsOERBQUNYLHVHQUFHQTtRQUNGbUMsSUFBRztRQUNIQyxVQUFVakI7UUFDVmtCLE1BQUs7UUFDTEMsSUFBRztRQUNIQyxJQUFHO1FBQ0hDLEdBQUU7UUFDRkMsYUFBWTtRQUNaQyxjQUFhO1FBQ2JDLFdBQVU7UUFDVkMsSUFBRzs7MEJBRUgsOERBQUN6QywyR0FBT0E7Z0JBQUNnQyxJQUFHO2dCQUFLVSxNQUFLO2dCQUFLQyxJQUFHO2dCQUFJQyxXQUFVOzBCQUFTOzs7Ozs7MEJBR3JELDhEQUFDM0MsMEdBQU1BO2dCQUFDNEMsU0FBUTs7a0NBQ2QsOERBQUMvQyx5R0FBS0E7d0JBQ0pnRCxhQUFZO3dCQUNaQyxNQUFLO3dCQUNMQyxPQUFPN0M7d0JBQ1A4QyxVQUFVLENBQUNDLElBQU05QyxTQUFTOEMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRTFDLDhEQUFDbEQseUdBQUtBO3dCQUNKZ0QsYUFBWTt3QkFDWkMsTUFBSzt3QkFDTEMsT0FBTzNDO3dCQUNQNEMsVUFBVSxDQUFDQyxJQUFNNUMsWUFBWTRDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUU3Qyw4REFBQ2pELDBHQUFNQTt3QkFDTHFELGFBQVk7d0JBQ1pDLE9BQU07d0JBQ05OLE1BQUs7d0JBQ0xPLFdBQVcvQztrQ0FDWjs7Ozs7O29CQUdBRSx5QkFBVyw4REFBQ1osdUdBQUdBO3dCQUFDdUMsSUFBRzt3QkFBSW1CLE9BQU07a0NBQVc5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpEO0dBaEZ3QlA7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZWlzc2FcXEphc29uU2Nob29sXFxFQ1MyNjVcXENoYWtyYVRlc3RpbmdcXG15LW5leHQtYXBwXFxzcmNcXGNvbXBvbmVudHNcXHVpXFxBdXRoRm9ybS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94LCBJbnB1dCwgQnV0dG9uLCBIZWFkaW5nLCBWU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2ltcGxlTG9naW4oKSB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBzbGVlcCA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDApKTtcclxuICAgIGF3YWl0IHNsZWVwKDIwMDApOyAvLyBTaW11bGF0ZSBkZWxheVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9sb2dpbicsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHNldE1lc3NhZ2UoXCJMb2dpbiBzdWNjZXNzZnVsIVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3M6XCIsIGRhdGEpO1xyXG4gICAgICAgIC8vIFBlcmZvcm0gYW55IHBvc3QtbG9naW4gYWN0aW9ucyAoZS5nLiwgcmVkaXJlY3QpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIkxvZ2luIGZhaWxlZDogXCIgKyBkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJOZXR3b3JrIGVycm9yLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcclxuICAgICAgY29uc29sZS5lcnJvcihcIk5ldHdvcmsgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgIG1heFc9XCI0MDBweFwiXHJcbiAgICAgIG14PVwiYXV0b1wiXHJcbiAgICAgIG10PVwiMTBcIlxyXG4gICAgICBwPVwiNlwiXHJcbiAgICAgIGJvcmRlcldpZHRoPVwiMXB4XCJcclxuICAgICAgYm9yZGVyUmFkaXVzPVwibWRcIlxyXG4gICAgICBib3hTaGFkb3c9XCJsZ1wiXHJcbiAgICAgIGJnPVwid2hpdGVcIlxyXG4gICAgPlxyXG4gICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cImxnXCIgbWI9XCI2XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgTG9naW5cclxuICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICA8VlN0YWNrIHNwYWNpbmc9XCI0XCI+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjb2xvclNjaGVtZT1cInRlYWxcIlxyXG4gICAgICAgICAgd2lkdGg9XCJmdWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAge21lc3NhZ2UgJiYgPEJveCBtdD1cIjRcIiBjb2xvcj1cInJlZC41MDBcIj57bWVzc2FnZX08L0JveD59XHJcbiAgICAgIDwvVlN0YWNrPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCb3giLCJJbnB1dCIsIkJ1dHRvbiIsIkhlYWRpbmciLCJWU3RhY2siLCJTaW1wbGVMb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwib2siLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJhcyIsIm9uU3VibWl0IiwibWF4VyIsIm14IiwibXQiLCJwIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJiZyIsInNpemUiLCJtYiIsInRleHRBbGlnbiIsInNwYWNpbmciLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImNvbG9yU2NoZW1lIiwid2lkdGgiLCJpc0xvYWRpbmciLCJjb2xvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/AuthForm.jsx\n"));

/***/ })

});