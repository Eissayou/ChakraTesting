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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SimpleLogin)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Heading,Input,VStack!=!@chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/box/box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Heading,Input,VStack!=!@chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/typography/heading.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Heading,Input,VStack!=!@chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/stack/v-stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Heading,Input,VStack!=!@chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/input/input.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Heading,Input,VStack!=!@chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/esm/components/button/button.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction SimpleLogin() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const sleep = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        setLoading(true);\n        await sleep(2000);\n        try {\n            const response = await fetch('/api/login', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            const data = await response.json();\n            if (response.ok) {\n                setMessage(\"Login successful!\");\n                console.log(\"Success:\", data);\n            // Perform any post-login actions (e.g., redirect)\n            } else {\n                setMessage(\"Login failed: \" + data.message);\n                console.error(\"Error:\", data);\n            }\n        } catch (error) {\n            setMessage(\"Network error, please try again later.\");\n            console.error(\"Network error:\", error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        as: \"form\",\n        onSubmit: handleSubmit,\n        maxW: \"400px\",\n        mx: \"auto\",\n        mt: \"10\",\n        p: \"6\",\n        borderWidth: \"1px\",\n        borderRadius: \"md\",\n        boxShadow: \"lg\",\n        bg: \"white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                as: \"h2\",\n                size: \"lg\",\n                mb: \"6\",\n                textAlign: \"center\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eissa\\\\JasonSchool\\\\ECS265\\\\ChakraTesting\\\\my-next-app\\\\src\\\\components\\\\ui\\\\AuthForm.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n                spacing: \"4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        placeholder: \"Email\",\n                        type: \"email\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eissa\\\\JasonSchool\\\\ECS265\\\\ChakraTesting\\\\my-next-app\\\\src\\\\components\\\\ui\\\\AuthForm.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        placeholder: \"Password\",\n                        type: \"password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eissa\\\\JasonSchool\\\\ECS265\\\\ChakraTesting\\\\my-next-app\\\\src\\\\components\\\\ui\\\\AuthForm.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        colorScheme: \"teal\",\n                        width: \"full\",\n                        type: \"submit\",\n                        isLoading: loading,\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eissa\\\\JasonSchool\\\\ECS265\\\\ChakraTesting\\\\my-next-app\\\\src\\\\components\\\\ui\\\\AuthForm.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Heading_Input_VStack_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        mt: \"4\",\n                        color: \"red.500\",\n                        children: message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eissa\\\\JasonSchool\\\\ECS265\\\\ChakraTesting\\\\my-next-app\\\\src\\\\components\\\\ui\\\\AuthForm.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\eissa\\\\JasonSchool\\\\ECS265\\\\ChakraTesting\\\\my-next-app\\\\src\\\\components\\\\ui\\\\AuthForm.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\eissa\\\\JasonSchool\\\\ECS265\\\\ChakraTesting\\\\my-next-app\\\\src\\\\components\\\\ui\\\\AuthForm.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(SimpleLogin, \"YmdP5tBQhbPINzoiw41WEyz75fg=\");\n_c = SimpleLogin;\nvar _c;\n$RefreshReg$(_c, \"SimpleLogin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL0F1dGhGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVpQztBQUNzQztBQUV4RCxTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYSxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1lLFFBQVEsQ0FBQ0MsS0FBTyxJQUFJQyxRQUFRLENBQUNDLFVBQVlDLFdBQVdELFNBQVNGO0lBRW5FLE1BQU1JLGVBQWUsT0FBT0M7UUFDMUJBLE1BQU1DLGNBQWM7UUFDcEJWLFdBQVc7UUFDWCxNQUFNRyxNQUFNO1FBQ1osSUFBSTtZQUNGLE1BQU1RLFdBQVcsTUFBTUMsTUFBTSxjQUFjO2dCQUN6Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUV0QjtvQkFBT0U7Z0JBQVM7WUFDekM7WUFFQSxNQUFNcUIsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO1lBRWhDLElBQUlSLFNBQVNTLEVBQUUsRUFBRTtnQkFDZmxCLFdBQVc7Z0JBQ1htQixRQUFRQyxHQUFHLENBQUMsWUFBWUo7WUFDeEIsa0RBQWtEO1lBQ3BELE9BQU87Z0JBQ0xoQixXQUFXLG1CQUFtQmdCLEtBQUtqQixPQUFPO2dCQUMxQ29CLFFBQVFFLEtBQUssQ0FBQyxVQUFVTDtZQUMxQjtRQUNGLEVBQUUsT0FBT0ssT0FBTztZQUNkckIsV0FBVztZQUNYbUIsUUFBUUUsS0FBSyxDQUFDLGtCQUFrQkE7UUFDbEMsU0FBVTtZQUNSdkIsV0FBVztRQUNiO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1gsdUdBQUdBO1FBQ0ZtQyxJQUFHO1FBQ0hDLFVBQVVqQjtRQUNWa0IsTUFBSztRQUNMQyxJQUFHO1FBQ0hDLElBQUc7UUFDSEMsR0FBRTtRQUNGQyxhQUFZO1FBQ1pDLGNBQWE7UUFDYkMsV0FBVTtRQUNWQyxJQUFHOzswQkFFSCw4REFBQ3pDLDJHQUFPQTtnQkFBQ2dDLElBQUc7Z0JBQUtVLE1BQUs7Z0JBQUtDLElBQUc7Z0JBQUlDLFdBQVU7MEJBQVM7Ozs7OzswQkFHckQsOERBQUMzQywwR0FBTUE7Z0JBQUM0QyxTQUFROztrQ0FDZCw4REFBQy9DLHlHQUFLQTt3QkFDSmdELGFBQVk7d0JBQ1pDLE1BQUs7d0JBQ0xDLE9BQU83Qzt3QkFDUDhDLFVBQVUsQ0FBQ0MsSUFBTTlDLFNBQVM4QyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FFMUMsOERBQUNsRCx5R0FBS0E7d0JBQ0pnRCxhQUFZO3dCQUNaQyxNQUFLO3dCQUNMQyxPQUFPM0M7d0JBQ1A0QyxVQUFVLENBQUNDLElBQU01QyxZQUFZNEMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRTdDLDhEQUFDakQsMEdBQU1BO3dCQUNMcUQsYUFBWTt3QkFDWkMsT0FBTTt3QkFDTk4sTUFBSzt3QkFDTE8sV0FBVy9DO2tDQUNaOzs7Ozs7b0JBR0FFLHlCQUFXLDhEQUFDWix1R0FBR0E7d0JBQUN1QyxJQUFHO3dCQUFJbUIsT0FBTTtrQ0FBVzlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakQ7R0EvRXdCUDtLQUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxlaXNzYVxcSmFzb25TY2hvb2xcXEVDUzI2NVxcQ2hha3JhVGVzdGluZ1xcbXktbmV4dC1hcHBcXHNyY1xcY29tcG9uZW50c1xcdWlcXEF1dGhGb3JtLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIElucHV0LCBCdXR0b24sIEhlYWRpbmcsIFZTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVMb2dpbigpIHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHNsZWVwID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgYXdhaXQgc2xlZXAoMjAwMCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIkxvZ2luIHN1Y2Nlc3NmdWwhXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2VzczpcIiwgZGF0YSk7XHJcbiAgICAgICAgLy8gUGVyZm9ybSBhbnkgcG9zdC1sb2dpbiBhY3Rpb25zIChlLmcuLCByZWRpcmVjdClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRNZXNzYWdlKFwiTG9naW4gZmFpbGVkOiBcIiArIGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0TWVzc2FnZShcIk5ldHdvcmsgZXJyb3IsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiTmV0d29yayBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgbWF4Vz1cIjQwMHB4XCJcclxuICAgICAgbXg9XCJhdXRvXCJcclxuICAgICAgbXQ9XCIxMFwiXHJcbiAgICAgIHA9XCI2XCJcclxuICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxyXG4gICAgICBib3JkZXJSYWRpdXM9XCJtZFwiXHJcbiAgICAgIGJveFNoYWRvdz1cImxnXCJcclxuICAgICAgYmc9XCJ3aGl0ZVwiXHJcbiAgICA+XHJcbiAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzaXplPVwibGdcIiBtYj1cIjZcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICBMb2dpblxyXG4gICAgICA8L0hlYWRpbmc+XHJcbiAgICAgIDxWU3RhY2sgc3BhY2luZz1cIjRcIj5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNvbG9yU2NoZW1lPVwidGVhbFwiXHJcbiAgICAgICAgICB3aWR0aD1cImZ1bGxcIlxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBpc0xvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTG9naW5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICB7bWVzc2FnZSAmJiA8Qm94IG10PVwiNFwiIGNvbG9yPVwicmVkLjUwMFwiPnttZXNzYWdlfTwvQm94Pn1cclxuICAgICAgPC9WU3RhY2s+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJveCIsIklucHV0IiwiQnV0dG9uIiwiSGVhZGluZyIsIlZTdGFjayIsIlNpbXBsZUxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2xlZXAiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvayIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImFzIiwib25TdWJtaXQiLCJtYXhXIiwibXgiLCJtdCIsInAiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImJnIiwic2l6ZSIsIm1iIiwidGV4dEFsaWduIiwic3BhY2luZyIsInBsYWNlaG9sZGVyIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY29sb3JTY2hlbWUiLCJ3aWR0aCIsImlzTG9hZGluZyIsImNvbG9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/AuthForm.jsx\n"));

/***/ })

});