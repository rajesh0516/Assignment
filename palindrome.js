function checkPalindrom() {
    var inputValue =  document.getElementById("str").value;

    for( var i= 0; i< inputValue.length/2;i++)
    {
        if( inputValue[i]!== inputValue[inputValue.length-1-i])
        {
           ( document.write(" is not Palindrom"));
        }else{
            document.write(" is  A Palindrom");
        }
    }
}
checkPalindrom("books");

/*

function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
palindrome("A man, a plan, a canal. Panama");

*/