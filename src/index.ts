import utilConfig, { checkCfg, ProcessUtil } from "./config/config";
import RepeatedUtil from "./utils/repeated";
import ReplaceUtil from "./utils/replace";
import ReplaceMostUtil from "./utils/replacemost";
import SearchUtil from "./utils/search";

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
		case ProcessUtil.replacemost: {
			ReplaceMostUtil();
			break;
		};
		case ProcessUtil.search: {
			SearchUtil();
			break;
		}
	}
}
