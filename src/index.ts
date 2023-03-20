import fs from "fs";
import path from "path";

const inputFiles = path.resolve(__dirname, "../locale");
const outputFile = path.resolve(__dirname, "../texts.txt");

const getArrayLangFiles = async (): Promise<string[]|void> => {
	try {
		const dirs: string[] = await fs.readdirSync(inputFiles);
		return dirs;
	}
	catch (err: any) {
		console.error("===> Error read dir \n", new Error(err));
		throw err;
	}
}

const readFile = async (fileName: string): Promise<string[]>=> {
	try {
		const dataInFile = await fs.readFileSync(path.resolve(inputFiles, fileName), {encoding: "utf-8", flag: "r"});
		const result = dataInFile.split("\n").map((el: string) => {
			return el.slice(el.indexOf("=")+1).trim();
		});
		return result;
	}
	catch (err: any) {
		console.error("===> Error read file\n", new Error(err));
		throw err;
	}
}

const checRepeatedText = async () => {
	console.info("===> START")
	try  {
		const arrLangFiles = await getArrayLangFiles();
		
		if (arrLangFiles) {
			let allText: string[] = [];
			for (const fileName of arrLangFiles) {
				const textInFile = await readFile(fileName);
				allText = allText.concat(textInFile);
			}

			const notUniqueTextArr = allText.map((str, i) => {
				if (allText.indexOf(str) !== -1 && allText.indexOf(str) !== i) {
					return str
				}
			})

			const resultToFile = Array.from(new Set(notUniqueTextArr.sort())).join(`\n`);
			
			fs.writeFile(path.resolve(__dirname, "../texts.txt"), resultToFile,(err) => {
				if (err) {
					console.error("===> Error creating files", err)
				} else {
					console.info(`===> Check result in file ${outputFile}`);
					console.info("===> END \n");
				}
			});
		}
	}
	catch (err: any) {
		console.error("===> Error checkLang \n", new Error(err));
		throw err;
	}
}


checRepeatedText();