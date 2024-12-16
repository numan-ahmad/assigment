import{httpPost as t}from"../http.js";import{API_VERSION as e}from"./constants.js";function n(n,o){const a=`${e}/sessions/${o.id}/paymentDetails?clientKey=${o.clientKey}`,s={sessionData:o.data,...n};return t({loadingContext:o.loadingContext,path:a,errorLevel:"fatal"},s)}export{n as default};
//# sourceMappingURL=submit-details.js.map
