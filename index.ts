import {
  convertCorpus,
  getMissingWordsInDict,
  getCorpusDetails,
  generateSentencesinKMfromCorpus,
  noOfCorpes,
} from './functions';

/***ttttt */

let fileName = 'ktv_18_02_22';

/*1. TO DISPLAY ALL UNIQUE WORDS FROM A CORPUS*/
//console.log(getCorpusDetails(fileName));

/*2. CONVERT CORPUS TO KM GRAMMAR*/
// console.log(convertCorpus(fileName));

/*3. WORDS NOT PRESENT IN DICT FROM THIS CORPUS*/
// console.log(getMissingWordsInDict(fileName));

/*4. Generate sentences from corpus--->precise the length you want the sentence to be*/
// console.log(generateSentencesinKMfromCorpus(fileName,16));

/*5. Numb~er of corpuses available*/
console.log(noOfCorpes())