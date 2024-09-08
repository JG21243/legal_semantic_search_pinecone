"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/search/route";
exports.ids = ["app/api/search/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.ts&appDir=%2Fworkspaces%2Fcodespaces-blank%2Flegal-semantic-search%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fcodespaces-blank%2Flegal-semantic-search&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.ts&appDir=%2Fworkspaces%2Fcodespaces-blank%2Flegal-semantic-search%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fcodespaces-blank%2Flegal-semantic-search&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _workspaces_codespaces_blank_legal_semantic_search_app_api_search_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/search/route.ts */ \"(rsc)/./app/api/search/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/search/route\",\n        pathname: \"/api/search\",\n        filename: \"route\",\n        bundlePath: \"app/api/search/route\"\n    },\n    resolvedPagePath: \"/workspaces/codespaces-blank/legal-semantic-search/app/api/search/route.ts\",\n    nextConfigOutput,\n    userland: _workspaces_codespaces_blank_legal_semantic_search_app_api_search_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/search/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZWFyY2glMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNlYXJjaCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNlYXJjaCUyRnJvdXRlLnRzJmFwcERpcj0lMkZ3b3Jrc3BhY2VzJTJGY29kZXNwYWNlcy1ibGFuayUyRmxlZ2FsLXNlbWFudGljLXNlYXJjaCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGd29ya3NwYWNlcyUyRmNvZGVzcGFjZXMtYmxhbmslMkZsZWdhbC1zZW1hbnRpYy1zZWFyY2gmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzBCO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVnYWwtc2VtYW50aWMtc2VhcmNoLXNhbXBsZS1hcHAvPzAwMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL3dvcmtzcGFjZXMvY29kZXNwYWNlcy1ibGFuay9sZWdhbC1zZW1hbnRpYy1zZWFyY2gvYXBwL2FwaS9zZWFyY2gvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NlYXJjaC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NlYXJjaFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2VhcmNoL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL3dvcmtzcGFjZXMvY29kZXNwYWNlcy1ibGFuay9sZWdhbC1zZW1hbnRpYy1zZWFyY2gvYXBwL2FwaS9zZWFyY2gvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3NlYXJjaC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.ts&appDir=%2Fworkspaces%2Fcodespaces-blank%2Flegal-semantic-search%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fcodespaces-blank%2Flegal-semantic-search&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/search/route.ts":
/*!*********************************!*\
  !*** ./app/api/search/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   maxDuration: () => (/* binding */ maxDuration)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"(rsc)/./node_modules/@pinecone-database/pinecone/dist/index.js\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _langchain_community_embeddings_voyage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @langchain/community/embeddings/voyage */ \"(rsc)/./node_modules/@langchain/community/embeddings/voyage.js\");\n/* harmony import */ var _langchain_pinecone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @langchain/pinecone */ \"(rsc)/./node_modules/@langchain/pinecone/index.js\");\n\n\n\n\nconst maxDuration = 300;\nasync function POST(req) {\n    const { query } = await req.json();\n    if (!query) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Query is required\"\n        }, {\n            status: 400\n        });\n    }\n    try {\n        // Initialize Pinecone client\n        const pc = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_1__.Pinecone();\n        // Initialize VoyageEmbeddings\n        const voyageEmbeddings = new _langchain_community_embeddings_voyage__WEBPACK_IMPORTED_MODULE_2__.VoyageEmbeddings({\n            apiKey: process.env.VOYAGE_API_KEY,\n            inputType: \"document\",\n            modelName: \"voyage-law-2\"\n        });\n        // Initialize PineconeVectorStore\n        const vectorStore = new _langchain_pinecone__WEBPACK_IMPORTED_MODULE_3__.PineconeStore(voyageEmbeddings, {\n            pineconeIndex: pc.Index(process.env.PINECONE_INDEX)\n        });\n        console.log(`query is: ${query}`);\n        const retrieved = await vectorStore.maxMarginalRelevanceSearch(query, {\n            k: 20\n        });\n        // Filter to ensure results set is unique - filter on the metadata.id\n        const results = retrieved.filter((result, index)=>{\n            return index === retrieved.findIndex((otherResult)=>{\n                return result.metadata.id === otherResult.metadata.id;\n            });\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            results\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error performing similarity search:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to perform similarity search\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlYXJjaC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ1k7QUFDbUI7QUFDdEI7QUFFN0MsTUFBTUksY0FBYyxJQUFJO0FBRXhCLGVBQWVDLEtBQUtDLEdBQVk7SUFDckMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJO0lBRWhDLElBQUksQ0FBQ0QsT0FBTztRQUNWLE9BQU9QLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFvQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN6RTtJQUVBLElBQUk7UUFDRiw2QkFBNkI7UUFDN0IsTUFBTUMsS0FBSyxJQUFJVixpRUFBUUE7UUFFdkIsOEJBQThCO1FBQzlCLE1BQU1XLG1CQUFtQixJQUFJVixvRkFBZ0JBLENBQUM7WUFDNUNXLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztZQUNsQ0MsV0FBVztZQUNYQyxXQUFXO1FBQ2I7UUFFQSxpQ0FBaUM7UUFDakMsTUFBTUMsY0FBYyxJQUFJaEIsOERBQWFBLENBQUNTLGtCQUFrQjtZQUN0RFEsZUFBZVQsR0FBR1UsS0FBSyxDQUFDUCxRQUFRQyxHQUFHLENBQUNPLGNBQWM7UUFDcEQ7UUFFQUMsUUFBUUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFakIsTUFBTSxDQUFDO1FBRWhDLE1BQU1rQixZQUFZLE1BQU1OLFlBQVlPLDBCQUEwQixDQUFDbkIsT0FBTztZQUFFb0IsR0FBRztRQUFHO1FBRTlFLHFFQUFxRTtRQUNyRSxNQUFNQyxVQUFlSCxVQUFVSSxNQUFNLENBQUMsQ0FBQ0MsUUFBUUM7WUFDN0MsT0FDRUEsVUFDQU4sVUFBVU8sU0FBUyxDQUFDLENBQUNDO2dCQUNuQixPQUFPSCxPQUFPSSxRQUFRLENBQUNDLEVBQUUsS0FBS0YsWUFBWUMsUUFBUSxDQUFDQyxFQUFFO1lBQ3ZEO1FBRUo7UUFFQSxPQUFPbkMscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFb0I7UUFBUSxHQUFHO1lBQUVsQixRQUFRO1FBQUk7SUFFdEQsRUFBRSxPQUFPRCxPQUFPO1FBQ2RjLFFBQVFkLEtBQUssQ0FBQyx1Q0FBdUNBO1FBQ3JELE9BQU9ULHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFzQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMzRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVnYWwtc2VtYW50aWMtc2VhcmNoLXNhbXBsZS1hcHAvLi9hcHAvYXBpL3NlYXJjaC9yb3V0ZS50cz83ODMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IFBpbmVjb25lIH0gZnJvbSAnQHBpbmVjb25lLWRhdGFiYXNlL3BpbmVjb25lJztcbmltcG9ydCB7IFZveWFnZUVtYmVkZGluZ3MgfSBmcm9tICdAbGFuZ2NoYWluL2NvbW11bml0eS9lbWJlZGRpbmdzL3ZveWFnZSc7XG5pbXBvcnQgeyBQaW5lY29uZVN0b3JlIH0gZnJvbSAnQGxhbmdjaGFpbi9waW5lY29uZSc7XG5cbmV4cG9ydCBjb25zdCBtYXhEdXJhdGlvbiA9IDMwMDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgaWYgKCFxdWVyeSkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnUXVlcnkgaXMgcmVxdWlyZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIEluaXRpYWxpemUgUGluZWNvbmUgY2xpZW50XG4gICAgY29uc3QgcGMgPSBuZXcgUGluZWNvbmUoKTtcblxuICAgIC8vIEluaXRpYWxpemUgVm95YWdlRW1iZWRkaW5nc1xuICAgIGNvbnN0IHZveWFnZUVtYmVkZGluZ3MgPSBuZXcgVm95YWdlRW1iZWRkaW5ncyh7XG4gICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LlZPWUFHRV9BUElfS0VZLFxuICAgICAgaW5wdXRUeXBlOiAnZG9jdW1lbnQnLFxuICAgICAgbW9kZWxOYW1lOiBcInZveWFnZS1sYXctMlwiLFxuICAgIH0pO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBQaW5lY29uZVZlY3RvclN0b3JlXG4gICAgY29uc3QgdmVjdG9yU3RvcmUgPSBuZXcgUGluZWNvbmVTdG9yZSh2b3lhZ2VFbWJlZGRpbmdzLCB7XG4gICAgICBwaW5lY29uZUluZGV4OiBwYy5JbmRleChwcm9jZXNzLmVudi5QSU5FQ09ORV9JTkRFWCBhcyBzdHJpbmcpLFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coYHF1ZXJ5IGlzOiAke3F1ZXJ5fWApXG5cbiAgICBjb25zdCByZXRyaWV2ZWQgPSBhd2FpdCB2ZWN0b3JTdG9yZS5tYXhNYXJnaW5hbFJlbGV2YW5jZVNlYXJjaChxdWVyeSwgeyBrOiAyMCB9KTtcblxuICAgIC8vIEZpbHRlciB0byBlbnN1cmUgcmVzdWx0cyBzZXQgaXMgdW5pcXVlIC0gZmlsdGVyIG9uIHRoZSBtZXRhZGF0YS5pZFxuICAgIGNvbnN0IHJlc3VsdHM6IGFueSA9IHJldHJpZXZlZC5maWx0ZXIoKHJlc3VsdCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGluZGV4ID09PVxuICAgICAgICByZXRyaWV2ZWQuZmluZEluZGV4KChvdGhlclJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5tZXRhZGF0YS5pZCA9PT0gb3RoZXJSZXN1bHQubWV0YWRhdGEuaWQ7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgcmVzdWx0cyB9LCB7IHN0YXR1czogMjAwIH0pO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyZm9ybWluZyBzaW1pbGFyaXR5IHNlYXJjaDonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gcGVyZm9ybSBzaW1pbGFyaXR5IHNlYXJjaCcgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiUGluZWNvbmUiLCJWb3lhZ2VFbWJlZGRpbmdzIiwiUGluZWNvbmVTdG9yZSIsIm1heER1cmF0aW9uIiwiUE9TVCIsInJlcSIsInF1ZXJ5IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwicGMiLCJ2b3lhZ2VFbWJlZGRpbmdzIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlZPWUFHRV9BUElfS0VZIiwiaW5wdXRUeXBlIiwibW9kZWxOYW1lIiwidmVjdG9yU3RvcmUiLCJwaW5lY29uZUluZGV4IiwiSW5kZXgiLCJQSU5FQ09ORV9JTkRFWCIsImNvbnNvbGUiLCJsb2ciLCJyZXRyaWV2ZWQiLCJtYXhNYXJnaW5hbFJlbGV2YW5jZVNlYXJjaCIsImsiLCJyZXN1bHRzIiwiZmlsdGVyIiwicmVzdWx0IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJvdGhlclJlc3VsdCIsIm1ldGFkYXRhIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/search/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@pinecone-database","vendor-chunks/@langchain","vendor-chunks/tr46","vendor-chunks/zod","vendor-chunks/langsmith","vendor-chunks/@sinclair","vendor-chunks/semver","vendor-chunks/zod-to-json-schema","vendor-chunks/node-fetch","vendor-chunks/whatwg-url","vendor-chunks/fast-uri","vendor-chunks/p-queue","vendor-chunks/eventemitter3","vendor-chunks/retry","vendor-chunks/webidl-conversions","vendor-chunks/camelcase","vendor-chunks/uuid","vendor-chunks/p-retry","vendor-chunks/p-timeout","vendor-chunks/fast-deep-equal","vendor-chunks/cross-fetch","vendor-chunks/decamelize","vendor-chunks/p-finally","vendor-chunks/flat"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.ts&appDir=%2Fworkspaces%2Fcodespaces-blank%2Flegal-semantic-search%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fcodespaces-blank%2Flegal-semantic-search&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();