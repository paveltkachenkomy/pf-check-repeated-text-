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
const config_1 = __importDefault(require("../config/config"));
// Собирает пути файлов
const readDirForUtil = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let resultFilesPath = [];
        for (const include of config_1.default.include) {
            const resultPaths = yield readDir(include);
            resultFilesPath = resultFilesPath.concat(resultPaths);
        }
        return resultFilesPath;
    }
    catch (err) {
        throw err;
    }
});
const readDir = (pathDir) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = [];
        // Получаем спискок всего в дирректории 
        const currentPaths = yield fs_1.default.readdirSync(pathDir, {
            withFileTypes: true
        });
        // Файлы
        const files = currentPaths.filter((el) => {
            var _a;
            return el.isFile() && !((_a = config_1.default.exclude) === null || _a === void 0 ? void 0 : _a.includes(el.name));
        }).map((el) => {
            return path_1.default.resolve(pathDir, el.name);
        });
        result = result.concat(files);
        // Вложенные директории
        const dirs = currentPaths.filter((el) => {
            var _a;
            return el.isDirectory() && !((_a = config_1.default.exclude) === null || _a === void 0 ? void 0 : _a.includes(el.name));
        }).map((el) => {
            return path_1.default.resolve(pathDir, el.name);
        });
        if (dirs.length) {
            for (const subDirsPath of dirs) {
                const subDirdata = yield readDir(subDirsPath);
                result = result.concat(subDirdata);
            }
        }
        return result;
    }
    catch (err) {
        throw err;
    }
});
exports.default = readDirForUtil;
