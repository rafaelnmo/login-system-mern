/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst password = \"K2swm4p6g8h9\";\nconst config = {\n  env: \"development\" || 0,\n  port: process.env.PORT || 3001,\n  jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\n  mongoUri: \"mongodb+srv://roliveira:\" + password + \"@cluster0.em6ub.mongodb.net/mernproject?retryWrites=true&w=majority\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://server/./config/config.js?");

/***/ }),

/***/ "./controllers/auth.controller.js":
/*!****************************************!*\
  !*** ./controllers/auth.controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\n\n\n\n/**\n * receives the email and password in req.body. This email is used to retrieve\n * a matching user from the database. Then, the password authentication method\n * defined in UserSchema is used to verify the password that's received in\n * req.body from the client.\n */\n\nconst signin = async (req, res) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      email: req.body.email\n    });\n    if (!user) return res.status(\"401\").json({\n      error: \"User not found\"\n    });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status(\"401\").send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n      _id: user._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret);\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n    return res.json({\n      token,\n      user: {\n        _id: user._id,\n        name: user.name,\n        email: user.email\n      }\n    });\n  } catch (err) {\n    return res.status(\"401\").json({\n      error: \"Could not sign in\"\n    });\n  }\n};\n/**\n * clear the response cookie containing the signed JWT\n */\n\n\nconst signout = (req, res) => {\n  res.clearCookie(\"t\");\n  return res.status(\"200\").json({\n    message: \"signed out\"\n  });\n};\n/**\n * verify if the incoming request has a vaid JWT in the Authorization header\n */\n\n\nconst requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret,\n  userProperty: \"auth\",\n  algorithms: [\"sha1\", \"RS256\", \"HS256\"]\n});\n/**\n * check whether the authenticated user is the same as the user being updated\n * or deleted before corresponding CRUD cotroller function is allowed to proceed\n */\n\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status(\"403\").json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n};\n/**\n * verify if the incoming request has a vaid JWT in the Authorization header\n */\n\n\nconst isAdmin = (req, res, next) => {\n  const authorized = req.profile.admin == true;\n\n  if (!authorized) {\n    return res.status(\"403\").json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  signin,\n  signout,\n  requireSignin,\n  isAdmin,\n  hasAuthorization\n});\n\n//# sourceURL=webpack://server/./controllers/auth.controller.js?");

/***/ }),

/***/ "./controllers/empresa.controller.js":
/*!*******************************************!*\
  !*** ./controllers/empresa.controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_empresa_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/empresa.model */ \"./models/empresa.model.js\");\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ \"./models/user.model.js\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./helpers/dbErrorHandler.js\");\n\n\n\n\n/**\n * function that creates a new obra with the JSOM object\n * that's received in the POST requests at /api/obras/:userId\n */\n\nconst create = async (req, res) => {\n  const empresa = new _models_empresa_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n\n  try {\n    await empresa.save();\n    return res.status(200).json({\n      message: \"Successfully included NEW EMPRESA!\"\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/**\n * Load the matching user (using user value to compare) and append\n * this user, if found, to req.\n */\n\n\nconst empresaByID = async (req, res, next, id) => {\n  try {\n    let empresa = await _models_empresa_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n    if (!empresa) return res.status(\"400\").json({\n      error: \"User not found\"\n    });\n    req.profile = empresa;\n    next();\n  } catch (err) {\n    return res.status(\"400\").json({\n      error: \"Could not retrieve user\"\n    });\n  }\n};\n/**\n * retrieves the obra details from req.profile and send the obra object\n * in the response to the requesting client\n */\n\n\nconst read = (req, res) => {\n  return res.json(req.profile);\n};\n/**\n * function finds all the users from the database, populates only the\n * name, email, created, and updated fields in the resulting obras list,\n * and then returns this list of users as JSON objects in an array to\n * the requesting client.\n */\n\n\nconst list = async (req, res) => {\n  try {\n    let empresas = await _models_empresa_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().select(\"name email telefone CNPJ updated created\");\n    res.json(empresas);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/**\n * retrieves the obra details from req.profile and then uses the\n * loadash module to extend and merge the changes that came in the request body\n */\n\n\nconst update = async (req, res) => {\n  try {\n    let empresa = req.profile;\n    empresa = lodash_extend__WEBPACK_IMPORTED_MODULE_2___default()(empresa, req.body);\n    empresa.updated = Date.now();\n    await empresa.save();\n    res.json(empresa);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst remove = async (req, res) => {\n  try {\n    let empresa = req.profile;\n    let deletedEmpresa = await empresa.remove();\n    res.json(deletedEmpresa);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  create,\n  empresaByID,\n  read,\n  list,\n  remove,\n  update\n});\n\n//# sourceURL=webpack://server/./controllers/empresa.controller.js?");

/***/ }),

/***/ "./controllers/obra.controller.js":
/*!****************************************!*\
  !*** ./controllers/obra.controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_obra_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/obra.model */ \"./models/obra.model.js\");\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ \"./models/user.model.js\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./helpers/dbErrorHandler.js\");\n\n\n\n\n/**\n * function that creates a new obra with the JSOM object\n * that's received in the POST requests at /api/obras/:userId\n */\n\nconst create = async (req, res) => {\n  const obra = new _models_obra_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n\n  try {\n    await obra.save();\n    return res.status(200).json({\n      message: \"Successfully included NEW OBRA!\"\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/**\n * Load the matching user (using user value to compare) and append\n * this user, if found, to req.\n */\n\n\nconst obraByID = async (req, res, next, id) => {\n  try {\n    let obra = await _models_obra_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n    if (!obra) return res.status(\"400\").json({\n      error: \"Obra not found\"\n    });\n    req.profile = obra;\n    next();\n  } catch (err) {\n    return res.status(\"400\").json({\n      error: \"Could not retrieve user\"\n    });\n  }\n};\n/**\n * retrieves the obra details from req.profile and send the obra object\n * in the response to the requesting client\n */\n\n\nconst read = (req, res) => {\n  return res.json(req.profile);\n};\n/**\n * function finds all the users from the database, populates only the\n * name, email, created, and updated fields in the resulting obras list,\n * and then returns this list of users as JSON objects in an array to\n * the requesting client.\n */\n\n\nconst list = async (req, res) => {\n  try {\n    let obras = await _models_obra_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().select(\"name email telefone responsavel empresa_responsavel\");\n    res.json(obras);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/**\n * retrieves the obra details from req.profile and then uses the\n * loadash module to extend and merge the changes that came in the request body\n */\n\n\nconst update = async (req, res) => {\n  try {\n    let obra = req.profile;\n    console.log(obra);\n    obra = lodash_extend__WEBPACK_IMPORTED_MODULE_2___default()(obra, req.body);\n    obra.updated = Date.now();\n    await obra.save();\n    res.json(obra);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst remove = async (req, res) => {\n  try {\n    let obra = req.profile;\n    let deletedObra = await obra.remove();\n    res.json(deletedObra);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  create,\n  obraByID,\n  read,\n  list,\n  remove,\n  update\n});\n\n//# sourceURL=webpack://server/./controllers/obra.controller.js?");

/***/ }),

/***/ "./controllers/user.controller.js":
/*!****************************************!*\
  !*** ./controllers/user.controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./models/user.model.js\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./helpers/dbErrorHandler.js\");\n\n\n\n/**\n * function that creates a new user with the JSOM object\n * that's received in the POST requests at /api/users\n */\n\nconst create = async (req, res) => {\n  const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n\n  try {\n    await user.save();\n    return res.status(200).json({\n      message: \"Successfully SIGNED UP!\"\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/**\n * Load the matching user (using user value to compare) and append\n * this user, if found, to req.\n */\n\n\nconst userByID = async (req, res, next, id) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n    if (!user) return res.status(\"400\").json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  } catch (err) {\n    return res.status(\"400\").json({\n      error: \"Could not retrieve user\"\n    });\n  }\n};\n/**\n * retrieves the user details from req.profile and removes snsitive\n *\tinformation (hashed_password, salt, etc.) and send the user object\n * in the response to the requesting client\n */\n\n\nconst read = (req, res) => {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n/**\n * function finds all the users from the database, populates only the\n * name, email, created, and updated fields in the resulting user list,\n * and then returns this list of users as JSON objects in an array to\n * the requesting client.\n */\n\n\nconst list = async (req, res) => {\n  try {\n    let users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().select(\"name email updated created\");\n    res.json(users);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/**\n * retrieves the user details from req.profile and then uses the\n * loadash module to extend and merge the changes that came in the request body\n */\n\n\nconst update = async (req, res) => {\n  try {\n    let user = req.profile;\n    user = lodash_extend__WEBPACK_IMPORTED_MODULE_1___default()(user, req.body);\n    user.updated = Date.now();\n    await user.save();\n    user.hashed_password = undefined;\n    user.salt = undefined;\n    res.json(user);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst remove = async (req, res) => {\n  try {\n    let user = req.profile;\n    let deletedUser = await user.remove();\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  create,\n  userByID,\n  read,\n  list,\n  remove,\n  update\n});\n\n//# sourceURL=webpack://server/./controllers/user.controller.js?");

/***/ }),

/***/ "./express.js":
/*!********************!*\
  !*** ./express.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/user.routes */ \"./routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/auth.routes */ \"./routes/auth.routes.js\");\n/* harmony import */ var _routes_obra_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/obra.routes */ \"./routes/obra.routes.js\");\n/* harmony import */ var _routes_empresa_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/empresa.routes */ \"./routes/empresa.routes.js\");\n // middleware that simplify the browser-server communication\n\n // parse and set cookies in request objects\n\n // attempt to compress response bodies for all requests\n\n // collection of middleware functions to help secure Express apps\n\n // middleware that enable cross-origin resource sharing (CORS)\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // parse body params and attache them to req.body\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()()); // secure apps by setting various HTTP headers\n\napp.use(helmet__WEBPACK_IMPORTED_MODULE_4___default()()); // enable CORS - Cross Origin Resource Sharing\n\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(\"/\", _routes_user_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\napp.use(\"/\", _routes_auth_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use(\"/\", _routes_obra_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.use(\"/\", _routes_empresa_routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\napp.get(\"/\", (req, res) => {\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n}); // Catch unauthorised errors\n\napp.use((err, req, res, next) => {\n  if (err.name === \"UnauthorizedError\") {\n    res.status(401).json({\n      error: err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      error: err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://server/./express.js?");

/***/ }),

/***/ "./helpers/dbErrorHandler.js":
/*!***********************************!*\
  !*** ./helpers/dbErrorHandler.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n/**\n * Get unique error field name\n */\n\nconst getUniqueErrorMessage = err => {\n  let output;\n\n  try {\n    let fieldName = err.message.substring(err.message.lastIndexOf(\".$\") + 2, err.message.lastIndexOf(\"_1\"));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + \" already exists\";\n  } catch (ex) {\n    output = \"Unique field already exists\";\n  }\n\n  return output;\n};\n/**\n * Get the error message from error object\n */\n\n\nconst getErrorMessage = err => {\n  let message = \"\";\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = \"Something went wrong\";\n    }\n  } else {\n    for (let errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getErrorMessage\n});\n\n//# sourceURL=webpack://server/./helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./models/empresa.model.js":
/*!*********************************!*\
  !*** ./models/empresa.model.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n //user schema definition\n\nconst EmpresaSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  name: {\n    type: String,\n    trim: true,\n    required: \"Name is required\"\n  },\n  email: {\n    type: String,\n    trim: true,\n    match: [/.+\\@.+\\..+/, \"Please fill a valid email address\"],\n    required: \"Email is required\"\n  },\n  telefone: {\n    type: String,\n    required: \"Telefone is required here\"\n  },\n  CNPJ: {\n    type: String,\n    required: \"CNPJ is required here\"\n  },\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Empresa\", EmpresaSchema));\n\n//# sourceURL=webpack://server/./models/empresa.model.js?");

/***/ }),

/***/ "./models/obra.model.js":
/*!******************************!*\
  !*** ./models/obra.model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n //user schema definition\n\nconst ObraSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  name: {\n    type: String,\n    trim: true,\n    required: \"Name is required\"\n  },\n  email: {\n    type: String,\n    trim: true,\n    match: [/.+\\@.+\\..+/, \"Please fill a valid email address\"],\n    required: \"Email is required\"\n  },\n  telefone: {\n    type: String,\n    required: \"Telefone is required here\"\n  },\n  responsavel: {\n    type: String,\n    required: \"Responsavel is required here\"\n  },\n  empresa_responsavel: {\n    type: String\n  },\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Obra\", ObraSchema));\n\n//# sourceURL=webpack://server/./models/obra.model.js?");

/***/ }),

/***/ "./models/user.model.js":
/*!******************************!*\
  !*** ./models/user.model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n\n //user schema definition\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  name: {\n    type: String,\n    trim: true,\n    required: \"Name is required\"\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: true,\n    match: [/.+\\@.+\\..+/, \"Please fill a valid email address\"],\n    required: \"Email is required\"\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is required here\"\n  },\n  salt: String,\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  admin: {\n    type: Boolean,\n    default: false\n  }\n}); // handles the password provided as a virtual field by being ecrypted into a new hash\n\nUserSchema.virtual(\"password\").set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n}); // add vaidation constraints to the password field\n\nUserSchema.path(\"hashed_password\").validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate(\"password\", \"Password must be at least 6 characters.\");\n  }\n\n  if (this.isNew && !this._password) {\n    this.invalidate(\"password\", \"Password is required\");\n  }\n}, null); // methods to generate the authentication, encryptation logic and salt generation\n\nUserSchema.methods = {\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function (password) {\n    if (!password) return \"\";\n\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default().createHmac(\"sha1\", this.salt).update(password).digest(\"hex\");\n    } catch (err) {\n      return \"\";\n    }\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + \"\";\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n\n//# sourceURL=webpack://server/./models/user.model.js?");

/***/ }),

/***/ "./routes/auth.routes.js":
/*!*******************************!*\
  !*** ./routes/auth.routes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./controllers/auth.controller.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router(); // auth route with endpoint to signin with email and password\n\nrouter.route(\"/auth/signin\").post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin); // auth route with endpoint that clear the cookie containing the JWT after signin\n\nrouter.route(\"/auth/signout\").get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/auth.routes.js?");

/***/ }),

/***/ "./routes/empresa.routes.js":
/*!**********************************!*\
  !*** ./routes/empresa.routes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_empresa_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/empresa.controller */ \"./controllers/empresa.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./controllers/auth.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router(); // route that define the endpoint to fetch all the users in the db\n\nrouter.route(\"/api/empresas\").get(_controllers_empresa_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list);\n/**\n * Authorized Methods\n */\n// route that define the endpoint to create a new obra\n\n/*router\n\t.route(\"/api/empresa:userId\")\n\t.post(\n\t\tauthCtrl.requireSignin,\n\t\tauthCtrl.hasAuthorization,\n\t\tauthCtrl.isAdmin,\n\t\tempresaCtrl.create\n\t);\n*/\n\nrouter.route(\"/api/empresas\").post(_controllers_empresa_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create); // route that define the endpoint to update a sigle user's data\n\n/*router\n\t.route(\"/api/empresa/:userId\")\n\t.put(\n\t\tauthCtrl.requireSignin,\n\t\tauthCtrl.hasAuthorization,\n\t\tauthCtrl.isAdmin,\n\t\tempresaCtrl.update\n\t);\n*/\n\nrouter.route(\"/api/empresas/:empresaId\").put(_controllers_empresa_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update); // route that define the endpoint to delete a user\n\nrouter.route(\"/api/empresas/:empresaId\").delete(_controllers_empresa_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\n/*\n\tThis will ensure that every time the Express app receives a \n\trequest to a route that matches a path containing :userId parameter\n\tin it, the app will execute the userById controller function\n*/\n\nrouter.param(\"empresaId\", _controllers_empresa_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].empresaByID);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/empresa.routes.js?");

/***/ }),

/***/ "./routes/obra.routes.js":
/*!*******************************!*\
  !*** ./routes/obra.routes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_obra_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/obra.controller */ \"./controllers/obra.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./controllers/auth.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router(); // route that define the endpoint to fetch all the users in the db\n\nrouter.route(\"/api/obras\").get(_controllers_obra_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list);\n/**\n * Authorized Methods\n */\n// route that define the endpoint to create a new obra\n\n/*router\n\t.route(\"/api/obras:userId\")\n\t.post(\n\t\tauthCtrl.requireSignin,\n\t\tauthCtrl.hasAuthorization,\n\t\tauthCtrl.isAdmin,\n\t\tobraCtrl.create\n\t);\n*/\n\nrouter.route(\"/api/obras\").post(_controllers_obra_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create); // route that define the endpoint to update a sigle user's data\n\n/*router\n\t.route(\"/api/obras/:userId\")\n\t.put(\n\t\tauthCtrl.requireSignin,\n\t\tauthCtrl.hasAuthorization,\n\t\tauthCtrl.isAdmin,\n\t\tobraCtrl.update\n\t);*/\n\nrouter.route(\"/api/obras/:obraId\").put(_controllers_obra_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update); // route that define the endpoint to delete a user\n\nrouter.route(\"/api/obras/:obraId\").delete(_controllers_obra_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\n/*\n\tThis will ensure that every time the Express app receives a \n\trequest to a route that matches a path containing :userId parameter\n\tin it, the app will execute the userById controller function\n*/\n\nrouter.param(\"obraId\", _controllers_obra_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].obraByID);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/obra.routes.js?");

/***/ }),

/***/ "./routes/user.routes.js":
/*!*******************************!*\
  !*** ./routes/user.routes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./controllers/auth.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router(); // route that define the endpoint to create a new user (POST)\n\nrouter.route(\"/api/users\").post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create); // route that define the endpoint to fetch all the users in the db (GET)\n\nrouter.route(\"/api/users\").get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list);\n/**\n * Authorized Methods\n */\n// route that define the endpoint to read a single users's data (GET)\n\nrouter.route(\"/api/users/:userId\").get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read); // route that define the endpoint to update a sigle user's data (PUT)\n\nrouter.route(\"/api/users/:userId\").put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update); // route that define the endpoint to delete a user (DELETE)\n\nrouter.route(\"/api/users/:userId\").delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\n/*\n\tThis will ensure that every time the Express app receives a \n\trequest to a route that matches a path containing :userId parameter\n\tin it, the app will execute the userById controller function\n*/\n\nrouter.param(\"userId\", _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/user.routes.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Connection URL\n\n(mongoose__WEBPACK_IMPORTED_MODULE_2___default().Promise) = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri, {\n  useNewUrlParser: true,\n  //useCreateIndex: true,   <--- no longer supported option. Mongoose 6 always behaves as useCreteIndex is true\n  useUnifiedTopology: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connection.on(\"error\", () => {\n  throw new Error(`unable to connect to database: ${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri}`);\n});\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info(\"Server started on port %s.\", _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n//# sourceURL=webpack://server/./server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  return `<!doctype html>\n      <html lang=\"en\">\n        <head>\n          <meta charset=\"utf-8\">\n          <title>MERN Skeleton</title>\n        </head>\n        <body>\n          <div id=\"root\">My first back _\\\\|/_ </div>\n          \n        </body>\n      </html>`;\n});\n\n//# sourceURL=webpack://server/./template.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("express-jwt");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/extend");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;