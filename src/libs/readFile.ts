import fs from "fs";

const readFileForUtil = async (file: string): Promise<string> => {
	try {
		return await fs.readFileSync(file, {encoding: "utf-8", flag: "r"});
	}
	catch(err: any) {
		throw err;
	}
}

export default readFileForUtil;
