"use strict";
(() => {
var exports = {};
exports.id = 362;
exports.ids = [362];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 8124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

async function Handler(req, res) {
    console.log(req.body);
    if (req.method === "POST") {
        const data = req.body;
        console.log("data:", data);
        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect("mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
        const db = client.db();
        const postsCollection = db.collection("posts");
        const result = postsCollection.updateOne({
            _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId)(req.body.id)
        }, {
            $set: {
                like: req.body.like
            }
        }, function() {
            client.close();
        });
        console.log(result);
        res.status(200).json({
            PostMessage: "successful"
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8124));
module.exports = __webpack_exports__;

})();