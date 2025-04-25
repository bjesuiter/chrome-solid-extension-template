import { mainLogger } from "@src/utils/logger";

const logger = mainLogger.getSubLogger({ name: "background" });

logger.info("background script loaded");
