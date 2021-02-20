let score = 0
document.getElementById('button').addEventListener('click', newfunction)
function newfunction () {
  score = document.getElementById('input').value

  if (score >= 17) {
    document.getElementById('paragraph').innerHTML = 'you can see an R rated movie alone'
  } else if (score >= 13) {
    document.getElementById('paragraph').innerHTML = 'you can see an PG-13 rated movie alone'
  } else if (score >= 5) {
    document.getElementById('paragraph').innerHTML = 'you are too young to watch most movies'
  }
}
