"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCfg = exports.ProcessUtil = void 0;
const path_1 = __importDefault(require("path"));
const nconf_1 = __importDefault(require("nconf"));
nconf_1.default.file(path_1.default.resolve(__dirname, "../../checkutil.json"));
var ProcessUtil;
(function (ProcessUtil) {
    ProcessUtil["repeated"] = "repeated";
    ProcessUtil["replace"] = "replace";
})(ProcessUtil = exports.ProcessUtil || (exports.ProcessUtil = {}));
class CFGController {
    constructor() {
        this.process = nconf_1.default.get("process");
        this.include = nconf_1.default.get("include");
        this.exclude = nconf_1.default.get("exclude");
        this.serach = nconf_1.default.get("serach");
        this.replaced = nconf_1.default.get("replaced");
        this.output = nconf_1.default.get("output");
    }
}
const configUtil = new CFGController();
const checkCfg = () => {
    var _a, _b, _c;
    switch (configUtil.process) {
        case ProcessUtil.replace:
            return configUtil.include.length && ((_a = configUtil.serach) === null || _a === void 0 ? void 0 : _a.length) && ((_b = configUtil.replaced) === null || _b === void 0 ? void 0 : _b.length);
        case ProcessUtil.repeated:
            return configUtil.include.length && ((_c = configUtil.output) === null || _c === void 0 ? void 0 : _c.length);
        default:
            console.info("Не правильно сконфигурированны настройки утилиты");
            return false;
    }
};
exports.checkCfg = checkCfg;
exports.default = configUtil;
