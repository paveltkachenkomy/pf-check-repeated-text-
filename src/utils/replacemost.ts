import configUtil from "../config/config";
import readDirForUtil from "../libs/readDir";
import readFileForUtil from "../libs/readFile";

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
			/**
			 * TODO
			 * - получить по значению первый ключ (индекс текстовки);
			 * - устанавливаем значения конфиги утилиты (в replaced ключ из предыдущего)
			 * - и запустить ReplaceUtil
			 */
		}
	} catch (err) {
		throw err;
	}
}

export default ReplaceMostUtil;