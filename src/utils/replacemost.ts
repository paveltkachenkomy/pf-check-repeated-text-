import configUtil from "../config/config";
import readDirForUtil from "../libs/readDir";
import readFileForUtil from "../libs/readFile";
import ReplaceUtil from "./replace";

const ReplaceMostUtil = async (): Promise<void> => {
	try {
		const files = await readDirForUtil();
		if (files.length) {
			const search = configUtil.serach as Array<string>;
			const matchText:Map<string, number> = new Map();
			
			for (const key of search) {
				matchText.set(key, 0)
			}

			for (const file of files) {
				const dataText = await readFileForUtil(file);

				for (const searchText of search) {
					const curentLength = matchText.get(searchText) as number;
					const rgx = new RegExp(`${searchText}\\b`, "g");
					matchText.set(searchText, curentLength + (dataText.match(rgx) || []).length);
				}
			}

			const max = Math.max(...matchText.values());
			for (const [key, val] of matchText.entries()) {
				if (val == max) {
					configUtil.replaced = key;
					break;
				}
			}

			ReplaceUtil();
		}
	} catch (err) {
		throw err;
	}
}

export default ReplaceMostUtil;