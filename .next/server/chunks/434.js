exports.id = 434;
exports.ids = [434];
exports.modules = {

/***/ 1812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   b: () => (/* binding */ useAppContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
const AppProvider = ({ children, value })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: value,
        children: children
    });
};
const useAppContext = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppProvider);


/***/ }),

/***/ 2434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/global.scss
var global = __webpack_require__(291);
// EXTERNAL MODULE: ./contexts/AppContext.tsx
var AppContext = __webpack_require__(1812);
;// CONCATENATED MODULE: ./data/projects.js
const videosData = [
    {
        id: Math.random().toString(),
        title: "real-estate-start",
        vidSrc: "/videos/vid-start.mp4",
        prjDesc: "First Project description"
    },
    {
        id: Math.random().toString(),
        title: "ecommerce",
        vidSrc: "/videos/ecommerce.mp4",
        prjDesc: "Second Project description"
    }
];

;// CONCATENATED MODULE: ./data/skillsListData.json
const skillsListData_namespaceObject = JSON.parse('[{"id":1,"title":"Html","description":"HTML is the standard markup language...Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id reprehenderit ea placeat illum distinctio, quas culpa necessitatibus soluta nesciunt repellendus vel sequi ullam at nihil nulla quos harum ipsam ducimus!"},{"id":2,"title":"Css","description":"CSS is used to style web pages. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id reprehenderit ea placeat illum distinctio."},{"id":3,"title":"JavaScript","description":"CSS is used to style web pages. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id reprehenderit ea placeat illum distinctio."},{"id":4,"title":"React","description":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id reprehenderit ea placeat illum distinctio, quas culpa necessitatibus soluta nesciunt repellendus vel sequi ullam at nihil nulla quos harum ipsam ducimus!"},{"id":5,"title":"TypeScript","description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ad cum repellendus fugiat autem? Minima."},{"id":6,"title":"Git-Github","description":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum provident voluptas earum suscipit quia, cupiditate hic non quibusdam totam?"},{"id":7,"title":"Node.js","description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, rem itaque illo eius asperiores, libero voluptas est, possimus alias quidem suscipit? Ut aspernatur doloremque dignissimos. Similique recusandae tempora quasi tenetur?"},{"id":8,"title":"Jest","description":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum provident voluptas earum suscipit quia, cupiditate hic non quibusdam totam?"},{"id":9,"title":"Next","description":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum provident voluptas earum suscipit quia, cupiditate hic non quibusdam totam?"},{"id":10,"title":"webpack 5","description":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum provident voluptas earum suscipit quia, cupiditate hic non quibusdam totam?"}]');
;// CONCATENATED MODULE: ./pages/_app.tsx
// pages / _app.js;






const MyApp = ({ Component, pageProps })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(AppContext/* default */.Z, {
        value: {
            skillsData: skillsListData_namespaceObject,
            videosData: videosData
        },
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        })
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 291:
/***/ (() => {



/***/ })

};
;