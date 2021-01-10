import { SimpleContainer } from "../container/container";

/**
 * 容器基类
 */
export interface IContainer {

    set(id: string | symbol, value: any): void;
    
    get<T extends any>(id: string | symbol): T;
  
    has(id: string | symbol): Boolean;

    remove(id: string | symbol): void;

    readonly container: SimpleContainer;
}