import utilConfig, { checkCfg, ProcessUtil } from "./config/config";
import RepeatedUtil from "./utils/repeated";
import ReplaceUtil from "./utils/replace";

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
	}
}
