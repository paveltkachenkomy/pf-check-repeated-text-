"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessUtil = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
var ProcessUtil;
(function (ProcessUtil) {
    ProcessUtil["repeated"] = "repeated";
    ProcessUtil["replace"] = "replace";
})(ProcessUtil = exports.ProcessUtil || (exports.ProcessUtil = {}));
class CFGController {
    constructor(data) {
        this.process = data.process;
        this.include = data.include;
        this.exclude = data === null || data === void 0 ? void 0 : data.exclude;
        this.serach = data === null || data === void 0 ? void 0 : data.serach;
        this.output = data === null || data === void 0 ? void 0 : data.output;
        this.replace = data === null || data === void 0 ? void 0 : data.replace;
    }
}
let utilConfig = fs_1.default.readFile(path_1.default.resolve(__dirname, "../../checkutil.json"), (err, dataBufer) => {
    if (err) {
        throw err;
    }
    else {
        const data = JSON.parse(dataBufer.toString("utf-8"));
        return new CFGController(data);
    }
});
exports.default = utilConfig;
