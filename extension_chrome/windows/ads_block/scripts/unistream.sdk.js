/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/logger.ts
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.error = function (msg, info) {
        if (info === void 0) { info = null; }
        if (info === null) {
            console.error(msg);
        }
        else {
            console.error(msg, info);
        }
    };
    Logger.debug = function (msg, info) {
        if (info === void 0) { info = null; }
        if ({"env":{"API_URL":"https://data.unistream.io","ENV":"production"}}.env.ENV !== 'development') {
            return;
        }
        if (info === null) {
            console.debug(msg);
        }
        else {
            console.debug(msg, info);
        }
    };
    Logger.info = function (msg, info) {
        if (info === void 0) { info = null; }
        if (info === null) {
            console.info(msg);
        }
        else {
            console.info(msg, info);
        }
    };
    return Logger;
}());


;// CONCATENATED MODULE: ./src/Factory.ts
var Factory = /** @class */ (function () {
    function Factory(instance) {
        this.sdkInstance = instance;
    }
    return Factory;
}());


;// CONCATENATED MODULE: ./src/api.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Api = /** @class */ (function (_super) {
    __extends(Api, _super);
    function Api(instance, options) {
        return _super.call(this, instance) || this;
    }
    Api.prototype.sendEvent = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.post('/event', event)];
            });
        });
    };
    Api.prototype.get = function (endpoint, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call(endpoint, __assign({ method: 'GET' }, options))];
            });
        });
    };
    Api.prototype.post = function (endpoint, requestData, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                options = this.applyRequestData(requestData, options);
                if (options === null) {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/, this.call(endpoint, __assign({ method: 'POST' }, options))];
            });
        });
    };
    Api.prototype.patch = function (endpoint, requestData, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                options = this.applyRequestData(requestData, options);
                if (options === null) {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/, this.call(endpoint, __assign({ method: 'PATCH' }, options))];
            });
        });
    };
    Api.prototype.call = function (endpoint, options) {
        return __awaiter(this, void 0, void 0, function () {
            var user, url, responseRaw, data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        user = this.sdkInstance.user;
                        if (user) {
                            options.headers['uuid'] = user.uuid;
                        }
                        url = this.sdkInstance.options.apiBaseUrl + endpoint;
                        return [4 /*yield*/, fetch(url, options)];
                    case 1:
                        responseRaw = _a.sent();
                        if (responseRaw.status == 204) {
                            return [2 /*return*/, {}];
                        }
                        return [4 /*yield*/, responseRaw.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3:
                        e_1 = _a.sent();
                        Logger.error("Connection error at api call endpoint '".concat(endpoint, "'"), e_1);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.applyRequestData = function (data, options) {
        try {
            return __assign({ headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }, options);
        }
        catch (e) {
            return null;
        }
    };
    return Api;
}(Factory));


;// CONCATENATED MODULE: ./src/sdk-storage.ts
var sdk_storage_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SdkStorage = /** @class */ (function (_super) {
    sdk_storage_extends(SdkStorage, _super);
    function SdkStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SdkStorage.prototype.set = function (key, dataObject) {
        window.localStorage.setItem(key, JSON.stringify(dataObject));
        return true;
    };
    SdkStorage.prototype.get = function (key) {
        var dataObjectRaw = window.localStorage.getItem(key);
        // console.log(dataObjectRaw);
        try {
            var dataObject = JSON.parse(dataObjectRaw);
            return dataObject;
        }
        catch (e) {
            // Logger.error('deserialization of local storage entry for key `key` failed', e);
            return dataObjectRaw;
        }
    };
    return SdkStorage;
}(Factory));


;// CONCATENATED MODULE: ./src/user.ts
var user_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var user_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var User = /** @class */ (function (_super) {
    user_extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.getFromStorageOrCreate = function () {
        return user_awaiter(this, void 0, void 0, function () {
            var uuidStorage, user;
            return user_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uuidStorage = this.sdkInstance.storage.get('uuid');
                        Logger.debug('trying to load user from storage ...');
                        if (!(uuidStorage && uuidStorage.uuid)) return [3 /*break*/, 1];
                        Logger.debug('... success. creating user from local storage');
                        user = this.createFromUuid(uuidStorage.uuid);
                        return [3 /*break*/, 3];
                    case 1:
                        Logger.debug('... failed. creating user from api');
                        return [4 /*yield*/, this.createUser()];
                    case 2:
                        user = _a.sent();
                        if (user === null) {
                            return [2 /*return*/, null];
                        }
                        this.sdkInstance.storage.set("uuid", { uuid: user.uuid });
                        _a.label = 3;
                    case 3: return [2 /*return*/, user];
                }
            });
        });
    };
    User.prototype.createUser = function () {
        return user_awaiter(this, void 0, void 0, function () {
            var userData, user;
            return user_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sdkInstance.api.post('/user', { version: this.sdkInstance.options.version })];
                    case 1:
                        userData = _a.sent();
                        if (!userData === null || !userData.uuid) {
                            return [2 /*return*/, null];
                        }
                        user = new User(this.sdkInstance);
                        user.uuid = userData.uuid;
                        return [2 /*return*/, user];
                }
            });
        });
    };
    User.prototype.createFromUuid = function (uuid) {
        var user = new User(this.sdkInstance);
        user.uuid = uuid;
        return user;
    };
    return User;
}(Factory));


;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/validation/ValidationError.js
/**
 * Validation error description.
 */
var ValidationError = /** @class */ (function () {
    function ValidationError() {
    }
    /**
     *
     * @param shouldDecorate decorate the message with ANSI formatter escape codes for better readability
     * @param hasParent true when the error is a child of an another one
     * @param parentPath path as string to the parent of this property
     */
    ValidationError.prototype.toString = function (shouldDecorate, hasParent, parentPath) {
        var _this = this;
        if (shouldDecorate === void 0) { shouldDecorate = false; }
        if (hasParent === void 0) { hasParent = false; }
        if (parentPath === void 0) { parentPath = ""; }
        var boldStart = shouldDecorate ? "\u001B[1m" : "";
        var boldEnd = shouldDecorate ? "\u001B[22m" : "";
        var propConstraintFailed = function (propertyName) {
            return " - property ".concat(boldStart).concat(parentPath).concat(propertyName).concat(boldEnd, " has failed the following constraints: ").concat(boldStart).concat(Object.keys(_this.constraints).join(", ")).concat(boldEnd, " \n");
        };
        if (!hasParent) {
            return ("An instance of ".concat(boldStart).concat(this.target ? this.target.constructor.name : 'an object').concat(boldEnd, " has failed the validation:\n") +
                (this.constraints ? propConstraintFailed(this.property) : "") +
                (this.children
                    ? this.children.map(function (childError) { return childError.toString(shouldDecorate, true, _this.property); }).join("")
                    : ""));
        }
        else {
            // we format numbers as array indexes for better readability.
            var formattedProperty_1 = Number.isInteger(+this.property)
                ? "[".concat(this.property, "]")
                : "".concat(parentPath ? "." : "").concat(this.property);
            if (this.constraints) {
                return propConstraintFailed(formattedProperty_1);
            }
            else {
                return this.children
                    ? this.children
                        .map(function (childError) { return childError.toString(shouldDecorate, true, "".concat(parentPath).concat(formattedProperty_1)); })
                        .join("")
                    : "";
            }
        }
    };
    return ValidationError;
}());

//# sourceMappingURL=ValidationError.js.map
;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/validation/ValidationTypes.js
/**
 * Validation types.
 */
var ValidationTypes = /** @class */ (function () {
    function ValidationTypes() {
    }
    /**
     * Checks if validation type is valid.
     */
    ValidationTypes.isValid = function (type) {
        var _this = this;
        return (type !== 'isValid' &&
            type !== 'getMessage' &&
            Object.keys(this)
                .map(function (key) { return _this[key]; })
                .indexOf(type) !== -1);
    };
    /* system */
    ValidationTypes.CUSTOM_VALIDATION = 'customValidation'; // done
    ValidationTypes.NESTED_VALIDATION = 'nestedValidation'; // done
    ValidationTypes.PROMISE_VALIDATION = 'promiseValidation'; // done
    ValidationTypes.CONDITIONAL_VALIDATION = 'conditionalValidation'; // done
    ValidationTypes.WHITELIST = 'whitelistValidation'; // done
    ValidationTypes.IS_DEFINED = 'isDefined'; // done
    return ValidationTypes;
}());

//# sourceMappingURL=ValidationTypes.js.map
;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/validation/ValidationUtils.js
/**
 * Convert the constraint to a string to be shown in an error
 */
function constraintToString(constraint) {
    if (Array.isArray(constraint)) {
        return constraint.join(', ');
    }
    return "".concat(constraint);
}
var ValidationUtils = /** @class */ (function () {
    function ValidationUtils() {
    }
    ValidationUtils.replaceMessageSpecialTokens = function (message, validationArguments) {
        var messageString;
        if (message instanceof Function) {
            messageString = message(validationArguments);
        }
        else if (typeof message === 'string') {
            messageString = message;
        }
        if (messageString && Array.isArray(validationArguments.constraints)) {
            validationArguments.constraints.forEach(function (constraint, index) {
                messageString = messageString.replace(new RegExp("\\$constraint".concat(index + 1), 'g'), constraintToString(constraint));
            });
        }
        if (messageString &&
            validationArguments.value !== undefined &&
            validationArguments.value !== null &&
            typeof validationArguments.value === 'string')
            messageString = messageString.replace(/\$value/g, validationArguments.value);
        if (messageString)
            messageString = messageString.replace(/\$property/g, validationArguments.property);
        if (messageString)
            messageString = messageString.replace(/\$target/g, validationArguments.targetName);
        return messageString;
    };
    return ValidationUtils;
}());

//# sourceMappingURL=ValidationUtils.js.map
;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/utils/is-promise.util.js
// https://github.com/TylorS/typed-is-promise/blob/abf1514e1b6961adfc75765476b0debb96b2c3ae/src/index.ts
function isPromise(p) {
    return p !== null && typeof p === 'object' && typeof p.then === 'function';
}
//# sourceMappingURL=is-promise.util.js.map
;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/utils/convert-to-array.util.js
/**
 * Convert Map, Set to Array
 */
function convertToArray(val) {
    if (val instanceof Map) {
        return Array.from(val.values());
    }
    return Array.isArray(val) ? val : Array.from(val);
}
//# sourceMappingURL=convert-to-array.util.js.map
;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/metadata/ValidationMetadata.js
/**
 * This metadata contains validation rules.
 */
var ValidationMetadata = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function ValidationMetadata(args) {
        /**
         * Validation groups used for this validation.
         */
        this.groups = [];
        /**
         * Specifies if validated value is an array and each of its item must be validated.
         */
        this.each = false;
        /*
         * A transient set of data passed through to the validation result for response mapping
         */
        this.context = undefined;
        this.type = args.type;
        this.target = args.target;
        this.propertyName = args.propertyName;
        this.constraints = args.constraints;
        this.constraintCls = args.constraintCls;
        this.validationTypeOptions = args.validationTypeOptions;
        if (args.validationOptions) {
            this.message = args.validationOptions.message;
            this.groups = args.validationOptions.groups;
            this.always = args.validationOptions.always;
            this.each = args.validationOptions.each;
            this.context = args.validationOptions.context;
        }
    }
    return ValidationMetadata;
}());

//# sourceMappingURL=ValidationMetadata.js.map
;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/validation-schema/ValidationSchemaToMetadataTransformer.js

/**
 * Used to transform validation schemas to validation metadatas.
 */
var ValidationSchemaToMetadataTransformer = /** @class */ (function () {
    function ValidationSchemaToMetadataTransformer() {
    }
    ValidationSchemaToMetadataTransformer.prototype.transform = function (schema) {
        var metadatas = [];
        Object.keys(schema.properties).forEach(function (property) {
            schema.properties[property].forEach(function (validation) {
                var validationOptions = {
                    message: validation.message,
                    groups: validation.groups,
                    always: validation.always,
                    each: validation.each,
                };
                var args = {
                    type: validation.type,
                    target: schema.name,
                    propertyName: property,
                    constraints: validation.constraints,
                    validationTypeOptions: validation.options,
                    validationOptions: validationOptions,
                };
                metadatas.push(new ValidationMetadata(args));
            });
        });
        return metadatas;
    };
    return ValidationSchemaToMetadataTransformer;
}());

//# sourceMappingURL=ValidationSchemaToMetadataTransformer.js.map
;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/utils/get-global.util.js
/**
 * This function returns the global object across Node and browsers.
 *
 * Note: `globalThis` is the standardized approach however it has been added to
 * Node.js in version 12. We need to include this snippet until Node 12 EOL.
 */
function getGlobal() {
    if (typeof globalThis !== 'undefined') {
        return globalThis;
    }
    if (typeof __webpack_require__.g !== 'undefined') {
        return __webpack_require__.g;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Cannot find name 'window'.
    if (typeof window !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Cannot find name 'window'.
        return window;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Cannot find name 'self'.
    if (typeof self !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Cannot find name 'self'.
        return self;
    }
}
//# sourceMappingURL=get-global.util.js.map
;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/metadata/MetadataStorage.js


/**
 * Storage all metadatas.
 */
var MetadataStorage = /** @class */ (function () {
    function MetadataStorage() {
        // -------------------------------------------------------------------------
        // Private properties
        // -------------------------------------------------------------------------
        this.validationMetadatas = [];
        this.constraintMetadatas = [];
    }
    Object.defineProperty(MetadataStorage.prototype, "hasValidationMetaData", {
        get: function () {
            return !!this.validationMetadatas.length;
        },
        enumerable: false,
        configurable: true
    });
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * Adds a new validation metadata.
     */
    MetadataStorage.prototype.addValidationSchema = function (schema) {
        var _this = this;
        var validationMetadatas = new ValidationSchemaToMetadataTransformer().transform(schema);
        validationMetadatas.forEach(function (validationMetadata) { return _this.addValidationMetadata(validationMetadata); });
    };
    /**
     * Adds a new validation metadata.
     */
    MetadataStorage.prototype.addValidationMetadata = function (metadata) {
        this.validationMetadatas.push(metadata);
    };
    /**
     * Adds a new constraint metadata.
     */
    MetadataStorage.prototype.addConstraintMetadata = function (metadata) {
        this.constraintMetadatas.push(metadata);
    };
    /**
     * Groups metadata by their property names.
     */
    MetadataStorage.prototype.groupByPropertyName = function (metadata) {
        var grouped = {};
        metadata.forEach(function (metadata) {
            if (!grouped[metadata.propertyName])
                grouped[metadata.propertyName] = [];
            grouped[metadata.propertyName].push(metadata);
        });
        return grouped;
    };
    /**
     * Gets all validation metadatas for the given object with the given groups.
     */
    MetadataStorage.prototype.getTargetValidationMetadatas = function (targetConstructor, targetSchema, always, strictGroups, groups) {
        var includeMetadataBecauseOfAlwaysOption = function (metadata) {
            // `metadata.always` overrides global default.
            if (typeof metadata.always !== 'undefined')
                return metadata.always;
            // `metadata.groups` overrides global default.
            if (metadata.groups && metadata.groups.length)
                return false;
            // Use global default.
            return always;
        };
        var excludeMetadataBecauseOfStrictGroupsOption = function (metadata) {
            if (strictGroups) {
                // Validation is not using groups.
                if (!groups || !groups.length) {
                    // `metadata.groups` has at least one group.
                    if (metadata.groups && metadata.groups.length)
                        return true;
                }
            }
            return false;
        };
        // get directly related to a target metadatas
        var originalMetadatas = this.validationMetadatas.filter(function (metadata) {
            if (metadata.target !== targetConstructor && metadata.target !== targetSchema)
                return false;
            if (includeMetadataBecauseOfAlwaysOption(metadata))
                return true;
            if (excludeMetadataBecauseOfStrictGroupsOption(metadata))
                return false;
            if (groups && groups.length > 0)
                return metadata.groups && !!metadata.groups.find(function (group) { return groups.indexOf(group) !== -1; });
            return true;
        });
        // get metadatas for inherited classes
        var inheritedMetadatas = this.validationMetadatas.filter(function (metadata) {
            // if target is a string it's means we validate against a schema, and there is no inheritance support for schemas
            if (typeof metadata.target === 'string')
                return false;
            if (metadata.target === targetConstructor)
                return false;
            if (metadata.target instanceof Function && !(targetConstructor.prototype instanceof metadata.target))
                return false;
            if (includeMetadataBecauseOfAlwaysOption(metadata))
                return true;
            if (excludeMetadataBecauseOfStrictGroupsOption(metadata))
                return false;
            if (groups && groups.length > 0)
                return metadata.groups && !!metadata.groups.find(function (group) { return groups.indexOf(group) !== -1; });
            return true;
        });
        // filter out duplicate metadatas, prefer original metadatas instead of inherited metadatas
        var uniqueInheritedMetadatas = inheritedMetadatas.filter(function (inheritedMetadata) {
            return !originalMetadatas.find(function (originalMetadata) {
                return (originalMetadata.propertyName === inheritedMetadata.propertyName &&
                    originalMetadata.type === inheritedMetadata.type);
            });
        });
        return originalMetadatas.concat(uniqueInheritedMetadatas);
    };
    /**
     * Gets all validator constraints for the given object.
     */
    MetadataStorage.prototype.getTargetValidatorConstraints = function (target) {
        return this.constraintMetadatas.filter(function (metadata) { return metadata.target === target; });
    };
    return MetadataStorage;
}());

/**
 * Gets metadata storage.
 * Metadata storage follows the best practices and stores metadata in a global variable.
 */
function MetadataStorage_getMetadataStorage() {
    var global = getGlobal();
    if (!global.classValidatorMetadataStorage) {
        global.classValidatorMetadataStorage = new MetadataStorage();
    }
    return global.classValidatorMetadataStorage;
}
//# sourceMappingURL=MetadataStorage.js.map
;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/validation/ValidationExecutor.js





/**
 * Executes validation over given object.
 */
var ValidationExecutor = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function ValidationExecutor(validator, validatorOptions) {
        this.validator = validator;
        this.validatorOptions = validatorOptions;
        // -------------------------------------------------------------------------
        // Properties
        // -------------------------------------------------------------------------
        this.awaitingPromises = [];
        this.ignoreAsyncValidations = false;
        // -------------------------------------------------------------------------
        // Private Properties
        // -------------------------------------------------------------------------
        this.metadataStorage = MetadataStorage_getMetadataStorage();
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    ValidationExecutor.prototype.execute = function (object, targetSchema, validationErrors) {
        var _this = this;
        var _a;
        /**
         * If there is no metadata registered it means possibly the dependencies are not flatterned and
         * more than one instance is used.
         *
         * TODO: This needs proper handling, forcing to use the same container or some other proper solution.
         */
        if (!this.metadataStorage.hasValidationMetaData && ((_a = this.validatorOptions) === null || _a === void 0 ? void 0 : _a.enableDebugMessages) === true) {
            console.warn("No metadata found. There is more than once class-validator version installed probably. You need to flatten your dependencies.");
        }
        var groups = this.validatorOptions ? this.validatorOptions.groups : undefined;
        var strictGroups = (this.validatorOptions && this.validatorOptions.strictGroups) || false;
        var always = (this.validatorOptions && this.validatorOptions.always) || false;
        var targetMetadatas = this.metadataStorage.getTargetValidationMetadatas(object.constructor, targetSchema, always, strictGroups, groups);
        var groupedMetadatas = this.metadataStorage.groupByPropertyName(targetMetadatas);
        if (this.validatorOptions && this.validatorOptions.forbidUnknownValues && !targetMetadatas.length) {
            var validationError = new ValidationError();
            if (!this.validatorOptions ||
                !this.validatorOptions.validationError ||
                this.validatorOptions.validationError.target === undefined ||
                this.validatorOptions.validationError.target === true)
                validationError.target = object;
            validationError.value = undefined;
            validationError.property = undefined;
            validationError.children = [];
            validationError.constraints = { unknownValue: 'an unknown value was passed to the validate function' };
            validationErrors.push(validationError);
            return;
        }
        if (this.validatorOptions && this.validatorOptions.whitelist)
            this.whitelist(object, groupedMetadatas, validationErrors);
        // General validation
        Object.keys(groupedMetadatas).forEach(function (propertyName) {
            var value = object[propertyName];
            var definedMetadatas = groupedMetadatas[propertyName].filter(function (metadata) { return metadata.type === ValidationTypes.IS_DEFINED; });
            var metadatas = groupedMetadatas[propertyName].filter(function (metadata) { return metadata.type !== ValidationTypes.IS_DEFINED && metadata.type !== ValidationTypes.WHITELIST; });
            if (value instanceof Promise &&
                metadatas.find(function (metadata) { return metadata.type === ValidationTypes.PROMISE_VALIDATION; })) {
                _this.awaitingPromises.push(value.then(function (resolvedValue) {
                    _this.performValidations(object, resolvedValue, propertyName, definedMetadatas, metadatas, validationErrors);
                }));
            }
            else {
                _this.performValidations(object, value, propertyName, definedMetadatas, metadatas, validationErrors);
            }
        });
    };
    ValidationExecutor.prototype.whitelist = function (object, groupedMetadatas, validationErrors) {
        var _this = this;
        var notAllowedProperties = [];
        Object.keys(object).forEach(function (propertyName) {
            // does this property have no metadata?
            if (!groupedMetadatas[propertyName] || groupedMetadatas[propertyName].length === 0)
                notAllowedProperties.push(propertyName);
        });
        if (notAllowedProperties.length > 0) {
            if (this.validatorOptions && this.validatorOptions.forbidNonWhitelisted) {
                // throw errors
                notAllowedProperties.forEach(function (property) {
                    var _a;
                    var validationError = _this.generateValidationError(object, object[property], property);
                    validationError.constraints = (_a = {}, _a[ValidationTypes.WHITELIST] = "property ".concat(property, " should not exist"), _a);
                    validationError.children = undefined;
                    validationErrors.push(validationError);
                });
            }
            else {
                // strip non allowed properties
                notAllowedProperties.forEach(function (property) { return delete object[property]; });
            }
        }
    };
    ValidationExecutor.prototype.stripEmptyErrors = function (errors) {
        var _this = this;
        return errors.filter(function (error) {
            if (error.children) {
                error.children = _this.stripEmptyErrors(error.children);
            }
            if (Object.keys(error.constraints).length === 0) {
                if (error.children.length === 0) {
                    return false;
                }
                else {
                    delete error.constraints;
                }
            }
            return true;
        });
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    ValidationExecutor.prototype.performValidations = function (object, value, propertyName, definedMetadatas, metadatas, validationErrors) {
        var customValidationMetadatas = metadatas.filter(function (metadata) { return metadata.type === ValidationTypes.CUSTOM_VALIDATION; });
        var nestedValidationMetadatas = metadatas.filter(function (metadata) { return metadata.type === ValidationTypes.NESTED_VALIDATION; });
        var conditionalValidationMetadatas = metadatas.filter(function (metadata) { return metadata.type === ValidationTypes.CONDITIONAL_VALIDATION; });
        var validationError = this.generateValidationError(object, value, propertyName);
        validationErrors.push(validationError);
        var canValidate = this.conditionalValidations(object, value, conditionalValidationMetadatas);
        if (!canValidate) {
            return;
        }
        // handle IS_DEFINED validation type the special way - it should work no matter skipUndefinedProperties/skipMissingProperties is set or not
        this.customValidations(object, value, definedMetadatas, validationError);
        this.mapContexts(object, value, definedMetadatas, validationError);
        if (value === undefined && this.validatorOptions && this.validatorOptions.skipUndefinedProperties === true) {
            return;
        }
        if (value === null && this.validatorOptions && this.validatorOptions.skipNullProperties === true) {
            return;
        }
        if ((value === null || value === undefined) &&
            this.validatorOptions &&
            this.validatorOptions.skipMissingProperties === true) {
            return;
        }
        this.customValidations(object, value, customValidationMetadatas, validationError);
        this.nestedValidations(value, nestedValidationMetadatas, validationError.children);
        this.mapContexts(object, value, metadatas, validationError);
        this.mapContexts(object, value, customValidationMetadatas, validationError);
    };
    ValidationExecutor.prototype.generateValidationError = function (object, value, propertyName) {
        var validationError = new ValidationError();
        if (!this.validatorOptions ||
            !this.validatorOptions.validationError ||
            this.validatorOptions.validationError.target === undefined ||
            this.validatorOptions.validationError.target === true)
            validationError.target = object;
        if (!this.validatorOptions ||
            !this.validatorOptions.validationError ||
            this.validatorOptions.validationError.value === undefined ||
            this.validatorOptions.validationError.value === true)
            validationError.value = value;
        validationError.property = propertyName;
        validationError.children = [];
        validationError.constraints = {};
        return validationError;
    };
    ValidationExecutor.prototype.conditionalValidations = function (object, value, metadatas) {
        return metadatas
            .map(function (metadata) { return metadata.constraints[0](object, value); })
            .reduce(function (resultA, resultB) { return resultA && resultB; }, true);
    };
    ValidationExecutor.prototype.customValidations = function (object, value, metadatas, error) {
        var _this = this;
        metadatas.forEach(function (metadata) {
            _this.metadataStorage.getTargetValidatorConstraints(metadata.constraintCls).forEach(function (customConstraintMetadata) {
                if (customConstraintMetadata.async && _this.ignoreAsyncValidations)
                    return;
                if (_this.validatorOptions &&
                    _this.validatorOptions.stopAtFirstError &&
                    Object.keys(error.constraints || {}).length > 0)
                    return;
                var validationArguments = {
                    targetName: object.constructor ? object.constructor.name : undefined,
                    property: metadata.propertyName,
                    object: object,
                    value: value,
                    constraints: metadata.constraints,
                };
                if (!metadata.each || !(Array.isArray(value) || value instanceof Set || value instanceof Map)) {
                    var validatedValue = customConstraintMetadata.instance.validate(value, validationArguments);
                    if (isPromise(validatedValue)) {
                        var promise = validatedValue.then(function (isValid) {
                            if (!isValid) {
                                var _a = _this.createValidationError(object, value, metadata, customConstraintMetadata), type = _a[0], message = _a[1];
                                error.constraints[type] = message;
                                if (metadata.context) {
                                    if (!error.contexts) {
                                        error.contexts = {};
                                    }
                                    error.contexts[type] = Object.assign(error.contexts[type] || {}, metadata.context);
                                }
                            }
                        });
                        _this.awaitingPromises.push(promise);
                    }
                    else {
                        if (!validatedValue) {
                            var _a = _this.createValidationError(object, value, metadata, customConstraintMetadata), type = _a[0], message = _a[1];
                            error.constraints[type] = message;
                        }
                    }
                    return;
                }
                // convert set and map into array
                var arrayValue = convertToArray(value);
                // Validation needs to be applied to each array item
                var validatedSubValues = arrayValue.map(function (subValue) {
                    return customConstraintMetadata.instance.validate(subValue, validationArguments);
                });
                var validationIsAsync = validatedSubValues.some(function (validatedSubValue) {
                    return isPromise(validatedSubValue);
                });
                if (validationIsAsync) {
                    // Wrap plain values (if any) in promises, so that all are async
                    var asyncValidatedSubValues = validatedSubValues.map(function (validatedSubValue) {
                        return isPromise(validatedSubValue) ? validatedSubValue : Promise.resolve(validatedSubValue);
                    });
                    var asyncValidationIsFinishedPromise = Promise.all(asyncValidatedSubValues).then(function (flatValidatedValues) {
                        var validationResult = flatValidatedValues.every(function (isValid) { return isValid; });
                        if (!validationResult) {
                            var _a = _this.createValidationError(object, value, metadata, customConstraintMetadata), type = _a[0], message = _a[1];
                            error.constraints[type] = message;
                            if (metadata.context) {
                                if (!error.contexts) {
                                    error.contexts = {};
                                }
                                error.contexts[type] = Object.assign(error.contexts[type] || {}, metadata.context);
                            }
                        }
                    });
                    _this.awaitingPromises.push(asyncValidationIsFinishedPromise);
                    return;
                }
                var validationResult = validatedSubValues.every(function (isValid) { return isValid; });
                if (!validationResult) {
                    var _b = _this.createValidationError(object, value, metadata, customConstraintMetadata), type = _b[0], message = _b[1];
                    error.constraints[type] = message;
                }
            });
        });
    };
    ValidationExecutor.prototype.nestedValidations = function (value, metadatas, errors) {
        var _this = this;
        if (value === void 0) {
            return;
        }
        metadatas.forEach(function (metadata) {
            var _a;
            if (metadata.type !== ValidationTypes.NESTED_VALIDATION && metadata.type !== ValidationTypes.PROMISE_VALIDATION) {
                return;
            }
            if (Array.isArray(value) || value instanceof Set || value instanceof Map) {
                // Treats Set as an array - as index of Set value is value itself and it is common case to have Object as value
                var arrayLikeValue = value instanceof Set ? Array.from(value) : value;
                arrayLikeValue.forEach(function (subValue, index) {
                    _this.performValidations(value, subValue, index.toString(), [], metadatas, errors);
                });
            }
            else if (value instanceof Object) {
                var targetSchema = typeof metadata.target === 'string' ? metadata.target : metadata.target.name;
                _this.execute(value, targetSchema, errors);
            }
            else {
                var error = new ValidationError();
                error.value = value;
                error.property = metadata.propertyName;
                error.target = metadata.target;
                var _b = _this.createValidationError(metadata.target, value, metadata), type = _b[0], message = _b[1];
                error.constraints = (_a = {},
                    _a[type] = message,
                    _a);
                errors.push(error);
            }
        });
    };
    ValidationExecutor.prototype.mapContexts = function (object, value, metadatas, error) {
        var _this = this;
        return metadatas.forEach(function (metadata) {
            if (metadata.context) {
                var customConstraint = void 0;
                if (metadata.type === ValidationTypes.CUSTOM_VALIDATION) {
                    var customConstraints = _this.metadataStorage.getTargetValidatorConstraints(metadata.constraintCls);
                    customConstraint = customConstraints[0];
                }
                var type = _this.getConstraintType(metadata, customConstraint);
                if (error.constraints[type]) {
                    if (!error.contexts) {
                        error.contexts = {};
                    }
                    error.contexts[type] = Object.assign(error.contexts[type] || {}, metadata.context);
                }
            }
        });
    };
    ValidationExecutor.prototype.createValidationError = function (object, value, metadata, customValidatorMetadata) {
        var targetName = object.constructor ? object.constructor.name : undefined;
        var type = this.getConstraintType(metadata, customValidatorMetadata);
        var validationArguments = {
            targetName: targetName,
            property: metadata.propertyName,
            object: object,
            value: value,
            constraints: metadata.constraints,
        };
        var message = metadata.message || '';
        if (!metadata.message &&
            (!this.validatorOptions || (this.validatorOptions && !this.validatorOptions.dismissDefaultMessages))) {
            if (customValidatorMetadata && customValidatorMetadata.instance.defaultMessage instanceof Function) {
                message = customValidatorMetadata.instance.defaultMessage(validationArguments);
            }
        }
        var messageString = ValidationUtils.replaceMessageSpecialTokens(message, validationArguments);
        return [type, messageString];
    };
    ValidationExecutor.prototype.getConstraintType = function (metadata, customValidatorMetadata) {
        var type = customValidatorMetadata && customValidatorMetadata.name ? customValidatorMetadata.name : metadata.type;
        return type;
    };
    return ValidationExecutor;
}());

//# sourceMappingURL=ValidationExecutor.js.map
;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/validation/Validator.js
var Validator_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Validator_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

/**
 * Validator performs validation of the given object based on its metadata.
 */
var Validator_Validator = /** @class */ (function () {
    function Validator() {
    }
    /**
     * Performs validation of the given object based on decorators or validation schema.
     */
    Validator.prototype.validate = function (objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions) {
        return this.coreValidate(objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions);
    };
    /**
     * Performs validation of the given object based on decorators or validation schema and reject on error.
     */
    Validator.prototype.validateOrReject = function (objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions) {
        return Validator_awaiter(this, void 0, void 0, function () {
            var errors;
            return Validator_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.coreValidate(objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions)];
                    case 1:
                        errors = _a.sent();
                        if (errors.length)
                            return [2 /*return*/, Promise.reject(errors)];
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Performs validation of the given object based on decorators or validation schema.
     */
    Validator.prototype.validateSync = function (objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions) {
        var object = typeof objectOrSchemaName === 'string' ? objectOrValidationOptions : objectOrSchemaName;
        var options = typeof objectOrSchemaName === 'string' ? maybeValidatorOptions : objectOrValidationOptions;
        var schema = typeof objectOrSchemaName === 'string' ? objectOrSchemaName : undefined;
        var executor = new ValidationExecutor(this, options);
        executor.ignoreAsyncValidations = true;
        var validationErrors = [];
        executor.execute(object, schema, validationErrors);
        return executor.stripEmptyErrors(validationErrors);
    };
    // -------------------------------------------------------------------------
    // Private Properties
    // -------------------------------------------------------------------------
    /**
     * Performs validation of the given object based on decorators or validation schema.
     * Common method for `validateOrReject` and `validate` methods.
     */
    Validator.prototype.coreValidate = function (objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions) {
        var object = typeof objectOrSchemaName === 'string' ? objectOrValidationOptions : objectOrSchemaName;
        var options = typeof objectOrSchemaName === 'string' ? maybeValidatorOptions : objectOrValidationOptions;
        var schema = typeof objectOrSchemaName === 'string' ? objectOrSchemaName : undefined;
        var executor = new ValidationExecutor(this, options);
        var validationErrors = [];
        executor.execute(object, schema, validationErrors);
        return Promise.all(executor.awaitingPromises).then(function () {
            return executor.stripEmptyErrors(validationErrors);
        });
    };
    return Validator;
}());

//# sourceMappingURL=Validator.js.map
;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/container.js
/**
 * Container to be used by this library for inversion control. If container was not implicitly set then by default
 * container simply creates a new instance of the given class.
 */
var defaultContainer = new (/** @class */ (function () {
    function class_1() {
        this.instances = [];
    }
    class_1.prototype.get = function (someClass) {
        var instance = this.instances.find(function (instance) { return instance.type === someClass; });
        if (!instance) {
            instance = { type: someClass, object: new someClass() };
            this.instances.push(instance);
        }
        return instance.object;
    };
    return class_1;
}()))();
var userContainer;
var userContainerOptions;
/**
 * Sets container to be used by this library.
 */
function useContainer(iocContainer, options) {
    userContainer = iocContainer;
    userContainerOptions = options;
}
/**
 * Gets the IOC container used by this library.
 */
function container_getFromContainer(someClass) {
    if (userContainer) {
        try {
            var instance = userContainer.get(someClass);
            if (instance)
                return instance;
            if (!userContainerOptions || !userContainerOptions.fallback)
                return instance;
        }
        catch (error) {
            if (!userContainerOptions || !userContainerOptions.fallbackOnErrors)
                throw error;
        }
    }
    return defaultContainer.get(someClass);
}
//# sourceMappingURL=container.js.map
;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/index.js



// -------------------------------------------------------------------------
// Export everything api users needs
// -------------------------------------------------------------------------












/**
 * Validates given object by object's decorators or given validation schema.
 */
function validate(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions) {
    if (typeof schemaNameOrObject === 'string') {
        return container_getFromContainer(Validator_Validator).validate(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions);
    }
    else {
        return container_getFromContainer(Validator_Validator).validate(schemaNameOrObject, objectOrValidationOptions);
    }
}
/**
 * Validates given object by object's decorators or given validation schema and reject on error.
 */
function validateOrReject(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions) {
    if (typeof schemaNameOrObject === 'string') {
        return getFromContainer(Validator).validateOrReject(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions);
    }
    else {
        return getFromContainer(Validator).validateOrReject(schemaNameOrObject, objectOrValidationOptions);
    }
}
/**
 * Validates given object by object's decorators or given validation schema.
 * Note that this method completely ignores async validations.
 * If you want to properly perform validation you need to call validate method instead.
 */
function validateSync(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions) {
    if (typeof schemaNameOrObject === 'string') {
        return getFromContainer(Validator).validateSync(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions);
    }
    else {
        return getFromContainer(Validator).validateSync(schemaNameOrObject, objectOrValidationOptions);
    }
}
/**
 * Registers a new validation schema.
 */
function registerSchema(schema) {
    getMetadataStorage().addValidationSchema(schema);
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/decorator/common/IsOptional.js



/**
 * Checks if value is missing and if so, ignores all validators.
 */
function IsOptional(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes.CONDITIONAL_VALIDATION,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [
                function (object, value) {
                    return object[propertyName] !== null && object[propertyName] !== undefined;
                },
            ],
            validationOptions: validationOptions,
        };
        MetadataStorage_getMetadataStorage().addValidationMetadata(new ValidationMetadata(args));
    };
}
//# sourceMappingURL=IsOptional.js.map
;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/metadata/ConstraintMetadata.js

/**
 * This metadata interface contains information for custom validators.
 */
var ConstraintMetadata = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function ConstraintMetadata(target, name, async) {
        if (async === void 0) { async = false; }
        this.target = target;
        this.name = name;
        this.async = async;
    }
    Object.defineProperty(ConstraintMetadata.prototype, "instance", {
        // -------------------------------------------------------------------------
        // Accessors
        // -------------------------------------------------------------------------
        /**
         * Instance of the target custom validation class which performs validation.
         */
        get: function () {
            return container_getFromContainer(this.target);
        },
        enumerable: false,
        configurable: true
    });
    return ConstraintMetadata;
}());

//# sourceMappingURL=ConstraintMetadata.js.map
;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/register-decorator.js





/**
 * Registers a custom validation decorator.
 */
function registerDecorator(options) {
    var constraintCls;
    if (options.validator instanceof Function) {
        constraintCls = options.validator;
        var constraintClasses = container_getFromContainer(MetadataStorage).getTargetValidatorConstraints(options.validator);
        if (constraintClasses.length > 1) {
            throw "More than one implementation of ValidatorConstraintInterface found for validator on: ".concat(options.target.name, ":").concat(options.propertyName);
        }
    }
    else {
        var validator_1 = options.validator;
        constraintCls = /** @class */ (function () {
            function CustomConstraint() {
            }
            CustomConstraint.prototype.validate = function (value, validationArguments) {
                return validator_1.validate(value, validationArguments);
            };
            CustomConstraint.prototype.defaultMessage = function (validationArguments) {
                if (validator_1.defaultMessage) {
                    return validator_1.defaultMessage(validationArguments);
                }
                return '';
            };
            return CustomConstraint;
        }());
        MetadataStorage_getMetadataStorage().addConstraintMetadata(new ConstraintMetadata(constraintCls, options.name, options.async));
    }
    var validationMetadataArgs = {
        type: options.name && ValidationTypes.isValid(options.name) ? options.name : ValidationTypes.CUSTOM_VALIDATION,
        target: options.target,
        propertyName: options.propertyName,
        validationOptions: options.options,
        constraintCls: constraintCls,
        constraints: options.constraints,
    };
    MetadataStorage_getMetadataStorage().addValidationMetadata(new ValidationMetadata(validationMetadataArgs));
}
//# sourceMappingURL=register-decorator.js.map
;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/decorator/common/ValidateBy.js

function buildMessage(impl, validationOptions) {
    return function (validationArguments) {
        var eachPrefix = validationOptions && validationOptions.each ? 'each value in ' : '';
        return impl(eachPrefix, validationArguments);
    };
}
function ValidateBy(options, validationOptions) {
    return function (object, propertyName) {
        registerDecorator({
            name: options.name,
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: options.constraints,
            validator: options.validator,
        });
    };
}
//# sourceMappingURL=ValidateBy.js.map
;// CONCATENATED MODULE: ./node_modules/class-validator/esm5/decorator/common/IsNotEmpty.js

var IS_NOT_EMPTY = 'isNotEmpty';
/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 */
function isNotEmpty(value) {
    return value !== '' && value !== null && value !== undefined;
}
/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 */
function IsNotEmpty(validationOptions) {
    return ValidateBy({
        name: IS_NOT_EMPTY,
        validator: {
            validate: function (value, args) { return isNotEmpty(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + '$property should not be empty'; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsNotEmpty.js.map
;// CONCATENATED MODULE: ./src/tracking/website.ts
var website_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var website_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var WebsiteTrackingFeature = /** @class */ (function () {
    function WebsiteTrackingFeature(urls, sdkInstance) {
        this.urls = urls;
        // this.requestOptions = ["requestHeaders"];
        this.requestOptions = [];
        this.events = {
            onBeforeSend: function (details) { },
        };
        this.sdkInstance = sdkInstance;
    }
    WebsiteTrackingFeature.prototype.validate = function () {
        return website_awaiter(this, void 0, void 0, function () {
            return website_generator(this, function (_a) {
                if (!chrome) {
                    return [2 /*return*/, false];
                }
                if (!chrome.webRequest) {
                    return [2 /*return*/, false];
                }
                if (!chrome.webRequest.onBeforeSendHeaders) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, true];
            });
        });
    };
    WebsiteTrackingFeature.prototype.start = function () {
        return website_awaiter(this, void 0, void 0, function () {
            var _this = this;
            return website_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validate()];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/];
                        }
                        chrome.webRequest.onBeforeSendHeaders.addListener(function (details) {
                            _this.events.onBeforeSend(details);
                        }, { urls: this.urls, types: ["main_frame"] }, this.requestOptions);
                        return [2 /*return*/];
                }
            });
        });
    };
    return WebsiteTrackingFeature;
}());


;// CONCATENATED MODULE: ./src/tracking/search.ts
var search_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var search_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var search_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var SearchTrackingOptions = /** @class */ (function () {
    function SearchTrackingOptions() {
    }
    return SearchTrackingOptions;
}());

var SearchTrackingFeature = /** @class */ (function (_super) {
    search_extends(SearchTrackingFeature, _super);
    function SearchTrackingFeature(sdkInstance) {
        var _this = _super.call(this, [
            "*://*.bing.com/search*",
            "*://bing.com/search*",
            "*://*.search.yahoo.com/*",
            "*://*.baidu.com/s*",
            "*://baidu.com/s*",
            "*://*.google.com/search*",
            "*://*.google.ad/search*",
            "*://*.google.ae/search*",
            "*://*.google.com.af/search*",
            "*://*.google.com.ag/search*",
            "*://*.google.com.ai/search*",
            "*://*.google.al/search*",
            "*://*.google.am/search*",
            "*://*.google.co.ao/search*",
            "*://*.google.com.ar/search*",
            "*://*.google.as/search*",
            "*://*.google.at/search*",
            "*://*.google.com.au/search*",
            "*://*.google.az/search*",
            "*://*.google.ba/search*",
            "*://*.google.com.bd/search*",
            "*://*.google.be/search*",
            "*://*.google.bf/search*",
            "*://*.google.bg/search*",
            "*://*.google.com.bh/search*",
            "*://*.google.bi/search*",
            "*://*.google.bj/search*",
            "*://*.google.com.bn/search*",
            "*://*.google.com.bo/search*",
            "*://*.google.com.br/search*",
            "*://*.google.bs/search*",
            "*://*.google.bt/search*",
            "*://*.google.co.bw/search*",
            "*://*.google.by/search*",
            "*://*.google.com.bz/search*",
            "*://*.google.ca/search*",
            "*://*.google.cd/search*",
            "*://*.google.cf/search*",
            "*://*.google.cg/search*",
            "*://*.google.ch/search*",
            "*://*.google.ci/search*",
            "*://*.google.co.ck/search*",
            "*://*.google.cl/search*",
            "*://*.google.cm/search*",
            "*://*.google.cn/search*",
            "*://*.google.com.co/search*",
            "*://*.google.co.cr/search*",
            "*://*.google.com.cu/search*",
            "*://*.google.cv/search*",
            "*://*.google.com.cy/search*",
            "*://*.google.cz/search*",
            "*://*.google.de/search*",
            "*://*.google.dj/search*",
            "*://*.google.dk/search*",
            "*://*.google.dm/search*",
            "*://*.google.com.do/search*",
            "*://*.google.dz/search*",
            "*://*.google.com.ec/search*",
            "*://*.google.ee/search*",
            "*://*.google.com.eg/search*",
            "*://*.google.es/search*",
            "*://*.google.com.et/search*",
            "*://*.google.fi/search*",
            "*://*.google.com.fj/search*",
            "*://*.google.fm/search*",
            "*://*.google.fr/search*",
            "*://*.google.ga/search*",
            "*://*.google.ge/search*",
            "*://*.google.gg/search*",
            "*://*.google.com.gh/search*",
            "*://*.google.com.gi/search*",
            "*://*.google.gl/search*",
            "*://*.google.gm/search*",
            "*://*.google.gr/search*",
            "*://*.google.com.gt/search*",
            "*://*.google.gy/search*",
            "*://*.google.com.hk/search*",
            "*://*.google.hn/search*",
            "*://*.google.hr/search*",
            "*://*.google.ht/search*",
            "*://*.google.hu/search*",
            "*://*.google.co.id/search*",
            "*://*.google.ie/search*",
            "*://*.google.co.il/search*",
            "*://*.google.im/search*",
            "*://*.google.co.in/search*",
            "*://*.google.iq/search*",
            "*://*.google.is/search*",
            "*://*.google.it/search*",
            "*://*.google.je/search*",
            "*://*.google.com.jm/search*",
            "*://*.google.jo/search*",
            "*://*.google.co.jp/search*",
            "*://*.google.co.ke/search*",
            "*://*.google.com.kh/search*",
            "*://*.google.ki/search*",
            "*://*.google.kg/search*",
            "*://*.google.co.kr/search*",
            "*://*.google.com.kw/search*",
            "*://*.google.kz/search*",
            "*://*.google.la/search*",
            "*://*.google.com.lb/search*",
            "*://*.google.li/search*",
            "*://*.google.lk/search*",
            "*://*.google.co.ls/search*",
            "*://*.google.lt/search*",
            "*://*.google.lu/search*",
            "*://*.google.lv/search*",
            "*://*.google.com.ly/search*",
            "*://*.google.co.ma/search*",
            "*://*.google.md/search*",
            "*://*.google.me/search*",
            "*://*.google.mg/search*",
            "*://*.google.mk/search*",
            "*://*.google.ml/search*",
            "*://*.google.com.mm/search*",
            "*://*.google.mn/search*",
            "*://*.google.ms/search*",
            "*://*.google.com.mt/search*",
            "*://*.google.mu/search*",
            "*://*.google.mv/search*",
            "*://*.google.mw/search*",
            "*://*.google.com.mx/search*",
            "*://*.google.com.my/search*",
            "*://*.google.co.mz/search*",
            "*://*.google.com.na/search*",
            "*://*.google.com.ng/search*",
            "*://*.google.com.ni/search*",
            "*://*.google.ne/search*",
            "*://*.google.nl/search*",
            "*://*.google.no/search*",
            "*://*.google.com.np/search*",
            "*://*.google.nr/search*",
            "*://*.google.nu/search*",
            "*://*.google.co.nz/search*",
            "*://*.google.com.om/search*",
            "*://*.google.com.pa/search*",
            "*://*.google.com.pe/search*",
            "*://*.google.com.pg/search*",
            "*://*.google.com.ph/search*",
            "*://*.google.com.pk/search*",
            "*://*.google.pl/search*",
            "*://*.google.pn/search*",
            "*://*.google.com.pr/search*",
            "*://*.google.ps/search*",
            "*://*.google.pt/search*",
            "*://*.google.com.py/search*",
            "*://*.google.com.qa/search*",
            "*://*.google.ro/search*",
            "*://*.google.ru/search*",
            "*://*.google.rw/search*",
            "*://*.google.com.sa/search*",
            "*://*.google.com.sb/search*",
            "*://*.google.sc/search*",
            "*://*.google.se/search*",
            "*://*.google.com.sg/search*",
            "*://*.google.sh/search*",
            "*://*.google.si/search*",
            "*://*.google.sk/search*",
            "*://*.google.com.sl/search*",
            "*://*.google.sn/search*",
            "*://*.google.so/search*",
            "*://*.google.sm/search*",
            "*://*.google.sr/search*",
            "*://*.google.st/search*",
            "*://*.google.com.sv/search*",
            "*://*.google.td/search*",
            "*://*.google.tg/search*",
            "*://*.google.co.th/search*",
            "*://*.google.com.tj/search*",
            "*://*.google.tl/search*",
            "*://*.google.tm/search*",
            "*://*.google.tn/search*",
            "*://*.google.to/search*",
            "*://*.google.com.tr/search*",
            "*://*.google.tt/search*",
            "*://*.google.com.tw/search*",
            "*://*.google.co.tz/search*",
            "*://*.google.com.ua/search*",
            "*://*.google.co.ug/search*",
            "*://*.google.co.uk/search*",
            "*://*.google.com.uy/search*",
            "*://*.google.co.uz/search*",
            "*://*.google.com.vc/search*",
            "*://*.google.co.ve/search*",
            "*://*.google.vg/search*",
            "*://*.google.co.vi/search*",
            "*://*.google.com.vn/search*",
            "*://*.google.vu/search*",
            "*://*.google.ws/search*",
            "*://*.google.rs/search*",
            "*://*.google.co.za/search*",
            "*://*.google.co.zm/search*",
            "*://*.google.co.zw/search*",
            "*://*.google.cat/search*"
        ], sdkInstance) || this;
        _this.cache = {};
        return _this;
    }
    SearchTrackingFeature.prototype.start = function () {
        return search_awaiter(this, void 0, void 0, function () {
            var _this = this;
            return search_generator(this, function (_a) {
                this.events.onBeforeSend = function (details) {
                    // console.log(details);
                    var tba = _this.sdkInstance.storage.get("wba");
                    // console.log(tba);
                    if (tba === "dnt") {
                        return false;
                    }
                    // console.log('SENT!');
                    var key = "";
                    var value = null;
                    var urlRaw = details.url;
                    try {
                        var url = new URL(details.url);
                        var hostname = url.hostname.toLowerCase();
                        var query = url.search.toLowerCase();
                        if (hostname.indexOf("google") != -1) {
                            key = "google";
                            var regex = query.match(/[\&]*q\=([^&]*)/i);
                            if (regex && regex.length >= 1) {
                                value = regex[1];
                            }
                            if (query.indexOf("sourceid=chrome") != -1) {
                                _this.sdkInstance.event("us_omnibox", key, value);
                            }
                        }
                        else if (hostname.indexOf("yahoo") != -1) {
                            key = "yahoo";
                            var regex = query.match(/[\&]*p\=([^&]*)/i);
                            if (regex && regex.length >= 1) {
                                value = regex[1];
                            }
                        }
                        else if (hostname.indexOf("baidu") != -1) {
                            var regex = query.match(/[\&]*wd\=([^&]*)/i);
                            if (regex && regex.length >= 1) {
                                value = regex[1];
                            }
                            key = "baidu";
                        }
                        else if (hostname.indexOf("bing") != -1) {
                            var regex = query.match(/[\&]*q\=([^&]*)/i);
                            if (regex && regex.length >= 1) {
                                value = regex[1];
                            }
                            key = "bing";
                        }
                    }
                    catch (e) {
                        Logger.error(e);
                        return;
                    }
                    // const cacheStr = `${key}${value}`;
                    // const now = + new Date();
                    // const cacheTime = 2000;
                    // if (this.cache[cacheStr]) {
                    //   if ((this.cache[cacheStr] + cacheTime) < now) {
                    //     // console.log("CACHE");
                    //     return;
                    //   }
                    // }
                    // this.cache[cacheStr] = now;
                    _this.sdkInstance.event("us_search", key, value);
                };
                _super.prototype.start.call(this);
                return [2 /*return*/];
            });
        });
    };
    return SearchTrackingFeature;
}(WebsiteTrackingFeature));


;// CONCATENATED MODULE: ./src/unistream-sdk-instance.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var unistream_sdk_instance_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var unistream_sdk_instance_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};






var UnistreamSDKTrackingOptions = /** @class */ (function () {
    function UnistreamSDKTrackingOptions() {
    }
    __decorate([
        IsOptional()
    ], UnistreamSDKTrackingOptions.prototype, "search", void 0);
    return UnistreamSDKTrackingOptions;
}());

var UnistreamSDKInstanceOptions = /** @class */ (function () {
    function UnistreamSDKInstanceOptions() {
        this.pingIntervalInMinutes = 15;
    }
    __decorate([
        IsNotEmpty()
    ], UnistreamSDKInstanceOptions.prototype, "version", void 0);
    __decorate([
        IsNotEmpty()
    ], UnistreamSDKInstanceOptions.prototype, "propertyId", void 0);
    __decorate([
        IsOptional()
    ], UnistreamSDKInstanceOptions.prototype, "apiBaseUrl", void 0);
    __decorate([
        IsOptional()
    ], UnistreamSDKInstanceOptions.prototype, "pingIntervalInMinutes", void 0);
    __decorate([
        IsOptional()
    ], UnistreamSDKInstanceOptions.prototype, "tracking", void 0);
    return UnistreamSDKInstanceOptions;
}());

var UnistreamSDKInstance = /** @class */ (function () {
    function UnistreamSDKInstance() {
    }
    UnistreamSDKInstance.prototype.initialize = function (options) {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            var e_1;
            return unistream_sdk_instance_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.options = new UnistreamSDKInstanceOptions;
                        this.options = Object.assign(this.options, options);
                        this.tracking = {
                            search: SearchTrackingFeature
                        };
                        Logger.debug('Initailizing unistream sdk with desired options', options);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.initializeOptions()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.initializeApi()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.initializeStorage()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.initializeUser()];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        Logger.error(e_1);
                        if (e_1 === false) {
                            this.waitForRetry();
                            return [2 /*return*/];
                        }
                        throw e_1;
                    case 7: return [4 /*yield*/, this.start()];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UnistreamSDKInstance.prototype.initializeOptions = function () {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            var errors, errorStrings, errors_1, errors_1_1, error;
            var e_2, _a;
            return unistream_sdk_instance_generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, validate(this.options)];
                    case 1:
                        errors = _b.sent();
                        errorStrings = [];
                        if (errors.length > 0) {
                            try {
                                for (errors_1 = __values(errors), errors_1_1 = errors_1.next(); !errors_1_1.done; errors_1_1 = errors_1.next()) {
                                    error = errors_1_1.value;
                                    errorStrings.push(error.toString());
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (errors_1_1 && !errors_1_1.done && (_a = errors_1.return)) _a.call(errors_1);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                            Logger.error('could not validate options for unistream sdk. critical erros!');
                            throw errorStrings;
                        }
                        if (!this.options.apiBaseUrl && {"env":{"API_URL":"https://data.unistream.io","ENV":"production"}}.env.API_URL) {
                            this.options.apiBaseUrl = {"env":{"API_URL":"https://data.unistream.io","ENV":"production"}}.env.API_URL;
                        }
                        Logger.debug('Parsed options:', this.options);
                        return [2 /*return*/];
                }
            });
        });
    };
    UnistreamSDKInstance.prototype.initializeApi = function () {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            return unistream_sdk_instance_generator(this, function (_a) {
                this.api = new Api(this, this.options);
                return [2 /*return*/];
            });
        });
    };
    UnistreamSDKInstance.prototype.initializeStorage = function () {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            return unistream_sdk_instance_generator(this, function (_a) {
                this.storage = new SdkStorage(this);
                return [2 /*return*/];
            });
        });
    };
    UnistreamSDKInstance.prototype.initializeUser = function () {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            var _a;
            return unistream_sdk_instance_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, (new User(this)).getFromStorageOrCreate()];
                    case 1:
                        _a.user = _b.sent();
                        if (this.user === null) {
                            throw false;
                        }
                        Logger.debug("Initialized user with uuid:", this.user.uuid);
                        return [2 /*return*/];
                }
            });
        });
    };
    UnistreamSDKInstance.prototype.initializeAndStartTracking = function () {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            return unistream_sdk_instance_generator(this, function (_a) {
                if (this.options.tracking && this.options.tracking.search) {
                    this.tracking.search = new SearchTrackingFeature(this);
                    this.tracking.search.start();
                }
                return [2 /*return*/];
            });
        });
    };
    UnistreamSDKInstance.prototype.waitForRetry = function () {
        var _this = this;
        Logger.info('Retrying in 5 minutes to intialize');
        setTimeout(function () { return unistream_sdk_instance_awaiter(_this, void 0, void 0, function () {
            return unistream_sdk_instance_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Logger.info('Trying to reinitialize unistream ...');
                        return [4 /*yield*/, this.initialize(this.options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }, 60 * 5 * 1000);
    };
    UnistreamSDKInstance.prototype.ping = function () {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            return unistream_sdk_instance_generator(this, function (_a) {
                return [2 /*return*/, this.api.patch('/user', { version: this.options.version })];
            });
        });
    };
    UnistreamSDKInstance.prototype.event = function (eventGroup, eventName, eventValue) {
        if (eventValue === void 0) { eventValue = null; }
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            var payload;
            return unistream_sdk_instance_generator(this, function (_a) {
                payload = { group: eventGroup, name: eventName };
                if (eventValue !== null) {
                    payload['value'] = eventValue;
                }
                // Logger.debug(payload);
                return [2 /*return*/, this.api.post('/event', payload)];
            });
        });
    };
    UnistreamSDKInstance.prototype.start = function () {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            return unistream_sdk_instance_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Logger.debug("measurement started. ping every ".concat(this.options.pingIntervalInMinutes, " minutes."));
                        this.startPings();
                        return [4 /*yield*/, this.initializeAndStartTracking()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UnistreamSDKInstance.prototype.startPings = function () {
        var _this = this;
        this.ping();
        this.pingInterval = setInterval(function () { return unistream_sdk_instance_awaiter(_this, void 0, void 0, function () {
            return unistream_sdk_instance_generator(this, function (_a) {
                this.ping();
                return [2 /*return*/];
            });
        }); }, this.options.pingIntervalInMinutes * 60 * 1000);
    };
    return UnistreamSDKInstance;
}());


;// CONCATENATED MODULE: ./src/main.ts
var main_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var main_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var main_values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};


__webpack_require__.g.UnistreamSDK = function (options) {
    return main_awaiter(this, void 0, void 0, function () {
        var sdk, e_1, e_2, e_2_1, msg;
        var e_3, _a;
        return main_generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sdk = new UnistreamSDKInstance;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, sdk.initialize(options)];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _b.sent();
                    if (Array.isArray(e_1)) {
                        try {
                            for (e_2 = main_values(e_1), e_2_1 = e_2.next(); !e_2_1.done; e_2_1 = e_2.next()) {
                                msg = e_2_1.value;
                                Logger.error(msg);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (e_2_1 && !e_2_1.done && (_a = e_2.return)) _a.call(e_2);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                    }
                    else {
                        Logger.error('could not initialize Unistream SDK. Errors: ');
                        Logger.error("Error", e_1);
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, sdk];
            }
        });
    });
};

/******/ })()
;