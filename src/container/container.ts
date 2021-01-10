import { IContainer } from '../api/container';

/**
 * 使用Map作为容器维护点
 */
export class SimpleContainer implements IContainer{

    private containerMap = new Map<string | symbol, any>();

    private static _instance: SimpleContainer;

    public set(id: string | symbol, value: any): void {
      this.containerMap.set(id, value);
    }
    
    public get<T extends any>(id: string | symbol): T {
      return this.containerMap.get(id) as T;
    }
  
    public has(id: string | symbol): Boolean{
      return this.containerMap.has(id);
    }

    public remove(id: string | symbol): void {
      if (this.containerMap.has(id)) {
          this.containerMap.delete(id);
      }
    }

    public static getInstance(): SimpleContainer {
        if(!this._instance) {
            this._instance = new SimpleContainer();
        }
        return this._instance;
    }

    public get container(): SimpleContainer {
      return SimpleContainer._instance;
    }
}