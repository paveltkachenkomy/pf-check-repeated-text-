import configUtil, { ProcessUtil } from "../config/config";
import readDirForUtil from "../libs/readDir";
import readFileForUtil from "../libs/readFile";

const SearchUtil = async (): Promise<Map<string, number>> => {
	try {
		const files = await readDirForUtil();
		const matchText: Map<string, number> = new Map();

		if (files.length) {
			const search = configUtil.serach as Array<string>;
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

			if (configUtil.process == ProcessUtil.search) {
				matchText.forEach((el, i) => {
					if (!el) {
						matchText.delete(i)
					}
				})
			}
		}
		console.log(matchText);
		return matchText;
	}
	catch (err) {
		throw err;
	}
}

export default SearchUtil;