function getOperationFlowSummary(summaryArray, type){

    for (var idx = 0; idx< summaryArray.length ; idx++){
        var operatioFlowSummaryString=`
          <p>
          0. Disable all servers mornitoring
          1. ${summaryArray[idx]}T Prepare
          </p>
        `
    }
}
