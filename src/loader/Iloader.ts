import { BeanDefinition } from "../common";

/**
 * 加载器基类
 */
export interface ILoader {
    /**
     * 脚本加载器
     * @param jsObject 待加载的js对象
     * @param lazyLoad 是否需要懒加载
     */
    scriptLoader(jsObject: (object | BeanDefinition)[], lazyLoad?: boolean): boolean | undefined;

}