import path from "path";
import nconf from "nconf";

nconf.file(path.resolve(__dirname, "../../checkutil.json"));

export enum ProcessUtil {
	repeated = "repeated",
	replace = "replace"
}

type ICfg = {
	process: ProcessUtil,
	include: string[],
	exclude?: string[],
	serach?: string[],
	replaced?: string
	output?: string,
}

class CFGController implements ICfg {
	process: ProcessUtil;
	include: string[];
	exclude?: string[];
	serach?: string[];
	replaced?: string;
	output?: string;

	constructor() {
		this.process = nconf.get("process");
		this.include = nconf.get("include");
		this.exclude = nconf.get("exclude");
		this.serach = nconf.get("serach");
		this.replaced = nconf.get("replaced");
		this.output = nconf.get("output");
	}
}

const configUtil = new CFGController();

export const checkCfg = () => {
	switch (configUtil.process) {
		case ProcessUtil.replace:
			return configUtil.include && configUtil.serach && configUtil.replaced;
		case ProcessUtil.repeated:
			return configUtil.include && configUtil.output;
		default:
			console.info("Не правильно сконфигурированны настройки утилиты");
			return false;
	}
}

export default configUtil;