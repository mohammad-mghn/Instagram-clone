(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 9676:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "login_container__24fan",
	"main_section": "login_main_section__HtTRn",
	"phones_section": "login_phones_section__d_iAC",
	"phone_screen": "login_phone_screen__MXMad",
	"form_section": "login_form_section__VxiIv",
	"login_form": "login_login_form__nzo_j",
	"instagram_logo_div": "login_instagram_logo_div__x_3oJ",
	"instargam_logo": "login_instargam_logo__fGntH",
	"inputs": "login_inputs__4N5E1",
	"input": "login_input__LxEYM",
	"input_password": "login_input_password__ojSai",
	"show_hide_btn": "login_show_hide_btn__QG4qO",
	"login_in_btn": "login_login_in_btn__tqLuU",
	"login_in_btn_disabled": "login_login_in_btn_disabled__5RB_I",
	"forget_password": "login_forget_password__RgUWA",
	"erorr_txt": "login_erorr_txt__q4y0E",
	"sign_up_section": "login_sign_up_section__W6Cva",
	"sign_up_txt": "login_sign_up_txt__W7TLN",
	"Sign_up_link": "login_Sign_up_link__9dBb6",
	"get_apps": "login_get_apps__XYXgi",
	"get_apps_txt": "login_get_apps_txt__lanzP",
	"stores_section": "login_stores_section__cqaMU",
	"store_box": "login_store_box__8HHPp",
	"links": "login_links__juKy_",
	"link": "login_link__uz2B0",
	"copy_right_and_language": "login_copy_right_and_language__gmnRD",
	"language_select": "login_language_select__BiSit",
	"copy_right_part": "login_copy_right_part__oO9TD"
};


/***/ }),

/***/ 4457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_login)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/login/login.module.css
var login_module = __webpack_require__(9676);
var login_module_default = /*#__PURE__*/__webpack_require__.n(login_module);
;// CONCATENATED MODULE: ./components/login/login.js

/* eslint-disable @next/next/no-img-element */ /* eslint-disable @next/next/link-passhref */ /* eslint-disable react/no-unescaped-entities */ 




function Login() {
    const router = (0,router_.useRouter)();
    const emailInput = (0,external_react_.useRef)();
    const passwordInput = (0,external_react_.useRef)();
    var date = new Date();
    const { 0: loginError , 1: setLoginError  } = (0,external_react_.useState)(false);
    const { 0: loginEmailButtonStatus , 1: setLoginEmailButtonStatus  } = (0,external_react_.useState)("");
    const { 0: passwordIsShowing , 1: setPasswordIsShowing  } = (0,external_react_.useState)(false);
    const { 0: loginPasswordButtonStatus , 1: setLoginPasswordButtonStatus  } = (0,external_react_.useState)("");
    const { 0: imgSrc , 1: setimgSrc  } = (0,external_react_.useState)("https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg");
    var i = 0;
    const screeeHandler = ()=>{
        const screeArray = [
            "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
            "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg",
            "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
            "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg", 
        ];
        if (i < screeArray.length - 1) {
            i++;
        } else {
            i = 0;
        }
        setimgSrc(screeArray[i]);
    };
    (0,external_react_.useEffect)(()=>{
        setInterval(screeeHandler, 3000);
        if (false) {}
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (login_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Login • Instagram"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (login_module_default()).main_section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (login_module_default()).phones_section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png",
                                alt: "",
                                className: (login_module_default()).phones
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: (login_module_default()).phone_screen,
                                src: imgSrc,
                                alt: ""
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (login_module_default()).form_section,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                },
                                className: (login_module_default()).login_form,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (login_module_default()).instagram_logo_div,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://iconape.com/wp-content/files/mc/369575/png/369575.png",
                                            alt: "",
                                            className: (login_module_default()).instargam_logo
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (login_module_default()).inputs,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (login_module_default()).input_div,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "email",
                                                    required: true,
                                                    className: (login_module_default()).input,
                                                    placeholder: "Email",
                                                    ref: emailInput,
                                                    onChange: ()=>{
                                                        setLoginEmailButtonStatus(emailInput.current.value);
                                                        setLoginError(false);
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (login_module_default()).input_div,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: passwordIsShowing ? "text" : "password",
                                                        required: true,
                                                        className: (login_module_default()).input,
                                                        style: {
                                                            marginLeft: loginPasswordButtonStatus !== "" ? passwordIsShowing ? "-1rem" : "-0.65rem" : ""
                                                        },
                                                        placeholder: "Password",
                                                        ref: passwordInput,
                                                        onChange: ()=>{
                                                            setLoginPasswordButtonStatus(passwordInput.current.value);
                                                            setLoginError(false);
                                                        }
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: (login_module_default()).show_hide_btn,
                                                        style: {
                                                            display: loginPasswordButtonStatus === "" ? "none" : "inline"
                                                        },
                                                        onClick: ()=>{
                                                            if (passwordIsShowing) {
                                                                setPasswordIsShowing(false);
                                                            } else {
                                                                setPasswordIsShowing(true);
                                                            }
                                                        },
                                                        children: passwordIsShowing ? "hide" : "show"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: loginEmailButtonStatus !== "" && loginPasswordButtonStatus !== "" ? (login_module_default()).login_in_btn : (login_module_default()).login_in_btn_disabled,
                                        onClick: async ()=>{
                                            var user = {
                                                email: emailInput.current.value,
                                                password: passwordInput.current.value
                                            };
                                            const fetching = await fetch("/api/userLogIn", {
                                                method: "POST",
                                                body: JSON.stringify(user),
                                                headers: {
                                                    "Content-type": "application/json"
                                                }
                                            });
                                            const response = await fetching.json();
                                            if (response.message !== "unsuccessful") {
                                                localStorage.setItem("user", JSON.stringify(response.message[0]));
                                                router.push("/");
                                                console.log(response.message);
                                            } else {
                                                setLoginError(true);
                                            }
                                        },
                                        type: "submit",
                                        children: "Login in"
                                    }),
                                    loginError ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (login_module_default()).erorr_txt,
                                        children: "Sorry, your password or email was incorrect. Please double-check your password."
                                    }) : "",
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: ()=>{
                                            alert("Sorry, but It's none of my business😂😂😊");
                                        },
                                        className: (login_module_default()).forget_password,
                                        children: "Forgot password?"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: (login_module_default()).sign_up_section,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (login_module_default()).sign_up_txt,
                                        children: "Don't have a account?"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/accounts/emailsignup",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (login_module_default()).Sign_up_link,
                                            children: "Sign up"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: (login_module_default()).get_apps,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (login_module_default()).get_apps_txt,
                                        children: "Get the app."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (login_module_default()).stores_section,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                target: "_blank",
                                                rel: "noreferrer",
                                                href: "https:/lcoalhosttt",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png",
                                                    alt: "",
                                                    className: (login_module_default()).store_box
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                target: "_blank",
                                                rel: "noreferrer",
                                                href: "https:/lcoalhosttt",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png",
                                                    alt: "",
                                                    className: (login_module_default()).store_box
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (login_module_default()).links,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "Meta"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "About"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "Blog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "Jobs"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "Help"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "API"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "Privacy"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "Terms"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "Top"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "Accounts"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "Hashtags"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "Locations"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "Instagram"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "Lite"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "Dance"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "Food & Drink"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "Home & Garden"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "Music"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (login_module_default()).link,
                        children: "Visual Arts"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (login_module_default()).copy_right_and_language,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                        "aria-label": "Switch Display Language",
                        className: (login_module_default()).language_select,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "af",
                                children: "Afrikaans"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "cs",
                                children: "Čeština"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "da",
                                children: "Dansk"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "de",
                                children: "Deutsch"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "el",
                                children: "Ελληνικά"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "en",
                                selected: true,
                                children: "English"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "en-gb",
                                children: "English (UK)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "es",
                                children: "Espa\xf1ol (Espa\xf1a)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "es-la",
                                children: "Espa\xf1ol"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "fi",
                                children: "Suomi"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "fr",
                                children: "Fran\xe7ais"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "id",
                                children: "Bahasa Indonesia"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "it",
                                children: "Italiano"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "ja",
                                children: "日本語"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "ko",
                                children: "한국어"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "ms",
                                children: "Bahasa Melayu"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "nb",
                                children: "Norsk"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "nl",
                                children: "Nederlands"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "pl",
                                children: "Polski"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "pt-br",
                                children: "Portugu\xeas (Brasil)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "pt",
                                children: "Portugu\xeas (Portugal)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "ru",
                                children: "Русский"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "sv",
                                children: "Svenska"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "th",
                                children: "ภาษาไทย"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "tl",
                                children: "Filipino"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "tr",
                                children: "T\xfcrk\xe7e"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "zh-cn",
                                children: "中文(简体)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "zh-tw",
                                children: "中文(台灣)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "bn",
                                children: "বাংলা"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "gu",
                                children: "ગુજરાતી"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "hi",
                                children: "हिन्दी"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "hr",
                                children: "Hrvatski"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "hu",
                                children: "Magyar"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "kn",
                                children: "ಕನ್ನಡ"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "ml",
                                children: "മലയാളം"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "mr",
                                children: "मराठी"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "ne",
                                children: "नेपाली"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "pa",
                                children: "ਪੰਜਾਬੀ"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "si",
                                children: "සිංහල"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "sk",
                                children: "Slovenčina"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "ta",
                                children: "தமிழ்"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "te",
                                children: "తెలుగు"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "vi",
                                children: "Tiếng Việt"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "zh-hk",
                                children: "中文(香港)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "bg",
                                children: "Български"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "fr-ca",
                                children: "Fran\xe7ais (Canada)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "ro",
                                children: "Rom\xe2nă"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "sr",
                                children: "Српски"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "uk",
                                children: "Українська"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (login_module_default()).copy_right_part,
                        children: [
                            "\xa9 ",
                            date.getFullYear(),
                            " Instagram from Meta"
                        ]
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const login = (Login);

;// CONCATENATED MODULE: ./pages/login.js



const LoginPage = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(login, {}));
};
/* harmony default export */ const pages_login = (LoginPage);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(4457)));
module.exports = __webpack_exports__;

})();