var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function shuffleHandle() {  
  var random = array.sort(() => Math.random() - 0.5)
  document.getElementById('numberBlockId').children
  for (let i = 0; i < random.length; i++) {
    document.getElementById('numberBlockId').children[i].innerHTML = random[i]
document.getElementById('numberBlockId').children[i].className = 'singleNumber'
document.getElementById('numberBlockId').children[i].className += ' singleNumber'+random[i]
  }
}

function sortHandle() {
var random = array.sort((a,b) => a-b) 
  document.getElementById('numberBlockId').children
  for (let i = 0; i < random.length; i++) {
    document.getElementById('numberBlockId').children[i].innerHTML = random[i]
document.getElementById('numberBlockId').children[i].className = 'singleNumber'
document.getElementById('numberBlockId').children[i].className += ' singleNumber'+random[i]
  }
}