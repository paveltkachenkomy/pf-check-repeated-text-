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
const fs_1 = __importDefault(require("fs"));
const readFile_1 = __importDefault(require("../utils/readFile"));
const config_1 = __importDefault(require("../config/config"));
const convertFileDataStringToArray = (data) => {
    return data.split("\n").map((el) => {
        return el.slice(el.indexOf("=") + 1).trim();
    });
};
const RepeatedUtil = (files) => __awaiter(void 0, void 0, void 0, function* () {
    const outputFile = config_1.default.output;
    let allText = [];
    for (const file of files) {
        const textInFile = yield (0, readFile_1.default)(file);
        allText = allText.concat(textInFile);
    }
    const notUniqueTextArr = allText.map((str, i) => {
        if (allText.indexOf(str) !== -1 && allText.indexOf(str) !== i) {
            return str;
        }
    });
    const resultToFile = Array.from(new Set(notUniqueTextArr.sort())).join(`\n`);
    if (resultToFile.length) {
        fs_1.default.writeFile(outputFile, resultToFile, (err) => {
            if (err) {
                throw err;
            }
            else {
                console.info(`Check result in file ${outputFile}`);
            }
        });
    }
    else {
        console.info("Repeated text not found");
    }
});
exports.default = RepeatedUtil;
