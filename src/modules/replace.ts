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

				const rgx = new RegExp(configUtil.serach.map((el) => `${el}\\b`).join('|'), "g");
				dataText = dataText.replaceAll(rgx, configUtil.replaced);
				await writeFile(file, dataText);
			}
		}
	})
}

export default ReplaceUtil;
