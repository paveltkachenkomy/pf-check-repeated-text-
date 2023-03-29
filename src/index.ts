import utilConfig, { checkCfg, ProcessUtil } from "./config/config";
import RepeatedUtil from "./utils/repeated";
import ReplaceUtil from "./utils/replace";
import ReplaceMostUtil from "./utils/replacemost";

if (checkCfg()) {
	switch (utilConfig.process) {
		case ProcessUtil.replace: {
			ReplaceUtil();
			break;
		};
		case ProcessUtil.repeated: {
			RepeatedUtil();
			break;
		};
		case ProcessUtil.replace_most: {
			ReplaceMostUtil();
			break;
		}
	}
}
