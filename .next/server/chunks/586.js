exports.id = 586;
exports.ids = [586];
exports.modules = {

/***/ 9315:
/***/ ((module) => {

// Exports
module.exports = {
	"skill": "SingleSkill_skill__SQ5VH"
};


/***/ }),

/***/ 4434:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "skills_container__0K3hY",
	"skill-0--showSkill": "skills_skill-0--showSkill__evOS3",
	"skill-0--closeSkill": "skills_skill-0--closeSkill__jSeR5",
	"skill-1--showSkill": "skills_skill-1--showSkill__wlmWk",
	"skill-1--closeSkill": "skills_skill-1--closeSkill__OPabS",
	"skill-2--showSkill": "skills_skill-2--showSkill__D9diL",
	"skill-2--closeSkill": "skills_skill-2--closeSkill___fF1O",
	"skill-3--showSkill": "skills_skill-3--showSkill__kU6Jm",
	"skill-3--closeSkill": "skills_skill-3--closeSkill__gwMx1",
	"skill-4--showSkill": "skills_skill-4--showSkill__EXtj_",
	"skill-4--closeSkill": "skills_skill-4--closeSkill___G8aU",
	"skill-5--showSkill": "skills_skill-5--showSkill__F1hLm",
	"skill-5--closeSkill": "skills_skill-5--closeSkill__hA4F9",
	"skill-6--showSkill": "skills_skill-6--showSkill__LvVxg",
	"skill-6--closeSkill": "skills_skill-6--closeSkill__L2pki",
	"skill-7--showSkill": "skills_skill-7--showSkill__wbftr",
	"skill-7--closeSkill": "skills_skill-7--closeSkill__sXtbV",
	"skill-8--showSkill": "skills_skill-8--showSkill__0PUUT",
	"skill-8--closeSkill": "skills_skill-8--closeSkill__PP9l4",
	"skill-9--showSkill": "skills_skill-9--showSkill__5qDqG",
	"skill-9--closeSkill": "skills_skill-9--closeSkill__QkNCa",
	"slideFromLeft": "skills_slideFromLeft__tqbmL",
	"fadeIn": "skills_fadeIn__P6AGx",
	"loading": "skills_loading__smgoZ",
	"openingSkills": "skills_openingSkills__yRJ_c",
	"closingSkills": "skills_closingSkills__cij1q",
	"openSkillsMobile": "skills_openSkillsMobile__GiQVh",
	"closeSkillsMobile": "skills_closeSkillsMobile__SGydA",
	"showParagraph": "skills_showParagraph__ZSgX8",
	"closeParagraph": "skills_closeParagraph___xdPv",
	"yellowPart": "skills_yellowPart__y3kRt"
};


/***/ }),

/***/ 952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SingleSkill_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9315);
/* harmony import */ var _SingleSkill_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SingleSkill_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const SingleSkill = ({ skill, style })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_SingleSkill_module_scss__WEBPACK_IMPORTED_MODULE_2___default().skill),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: style,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    children: skill.title
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleSkill);


/***/ }),

/***/ 6586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _skills_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4434);
/* harmony import */ var _skills_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_skills_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1812);
/* harmony import */ var _SingleSkill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(952);





const Skills = ({ toggle })=>{
    const { skillsData } = (0,_contexts_AppContext__WEBPACK_IMPORTED_MODULE_2__/* .useAppContext */ .b)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_skills_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
            children: skillsData.map((skill, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SingleSkill__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    skill: skill,
                    index: index,
                    style: toggle ? (_skills_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[`skill-${index}--showSkill`] : (_skills_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[`skill-${index}--closeSkill`]
                }, skill.id))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);


/***/ })

};
;