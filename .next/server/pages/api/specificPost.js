"use strict";
(() => {
var exports = {};
exports.id = 514;
exports.ids = [514];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 376:
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
    const postsCollection = db.collection("posts");
    // In monogoDB we don't IDs are a simple string it's kind of module
    // so to find post with its ID we have to add ObectId from mongodb
    const postDocuments = await postsCollection.find({
        _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId)(req.body.id)
    }).toArray();
    res.status(200).json(JSON.stringify(postDocuments.map((post)=>({
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
    )));
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(376));
module.exports = __webpack_exports__;

})();