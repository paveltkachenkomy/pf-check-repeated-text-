import path from "path";
import fs from "fs";
import readFile from "./utils/readFile";
import readDir from "./utils/readDir";
import { cfg } from "./utils/types";


const configFile = path.resolve(__dirname, "checkutil.json");

readDir("./test").then(d => console.log(d.filter(e => e.isDirectory())));