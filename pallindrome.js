function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
console.log(palindrome("eye"));

function palindromforloop(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for(let i=0; i < len/2; i++) {
        if(str[i] !== str[len - 1 - i]) {
            return false;
        }
        return true;
    }
}
console.log(palindromforloop('eye1'));