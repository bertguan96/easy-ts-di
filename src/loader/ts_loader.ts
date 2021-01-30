import { BaseLoader } from "./base_loader";

/**
 * ts模块loader加载
 */
export class TSLoader extends BaseLoader {
    /**
     * 就是个触发器没有实质性作用(暂时)
     */
    public scriptLoader(jsObject: Object[]) {
        // console.log(jsObject);
    }
}