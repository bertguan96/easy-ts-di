import { TaskManager } from './task_manager';
import { BeanDefinition } from '../common';
import { BaseLoader } from "./base_loader";
import { ILoader } from "./Iloader";
/**
 * ts模块loader加载
 */
export class TSLoader extends BaseLoader implements ILoader{

    private taskManager: TaskManager;

    constructor() {
        super();
        this.taskManager = new TaskManager();
    }

    public scriptLoader(jsObjects: BeanDefinition[], lazyLoad?: boolean): boolean | undefined {
        jsObjects.forEach((jsObject) => {
            this.taskManager.runTask(jsObject);
        });
        console.info(`[info] object load! [time]${performance.now()}ms!`);
        return true;
    }
    

}