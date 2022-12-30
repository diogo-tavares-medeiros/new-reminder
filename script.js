let res = document.querySelector('div#res')
let textodomodal = document.querySelector('textarea.form-control')
let a = document.querySelector('select.custom-select')
let prioridade = document.querySelector('div#prioridade')
let textPriori = 'PRIORIDADE '

function adicionar() {
  if (a.value == 1) {
    prioridade.innerHTML = `<strong>${textPriori}ALTA</strong>`
  } else if (a.value == 2) {
    prioridade.innerHTML = `<strong>${textPriori}MEDIA</strong>`
  } else {
    prioridade.innerHTML = `<strong>${textPriori}BAIXA</strong>`
  }
  res.innerHTML = `<p>${textodomodal.value}</p>`
}
