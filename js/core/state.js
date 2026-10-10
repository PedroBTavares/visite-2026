function start(){
    // 
}

function goToFace(n){
    // 
}

function markSolved(id){
    // 
}

function reset(){
    // 
}

function on(evento, fn){
    // 
}

window.Game = {
  status: 'idle',   // 'idle' | 'playing' | 'won' | 'lost'
  endsAt: null,     // hora de término em milissegundos; restante = endsAt - Date.now()
  face: 1,          // face visível (1 a 4)
  solved: {},       // { A1:true, A2:true, ... }
  seals: {},        // { A1:'circulo', ... }
  start,
  goToFace,
  markSolved,
  reset,
  on                // eventos: 'change', 'solved', 'won', 'lost', 'reset'
}