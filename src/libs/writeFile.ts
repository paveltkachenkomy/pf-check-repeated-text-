import fs from "fs";

const writeFileForUtil = async(filePath: string, data: string): Promise<void> => {
	try {
		fs.writeFileSync(filePath, data);
	}
	catch (err) {
		throw err
	}
}

export default writeFileForUtil;