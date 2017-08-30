 /**
  * 将对象格式化为查询字符串
  */
 export const parseQuery = (url, data) => {
     if (data) {
         let keys = Object.keys(data);
         if (keys.length > 0) {
             url += `?${keys[0]}=${data[keys[0]]}`;

             for (let i = 1; i < keys.length; i++) {
                 url += `&${keys[i]}=${data[keys[i]]}`;
             }
         }
     }
     return url;
 }