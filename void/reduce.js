const _ = require('lodash');

const result = { 
  statuses: [
    [ 
        "stipOnFileNeedAttorneySignature"
    ], 
    [], 
    [ 
        "judgement", 
        "summonsOnFile", 
        "discovalueeryRequestedToPlaintiff"
    ], 
    [], 
    [], 
    [ 
        "hearingDate", 
        "summonsOnFile", 
        "discovalueeryRequested", 
        "garnishment", 
        "discovalueeryRequestedToPlaintiff", 
        "msjFiled", 
        "defaultJudgement", 
        "hearingDate", 
        "garnishment", 
        "hearingDate", 
        "msjFiled", 
        "garnishment", 
        "stipOnFileNeedAttorneySignature", 
        "stipOnFileNeedAttorneySignature", 
        "stipOnFileNeedAttorneySignature", 
        "stipOnFileNeedAttorneySignature", 
        "stipOnFileNeedAttorneySignature", 
        "stipOnFileNeedAttorneySignature", 
        "stipOnFileNeedAttorneySignature", 
        "stipOnFileNeedAttorneySignature", 
        "stipOnFileNeedAttorneySignature", 
        "summonsOnFile", 
        "msjFiled", 
        "msjFiled", 
        "msjFiled", 
        "judgement", 
        "hearingDate", 
        "hearingDate", 
        "garnishment", 
        "discovalueeryRequestedToPlaintiff", 
        "discovalueeryRequested", 
        "defaultJudgement", 
        "discovalueeryRequested", 
        "hearingDate", 
        "hearingDate", 
        "defaultJudgement", 
        "summonsOnFile", 
        "stipOnFileNeedAttorneySignature", 
        "garnishment", 
        "discovalueeryRequested", 
        "hearingDate", 
        "hearingDate", 
        "hearingDate", 
        "hearingDate", 
        "hearingDate", 
        "hearingDate", 
        "hearingDate"
    ], 
    [ 
        "discovalueeryRequested", 
        "discovalueeryRequested", 
        "hearingDate", 
        "defaultJudgement", 
        "msjFiled"
    ], 
    [ 
        "summonsOnFile", 
        "msjFiled", 
        "hearingDate", 
        "discovalueeryRequested", 
        "summonsOnFile", 
        "discovalueeryRequested", 
        "msjFiled", 
        "summonsOnFile", 
        "hearingDate"
    ], 
    [], 
    [], 
    [], 
    [ 
        "hearingDate", 
        "summonsOnFile", 
        "msjFiled", 
        "summonsOnFile", 
        "summonsOnFile", 
        "summonsOnFile", 
        "summonsOnFile"
    ], 
    [], 
    []
  ],
  counties: [ 
    "", 
    "", 
    "", 
    "Hello", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    ""
  ],
  states: [ 
    "FL", 
    "NE", 
    "MA", 
    "NJ", 
    "KS", 
    "TX", 
    "TX", 
    "TX", 
    "NE", 
    "NE", 
    "MA", 
    "MA", 
    "MA", 
    "NJ"
  ],
};

// const counties = [...new Set(result.counties)].filter(value => value !== '');
// const states = [...new Set(result.states)].filter(value => value !== '');
// const statuses = [...new Set(_.flattenDeep(result.statuses))];

const statusesFlattend = _.flattenDeep(result.statuses);
const statuses = statusesFlattend.filter((value, i) => statusesFlattend.indexOf(value) === i);
const counties = result.counties.filter((value, i) => result.counties.indexOf(value) === i && value !== '');
const states = result.states.filter((value, i) => result.states.indexOf(value) === i && value !== '');


console.log({ statuses, counties, states });