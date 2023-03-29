import configUtil from "../config/config";
import readDirForUtil from "../libs/readDir";
import readFileForUtil from "../libs/readFile";
import writeFileForUtil from "../libs/writeFile";

const ReplaceUtil = async(): Promise<void> => {
	try {
		const files = await readDirForUtil();
		
		if (files.length) {
			const serach = configUtil.serach as Array<string>;
			const replaceed = configUtil.replaced as string;

			for (const file of files) {
				let dataText = await readFileForUtil(file);
				const rgx = new RegExp(serach.map((el) => `${el}\\b`).join('|'), "g");
				dataText = dataText.replaceAll(rgx, replaceed);
				await writeFileForUtil(file, dataText);
			}
		}
	}
	catch (err) {
		throw err;
	}
}

export default ReplaceUtil;
