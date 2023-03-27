import path from "path";
import readFile from "../utils/readFile";

export enum ProcessUtil {
	repeated = "repeated",
	search = "search",
	replace = "replace"
}

interface ICfg {
	process: ProcessUtil,
	include?: string[],
	exclude?: string[],
	serach?: string[],
	output?: string,
	replace?: []
}


class CFGController implements ICfg {
	process: ProcessUtil;
	include?: string[];
	exclude?: string[];
	serach?: string[];
	output?: string;
	replace?: [];

	constructor() {
		this.process = ProcessUtil.search;
		this.setConfig();
	}

	async setConfig() {
		try {
			const cfgData = await readFile(path.resolve(__dirname, "../../checkutil.json"));
			const data = JSON.parse(cfgData) as ICfg;
			this.process = data.process;
			this.exclude = data?.exclude;
			this.include = data?.include;
			this.serach = data?.serach;
			this.output = data?.output;
			this.replace = data?.replace;
		}
		catch (err) {
			throw err;
		}
	};
}

const utilConfig = new CFGController();

export default utilConfig;