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
const config_1 = __importDefault(require("../config/config"));
const readDir_1 = __importDefault(require("../libs/readDir"));
const readFile_1 = __importDefault(require("../libs/readFile"));
const writeFile_1 = __importDefault(require("../libs/writeFile"));
const ReplaceUtil = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const files = yield (0, readDir_1.default)();
        if (files.length) {
            const serach = config_1.default.serach;
            const replaceed = config_1.default.replaced;
            for (const file of files) {
                let dataText = yield (0, readFile_1.default)(file);
                const rgx = new RegExp(serach.map((el) => `${el}\\b`).join('|'), "g");
                dataText = dataText.replaceAll(rgx, replaceed);
                yield (0, writeFile_1.default)(file, dataText);
            }
        }
    }
    catch (err) {
        throw err;
    }
});
exports.default = ReplaceUtil;
