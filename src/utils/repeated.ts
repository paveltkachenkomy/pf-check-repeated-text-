import fs from "fs";
import readFile from "../libs/readFile";
import utilConfig from "../config/config";
import readDirForUtil from "../libs/readDir";

const convertFileDataStringToArray = (data: string) => {
	return data.split("\n").map((el: string) => {
		return el.slice(el.indexOf("=")+1).trim();
	});
}

const RepeatedUtil = async (): Promise<void> => {
	try {
		const files = await readDirForUtil();

		if (files.length) {
			const outputFile = utilConfig.output as string;
			
			let allText: string[] = [];
			for (const file of files) {
				const textInFile = await readFile(file);
				allText = allText.concat(convertFileDataStringToArray(textInFile));
			}

			const notUniqueTextArr = allText.map((str, i) => {
				if (allText.indexOf(str) !== -1 && allText.indexOf(str) !== i) {
					return str;
				}
			});

			const resultToFile = Array.from(new Set(notUniqueTextArr.sort())).join(`\n`);
		
			if (resultToFile.length) {
				fs.writeFile(outputFile, resultToFile,(err) => {
					if (err) {
						throw err;
					} else {
						console.info(`Все повторяющиеся текста для проверки находятся в ${outputFile}`);
					}
				});
			} else {
				console.info("Повторяющихся текстовок не найдено");
			}
		}
	}
	catch (err) {
		throw err;
	}
}

export default RepeatedUtil;