(() => {
var exports = {};
exports.id = 107;
exports.ids = [107,660];
exports.modules = {

/***/ 7793:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "projectsList_container__21MeV",
	"projectMobileContainer": "projectsList_projectMobileContainer__xRgkw",
	"fadeInOut": "projectsList_fadeInOut__CdJVo",
	"slideFromLeft": "projectsList_slideFromLeft__X_X_E",
	"fadeIn": "projectsList_fadeIn__xZZzP",
	"loading": "projectsList_loading__VP0cj",
	"openingSkills": "projectsList_openingSkills__Ga7jn",
	"closingSkills": "projectsList_closingSkills__NTlU8",
	"openSkillsMobile": "projectsList_openSkillsMobile__NiZ4s",
	"closeSkillsMobile": "projectsList_closeSkillsMobile__gPFZJ",
	"showParagraph": "projectsList_showParagraph__PvlPs",
	"closeParagraph": "projectsList_closeParagraph__ieXWq",
	"yellowPart": "projectsList_yellowPart__lr1zE"
};


/***/ }),

/***/ 458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fcomponents_2Fprojects_2FProjectsList_preferredRegion_absolutePagePath_private_next_pages_2Fcomponents_2Fprojects_2FProjectsList_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/components/projects/ProjectsList.tsx
var ProjectsList_namespaceObject = {};
__webpack_require__.r(ProjectsList_namespaceObject);
__webpack_require__.d(ProjectsList_namespaceObject, {
  "default": () => (projects_ProjectsList)
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
// EXTERNAL MODULE: ./pages/components/projects/projectsList.module.scss
var projectsList_module = __webpack_require__(7793);
var projectsList_module_default = /*#__PURE__*/__webpack_require__.n(projectsList_module);
// EXTERNAL MODULE: ./pages/components/projects/SingleProject.tsx
var SingleProject = __webpack_require__(5182);
// EXTERNAL MODULE: ./contexts/AppContext.tsx
var AppContext = __webpack_require__(1812);
// EXTERNAL MODULE: ./pages/components/Heading.tsx
var Heading = __webpack_require__(1575);
// EXTERNAL MODULE: ./pages/components/projects/ProjectsListMobile.tsx
var ProjectsListMobile = __webpack_require__(9331);
;// CONCATENATED MODULE: ./pages/components/projects/ProjectsList.tsx







const ProjectsList = ()=>{
    const { videosData } = (0,AppContext/* useAppContext */.b)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (projectsList_module_default()).projectMobileContainer,
                children: /*#__PURE__*/ jsx_runtime.jsx(ProjectsListMobile["default"], {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (projectsList_module_default()).container,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Heading["default"], {
                        name: "projects"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (projectsList_module_default()).singleProject,
                        children: videosData.map((projectVideo)=>/*#__PURE__*/ jsx_runtime.jsx(SingleProject["default"], {
                                title: projectVideo.title,
                                videoSrc: projectVideo.vidSrc
                            }, projectVideo.id))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const projects_ProjectsList = (ProjectsList);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fcomponents%2Fprojects%2FProjectsList&preferredRegion=&absolutePagePath=private-next-pages%2Fcomponents%2Fprojects%2FProjectsList.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fcomponents_2Fprojects_2FProjectsList_preferredRegion_absolutePagePath_private_next_pages_2Fcomponents_2Fprojects_2FProjectsList_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(ProjectsList_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(ProjectsList_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(ProjectsList_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(ProjectsList_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(ProjectsList_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(ProjectsList_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(ProjectsList_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(ProjectsList_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(ProjectsList_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(ProjectsList_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(ProjectsList_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/components/projects/ProjectsList","pathname":"/components/projects/ProjectsList","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: (_document_default()),
          },
          userland: ProjectsList_namespaceObject,
        })
        
        
    

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
var __webpack_exports__ = __webpack_require__.X(0, [940,812,434,182,331], () => (__webpack_exec__(458)));
module.exports = __webpack_exports__;

})();