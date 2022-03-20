(() => {
var exports = {};
exports.id = 437;
exports.ids = [437];
exports.modules = {

/***/ 5430:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "specificpost_container__0k3xe",
	"post_media_section": "specificpost_post_media_section__wUrMe",
	"slider": "specificpost_slider__IlGAS",
	"post_div": "specificpost_post_div__cabzK",
	"post": "specificpost_post__iFU8h",
	"post_data": "specificpost_post_data__T3W50",
	"header": "specificpost_header__yLpa_",
	"porofile_container": "specificpost_porofile_container__Yr0mb",
	"porofile": "specificpost_porofile__SNPcE",
	"username__location_container": "specificpost_username__location_container__c1_no",
	"username": "specificpost_username__xNjni",
	"location": "specificpost_location__cqCuH",
	"menu": "specificpost_menu__dJH8V",
	"comments_and_caption_section": "specificpost_comments_and_caption_section__U1tPi",
	"caption": "specificpost_caption__JCSIK",
	"porofile_section": "specificpost_porofile_section__ZyJxy",
	"porofile_container_in_caption": "specificpost_porofile_container_in_caption__gILZJ",
	"caption_section": "specificpost_caption_section__PeDVr",
	"comment_caption_section": "specificpost_comment_caption_section__oXnB5",
	"username_in_caption": "specificpost_username_in_caption__ExBHy",
	"caption_text": "specificpost_caption_text__d0HK_",
	"comments": "specificpost_comments__c_5lk",
	"date": "specificpost_date__wwNrG",
	"comment_porofile_container_in_caption": "specificpost_comment_porofile_container_in_caption__yyE_g",
	"comment_container": "specificpost_comment_container__t5Vmr",
	"like_svg": "specificpost_like_svg__ROhLj",
	"information_div": "specificpost_information_div___DJIU",
	"comment_like": "specificpost_comment_like___qCo7",
	"reply_button": "specificpost_reply_button__f1DXS",
	"controlers_section": "specificpost_controlers_section__wd466",
	"buttons_section": "specificpost_buttons_section__EUxOW",
	"buttons_icon": "specificpost_buttons_icon__L_fq_",
	"like_icon": "specificpost_like_icon__tcpFq",
	"zoom_in": "specificpost_zoom_in__Q6cbs",
	"like_icon_liked": "specificpost_like_icon_liked__FwdIT",
	"buttons_icon_save": "specificpost_buttons_icon_save__9arly",
	"buttons_icon_save_nocomment": "specificpost_buttons_icon_save_nocomment__pCm68",
	"like_section": "specificpost_like_section__kbVDd",
	"liked_section": "specificpost_liked_section__qfmJp",
	"post_date": "specificpost_post_date__bfVgD",
	"add_comment_div": "specificpost_add_comment_div___Yjg0",
	"sticker": "specificpost_sticker__erss_",
	"add_comment_input": "specificpost_add_comment_input__tUx9j",
	"share_comment_button": "specificpost_share_comment_button___vnR5",
	"share_comment_button_disabled": "specificpost_share_comment_button_disabled__Y2hrk",
	"emoji_box": "specificpost_emoji_box__KhABM"
};


/***/ }),

/***/ 9820:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _specificpost_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5430);
/* harmony import */ var _specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9062);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(javascript_time_ago__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var javascript_time_ago_locale_en_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7946);
/* harmony import */ var _loading_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3366);
/* harmony import */ var _emoji_box_emoji_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2344);
/* harmony import */ var _elements_comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9643);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

/* eslint-disable @next/next/no-img-element */ 











const Specificpost = (props)=>{
    const { 0: saved , 1: setSaved  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: liked , 1: setLiked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: stickers , 1: setStickers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: postButtonStatus , 1: setPostButtonStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: CommentLentgh , 1: setCommentLentgh  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.post.comments);
    const comment1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (localStorage.getItem("savedPosts") === null) {
            localStorage.setItem("savedPostsJson", JSON.stringify({
                savedPosts: []
            }));
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // this useEffect part is for setting saved default status
        if (localStorage.getItem("saved") !== null) {
            if (localStorage.getItem("saved").includes(props.post.id)) {
                setSaved(true);
            }
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // this useEffect part is for setting like default status
        var index = props.post.like.indexOf(JSON.parse(localStorage.getItem("user")).username);
        if (index > -1) {
            setLiked(true);
        }
    }, []);
    const date = new Date();
    javascript_time_ago__WEBPACK_IMPORTED_MODULE_5___default().addLocale(javascript_time_ago_locale_en_json__WEBPACK_IMPORTED_MODULE_9__);
    const timeAgo = new (javascript_time_ago__WEBPACK_IMPORTED_MODULE_5___default())("en-US");
    const time = props.post.date === undefined ? date.getTime() : props.post.date;
    const newDate = date.getTime() - time;
    const likeHandler = async ()=>{
        if (liked) {
            setLiked(false);
            var index = props.post.like.indexOf(JSON.parse(localStorage.getItem("user")).username);
            if (index > -1) {
                props.post.like.splice(index, 1);
                await fetch("/api/updateLike", {
                    method: "POST",
                    body: JSON.stringify(props.post),
                    headers: {
                        "Content-type": "application/json"
                    }
                });
            } else {
                setLiked(true);
                props.post.like.push(JSON.parse(localStorage.getItem("user")).username);
                await fetch("/api/updateLike", {
                    method: "POST",
                    body: JSON.stringify(props.post),
                    headers: {
                        "Content-type": "application/json"
                    }
                });
            }
        }
    };
    const saveHandler = async ()=>{
        if (saved) {
            let savedPostsJson = JSON.parse(localStorage.getItem("savedPostsJson"));
            savedPostsJson.savedPosts.map((post, index)=>{
                if (post.id === props.post.id) {
                    savedPostsJson.savedPosts.splice(index, 1);
                    localStorage.setItem("savedPostsJson", JSON.stringify(savedPostsJson));
                }
            });
            setSaved(false);
        } else {
            const savedPosts = JSON.parse(localStorage.getItem("savedPostsJson"));
            savedPosts.savedPosts.push(props.post);
            localStorage.setItem("savedPostsJson", JSON.stringify(savedPosts));
            setSaved(true);
        }
    };
    const commentHandler = async ()=>{
        setStickers(false);
        if (comment1.current.value !== "") {
            setPostButtonStatus("");
            const commentData = {
                text: comment1.current.value,
                username:  false ? 0 : "unknowen",
                porofile_img:  false ? 0 : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDw0PDw8PDw8PDQ8PDQ8PFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQYC/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDTgqkoAAAAAAACiACoAoIAKACAAKCAAAAAAC4AgAAAAAAEAAAVFBAAVBQQUBBQEAAAAAAABRAAAAAAAAAFQAVFQBUUASKAIoAAIKgAAAAAAGgAAAAAAAAAAAKgCiAKAAAAgAAAAAAAAAAAAAAAAAAAAoICgiooAigAAgAAKCAoIAAAAAAAACggqAAACoCiKCKAAAAAIKgAAAAAqAAoIAAogCgCAAAAAAKgAKAigAACKgAAAAAACgAYACKAAgAKAIqAqKAGCAqKgAAAAAACgAACKACKgAAKACCoAoAAAAAAAgKCAAAAAoAigAAAAgoCaKAgKAioAoAAAAACAKgAAAAAAAKIAoAiooIogAuAIAAACgAiooAFAEAAAAAAAAACCgIKCAAAoAYAioAoAAAAAAigiooAIAqAAKCAAAoCCgioAoAIKAgACoAqCggqAoAIKAIqAAAAAqAABAVAAABRAFABAAAABUoCoACgIKAIoCAAAAAAAAAAAAAACgIoAgAAAKgAqgDlQAqAAAAUAVAAUAQoAqUAAAUAH//Z"
            };
            props.post.comments.push(commentData);
            setCommentLentgh(CommentLentgh += comment1.current.value);
            const fetching = await fetch("/api/updateComments", {
                method: "POST",
                body: JSON.stringify(props.post),
                headers: {
                    "Content-type": "application/json"
                }
            });
            await fetching.json();
        }
        comment1.current.value = "";
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().post_media_section),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                    cssMode: true,
                    navigation: true,
                    keyboard: true,
                    modules: [
                        swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,
                        swiper__WEBPACK_IMPORTED_MODULE_4__.Keyboard
                    ],
                    className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().slider),
                    children: props.post.image.map((postdata)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().media_slide),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().post_div),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: postdata,
                                    alt: "",
                                    className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().post)
                                })
                            })
                        }, props.post.id));
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().post_data),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().header),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().porofile_container),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: props.post.user_porofile,
                                    alt: "",
                                    className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().porofile),
                                    onClick: ()=>{
                                        router.push(`/${props.data.username}`);
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().username__location_container),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        onClick: ()=>{
                                            router.push(`/${props.post.username}`);
                                        },
                                        className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().username),
                                        children: props.post.username
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().location),
                                        children: props.post.location
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                "aria-label": "More options",
                                className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().menu),
                                color: "#262626",
                                fill: "#262626",
                                height: "24",
                                role: "img",
                                viewBox: "0 0 24 24",
                                width: "24",
                                onClick: ()=>{
                                    setMenu(true);
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "1.5"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                        cx: "6",
                                        cy: "12",
                                        r: "1.5"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                        cx: "18",
                                        cy: "12",
                                        r: "1.5"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().comments_and_caption_section),
                        children: [
                            props.post.caption === "" ? "" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().caption),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().porofile_section),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().porofile_container_in_caption),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: props.post.user_porofile,
                                                alt: "",
                                                className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().porofile),
                                                onClick: ()=>{
                                                    router.push(`/${props.data.username}`);
                                                }
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().caption_section),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().username_in_caption),
                                                children: props.post.username
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().caption_text),
                                                children: props.post.caption
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().date),
                                                children: timeAgo.format(Date.now() - newDate)
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().comments),
                                children: props.post.comments.map((comment)=>{
                                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_comment__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        post: props.post,
                                        comment: comment
                                    }, props.post.id));
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().controlers_section),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().buttons_section),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: liked ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            "aria-label": "Unlike",
                                            className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().like_icon),
                                            color: "#ed4956",
                                            fill: "#ed4956",
                                            height: "24",
                                            role: "img",
                                            viewBox: "0 0 48 48",
                                            width: "24",
                                            onClick: likeHandler,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            "aria-label": "Like",
                                            className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().like_icon_liked),
                                            color: "#262626",
                                            fill: "#262626",
                                            height: "24",
                                            role: "img",
                                            viewBox: "0 0 24 24",
                                            width: "24",
                                            onClick: likeHandler,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: props.post.comments ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            "aria-label": "Comment",
                                            className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().buttons_icon),
                                            color: "#8e8e8e",
                                            fill: "#8e8e8e",
                                            height: "24",
                                            role: "img",
                                            viewBox: "0 0 24 24",
                                            width: "24",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z",
                                                fill: "none",
                                                stroke: "#000",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2"
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            "aria-label": "Share Post",
                                            className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().buttons_icon),
                                            color: "#8e8e8e",
                                            fill: "#8e8e8e",
                                            height: "24",
                                            role: "img",
                                            viewBox: "0 0 24 24",
                                            width: "24",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    fill: "none",
                                                    stroke: "#000",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    x1: "22",
                                                    x2: "9.218",
                                                    y1: "3",
                                                    y2: "10.083"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
                                                    fill: "none",
                                                    points: "11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334",
                                                    stroke: "#000",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().buttons_icon_save_div),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            "aria-label": "Save",
                                            className: props.post.comments ? (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().buttons_icon_save) : (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().buttons_icon_save_nocomment),
                                            color: "#262626",
                                            fill: "#262626",
                                            height: "24",
                                            role: "img",
                                            viewBox: "0 0 24 24",
                                            width: "24",
                                            onClick: saveHandler,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
                                                fill: saved ? "#000000" : "none",
                                                points: "20 21 12 13.44 4 21 4 3 20 3 20 21",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().liked_section),
                                children: [
                                    props.post.like.length,
                                    " likes"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().post_date),
                                children: timeAgo.format(Date.now() - newDate).toLocaleUpperCase()
                            }),
                            props.post.comments ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                action: "",
                                onSubmit: (e)=>{
                                    // it's due to not refreshing page on submitting form
                                    e.preventDefault();
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().add_comment_div),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            "aria-label": "Emoji",
                                            className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().sticker),
                                            color: "#262626",
                                            fill: "#262626",
                                            height: "24",
                                            role: "img",
                                            viewBox: "0 0 24 24",
                                            width: "24",
                                            onClick: ()=>{
                                                if (stickers) {
                                                    setStickers(false);
                                                } else {
                                                    setStickers(true);
                                                }
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().add_comment),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                placeholder: "Add a comment...",
                                                className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().add_comment_input),
                                                ref: comment1,
                                                onChange: ()=>{
                                                    setPostButtonStatus(comment1.current.value);
                                                },
                                                onClick: ()=>{
                                                    setStickers(false);
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: postButtonStatus === "" ? (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().share_comment_button_disabled) : (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().share_comment_button),
                                            type: "submit",
                                            onClick: commentHandler,
                                            children: "Post"
                                        })
                                    ]
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                            stickers ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_specificpost_module_css__WEBPACK_IMPORTED_MODULE_10___default().emoji_box),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emoji_box_emoji_box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    array: "bottom",
                                    emojiClicked: (e)=>{
                                        comment1.current.value += e;
                                    }
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Specificpost);

});

/***/ }),

/***/ 9643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SpecificPost_specificpost_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5430);
/* harmony import */ var _components_SpecificPost_specificpost_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_SpecificPost_specificpost_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9062);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(javascript_time_ago__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var javascript_time_ago_locale_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7946);

/* eslint-disable @next/next/no-img-element */ 



function Comment(props) {
    const date = new Date();
    const { 0: like , 1: setLiked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: commentLike , 1: setCommnetLike  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    javascript_time_ago__WEBPACK_IMPORTED_MODULE_2___default().addLocale(javascript_time_ago_locale_en_json__WEBPACK_IMPORTED_MODULE_3__);
    const timeAgo = new (javascript_time_ago__WEBPACK_IMPORTED_MODULE_2___default())("en-US");
    const { 0: time , 1: setTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.post.date === undefined ? date.getTime() : props.post.date);
    const newDate = date.getTime() - time;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_components_SpecificPost_specificpost_module_css__WEBPACK_IMPORTED_MODULE_4___default().comment_container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_components_SpecificPost_specificpost_module_css__WEBPACK_IMPORTED_MODULE_4___default().porofile_section),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_components_SpecificPost_specificpost_module_css__WEBPACK_IMPORTED_MODULE_4___default().comment_porofile_container_in_caption),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: props.comment.porofile_img,
                        alt: "",
                        className: (_components_SpecificPost_specificpost_module_css__WEBPACK_IMPORTED_MODULE_4___default().porofile),
                        onClick: ()=>{
                            router.push(`/${props.data.username}`);
                        }
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_components_SpecificPost_specificpost_module_css__WEBPACK_IMPORTED_MODULE_4___default().comment_caption_section),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_components_SpecificPost_specificpost_module_css__WEBPACK_IMPORTED_MODULE_4___default().username_in_caption),
                        children: props.comment.username
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_components_SpecificPost_specificpost_module_css__WEBPACK_IMPORTED_MODULE_4___default().caption_text),
                        children: props.comment.text
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_components_SpecificPost_specificpost_module_css__WEBPACK_IMPORTED_MODULE_4___default().information_div),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_components_SpecificPost_specificpost_module_css__WEBPACK_IMPORTED_MODULE_4___default().date),
                                children: timeAgo.format(Date.now() - newDate)
                            }),
                            commentLike === 0 ? "" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_components_SpecificPost_specificpost_module_css__WEBPACK_IMPORTED_MODULE_4___default().comment_like),
                                children: [
                                    commentLike,
                                    " Like"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_components_SpecificPost_specificpost_module_css__WEBPACK_IMPORTED_MODULE_4___default().reply_button),
                                children: "Reply"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_components_SpecificPost_specificpost_module_css__WEBPACK_IMPORTED_MODULE_4___default().like_section),
                children: !like ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    "aria-label": "Like",
                    className: (_components_SpecificPost_specificpost_module_css__WEBPACK_IMPORTED_MODULE_4___default().like_svg),
                    color: "#262626",
                    fill: "#262626",
                    height: "12",
                    role: "img",
                    viewBox: "0 0 24 24",
                    width: "12",
                    onClick: ()=>{
                        setLiked(true);
                        setCommnetLike(commentLike += 1);
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    "aria-label": "Unlike",
                    className: (_components_SpecificPost_specificpost_module_css__WEBPACK_IMPORTED_MODULE_4___default().like_svg),
                    color: "#ed4956",
                    fill: "#ed4956",
                    height: "12",
                    role: "img",
                    viewBox: "0 0 48 48",
                    width: "12",
                    onClick: ()=>{
                        setLiked(false);
                        setCommnetLike(commentLike -= 1);
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
                    })
                })
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);


/***/ }),

/***/ 6017:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_LoginHandler_loginHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4149);
/* harmony import */ var _components_SpecificPost_specificPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9820);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SpecificPost_specificPost__WEBPACK_IMPORTED_MODULE_5__]);
_components_SpecificPost_specificPost__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






function Post(props) {
    if (props.post !== undefined) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_LoginHandler_loginHandler__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Instagram"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        position: "absolute",
                        top: "3.65rem",
                        backgroundColor: "rgb(250, 250, 250)",
                        width: "100%",
                        height: "calc(100vh - 3.65rem)"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SpecificPost_specificPost__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        post: props.post[0]
                    })
                })
            ]
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);
async function getStaticPaths({ router  }) {
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_3__.MongoClient.connect("mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    const db = client.db();
    const postsCollection = db.collection("posts");
    const postsGettedCollection = await postsCollection.find({}).toArray();
    return {
        paths: postsGettedCollection.map((postu)=>{
            return {
                params: {
                    post: postu._id.toString()
                }
            };
        }),
        fallback: true
    };
}
async function getStaticProps(context) {
    const { params  } = context;
    const blogId = params.post;
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_3__.MongoClient.connect("mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    const db = client.db();
    const postsCollection = db.collection("posts");
    const postsGettedCollection = await postsCollection.find({
        _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_3__.ObjectId)(blogId)
    }).toArray();
    return {
        props: {
            post: postsGettedCollection.map((post)=>({
                    username: post.username,
                    image: post.image,
                    id: post._id.toString(),
                    caption: post.caption,
                    like: post.like,
                    comments: post.comments,
                    location: post.location,
                    date: post.date,
                    user_porofile: post.user_porofile
                })
            )
        }
    };
}

});

/***/ }),

/***/ 9062:
/***/ ((module) => {

"use strict";
module.exports = require("javascript-time-ago");

/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

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

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [946,833,344,472], () => (__webpack_exec__(6017)));
module.exports = __webpack_exports__;

})();