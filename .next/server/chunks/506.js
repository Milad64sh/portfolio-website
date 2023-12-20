exports.id = 506;
exports.ids = [506];
exports.modules = {

/***/ 4891:
/***/ ((module) => {

// Exports
module.exports = {
	"slideFromLeft": "singleSkillMobile_slideFromLeft__Zk6ET",
	"fadeIn": "singleSkillMobile_fadeIn__R9gWS",
	"loading": "singleSkillMobile_loading__iwlIO",
	"openingSkills": "singleSkillMobile_openingSkills__zQp1Y",
	"closingSkills": "singleSkillMobile_closingSkills__WRyH1",
	"openSkillsMobile": "singleSkillMobile_openSkillsMobile__jIAqN",
	"closeSkillsMobile": "singleSkillMobile_closeSkillsMobile__P7Ezo",
	"showParagraph": "singleSkillMobile_showParagraph__ZHagT",
	"closeParagraph": "singleSkillMobile_closeParagraph__k0VPQ",
	"yellowPart": "singleSkillMobile_yellowPart__CdlL4"
};


/***/ }),

/***/ 2506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _singleSkillMobile_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4891);
/* harmony import */ var _singleSkillMobile_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_singleSkillMobile_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const SingleSkillMobile = ({ skill, style })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${(_singleSkillMobile_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container)} ${style}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_singleSkillMobile_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container__content),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_singleSkillMobile_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container__content__title),
                    children: skill.title
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleSkillMobile);


/***/ })

};
;