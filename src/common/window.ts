/**
 * window全局对象
 */
declare global {
    interface Window {
        requestIdleCallback: any   // 什么类型我也不知道，暂时就这样了
    }
}

export {};