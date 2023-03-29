import path from "path";
import utilConfig, { ProcessUtil } from "./config/config";
import RepeatedUtil from "./modules/repeated";
import ReplaceUtil from "./modules/replace";

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