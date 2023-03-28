"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessUtil = void 0;
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
exports.default = configUtil;
