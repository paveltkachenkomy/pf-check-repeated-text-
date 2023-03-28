import fs from "fs";
import path from "path";
import utilConfig from "../config/config";

// Собирает пути файлов
const readDirForUtil = async(): Promise<string[]> => {
	try {
	let resultFilesPath: string[] = [];
		for (const include of utilConfig.include) {
			const resultPaths = await readDir(include);
			resultFilesPath= resultFilesPath.concat(resultPaths);
		}
		
		return resultFilesPath;
	}
	catch (err) {
		throw err;
	}
}

const readDir = async(pathDir: string): Promise<string[]> => {
	try {
		let result: string[] = [];

		// Получаем спискок всего в дирректории 
		const currentPaths = await fs.readdirSync(pathDir, {
			withFileTypes: true
		});
		
		// Файлы
		const files = currentPaths.filter((el) => {
			return el.isFile() && !utilConfig.exclude?.includes(el.name);
		}).map((el) => {
			return path.resolve(pathDir, el.name);
		});
		result = result.concat(files);


		// Вложенные директории
		const dirs = currentPaths.filter((el) => {
			return el.isDirectory() && !utilConfig.exclude?.includes(el.name)
		}).map((el) => {
			return path.resolve(pathDir, el.name)
		});

		if (dirs.length) {
			for (const subDirsPath of dirs) {
				const subDirdata = await readDir(subDirsPath);
				result = result.concat(subDirdata);
			}
		}

		return result;
	}
	catch (err: any) {
		throw err;
	}
}

export default readDirForUtil;
