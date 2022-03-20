(() => {
var exports = {};
exports.id = 123;
exports.ids = [123];
exports.modules = {

/***/ 474:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "signup_container__f93pB",
	"form_section": "signup_form_section__LFa5_",
	"login_form": "signup_login_form__17HYU",
	"instagram_logo_div": "signup_instagram_logo_div__xYRG_",
	"instargam_logo": "signup_instargam_logo__wAqvK",
	"description": "signup_description__NFULS",
	"inputs": "signup_inputs__EVO7k",
	"input": "signup_input__DrhaQ",
	"input_password": "signup_input_password__3Jv3B",
	"show_hide_btn": "signup_show_hide_btn__Z58O1",
	"login_in_btn": "signup_login_in_btn__fufzS",
	"login_in_btn_disabled": "signup_login_in_btn_disabled__0k1O8",
	"terms_description": "signup_terms_description___sjsV",
	"erorr_txt": "signup_erorr_txt__97Sfs",
	"sign_up_section": "signup_sign_up_section__2VZ0G",
	"sign_up_txt": "signup_sign_up_txt__wGSB5",
	"Sign_up_link": "signup_Sign_up_link__FW6_k",
	"get_apps": "signup_get_apps__qnVN6",
	"get_apps_txt": "signup_get_apps_txt__UosUw",
	"stores_section": "signup_stores_section__YyclN",
	"store_box": "signup_store_box__j5_QB",
	"links": "signup_links__60sLr",
	"link": "signup_link__eys9I",
	"copy_right_and_language": "signup_copy_right_and_language__pusfj",
	"language_select": "signup_language_select__1YNd1",
	"copy_right_part": "signup_copy_right_part__7o4v4"
};


/***/ }),

/***/ 4859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(474);
/* harmony import */ var _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5__);

/* eslint-disable @next/next/no-img-element */ /* eslint-disable @next/next/link-passhref */ /* eslint-disable react/no-unescaped-entities */ 




function Emailsignup() {
    const { 0: loginError , 1: setLoginError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: passwordIsShowing , 1: setPasswordIsShowing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: loginEmailButtonStatus , 1: setLoginEmailButtonStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: loginPasswordButtonStatus , 1: setLoginPasswordButtonStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const emailInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const fullNameInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const usernameInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const passwordInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    var date = new Date();
    const SignUpHandler = async ()=>{
        var URL = prompt("Enter image URl 👇👇👇");
        var BIO = prompt("Enter your bio 👇👇👇");
        var user = {
            username: usernameInput.current.value,
            fullname: fullNameInput.current.value,
            email: emailInput.current.value,
            password: passwordInput.current.value,
            porofile_img: URL !== "" || URL !== " " || URL !== undefined || URL !== null ? URL : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Grey_background.jpg/1200px-Grey_background.jpg",
            bio: URL !== undefined || URL !== null ? BIO : "",
            followers: [],
            following: [],
            posts: [],
            story: []
        };
        const fetching = await fetch("/api/userSignUp", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json"
            }
        });
        const response = await fetching.json();
        if (response.message === "successful") {
            passwordInput.current.value = "";
            emailInput.current.value = "";
            fullNameInput.current.value = "";
            usernameInput.current.value = "";
            localStorage.setItem("saved", JSON.stringify({
                Posts: []
            }));
            localStorage.setItem("user", JSON.stringify(user));
            router.replace("/");
        } else {
            setLoginError(true);
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Login • Instagram"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: (e)=>{
                    e.preventDefault();
                },
                className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().login_form),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().instagram_logo_div),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "https://iconape.com/wp-content/files/mc/369575/png/369575.png",
                            alt: "",
                            className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().instargam_logo)
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),
                        children: "Sign up to see photos and videos from your friends."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().inputs),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().input_div),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "email",
                                    required: true,
                                    className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
                                    placeholder: "Email",
                                    name: "email",
                                    ref: emailInput,
                                    onChange: ()=>{
                                        setLoginEmailButtonStatus(emailInput.current.value);
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().input_div),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    required: true,
                                    className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
                                    placeholder: "Full Name",
                                    name: "fullname",
                                    ref: fullNameInput,
                                    onChange: ()=>{
                                        setLoginEmailButtonStatus(fullNameInput.current.value);
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().input_div),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    required: true,
                                    className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
                                    placeholder: "Username",
                                    name: "username",
                                    ref: usernameInput,
                                    onChange: ()=>{
                                        setLoginEmailButtonStatus(usernameInput.current.value);
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().input_div),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: passwordIsShowing ? "text" : "password",
                                        name: "password",
                                        required: true,
                                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
                                        style: {
                                            marginLeft: loginPasswordButtonStatus !== "" ? passwordIsShowing ? "-1rem" : "-0.65rem" : ""
                                        },
                                        placeholder: "Password",
                                        ref: passwordInput,
                                        onChange: ()=>{
                                            setLoginPasswordButtonStatus(passwordInput.current.value);
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().show_hide_btn),
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: loginEmailButtonStatus !== "" && loginPasswordButtonStatus !== "" ? (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().login_in_btn) : (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().login_in_btn_disabled),
                        onClick: ()=>{
                            if (loginEmailButtonStatus !== "" && loginPasswordButtonStatus !== "") {
                                SignUpHandler();
                            }
                        },
                        type: "submit",
                        children: "Next"
                    }),
                    loginError ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().erorr_txt),
                        children: "This username isn't available. Please try another."
                    }) : "",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().terms_description),
                        children: "By signing up, you agree to our Terms , Data Policy and Cookies Policy."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().sign_up_section),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().sign_up_txt),
                        children: "Have an account?"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/login",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().Sign_up_link),
                            children: "Log in"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().get_apps),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().get_apps_txt),
                        children: "Get the app."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().stores_section),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                href: "https:/lcoalhosttt",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png",
                                    alt: "",
                                    className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().store_box)
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                href: "https:/lcoalhosttt",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png",
                                    alt: "",
                                    className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().store_box)
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().links),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                        children: "Meta"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                        children: "About"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                        children: "Blog"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                        children: "Jobs"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                        children: "Help"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                        children: "API"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                        children: "Privacy"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                        children: "Terms"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                        children: "Top"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                        children: "Accounts"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                        children: "Hashtags"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                        children: "Locations"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                        children: "Instagram"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://about.facebook.com/meta",
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                        children: "Lite"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().copy_right_and_language),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        "aria-label": "Switch Display Language",
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().language_select),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "af",
                                children: "Afrikaans"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "cs",
                                children: "Čeština"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "da",
                                children: "Dansk"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "de",
                                children: "Deutsch"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "el",
                                children: "Ελληνικά"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "en",
                                children: "English"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "en-gb",
                                children: "English (UK)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "es",
                                children: "Espa\xf1ol (Espa\xf1a)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "es-la",
                                children: "Espa\xf1ol"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "fi",
                                children: "Suomi"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "fr",
                                children: "Fran\xe7ais"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "id",
                                children: "Bahasa Indonesia"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "it",
                                children: "Italiano"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "ja",
                                children: "日本語"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "ko",
                                children: "한국어"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "ms",
                                children: "Bahasa Melayu"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "nb",
                                children: "Norsk"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "nl",
                                children: "Nederlands"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "pl",
                                children: "Polski"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "pt-br",
                                children: "Portugu\xeas (Brasil)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "pt",
                                children: "Portugu\xeas (Portugal)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "ru",
                                children: "Русский"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "sv",
                                children: "Svenska"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "th",
                                children: "ภาษาไทย"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "tl",
                                children: "Filipino"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "tr",
                                children: "T\xfcrk\xe7e"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "zh-cn",
                                children: "中文(简体)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "zh-tw",
                                children: "中文(台灣)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "bn",
                                children: "বাংলা"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "gu",
                                children: "ગુજરાતી"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "hi",
                                children: "हिन्दी"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "hr",
                                children: "Hrvatski"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "hu",
                                children: "Magyar"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "kn",
                                children: "ಕನ್ನಡ"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "ml",
                                children: "മലയാളം"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "mr",
                                children: "मराठी"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "ne",
                                children: "नेपाली"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "pa",
                                children: "ਪੰਜਾਬੀ"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "si",
                                children: "සිංහල"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "sk",
                                children: "Slovenčina"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "ta",
                                children: "தமிழ்"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "te",
                                children: "తెలుగు"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "vi",
                                children: "Tiếng Việt"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "zh-hk",
                                children: "中文(香港)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "bg",
                                children: "Български"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "fr-ca",
                                children: "Fran\xe7ais (Canada)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "ro",
                                children: "Rom\xe2nă"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "sr",
                                children: "Српски"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "uk",
                                children: "Українська"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_5___default().copy_right_part),
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Emailsignup);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(4859)));
module.exports = __webpack_exports__;

})();