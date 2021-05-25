function palindrome(str) {
    var re = /[\W_]/g; 
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
   

  console.log(palindrome('php'));
  console.log(palindrome('Éric notre valet alla te laver ton ciré et javascript'));