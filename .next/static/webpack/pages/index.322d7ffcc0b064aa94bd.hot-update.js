webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\nvar _jsxFileName = \"/Users/rozababayan/Desktop/MyStudy/React/NextJS/pages/index.js\";\n\n\nvar DUMMY_MEETUPS = [{\n  id: \"m1\",\n  image: \"https://uscvillage.com/wp-content/uploads/2018/08/Facebook_USCVILLAGE_OpenGraph_Homepage_v1.jpg\",\n  title: \"A First Meetup\",\n  address: \"3301 S Hoover St, Los Angeles, CA 90007\",\n  description: \"This is the first meetup\"\n}, {\n  id: \"m2\",\n  image: \"https://i0.wp.com/www.iamnotastalker.com/wp-content/uploads/2019/05/Hoose-Library-from-What-Women-Want-19-of-61.jpg\",\n  title: \"A Second Meetup\",\n  address: \"3709 Trousdale Pkwy, Los Angeles, CA 90089\",\n  description: \"This is the second meetup\"\n}];\n\nfunction HomePage(props) {\n  //   const [loadedMeetups, setLoadedMeetups] = useState([]);\n  //   useEffect(() => {\n  //     //send a http erquest and fetch the data\n  //     setLoadedMeetups(DUMMY_MEETUPS);\n  //   }, []);\n  // return <MeetupList meetups={DUMMY_MEETUPS}> </MeetupList>;\n  //return <MeetupList meetups={loadedMeetups}> </MeetupList>;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    meetups: props.meetups,\n    children: \" \"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 10\n  }, this);\n}\n\n_c = HomePage;\n// export async function getStaticProps() {\n//   //which code we type in here will be server side and will not be available in client side\n//   //bc it is executed in build process\n//   //fetch data from and API/ or DB/ or File\n//   //it always returns an object, which has a props\n//   return {\n//     props: {\n//       meetups: DUMMY_MEETUPS,\n//     },\n//     revalidate: 1,\n//   };\n// }\n//alternatively to getStaticProps we can use the following\n// export async function getServerSideProps(context) {\n//   const req = context.req;\n//   const res = context.res;\n//   //fetch data from an API/DB/files\n//   return {\n//     props: {\n//       meetups: DUMMY_MEETUPS,\n//     },\n//   };\n// }\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJEVU1NWV9NRUVUVVBTIiwiaWQiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQSxJQUFNQSxhQUFhLEdBQUcsQ0FDcEI7QUFDRUMsSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUNILGlHQUhKO0FBSUVDLE9BQUssRUFBRSxnQkFKVDtBQUtFQyxTQUFPLEVBQUUseUNBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FEb0IsRUFTcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUNILHFIQUhKO0FBSUVDLE9BQUssRUFBRSxpQkFKVDtBQUtFQyxTQUFPLEVBQUUsNENBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FUb0IsQ0FBdEI7O0FBbUJBLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQU8scUVBQUMsc0VBQUQ7QUFBWSxXQUFPLEVBQUVBLEtBQUssQ0FBQ0MsT0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztLQVRRRixRO0FBOEJUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWVBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcbiAge1xuICAgIGlkOiBcIm0xXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vdXNjdmlsbGFnZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDgvRmFjZWJvb2tfVVNDVklMTEFHRV9PcGVuR3JhcGhfSG9tZXBhZ2VfdjEuanBnXCIsXG4gICAgdGl0bGU6IFwiQSBGaXJzdCBNZWV0dXBcIixcbiAgICBhZGRyZXNzOiBcIjMzMDEgUyBIb292ZXIgU3QsIExvcyBBbmdlbGVzLCBDQSA5MDAwN1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIGZpcnN0IG1lZXR1cFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwibTJcIixcbiAgICBpbWFnZTpcbiAgICAgIFwiaHR0cHM6Ly9pMC53cC5jb20vd3d3LmlhbW5vdGFzdGFsa2VyLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS9Ib29zZS1MaWJyYXJ5LWZyb20tV2hhdC1Xb21lbi1XYW50LTE5LW9mLTYxLmpwZ1wiLFxuICAgIHRpdGxlOiBcIkEgU2Vjb25kIE1lZXR1cFwiLFxuICAgIGFkZHJlc3M6IFwiMzcwOSBUcm91c2RhbGUgUGt3eSwgTG9zIEFuZ2VsZXMsIENBIDkwMDg5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyB0aGUgc2Vjb25kIG1lZXR1cFwiLFxuICB9LFxuXTtcblxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcbiAgLy8gICBjb25zdCBbbG9hZGVkTWVldHVwcywgc2V0TG9hZGVkTWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIC8vc2VuZCBhIGh0dHAgZXJxdWVzdCBhbmQgZmV0Y2ggdGhlIGRhdGFcbiAgLy8gICAgIHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUyk7XG4gIC8vICAgfSwgW10pO1xuICAvLyByZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17RFVNTVlfTUVFVFVQU30+IDwvTWVldHVwTGlzdD47XG4gIC8vcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e2xvYWRlZE1lZXR1cHN9PiA8L01lZXR1cExpc3Q+O1xuICByZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30+IDwvTWVldHVwTGlzdD47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy9mZXRjaCB0aGUgZGF0YSBmcm9tIHRoZSBNb25nb0RiXG4gIC8vRXN0YWJsaXNoIGEgREIgY29ubmNldGlvbiBhbmQgc2F2ZSB0aGUgZGF0YVxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9Sb3phQjpNeW1vbmdvZGI2NzI0IUBjbHVzdGVyMC55YzU5M29kLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTsgLy9TdGVwMVxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpOyAvL1N0ZXAyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7IC8vU3RlcDNcblxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfTtcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuLy8gICAvL3doaWNoIGNvZGUgd2UgdHlwZSBpbiBoZXJlIHdpbGwgYmUgc2VydmVyIHNpZGUgYW5kIHdpbGwgbm90IGJlIGF2YWlsYWJsZSBpbiBjbGllbnQgc2lkZVxuLy8gICAvL2JjIGl0IGlzIGV4ZWN1dGVkIGluIGJ1aWxkIHByb2Nlc3Ncbi8vICAgLy9mZXRjaCBkYXRhIGZyb20gYW5kIEFQSS8gb3IgREIvIG9yIEZpbGVcbi8vICAgLy9pdCBhbHdheXMgcmV0dXJucyBhbiBvYmplY3QsIHdoaWNoIGhhcyBhIHByb3BzXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXG4vLyAgICAgfSxcbi8vICAgICByZXZhbGlkYXRlOiAxLFxuLy8gICB9O1xuLy8gfVxuXG4vL2FsdGVybmF0aXZlbHkgdG8gZ2V0U3RhdGljUHJvcHMgd2UgY2FuIHVzZSB0aGUgZm9sbG93aW5nXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xuXG4vLyAgIC8vZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSS9EQi9maWxlc1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})