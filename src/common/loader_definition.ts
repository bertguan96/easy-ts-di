/**
 * 加载器定义
 */
export interface LoaderDefinition {
    /**
     *  对象索引
     */
    index: number;
    /**
     *  待执行脚本
     */
    script: Object;
    /**
     *  是否需要优先执行
     */
    isFirstLoad: boolean;
}