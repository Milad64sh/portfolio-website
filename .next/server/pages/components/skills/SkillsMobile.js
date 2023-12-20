(() => {
var exports = {};
exports.id = 289;
exports.ids = [289,660];
exports.modules = {

/***/ 8481:
/***/ ((module) => {

// Exports
module.exports = {
	"heading": "heading_heading__Td0BP",
	"headingH3": "heading_headingH3__C84fH"
};


/***/ }),

/***/ 8539:
/***/ ((module) => {

// Exports
module.exports = {
	"slideFromLeft": "skillsMobile_slideFromLeft__5znc2",
	"fadeIn": "skillsMobile_fadeIn__5O7oK",
	"loading": "skillsMobile_loading__u02cC",
	"openingSkills": "skillsMobile_openingSkills__CuPPm",
	"closingSkills": "skillsMobile_closingSkills__HMK2f",
	"openSkillsMobile": "skillsMobile_openSkillsMobile__nSQW8",
	"closeSkillsMobile": "skillsMobile_closeSkillsMobile__77wuW",
	"showParagraph": "skillsMobile_showParagraph__bSnub",
	"closeParagraph": "skillsMobile_closeParagraph__MBKkm",
	"yellowPart": "skillsMobile_yellowPart__J4qQy"
};


/***/ }),

/***/ 164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fcomponents_2Fskills_2FSkillsMobile_preferredRegion_absolutePagePath_private_next_pages_2Fcomponents_2Fskills_2FSkillsMobile_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/components/skills/SkillsMobile.tsx
var SkillsMobile_namespaceObject = {};
__webpack_require__.r(SkillsMobile_namespaceObject);
__webpack_require__.d(SkillsMobile_namespaceObject, {
  "default": () => (skills_SkillsMobile)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(2940);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./pages/_app.tsx + 2 modules
var _app = __webpack_require__(2434);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./contexts/AppContext.tsx
var AppContext = __webpack_require__(1812);
// EXTERNAL MODULE: ./pages/components/skills/SingleSkillMobile.tsx
var SingleSkillMobile = __webpack_require__(2506);
// EXTERNAL MODULE: ./pages/components/Heading.tsx
var Heading = __webpack_require__(1575);
// EXTERNAL MODULE: ./pages/components/skills/skillsMobile.module.scss
var skillsMobile_module = __webpack_require__(8539);
var skillsMobile_module_default = /*#__PURE__*/__webpack_require__.n(skillsMobile_module);
;// CONCATENATED MODULE: ./pages/components/skills/SkillsMobile.tsx






const SkillsMobile = ()=>{
    const { skillsData } = (0,AppContext/* useAppContext */.b)();
    const [skills, setSkills] = (0,external_react_.useState)(skillsData);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Heading["default"], {
                name: "skills"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (skillsMobile_module_default()).container,
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (skillsMobile_module_default()).container__skills,
                    children: skills.map((skill, index)=>/*#__PURE__*/ jsx_runtime.jsx(SingleSkillMobile["default"], {
                            skill: skill,
                            style: (skillsMobile_module_default())[`skill-${index}`]
                        }, skill.id))
                })
            })
        ]
    });
};
/* harmony default export */ const skills_SkillsMobile = (SkillsMobile);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fcomponents%2Fskills%2FSkillsMobile&preferredRegion=&absolutePagePath=private-next-pages%2Fcomponents%2Fskills%2FSkillsMobile.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fcomponents_2Fskills_2FSkillsMobile_preferredRegion_absolutePagePath_private_next_pages_2Fcomponents_2Fskills_2FSkillsMobile_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(SkillsMobile_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(SkillsMobile_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(SkillsMobile_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(SkillsMobile_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(SkillsMobile_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(SkillsMobile_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(SkillsMobile_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(SkillsMobile_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(SkillsMobile_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(SkillsMobile_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(SkillsMobile_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/components/skills/SkillsMobile","pathname":"/components/skills/SkillsMobile","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: (_document_default()),
          },
          userland: SkillsMobile_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 1575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heading_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8481);
/* harmony import */ var _heading_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heading_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Heading = ({ name })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_heading_module_scss__WEBPACK_IMPORTED_MODULE_2___default().heading),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
            className: (_heading_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headingH3),
            children: name
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);


/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,812,434,506], () => (__webpack_exec__(164)));
module.exports = __webpack_exports__;

})();