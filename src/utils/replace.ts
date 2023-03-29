import configUtil from "../config/config";
import readDirForUtil from "../libs/readDir";
import readFileForUtil from "../libs/readFile";
import writeFileForUtil from "../libs/writeFile";

const ReplaceUtil = async(): Promise<void> => {
	try {
		const files = await readDirForUtil();
		
		if (files.length) {
			const search = configUtil.serach as Array<string>;
			const replaceed = configUtil.replaced as string;

			for (const file of files) {
				let dataText = await readFileForUtil(file);
				const rgx = new RegExp(search.map((el) => `${el}\\b`).join('|'), "g");
				if (dataText.match(rgx) !== null) {
					const newDataText = dataText.replaceAll(rgx, replaceed);
					await writeFileForUtil(file, newDataText);	
				}
			}
		}
	}
	catch (err) {
		throw err;
	}
}

export default ReplaceUtil;
