import { SimpleContainer } from "../../container/container";
/**
 * Inject装饰器
 * @param name 装饰器名称，如果未设置名称，则使用默认的属性名字
 */
export function Inject(value?: string): PropertyDecorator {
    return (target: any, propertyKey: string | symbol) => {  
      const id = value || propertyKey;
      const container = SimpleContainer.getInstance();
      const _dependency = container.get(id) ? container.get(id) : null;
      if (_dependency) {
        target[propertyKey] = _dependency;
      }
      return target;
    };
}