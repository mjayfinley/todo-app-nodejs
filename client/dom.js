var tb = document.getElementById("nameTextBox")
var btn = document.getElementById("btnClick")
var h2 = document.getElementById("heading2")


function isPalindrome(word) {
  var len = word.length
  for (var i = 0; i < len; i++){
    if (word[i] !== word[len - i - 1]) {
      return false
    }
  }
  return true
}


btn.addEventListener("click",function() {
  var input = isPalindrome(tb.value)
  console.log(input)
  if (input === false){
    h2.innerHTML = tb.value + " " + "is not a palindrome"
  }
  else{
    h2.innerHTML = tb.value + " " + "is a palindrome"
  }
})
