"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const readDir_1 = __importDefault(require("./utils/readDir"));
const configFile = path_1.default.resolve(__dirname, "checkutil.json");
(0, readDir_1.default)("./test").then(d => console.log(d.filter(e => e.isDirectory())));
