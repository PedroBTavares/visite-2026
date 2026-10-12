const maxTime = 15 * 1000 * 60;
const redAlertTime = 5 * 1000 * 60;

export const game = {
    status: "idle",   // 'idle' | 'playing' | 'won' | 'lost'
    endsAt: null,     // hora de término em milissegundos; restante = endsAt - Date.now()
    remaining: null,
    redAlert: false,
    face: 1,          // face visível (1 a 4)
    solved: {
        a1: false,
        a2: false,
        a3: false,
        a4: false,
        a5: false,
        a6: false,
    },
    interval: null,
    
    tick(){
        this.remaining = Math.max(-0.5, this.endsAt - (new Date()).getTime());
        this.redAlert = false;
    
        if(this.remaining < redAlertTime + 1000){
            this.redAlert = true;
        }
    
        if(this.remaining < 0){
            this.status = "lost";
            clearInterval(this.interval);
        }
        
        this.notify();
    },
    
    start(){
        this.status = "playing";
        this.endsAt = (new Date()).getTime() + maxTime;
        this.tick();
        this.interval = setInterval(() => this.tick(), 500);
        this.notify();
    },

    solve(puzzle){
        if(!(puzzle in this.solved)){
            console.log("Puzzle inexistente");
            return;
        }
        if(this.status != "playing"){
            console.log("O status do jogo precisa ser 'playing' para resolver um enigma");
            return;
        }
        if(this.solved[puzzle]){
            console.log("Enigma já resolvido");
            return;
        }
        if(puzzle !== "a6"){
            this.solved[puzzle] = true;
            this.notify();
            return;
        }
        if(puzzle === "a6"){
            if(!this.solved.a1 || !this.solved.a2 || !this.solved.a3 || !this.solved.a4 || !this.solved.a5){
                console.log("Não é possível resolver o enigma final sem resolver todos os outros enigmas antes");
                return;
            }
            this.status = "won";
            clearInterval(this.interval);
        }
        this.notify();
    },

    notify() {
        document.dispatchEvent(new CustomEvent('game:change'));
    }
};