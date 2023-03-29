import fs from "fs";

const writeFile = async(filePath: string, data: string): Promise<void> => {
	try {
		fs.writeFileSync(filePath, data);
	}
	catch (err) {
		throw err
	}
}

export default writeFile;