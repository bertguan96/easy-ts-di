import { IContainer } from '../api/container';
/**
 * 使用Map作为容器维护点
 */
export declare class SimpleContainer implements IContainer {
    private containerMap;
    private static _instance;
    set(id: string | symbol, value: any): void;
    get<T extends any>(id: string | symbol): T;
    has(id: string | symbol): Boolean;
    remove(id: string | symbol): void;
    static getInstance(): SimpleContainer;
    get container(): SimpleContainer;
}
