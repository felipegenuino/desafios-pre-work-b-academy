const input = document.querySelector('[data-js="username"]')
const dontChange = ['da','das', 'do', 'dos', 'de']
input.addEventListener('input', (e)=>{
  //recebe os valores do input
  const valueAsArray = e.target.value.split(' ')
  console.log('valueAsArray: ',valueAsArray)

  e.target.value = valueAsArray.map((word)=>{
    return dontChange.includes(word.toLowerCase())
      ? word.toLowerCase()
      : fixCase(word)
  }).join(' ')
})

function fixCase(word){
  if(word.length === 0){
    return ''
  }
  return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
}


