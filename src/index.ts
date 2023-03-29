import utilConfig, { ProcessUtil } from "./config/config";
import RepeatedUtil from "./utils/repeated";
import ReplaceUtil from "./utils/replace";

switch (utilConfig.process) {
	case ProcessUtil.replace: {
		ReplaceUtil();
		break;
	};
	case ProcessUtil.repeated: {
		// RepeatedUtil();
		break;
	};
}