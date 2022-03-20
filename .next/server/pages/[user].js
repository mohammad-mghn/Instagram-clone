(() => {
var exports = {};
exports.id = 289;
exports.ids = [289];
exports.modules = {

/***/ 9377:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "porofile_container__WopA9",
	"main_section": "porofile_main_section__J_9rh",
	"user_data": "porofile_user_data__qLZW7",
	"porofile_section": "porofile_porofile_section__hsGzF",
	"porofile": "porofile_porofile__Hjj9a",
	"user_data_section": "porofile_user_data_section__rVFbn",
	"user_settings_and_username": "porofile_user_settings_and_username__JxMoC",
	"username": "porofile_username___TS0W",
	"settings_section": "porofile_settings_section__5NyCb",
	"edit_porofile": "porofile_edit_porofile__4HZSw",
	"settings_svg": "porofile_settings_svg__0cr2z",
	"posts_following_followers_count": "porofile_posts_following_followers_count__Zxb0U",
	"count_heading": "porofile_count_heading__X2tXf",
	"count_heading_num": "porofile_count_heading_num__QzPTc",
	"fullname_div": "porofile_fullname_div__VK_gJ",
	"bio_container": "porofile_bio_container__pGTbR",
	"menu": "porofile_menu__hEDVr",
	"menu_items": "porofile_menu_items__iPy5B",
	"menu_item": "porofile_menu_item__wMI2q",
	"menu_item_clicked": "porofile_menu_item_clicked__Gf9_6",
	"meun_item_icon": "porofile_meun_item_icon__ee3QP",
	"meun_item_icon_clicked": "porofile_meun_item_icon_clicked__dTnfY",
	"menu_header": "porofile_menu_header__uP9Hb",
	"posts": "porofile_posts__7M021",
	"post": "porofile_post__NqXQT",
	"post_image": "porofile_post_image__E3mxC",
	"footer": "porofile_footer__OJbsp",
	"links": "porofile_links__f6v5c",
	"link": "porofile_link__ao3j6",
	"copy_right_and_language": "porofile_copy_right_and_language__ctKxO",
	"language_select": "porofile_language_select___qiSK",
	"copy_right_part": "porofile_copy_right_part__v_hBl"
};


/***/ }),

/***/ 1405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _user_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/porofile/porofile.module.css
var porofile_module = __webpack_require__(9377);
var porofile_module_default = /*#__PURE__*/__webpack_require__.n(porofile_module);
;// CONCATENATED MODULE: ./components/porofile/porofile.js

/* eslint-disable @next/next/no-img-element */ 

function Porofile(props) {
    var date = new Date();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (porofile_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (porofile_module_default()).main_section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (porofile_module_default()).user_data,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (porofile_module_default()).porofile_section,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: props.user.porofile_img,
                                    alt: "",
                                    className: (porofile_module_default()).porofile
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (porofile_module_default()).user_data_section,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (porofile_module_default()).user_settings_and_username,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: (porofile_module_default()).username,
                                                children: props.user.username
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (porofile_module_default()).settings_section,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: (porofile_module_default()).edit_porofile,
                                                        children: "Edit Porofile"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                        "aria-label": "Options",
                                                        className: (porofile_module_default()).settings_svg,
                                                        color: "#262626",
                                                        fill: "#262626",
                                                        height: "24",
                                                        role: "img",
                                                        viewBox: "0 0 24 24",
                                                        width: "24",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                fill: "none",
                                                                r: "8.635",
                                                                stroke: "currentColor",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (porofile_module_default()).posts_following_followers_count,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                className: (porofile_module_default()).count_heading,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: (porofile_module_default()).count_heading_num,
                                                        children: props.user.posts.length
                                                    }),
                                                    " ",
                                                    "posts"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                className: (porofile_module_default()).count_heading,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: (porofile_module_default()).count_heading_num,
                                                        children: props.user.followers.length
                                                    }),
                                                    " ",
                                                    "followers"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                className: (porofile_module_default()).count_heading,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: (porofile_module_default()).count_heading_num,
                                                        children: props.user.following.length
                                                    }),
                                                    " ",
                                                    "following"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: (porofile_module_default()).fullname_div,
                                        children: props.user.fullname
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (porofile_module_default()).bio_container,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (porofile_module_default()).bio,
                                            children: props.user.bio
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: (porofile_module_default()).menu,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (porofile_module_default()).menu_items,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    type: "radio",
                                    className: (porofile_module_default()).menu_item_clicked,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            "aria-label": "",
                                            className: (porofile_module_default()).meun_item_icon,
                                            color: "#262626",
                                            fill: "#262626",
                                            height: "12",
                                            role: "img",
                                            viewBox: "0 0 24 24",
                                            width: "12",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                    fill: "none",
                                                    height: "18",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    width: "18",
                                                    x: "3",
                                                    y: "3"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    x1: "9.015",
                                                    x2: "9.015",
                                                    y1: "3",
                                                    y2: "21"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    x1: "14.985",
                                                    x2: "14.985",
                                                    y1: "3",
                                                    y2: "21"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    x1: "21",
                                                    x2: "3",
                                                    y1: "9.015",
                                                    y2: "9.015"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    x1: "21",
                                                    x2: "3",
                                                    y1: "14.985",
                                                    y2: "14.985"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: (porofile_module_default()).menu_header,
                                            children: "POSTS"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    type: "radio",
                                    className: (porofile_module_default()).menu_item,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            "aria-label": "",
                                            className: (porofile_module_default()).meun_item_icon,
                                            color: "#8e8e8e",
                                            fill: "#000",
                                            height: "12",
                                            role: "img",
                                            viewBox: "0 0 24 24",
                                            width: "12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm5-11.8l-6.8-3.9c-.5-.3-1-.3-1.5 0-.4.3-.7.7-.7 1.3v7.8c0 .5.3 1 .8 1.3.2.1.5.2.8.2s.5-.1.8-.2l6.8-3.9c.5-.3.8-.8.8-1.3s-.5-1-1-1.3zm-7.5 5.2V8.1l6.8 3.9-6.8 3.9z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: (porofile_module_default()).menu_header,
                                            children: "VIDOES"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    type: "radio",
                                    className: (porofile_module_default()).menu_item,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            "aria-label": "",
                                            className: (porofile_module_default()).meun_item_icon,
                                            color: "#000",
                                            fill: "#000",
                                            height: "12",
                                            role: "img",
                                            viewBox: "0 0 24 24",
                                            width: "12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                                fill: "none",
                                                points: "20 21 12 13.44 4 21 4 3 20 3 20 21",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: (porofile_module_default()).menu_header,
                                            children: "SAVED"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    type: "radio",
                                    className: (porofile_module_default()).menu_item,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            "aria-label": "",
                                            className: (porofile_module_default()).meun_item_icon,
                                            color: "#262626",
                                            fill: "#262626",
                                            height: "12",
                                            role: "img",
                                            viewBox: "0 0 24 24",
                                            width: "12",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                    fill: "none",
                                                    height: "18",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    width: "18",
                                                    x: "3",
                                                    y: "3"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    x1: "9.015",
                                                    x2: "9.015",
                                                    y1: "3",
                                                    y2: "21"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    x1: "14.985",
                                                    x2: "14.985",
                                                    y1: "3",
                                                    y2: "21"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    x1: "21",
                                                    x2: "3",
                                                    y1: "9.015",
                                                    y2: "9.015"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    x1: "21",
                                                    x2: "3",
                                                    y1: "14.985",
                                                    y2: "14.985"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: (porofile_module_default()).menu_header,
                                            children: "TAGGED"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: (porofile_module_default()).posts,
                        children: props.user.posts !== [] ? props.user.posts.map((post)=>{
                            console.log(post.image);
                            return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (porofile_module_default()).post,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: (porofile_module_default()).post_image,
                                    src: post.image[0],
                                    alt: ""
                                })
                            }, post.id));
                        }) : ""
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                className: (porofile_module_default()).footer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (porofile_module_default()).links,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://about.facebook.com/meta",
                                className: (porofile_module_default()).link,
                                children: "Meta"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://about.facebook.com/meta",
                                className: (porofile_module_default()).link,
                                children: "About"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://about.facebook.com/meta",
                                className: (porofile_module_default()).link,
                                children: "Blog"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://about.facebook.com/meta",
                                className: (porofile_module_default()).link,
                                children: "Jobs"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://about.facebook.com/meta",
                                className: (porofile_module_default()).link,
                                children: "Help"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://about.facebook.com/meta",
                                className: (porofile_module_default()).link,
                                children: "API"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://about.facebook.com/meta",
                                className: (porofile_module_default()).link,
                                children: "Privacy"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://about.facebook.com/meta",
                                className: (porofile_module_default()).link,
                                children: "Terms"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://about.facebook.com/meta",
                                className: (porofile_module_default()).link,
                                children: "Top"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://about.facebook.com/meta",
                                className: (porofile_module_default()).link,
                                children: "Accounts"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://about.facebook.com/meta",
                                className: (porofile_module_default()).link,
                                children: "Hashtags"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://about.facebook.com/meta",
                                className: (porofile_module_default()).link,
                                children: "Locations"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (porofile_module_default()).copy_right_and_language,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                "aria-label": "Switch Display Language",
                                className: (porofile_module_default()).language_select,
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
                                className: (porofile_module_default()).copy_right_part,
                                children: [
                                    "\xa9 ",
                                    date.getFullYear(),
                                    " Instagram from Meta"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const porofile = (Porofile);

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
;// CONCATENATED MODULE: ./pages/[user].js





function User(props) {
    console.log(props.data[0]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(porofile, {
        user: props.data[0]
    }));
}
/* harmony default export */ const _user_ = (User);
async function getServerSideProps({ query  }) {
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    const db = client.db();
    const postsCollection = db.collection("users");
    const postsGettedCollection = await postsCollection.find({
        username: query.user
    }).toArray();
    return {
        props: {
            data: postsGettedCollection.map((post)=>({
                    id: post._id.toString(),
                    username: post.username,
                    fullname: post.fullname,
                    email: post.email,
                    porofile_img: post.porofile_img,
                    bio: post.bio,
                    followers: post.followers,
                    following: post.following,
                    posts: post.posts,
                    story: post.story
                })
            )
        }
    };
}


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

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
var __webpack_exports__ = (__webpack_exec__(1405));
module.exports = __webpack_exports__;

})();