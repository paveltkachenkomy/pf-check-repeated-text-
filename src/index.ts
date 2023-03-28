import path from "path";
import utilConfig, { ProcessUtil } from "./config/config";
import ReplaceUtil from "./modules/replace";

switch (utilConfig.process) {
	case ProcessUtil.replace:
		{
		ReplaceUtil();
		break;
	}
}