import fs from "fs";

const writeFile = async(filePath: string, data: string): Promise<void> => {
	console.log(filePath, data)
	try {
		fs.writeFileSync(filePath, data);
	}
	catch (err) {
		throw err
	}
}

export default writeFile;