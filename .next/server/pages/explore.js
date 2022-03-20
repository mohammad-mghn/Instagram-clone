(() => {
var exports = {};
exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 2781:
/***/ ((module) => {

// Exports
module.exports = {
	"main_container": "explore_main_container__RZYwM",
	"container": "explore_container__wpUSb",
	"post_image": "explore_post_image___ngxL"
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

/***/ 5584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/loading/loading.js
var loading_loading = __webpack_require__(3366);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/explore/explore.module.css
var explore_module = __webpack_require__(2781);
var explore_module_default = /*#__PURE__*/__webpack_require__.n(explore_module);
;// CONCATENATED MODULE: ./components/explore/explore.js

/* eslint-disable @next/next/no-img-element */ 


function Explore(props) {
    const router = (0,router_.useRouter)();
    console.log(props.data);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (explore_module_default()).main_container,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (explore_module_default()).container,
            children: props.data !== [] ? props.data.map((post, index)=>{
                console.log(post.image);
                return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: ()=>{
                        router.push("/p/" + post.id);
                    },
                    className: (explore_module_default()).post,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (explore_module_default()).post_image,
                        src: post.image[0],
                        alt: ""
                    })
                }, post.id));
            }) : ""
        })
    }));
}
/* harmony default export */ const explore = (Explore);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/explore/index.js






function Home(props) {
    const router = (0,router_.useRouter)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(60);
    const { 0: posts , 1: setposts  } = (0,external_react_.useState)([
        {
            id: "620cbbe727707974b8c8ba52",
            image: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Grey_background.jpg/1200px-Grey_background.jpg", 
            ],
            username: "Loading",
            location: "",
            caption: "",
            like: 0,
            comments: false,
            user_porofile: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Grey_background.jpg/1200px-Grey_background.jpg"
        }, 
    ]);
    async function addpostHandler() {
        setposts([]);
        const response = await fetch("/api/currentposts");
        const data = await response.json();
        setLoading(100);
        setposts(data);
    }
    (0,external_react_.useEffect)(()=>{
        addpostHandler();
        if (false) {}
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(loading_loading/* default */.Z, {
        width: loading,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Instagram • Explore"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(explore, {
                data: posts
            })
        ]
    }));
};
// export async function getStaticProps() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//   );
//   const db = client.db();`
//   const postsCollection = db.collection("posts");
//   const postsGettedCollection = await postsCollection
//     .find({ username: "vito" })
//     .toArray();
//   return {
//     props: {
//       posts: [
//         postsGettedCollection.map((post) => ({
//           username: post.username,
//           image: post.image,
//           id: post._id.toString(),
//           caption: post.caption,
//           like: post.like,
//           comments: post.comments,
//           location: post.location,
//         })),
//       ],
//     },
//     revalidate: 1,
//   };
// }
//
//
//
//
// const response = await fetch("/api/newpost", {
//   method: "POST",
//   body: dfaa,
//   headers: {
//     "Content-type": "application/json",
//   },
// });
// const data = await response.json();
// console.log(data);
{
/* <Swiper
  cssMode={true}
  navigation={true}
  pagination={true}
  mousewheel={true}
  keyboard={true}
  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
  className="mySwiper"
>
  {posts.map((post) => {
    return (
      <SwiperSlide key={posts.id}>
        <div className={styles.porofileeee}>
          <img src={post} alt="" className={styles.porofilee} />
        </div>
      </SwiperSlide>
    );
  })}
</Swiper>; */ } // export async function getServerSideProps(context) {
 //   return {
 //     props: {}, // will be passed to the page component as props
 //   };
 // }
 // {typeof window !== "undefined"
 // ? JSON.parse(localStorage.getItem("user")).username
 // : "Unknowen"}
 // {typeof window !== "undefined"
 // ? localStorage.getItem("user") !== null
 //   ? JSON.parse(localStorage.getItem("user")).username
 //   : "Unknowen"
 // : "Unknowen"}


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
var __webpack_exports__ = (__webpack_exec__(5584));
module.exports = __webpack_exports__;

})();