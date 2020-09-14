import { ADDRESS, PORT, PATH, REGION } from "./constant";
import getUrl from "./utils";

const url = getUrl(ADDRESS, PORT, PATH);
export { url, REGION as region };
