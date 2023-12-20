exports.id = 182;
exports.ids = [182];
exports.modules = {

/***/ 6680:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "singleProject_container__vwQk9",
	"singleProject": "singleProject_singleProject__bmq7V",
	"title": "singleProject_title__l7cqd",
	"videoContainer": "singleProject_videoContainer__8rICX",
	"video": "singleProject_video__VnGHU",
	"singlePrjBtn": "singleProject_singlePrjBtn____lwp"
};


/***/ }),

/***/ 5182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _singleProject_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6680);
/* harmony import */ var _singleProject_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_singleProject_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const SingleProject = ({ title, videoSrc })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_singleProject_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_singleProject_module_scss__WEBPACK_IMPORTED_MODULE_2___default().singleProject),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_singleProject_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_singleProject_module_scss__WEBPACK_IMPORTED_MODULE_2___default().videoContainer),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                            autoPlay: true,
                            muted: true,
                            loop: true,
                            playsInline: true,
                            className: (_singleProject_module_scss__WEBPACK_IMPORTED_MODULE_2___default().video),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                src: videoSrc,
                                type: "video/mp4"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_singleProject_module_scss__WEBPACK_IMPORTED_MODULE_2___default().singlePrjBtn),
                children: "details"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProject);


/***/ })

};
;