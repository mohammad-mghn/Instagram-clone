"use strict";
(() => {
var exports = {};
exports.id = 665;
exports.ids = [665];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 6514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect("mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    const db = client.db();
    const postsCollection = db.collection("users");
    const postDocument = await postsCollection.find({
        email: req.body.email
    }).toArray();
    if (postDocument.length === 1) {
        if (postDocument[0].password === req.body.password) {
            res.status(200).json({
                message: postDocument.map((post)=>({
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
            });
        } else {
            res.status(200).json({
                message: "unsuccessful"
            });
        }
    } else {
        res.status(200).json({
            message: "unsuccessful"
        });
    }
    client.close();
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6514));
module.exports = __webpack_exports__;

})();