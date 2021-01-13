import { ConstructableFunction } from ".";

/**
 * 加载器定义
 */
export interface BeanDefinition {
    /**
     *  对象索引
     */
    index: number;
    /**
     * 待执行脚本
     */
    script: ConstructableFunction;
    /**
     * bean名称
     */
    beanName?: string;
    /**
     *  是否需要优先执行
     */
    isFirstLoad: boolean;
}