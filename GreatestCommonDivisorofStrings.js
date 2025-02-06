/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // Check if concatenation in both orders yields the same result
    // This is necessary for strings to have a GCD
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    
    // Use the Euclidean algorithm on the lengths to find the GCD length
    const gcdLength = getGCD(str1.length, str2.length);
    
    // Return the substring of length GCD
    return str1.substring(0, gcdLength);
};

// Helper function to calculate GCD using Euclidean algorithm
function getGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}