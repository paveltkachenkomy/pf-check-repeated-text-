import fs from "fs";
import path from "path";

const inputFiles = process.argv[2]; 
const outputFile = process.argv[3] || path.resolve(__dirname, "output", `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}.txt`);

const getArrayLangFiles = async (): Promise<string[]> => {
	try {
		const files: string[] = await fs.readdirSync(inputFiles);
		return files;
	}
	catch (err: any) {
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
		throw err;
	}
}

const checRepeatedText = async () => {
	console.info("===> START")
	try  {
		const arrLangFiles = await getArrayLangFiles();
		
		if (arrLangFiles.length) {
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
			
			if (resultToFile.length) {
				fs.writeFile(outputFile, resultToFile,(err) => {
					if (err) {
						throw err;
					} else {
						console.info(`===> Check result in file ${outputFile}`);
					}
				});
			} else {
				console.info("===> Repeated text not found")
			}
		} else {
			console.info("===> Files not found")
		}
	}
	catch (err: any) {
		if (err.message == `ENOENT: no such file or directory, scandir '${inputFiles}'` || err.message == `The "path" argument must be of type string or an instance of Buffer or URL. Received undefined`) {
			console.error("===> Error: Incorect path input files")
		} else {
			throw err;
		}
	}
	finally {
		console.info("===> END \n");
	}
}

checRepeatedText();