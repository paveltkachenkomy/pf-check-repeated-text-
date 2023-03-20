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
const path_1 = __importDefault(require("path"));
const inputFiles = process.argv[2];
const outputFile = process.argv[3] || path_1.default.resolve(__dirname, "output", `${new Date().toJSON()}.txt`);
const getArrayLangFiles = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const files = yield fs_1.default.readdirSync(inputFiles);
        return files;
    }
    catch (err) {
        throw err;
    }
});
const readFile = (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataInFile = yield fs_1.default.readFileSync(path_1.default.resolve(inputFiles, fileName), { encoding: "utf-8", flag: "r" });
        const result = dataInFile.split("\n").map((el) => {
            return el.slice(el.indexOf("=") + 1).trim();
        });
        return result;
    }
    catch (err) {
        throw err;
    }
});
const checRepeatedText = () => __awaiter(void 0, void 0, void 0, function* () {
    console.info("===> START");
    try {
        const arrLangFiles = yield getArrayLangFiles();
        if (arrLangFiles.length) {
            let allText = [];
            for (const fileName of arrLangFiles) {
                const textInFile = yield readFile(fileName);
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
                        console.info(`===> Check result in file ${outputFile}`);
                    }
                });
            }
            else {
                console.info("===> Rrepeated text not found");
            }
        }
        else {
            console.info("===> Files not found");
        }
    }
    catch (err) {
        if (err.message == `ENOENT: no such file or directory, scandir '${inputFiles}'` || err.message == `The "path" argument must be of type string or an instance of Buffer or URL. Received undefined`) {
            console.error("===> Error: Incorect path input files");
        }
        else {
            throw err;
        }
    }
    finally {
        console.info("===> END \n");
    }
});
checRepeatedText();
