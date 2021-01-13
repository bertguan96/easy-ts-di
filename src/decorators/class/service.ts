import { ConstructableFunction } from "../../common";
import { SimpleContainer } from "../../container/container";

/**
 * 自定义 id 初始化
 */
export function Service(id: string): Function;
/**
 * 作为单例初始化
 */
export function Service(singleton: boolean): Function;
/**
 * 单例注入
 */
export function Service(id: string, singleton: boolean): Function;
/**
 * 实现service
 */
export function Service(idOrSingleton?: string | boolean, singleton?: boolean): Function {
    return (target: ConstructableFunction) => {
        let id;
        let singleton;
        let singleInstance;
        const container = SimpleContainer.getInstance();
        if (typeof idOrSingleton === 'boolean') {
            singleton = true;
            id = Symbol(target.name);
        } else {
            // 判断如果设置 id，id 是否唯一
            if (idOrSingleton && container.has(idOrSingleton)) {
                throw new Error(`Service：此标识符（${idOrSingleton}）已被注册.`);
            }

            id = idOrSingleton || Symbol(target.name);
            singleton = singleton;
        }

        if (singleton) {
            singleInstance = new target();
        }

        container.set(id, singleInstance || new target());
    };
};

