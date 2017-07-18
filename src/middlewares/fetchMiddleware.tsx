import { IMResponse } from '../types'; 
import { BASE_URL } from '../constants/config';

/**
 * 简化fetch处理中间件
 */
const fetchMiddleware=store=>next=>action=>{
    if(!action.url || !Array.isArray(action.types)){
        return next(action);
    }

    const [LOADING,SUCCESS,ERROR]=action.types;
    const url=`${BASE_URL}${action.url}`;

    next({
        ...action,
        type: LOADING
    });

    fetch(url,action.option)
        .then(response=>response.json())
        .then((json: IMResponse)=>{
            if(json.success){
                next({
                    ...action,
                    type: SUCCESS,
                    payload: json.data
                });
            }
            else{
                next({
                    type: ERROR,
                    error: json.error_msg
                });
            }
        })
        .catch(error=>{
            next({
                type: ERROR,
                error: error.message
            });
        });
}

export default fetchMiddleware;