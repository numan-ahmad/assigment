import{httpPost as t}from"../http.js";import{API_VERSION as o}from"./constants.js";function e(e){const n=`${o}/sessions/${e.id}/orders?clientKey=${e.clientKey}`,s={sessionData:e.data};return t({loadingContext:e.loadingContext,path:n,errorLevel:"fatal"},s)}export{e as default};
//# sourceMappingURL=create-order.js.map
