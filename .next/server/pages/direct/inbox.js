(() => {
var exports = {};
exports.id = 317;
exports.ids = [317];
exports.modules = {

/***/ 8775:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "direct_container__DVTt_",
	"img_container": "direct_img_container__4rfHy",
	"img_porofile": "direct_img_porofile__9hHvh",
	"information_container": "direct_information_container__v_Ru_",
	"username": "direct_username__peQUR",
	"active_status": "direct_active_status__Vk5F8",
	"img_main_container": "direct_img_main_container__5Dpc2"
};


/***/ }),

/***/ 5922:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "loading_loading__w8Gp2"
};


/***/ }),

/***/ 3366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loading_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5922);
/* harmony import */ var _loading_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loading_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Loading(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    width: `${props.width}%`,
                    display: props.width === 100 ? "none" : "block"
                },
                className: (_loading_module_css__WEBPACK_IMPORTED_MODULE_2___default().loading)
            }),
            props.children
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 2959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ inbox)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/direct.module.css
var direct_module = __webpack_require__(8231);
var direct_module_default = /*#__PURE__*/__webpack_require__.n(direct_module);
// EXTERNAL MODULE: ./components/direct/direct.module.css
var direct_direct_module = __webpack_require__(8775);
var direct_direct_module_default = /*#__PURE__*/__webpack_require__.n(direct_direct_module);
;// CONCATENATED MODULE: ./components/direct/direct.js

/* eslint-disable @next/next/no-img-element */ 

function Direct(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (direct_direct_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (direct_direct_module_default()).img_container,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: props.active ? (direct_direct_module_default()).img_main_container : "",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (direct_direct_module_default()).img_porofile,
                        src: props.ImgSrc,
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (direct_direct_module_default()).information_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (direct_direct_module_default()).username,
                        children: props.username
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: (direct_direct_module_default()).active_status,
                        children: props.activity
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const direct = (Direct);

// EXTERNAL MODULE: ./components/loading/loading.js
var loading_loading = __webpack_require__(3366);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./Assists/svgs/svgs.js
var svgs = __webpack_require__(833);
;// CONCATENATED MODULE: ./pages/direct/inbox.js









function Inbox() {
    const router = (0,router_.useRouter)();
    const { 0: loading , 1: setloading  } = (0,external_react_.useState)(40);
    const { 0: newChat , 1: senewChat  } = (0,external_react_.useState)(true);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(loading_loading/* default */.Z, {
        width: loading,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Inbox • Direct"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                onLoadCapture: ()=>{
                    setTimeout(()=>{
                        setloading(90);
                    }, 250);
                },
                className: (direct_module_default()).container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        onLoadCapture: ()=>{
                            setTimeout(()=>{
                                setloading(100);
                            }, 500);
                        },
                        className: (direct_module_default()).contacts_container,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (direct_module_default()).account_new_chat,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (direct_module_default()).account,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (direct_module_default()).account_text,
                                                children: [
                                                    " ",
                                                     false ? 0 : "Unknowen"
                                                ]
                                            }),
                                            svgs/* DownButton */.sI
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (direct_module_default()).new_chat_button,
                                        children: svgs/* NewChatButton */.Y3
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (direct_module_default()).chat_section_container,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(direct, {
                                        ImgSrc: svgs/* IliaPic */.wF,
                                        username: "ilia gharahi",
                                        activity: "Active today",
                                        active: false
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(direct, {
                                        ImgSrc: svgs/* VitoPicture */.lj,
                                        username: "vito.mohagheghian",
                                        activity: "Active today",
                                        active: true
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(direct, {
                                        ImgSrc: svgs/* Megajs */.vz,
                                        username: "‎مرجع تخصصی آموزش جاوااسکریپت‎",
                                        activity: "Active today",
                                        active: true
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (direct_module_default()).messages_container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (direct_module_default()).send_icon,
                                children: svgs/* SendButton */.c7
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (direct_module_default()).your_massage,
                                children: "Your Messages"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (direct_module_default()).description,
                                children: "Send private photos and messages to a friend or group."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (direct_module_default()).send_button_div,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>{
                                        router.push("/direct/new");
                                    },
                                    className: (direct_module_default()).send_button,
                                    children: "Send Message"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const inbox = (Inbox);


/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [833,231], () => (__webpack_exec__(2959)));
module.exports = __webpack_exports__;

})();