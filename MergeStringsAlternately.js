var mergeAlternately = function(word1, word2) {
    let merged = '';
    let i = 0, j = 0;
    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            merged += word1[i];
            i++;
        }
        if (j < word2.length) {
            merged += word2[j];
            j++;
        }
    }
    return merged;
};


///////////////////

var mergeAlternately = function(word1, word2) {
    const result = [];
    const maxLength = Math.max(word1.length, word2.length);
    
    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) result.push(word1[i]);
        if (i < word2.length) result.push(word2[i]);
    }
    
    return result.join('');
};