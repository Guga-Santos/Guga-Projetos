// const days = document.querySelector('#calendario');

// for (let day = 1; day <= 31; day += 1) {
//   if (day % 7 === 0 || day % 7 === 6) {
//     days.insertAdjacentHTML("beforeend", `<div class="day finalDeSemana">${day}</div>`)
//   } else {
//   days.insertAdjacentHTML("beforeend", `<div class="day">${day}</div>`)
//   }
// }

// https://developer.mozilla.org/pt-BR/docs/Web/API/Element/insertAdjacentHTML

const botao = document.querySelector('#botao');
botao.addEventListener('click', () => {
  const h1 = document.querySelector('h1');
  const left = document.querySelector('#left');
  const middle = document.querySelector('#middle');
  const icone = document.querySelector('#icone');
  const menu = document.querySelector('.menu-esquerdo');
  if (h1.style.left == '25%') { 
  h1.style.left = '6%'
  botao.style.left = '0px'
  left.style.width = '0%'
  middle.style.width = '100%'
  middle.style.left = '0%'
  icone.style.left = '6%'
  } else {
  h1.style.left = '25%'
  botao.style.left = '20%'
  left.style.width = '20%'
  middle.style.width = '80%'
  middle.style.left = '20%'
  icone.style.left = '25%'
  }
})

const data = new Date();

data.setDate(1);

const diasDoMes = document.querySelector('.dias')

const ultimoDia = new Date(data.getFullYear(),data.getMonth() + 1 , 0).getDate();

const primeiroDiaIndex = data.getDay();

const ultimoDiaPREV = new Date(data.getFullYear(),data.getMonth(), 0).getDate();

const ultimoDiaIndex = new Date(data.getFullYear(),data.getMonth() + 1 , 0).getDay();

const proximoDia = 7 - ultimoDiaIndex - 1;



const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];

document.querySelector('.dia h1').innerHTML = meses[data.getMonth()];

document.querySelector('.dia p').innerHTML = data.toDateString();

let dias = '';

for (let j = primeiroDiaIndex; j > 0; j -= 1){
  dias += `<div class="prev-date">${ultimoDiaPREV - j + 1}</div>`
}

for (let i = 1; i <= ultimoDia; i += 1) {
  if(i === new Date().getDate() && data.getMonth() === new Date().getMonth()) { 
    dias += `<div class="hoje">${i}</div>`;
  } else {
    dias += `<div>${i}</div>`;
  }

  }

for (let k = 1; k <= proximoDia; k += 1) {
  dias += `<div class="next-date">${k}</div>`
  diasDoMes.innerHTML = dias;
}













































































// const divOl = document.querySelector('#lista-tarefas');
// function criarTarefa() {
//   const lista = document.createElement('li');
//   lista.classList.add('item');

//   divOl.appendChild(lista);
//   lista.innerText = document.querySelector('#texto-tarefa').value;

//   document.querySelector('#texto-tarefa').value = '';
// }
// /* Cria uma lista e adiciona a classe 'item' na li criada.
//  adiciona o texto/valor do input à li criada */

// const button = document.querySelector('#criar-tarefa');

// button.addEventListener('click', criarTarefa);

// // Quando clicar no botão de criar, roda a função criarTarefa

// function mudaBg(event) {
//   const alvo = document.querySelector('.alvo');
//   alvo.classList.remove('alvo');
//   event.target.classList.add('alvo');
// }

// // const listaTarefas = document.querySelector('#lista-tarefas');
// // listaTarefas.addEventListener('click', (e) => {
// //   e.target.classList.add('alvo')
// // })

// // GAMBIARRA ALERT - Busca por algum elemento com a classe 'alvo', remove a classe 'alvo' do elemento e adiciona o event.target

// function lineThr(event) {
//   if (event.target.classList.contains('completed')) {
//     event.target.classList = 'item alvo';
//   } else {
//     event.target.classList.add('completed');
//   }
// }
// // Adiciona a classe 'completed' ao event.target
// // Suei pra me dar conta do if/else '-'

// divOl.addEventListener('click', mudaBg);
// divOl.addEventListener('dblclick', lineThr);

// // Delimita onde serão aplicadas as funções.

// const apagaButton = document.querySelector('#apaga-tudo');

// apagaButton.addEventListener('click', () => {
//   divOl.innerHTML = '';
//   document.querySelector('ol').classList.add('alvo');
// });

// const finaliza = document.querySelector('#remover-finalizados');

// finaliza.addEventListener('click', () => {
//   const finalizados = document.getElementsByClassName('completed');
//   while (finalizados.length > 0) {
//     finalizados[0].parentNode.removeChild(finalizados[0]);
//   }
//   document.querySelector('ol').classList.add('alvo');
// });

// // Retirei a ideia do bloco acima deste link:
// // https://qastack.com.br/programming/4777077/removing-elements-by-class-name

// // const salvaButton = document.querySelector('#salvar-tarefas');

// const praCima = document.querySelector('#mover-cima');
// const praBaixo = document.querySelector('#mover-baixo');

// function goUP() {
//   const selection = document.querySelector('.alvo');
//   const localTroca = document.querySelector('.alvo').previousElementSibling;
//   const compara = document.getElementsByClassName('item')[0];
//   if (selection !== compara) {
//     const reserva = selection.innerHTML;
//     selection.innerHTML = localTroca.innerHTML;
//     localTroca.innerHTML = reserva;
//     selection.classList.remove('alvo');
//     localTroca.classList.add('alvo');
//   }
// }

// function goDown() {
//   const selection = document.querySelector('.alvo');
//   const localTroca = document.querySelector('.alvo').nextElementSibling;
//   const comprimento = document.getElementsByClassName('item').length;
//   const compara = document.getElementsByClassName('item')[comprimento - 1];
//   if (selection !== compara) {
//     const reserva = selection.innerHTML;
//     selection.innerHTML = localTroca.innerHTML;
//     localTroca.innerHTML = reserva;
//     selection.classList.remove('alvo');
//     localTroca.classList.add('alvo');
//   }
// }

// // praCima.addEventListener('click', goUP);
// // praBaixo.addEventListener('click', goDown);

// praCima.addEventListener('click', () => {
//   const tamanhoSelected = document.getElementsByClassName('alvo').length;
//   const alvo = document.getElementsByClassName('alvo')[0];
//   if (tamanhoSelected !== 0 && alvo !== divOl) {
//     goUP();
//   }
// });
// praBaixo.addEventListener('click', () => {
//   const tamanhoSelected = document.getElementsByClassName('alvo').length;
//   const alvo = document.getElementsByClassName('alvo')[0];
//   if (tamanhoSelected !== 0 && alvo !== divOl) {
//     goDown();
//   }
// });
// //  Criada duas funções que permitem mover o item selecionado com a classe 'alvo' para cima e para baixo.
// //  Foi criada uma constante reserva para que fique 'arquivado' o conteudo que será passado de um elemento para o outro.

// const selectRemove = document.querySelector('#remover-selecionado');

// selectRemove.addEventListener('click', () => {
//   // document.querySelector('ol').innerHTML = ''
//   const local = document.querySelector('ol').children;
//   for (let i = 0; i < local.length; i += 1) {
//     if (local[i].classList.length > 1) {
//       local[i].classList.add('only');
//     }
//     const removed = document.getElementsByClassName('only');
//     while (removed.length > 0) {
//       removed[0].parentNode.removeChild(removed[0]);
//     }
//   }
//   document.querySelector('ol').classList.add('alvo');
// });

// // Criado um evento que, quando clicado roda uma função que:
// // Itera sobre os elementos filhos dentro do elemento 'ol' e, caso tenham mais de uma classe (pois sempre terão a classe 'item'), eles recebam uma nova classe 'only'.
// // Após a adição da classe, crio um while pra que seja removido todos os elementos que contenham a classe 'only'
// // Após todo o bloco acima, adiciono a classe 'alvo' à 'ol', numa tremenda gambiarra!

// function guardarConteudo() {
//   const htmlContent = divOl.innerHTML;
//   localStorage.setItem('conteudo', htmlContent);
// }

// const guardarButton = document.querySelector('#salvar-tarefas');
// guardarButton.addEventListener('click', guardarConteudo);

// const saved = localStorage.getItem('conteudo');
// if (saved) {
//   const htmlContent1 = divOl;
//   htmlContent1.innerHTML = saved;
// }

// // Retirei a parte de resgatar o storage daqui:
// // https://gomakethings.com/saving-html-to-localstorage-with-vanilla-js/

