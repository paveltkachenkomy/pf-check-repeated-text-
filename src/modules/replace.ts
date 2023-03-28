import configUtil from "../config/config";
import readDirForUtil from "../utils/readDir";
import readFile from "../utils/readFile";
import writeFile from "../utils/writeFile";

const ReplaceUtil = async(): Promise<void> => {
	readDirForUtil()
	.then(async (files) => {
		if (files.length && configUtil.serach?.length && configUtil.replaced?.length) {
			for (const file of files) {
				let dataText = await readFile(file);
				for (const searchIndexLang of configUtil.serach) {
					dataText = dataText.replaceAll(searchIndexLang, configUtil.replaced)
				}
				await writeFile(file, dataText);
			}
		}
	})
}

export default ReplaceUtil;
