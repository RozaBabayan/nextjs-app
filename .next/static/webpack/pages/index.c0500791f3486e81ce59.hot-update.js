webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\nvar _jsxFileName = \"/Users/rozababayan/Desktop/MyStudy/React/NextJS/pages/index.js\";\n\n\n\n// const DUMMY_MEETUPS = [\n//   {\n//     id: \"m1\",\n//     image:\n//       \"https://uscvillage.com/wp-content/uploads/2018/08/Facebook_USCVILLAGE_OpenGraph_Homepage_v1.jpg\",\n//     title: \"A First Meetup\",\n//     address: \"3301 S Hoover St, Los Angeles, CA 90007\",\n//     description: \"This is the first meetup\",\n//   },\n//   {\n//     id: \"m2\",\n//     image:\n//       \"https://i0.wp.com/www.iamnotastalker.com/wp-content/uploads/2019/05/Hoose-Library-from-What-Women-Want-19-of-61.jpg\",\n//     title: \"A Second Meetup\",\n//     address: \"3709 Trousdale Pkwy, Los Angeles, CA 90089\",\n//     description: \"This is the second meetup\",\n//   },\n// ];\nfunction HomePage(props) {\n  //   const [loadedMeetups, setLoadedMeetups] = useState([]);\n  //   useEffect(() => {\n  //     //send a http erquest and fetch the data\n  //     setLoadedMeetups(DUMMY_MEETUPS);\n  //   }, []);\n  // return <MeetupList meetups={DUMMY_MEETUPS}> </MeetupList>;\n  //return <MeetupList meetups={loadedMeetups}> </MeetupList>;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    meetups: props.meetups,\n    children: \" \"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 10\n  }, this);\n}\n\n_c = HomePage;\n// export async function getStaticProps() {\n//   //which code we type in here will be server side and will not be available in client side\n//   //bc it is executed in build process\n//   //fetch data from and API/ or DB/ or File\n//   //it always returns an object, which has a props\n//   return {\n//     props: {\n//       meetups: DUMMY_MEETUPS,\n//     },\n//     revalidate: 1,\n//   };\n// }\n//alternatively to getStaticProps we can use the following\n// export async function getServerSideProps(context) {\n//   const req = context.req;\n//   const res = context.res;\n//   //fetch data from an API/DB/files\n//   return {\n//     props: {\n//       meetups: DUMMY_MEETUPS,\n//     },\n//   };\n// }\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFPLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFQSxLQUFLLENBQUNDLE9BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7S0FUUUYsUTtBQW9DVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbi8vIGNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXG4vLyAgIHtcbi8vICAgICBpZDogXCJtMVwiLFxuLy8gICAgIGltYWdlOlxuLy8gICAgICAgXCJodHRwczovL3VzY3ZpbGxhZ2UuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA4L0ZhY2Vib29rX1VTQ1ZJTExBR0VfT3BlbkdyYXBoX0hvbWVwYWdlX3YxLmpwZ1wiLFxuLy8gICAgIHRpdGxlOiBcIkEgRmlyc3QgTWVldHVwXCIsXG4vLyAgICAgYWRkcmVzczogXCIzMzAxIFMgSG9vdmVyIFN0LCBMb3MgQW5nZWxlcywgQ0EgOTAwMDdcIixcbi8vICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRoZSBmaXJzdCBtZWV0dXBcIixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiBcIm0yXCIsXG4vLyAgICAgaW1hZ2U6XG4vLyAgICAgICBcImh0dHBzOi8vaTAud3AuY29tL3d3dy5pYW1ub3Rhc3RhbGtlci5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDUvSG9vc2UtTGlicmFyeS1mcm9tLVdoYXQtV29tZW4tV2FudC0xOS1vZi02MS5qcGdcIixcbi8vICAgICB0aXRsZTogXCJBIFNlY29uZCBNZWV0dXBcIixcbi8vICAgICBhZGRyZXNzOiBcIjM3MDkgVHJvdXNkYWxlIFBrd3ksIExvcyBBbmdlbGVzLCBDQSA5MDA4OVwiLFxuLy8gICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIHNlY29uZCBtZWV0dXBcIixcbi8vICAgfSxcbi8vIF07XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XG4gIC8vICAgY29uc3QgW2xvYWRlZE1lZXR1cHMsIHNldExvYWRlZE1lZXR1cHNdID0gdXNlU3RhdGUoW10pO1xuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICAvL3NlbmQgYSBodHRwIGVycXVlc3QgYW5kIGZldGNoIHRoZSBkYXRhXG4gIC8vICAgICBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpO1xuICAvLyAgIH0sIFtdKTtcbiAgLy8gcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e0RVTU1ZX01FRVRVUFN9PiA8L01lZXR1cExpc3Q+O1xuICAvL3JldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtsb2FkZWRNZWV0dXBzfT4gPC9NZWV0dXBMaXN0PjtcbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9PiA8L01lZXR1cExpc3Q+O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vZmV0Y2ggdGhlIGRhdGEgZnJvbSB0aGUgTW9uZ29EYlxuICAvL0VzdGFibGlzaCBhIERCIGNvbm5jZXRpb24gYW5kIHNhdmUgdGhlIGRhdGFcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICBcIm1vbmdvZGIrc3J2Oi8vUm96YUI6TXltb25nb2RiNjcyNCFAY2x1c3RlcjAueWM1OTNvZC5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXG4gICk7IC8vU3RlcDFcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTsgLy9TdGVwMlxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpOyAvL1N0ZXAzXG5cbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XG4gIGNsaWVudC5jbG9zZSgpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XG4gICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXG4gICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxuICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxuICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxuICAgICAgfSkpLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfTtcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuLy8gICAvL3doaWNoIGNvZGUgd2UgdHlwZSBpbiBoZXJlIHdpbGwgYmUgc2VydmVyIHNpZGUgYW5kIHdpbGwgbm90IGJlIGF2YWlsYWJsZSBpbiBjbGllbnQgc2lkZVxuLy8gICAvL2JjIGl0IGlzIGV4ZWN1dGVkIGluIGJ1aWxkIHByb2Nlc3Ncbi8vICAgLy9mZXRjaCBkYXRhIGZyb20gYW5kIEFQSS8gb3IgREIvIG9yIEZpbGVcbi8vICAgLy9pdCBhbHdheXMgcmV0dXJucyBhbiBvYmplY3QsIHdoaWNoIGhhcyBhIHByb3BzXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXG4vLyAgICAgfSxcbi8vICAgICByZXZhbGlkYXRlOiAxLFxuLy8gICB9O1xuLy8gfVxuXG4vL2FsdGVybmF0aXZlbHkgdG8gZ2V0U3RhdGljUHJvcHMgd2UgY2FuIHVzZSB0aGUgZm9sbG93aW5nXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xuXG4vLyAgIC8vZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSS9EQi9maWxlc1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})