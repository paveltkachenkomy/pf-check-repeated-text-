export enum ProcessUtil {
	repeated = "repeated",
	search = "search",
	replace = "replace"
}

export type cfg = {
	process: ProcessUtil,
	include: string[],
	exclude: string[],
	serach: string[],
	output: string,
	replace: []
}

export type replaceText = Map<string, string[]>;
