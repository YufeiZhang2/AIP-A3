export class CheckWordsMatched {
    CompareWithWords(firstWord, secondWord): boolean {
        //remove all the whitespace of strings and make all the words become lower case to compare if they are matched
        const firstResult = firstWord.toString().toLowerCase().trim().replace(/ /g, "");
        const secondResult = secondWord.toString().toLowerCase().trim().replace(/ /g, "");

        return firstResult === secondResult ? true : false;
    }
}
