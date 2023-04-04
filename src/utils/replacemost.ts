import configUtil from "../config/config";
import readDirForUtil from "../libs/readDir";
import readFileForUtil from "../libs/readFile";
import ReplaceUtil from "./replace";
import SearchUtil from "./search";

const ReplaceMostUtil = async (): Promise<void> => {
	try {
		const files = await readDirForUtil();
		if (files.length) {
			const matchText = await SearchUtil();
			const max = Math.max(...matchText.values());
			for (const [key, val] of matchText.entries()) {
				if (val == max) {
					configUtil.replaced = key;
					configUtil.serach?.splice(configUtil.serach?.indexOf(key), 1);
					break;
				}
			}
			if (max > 0) {
				ReplaceUtil();
			} else {
				console.info("Нет тексвтовок для замены");
			}
		}
	} catch (err) {
		throw err;
	}
}

export default ReplaceMostUtil;