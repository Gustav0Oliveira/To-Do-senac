class Tarefa {
    constructor(tarefaInput) {
        this.tarefa = tarefaInput;
        this.statusTarefa = ['default', 'feito', 'incompleto', 'nao-feito']; 
        this.valorInput = this.tarefa.querySelector('input');

        const btnTarefa = this.tarefa.querySelector(".btnTarefa");
        btnTarefa.addEventListener("click", () => this.alterarStatus()); 
    }

    alterarStatus() {
        
        let statusAtual = this.statusTarefa.indexOf(this.valorInput.value);
        
        let proximoStatus = (statusAtual + 1) % this.statusTarefa.length;

        
        this.valorInput.value = this.statusTarefa[proximoStatus];

        
        this.statusTarefa.forEach(status => {
            this.tarefa.classList.remove(status);
        });

        
        this.tarefa.classList.add(this.statusTarefa[proximoStatus]);
    }
}


document.querySelectorAll(".tarefa").forEach(tarefaInput => {
    new Tarefa(tarefaInput);
});
