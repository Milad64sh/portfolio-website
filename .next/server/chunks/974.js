exports.id = 974;
exports.ids = [974];
exports.modules = {

/***/ 6423:
/***/ ((module) => {

// Exports
module.exports = {
	"transition": "all .4s ease-in",
	"mobileNav": "mobileNav_mobileNav__gmmDk",
	"fadeIn": "mobileNav_fadeIn__SABVR",
	"logoMenu": "mobileNav_logoMenu__NgDp0",
	"logoLink": "mobileNav_logoLink__5jSC8",
	"logoSpan__m": "mobileNav_logoSpan__m__ulpbE",
	"logoSpan__s": "mobileNav_logoSpan__s__AViSQ",
	"logoSpan__h": "mobileNav_logoSpan__h__zO33x",
	"logoSpan__dot": "mobileNav_logoSpan__dot__HDksT",
	"menuIcon": "mobileNav_menuIcon__W9xN_",
	"iconBar": "mobileNav_iconBar__0WltG",
	"open": "mobileNav_open__j8hCS",
	"navList": "mobileNav_navList__SmRMl",
	"menu": "mobileNav_menu__se6ew",
	"menuLi": "mobileNav_menuLi__yaLyR",
	"menuItem": "mobileNav_menuItem__f4SE7",
	"visible": "mobileNav_visible__2Ku1g",
	"slideFromLeft": "mobileNav_slideFromLeft__CVPmA",
	"loading": "mobileNav_loading__QTaPZ",
	"openingSkills": "mobileNav_openingSkills__Ayd_6",
	"closingSkills": "mobileNav_closingSkills__RIh6a",
	"openSkillsMobile": "mobileNav_openSkillsMobile__COria",
	"closeSkillsMobile": "mobileNav_closeSkillsMobile__eFQjc",
	"showParagraph": "mobileNav_showParagraph__p_MY_",
	"closeParagraph": "mobileNav_closeParagraph__jDEi9",
	"yellowPart": "mobileNav_yellowPart__0X8rW"
};


/***/ }),

/***/ 8586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6423);
/* harmony import */ var _mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(764);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_si__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);







const MobileNav = ()=>{
    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showIcons, setShowIcons] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const myEmailAddress = "m.shalikarian@gmail.com";
    const githubProfileLink = "https://github.com/Milad64sh";
    const handleLinkClick = ()=>{
        const mailToLink = `mailto:${myEmailAddress}`;
        window.open(mailToLink, "_blank");
        console.log("email pop up opened");
    };
    const toggleMenu = ()=>{
        setShowIcons((showIcons)=>!showIcons);
        setIsMenuOpen((prev)=>!prev);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            className: (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mobileNav),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logoMenu),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logo),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "/",
                            legacyBehavior: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logoLink),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logoSpan__m),
                                        children: "m"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logoSpan__s),
                                        children: "s"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logoSpan__h),
                                        children: "h"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logoSpan__dot),
                                        children: "."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navList)} ${isMenuOpen && (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().open)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().menu),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: `${(_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().menuLi)} ${showIcons ? (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().visible) : ""}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/about",
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().menuItem),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiAboutdotme, {})
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: `${(_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().menuLi)} ${showIcons ? (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().visible) : ""}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "#",
                                        legacyBehavior: true,
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().menuItem),
                                            onClick: handleLinkClick,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiLogoGmail, {})
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: `${(_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().menuLi)} ${showIcons ? (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().visible) : ""}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: githubProfileLink,
                                        legacyBehavior: true,
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().menuItem),
                                            target: "_blank",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaGithub, {})
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().menuIcon)} ${isMenuOpen && (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().open)}`,
                        onClick: toggleMenu,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().iconBar)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().iconBar)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_mobileNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().iconBar)
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileNav);


/***/ })

};
;