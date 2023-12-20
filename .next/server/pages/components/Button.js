(() => {
var exports = {};
exports.id = 454;
exports.ids = [454,660];
exports.modules = {

/***/ 8849:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/compiled/sass-loader/cjs.js):\nSassError: Undefined variable.\n    ╷\n186 │     background-color: rgba($yellow, 0.3);\r\n    │                            ^^^^^^^\n    ╵\n  styles\\animations.scss 186:28            @import\n  pages\\components\\button.module.scss 1:9  root stylesheet");

/***/ }),

/***/ 200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fcomponents_2FButton_preferredRegion_absolutePagePath_private_next_pages_2Fcomponents_2FButton_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/components/Button.tsx
var Button_namespaceObject = {};
__webpack_require__.r(Button_namespaceObject);
__webpack_require__.d(Button_namespaceObject, {
  "default": () => (components_Button)
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
// EXTERNAL MODULE: ./pages/components/button.module.scss
var button_module = __webpack_require__(8849);
var button_module_default = /*#__PURE__*/__webpack_require__.n(button_module);
;// CONCATENATED MODULE: ./pages/components/Button.tsx



const Button = ({ targetSectionId })=>{
    const [showButton, setShowButton] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const timer = setTimeout(()=>{
            setShowButton(true);
        }, 6000);
        return ()=>clearTimeout(timer);
    });
    const scrollToSection = ()=>{
        const targetSection = document.getElementById(targetSectionId);
        if (targetSectionId) {
            targetSection?.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
            className: (button_module_default()).button,
            onClick: scrollToSection,
            children: "explore"
        })
    });
};
/* harmony default export */ const components_Button = (Button);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fcomponents%2FButton&preferredRegion=&absolutePagePath=private-next-pages%2Fcomponents%2FButton.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fcomponents_2FButton_preferredRegion_absolutePagePath_private_next_pages_2Fcomponents_2FButton_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(Button_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(Button_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(Button_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(Button_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(Button_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(Button_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(Button_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(Button_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(Button_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(Button_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(Button_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/components/Button","pathname":"/components/Button","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: (_document_default()),
          },
          userland: Button_namespaceObject,
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,812,434], () => (__webpack_exec__(200)));
module.exports = __webpack_exports__;

})();