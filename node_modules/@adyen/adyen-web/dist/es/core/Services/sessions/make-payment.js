import{httpPost as t}from"../http.js";import{API_VERSION as e}from"./constants.js";function n(n,o){const s=`${e}/sessions/${o.id}/payments?clientKey=${o.clientKey}`,a={sessionData:o.data,...n};return t({loadingContext:o.loadingContext,path:s,errorLevel:"fatal"},a)}export{n as default};
//# sourceMappingURL=make-payment.js.map
