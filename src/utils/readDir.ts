import fs, { Dirent } from "fs";

const readDir = async(dir: string): Promise<Dirent[]> => {
	try {
		return await fs.readdirSync(dir, {withFileTypes: true});
	}
	catch (err: any) {
		throw err;
	}
}

export default readDir;

