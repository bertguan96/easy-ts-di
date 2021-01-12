import { BaseLoader } from "./base_loader";
import { ILoader } from "./Iloader";
/**
 * ts模块loader加载
 */
export class TSLoader extends BaseLoader implements ILoader{

    private firstLoader: Object[];
    private idleLoader: Object[];

    /**
     * 空闲时加载器
     */
    public scriptIdleLoader(jsObject: Object[]): boolean | undefined {
        console.log(jsObject);
        this.analysisTask(); // 分析任务（区分那些需要首次加载，哪些需要空闲时候加载）
        window.requestIdleCallback(this.runtask.bind(this), { timeout: 2000 })
        return true;
    }

    private analysisTask() {

    }

    private runtask() {
        // 
    }
}