/**
 * 自定义 id 初始化
 */
export declare function Service(id: string): Function;
/**
 * 作为单例初始化
 */
export declare function Service(singleton: boolean): Function;
/**
 * 单例注入
 */
export declare function Service(id: string, singleton: boolean): Function;
