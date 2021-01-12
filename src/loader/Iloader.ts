export interface ILoader {

    scriptIdleLoader(jsObject: Object[]): boolean | undefined;

}