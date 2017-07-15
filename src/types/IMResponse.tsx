/**
 * 后端返回的数据类型
 */
export interface IMResponse<T=any>{
    success: boolean;
    data: T;
    error_msg: string;
}