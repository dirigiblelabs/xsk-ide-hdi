let hdiDefaultTemplate = new Object({
      "configuration": "/sample/config.hdiconfig",
    "users": ["XSK_SAMPLE_USER"],
    "group": "XSK_HDI_SAMPLE_GROUP",
    "container": "XSK_HDI_SAMPLE",
    "deploy": [
    	"/sample/Sample.hdbsynonym",
    	"/sample/DEMO.hdbcalculationview"
    ],
    "undeploy": []
});

exports.getTemplate = function () {
     return {
          "name": "hdi",
          "label": "HDI File",
          "extension": "hdi",
          "data": JSON.stringify(hdiDefaultTemplate)
     };
};
