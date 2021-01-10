## what is easy-ts-di？

An IOC dependency injection decorator based on typescript can manage and maintain related dependencies.

基于typescript的IOC依赖注入装饰器可以管理和维护相关的依赖关系。

## Quick Start

### Install with the npm Global Package

```
$ npm i easy-ts-di
```

### use this package

#### stage 1:

To configure the basic scriptloader, this is an empty method for the time being, without any implementation, just to advance the loading order of objects.

配置基础的ScriptLoader，这里暂时是个空方法没有任何实现，只是为了提前对象的加载顺序。

```typescript
const tsLoader = new TSLoader();
tsLoader.scriptLoader([
  TestDI
])
```

Initialization container is used to store related object entities.

初始化容器用于存放相关的对象实体。

**Note**: the first step must be at the front of the page render.

**注意**：第一步必须在页面render最前面。

```typescript
// 初始化容器
SimpleContainer.getInstance();
```

#### stage 2:

Use this decorator to mark the object to be marked.

使用该装饰器对于需要标注对象进行标注。

```typescript
@Service('testDi')
export class TestDI {
    public print() {
        console.log('test')
    }
}
```

Use it when you need to.

在需要使用的时候进行使用它。

```typescript
export class Test extends React.Component {
    @Inject()
    private testDi!: TestDI;

    componentDidMount() {
      console.log(this.testDi);
    }

    render() {
        return (
          <div className="App">
              test
          </div>
        );
      }
}
```

## technology:

1. typescript
2. Webpack5

## Code:

If you have any questions, you can feed them back to me

如果你有什么问题，可以把问题反馈给我

Github: https://github.com/guanjiangtao/easy-ts-di/settings

