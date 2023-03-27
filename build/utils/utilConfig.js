"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const readFile_1 = __importDefault(require("./readFile"));
const types_1 = require("./types");
class CFGController {
    constructor() {
        this.process = types_1.ProcessUtil.search;
        this.setConfig();
    }
    setConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cfgData = yield (0, readFile_1.default)(path_1.default.resolve(__dirname, "../../checkutil.json"));
                const data = JSON.parse(cfgData);
                this.process = data.process;
                this.exclude = data === null || data === void 0 ? void 0 : data.exclude;
                this.include = data === null || data === void 0 ? void 0 : data.include;
                this.serach = data === null || data === void 0 ? void 0 : data.serach;
                this.output = data === null || data === void 0 ? void 0 : data.output;
                this.replace = data === null || data === void 0 ? void 0 : data.replace;
            }
            catch (err) {
                throw err;
            }
        });
    }
    ;
}
const utilConfig = new CFGController();
console.log(utilConfig);
exports.default = utilConfig;
