import fs from "fs";
import readFile from "../utils/readFile";
import utilConfig from "../config/config";

const convertFileDataStringToArray = (data: string) => {
	return data.split("\n").map((el: string) => {
		return el.slice(el.indexOf("=")+1).trim();
	});
}

const RepeatedUtil = async (files: string[]) => {
	const outputFile = utilConfig.output as string;

	let allText: string[] = [];
	for (const file of files) {
		const textInFile = await readFile(file);
		allText = allText.concat(textInFile);
	}

	const notUniqueTextArr = allText.map((str, i) => {
		if (allText.indexOf(str) !== -1 && allText.indexOf(str) !== i) {
			return str
		}
	})

	const resultToFile = Array.from(new Set(notUniqueTextArr.sort())).join(`\n`);
	
	if (resultToFile.length) {
		fs.writeFile(outputFile, resultToFile,(err) => {
			if (err) {
				throw err;
			} else {
				console.info(`Check result in file ${outputFile}`);
			}
		});
	} else {
		console.info("Repeated text not found")
	}
}

export default RepeatedUtil;