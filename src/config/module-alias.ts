/**
 * This configuration will enable to use path alias "@"
 */
import { addAlias } from "module-alias";

import { resolve } from "path";

addAlias("@", resolve("dist"));
