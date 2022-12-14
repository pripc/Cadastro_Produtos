class Produto{
    constructor(){
        this.id = 1;
        this.arrayProdutos=[]
    }
    Adicionar(){
        let produto = this.lerDados()
        if(this.validar(produto) == true){
            this.salvar(produto)
        }
        this.listar()
        this.cancelar() //apaga as informacoes dos campos logo após incluí-las
        
    }
    lerDados(){
        let produto= {}
        produto.id = this.id
        produto.nomeProduto = window.document.getElementById("produto").value
        produto.precoProduto = window.document.getElementById("valor").value
        return produto

    }
    validar(produto){
        let msg = ''
        if(produto.nomeProduto == ''){
            msg += 'Por favor, insira corretamente o nome do produto \n'
        }
        if(produto.precoProduto == ''){
            msg += 'Por favor, insira corretamente o preço do produto \n'
        }
        if(msg != ''){  //se a mensagem estiver 'ocupada' com caracteres, a função validar(produto) na linha 8 não irá rodar//
            alert(msg)
            return false
        }
        return true
    }
    salvar(produto){
        this.arrayProdutos.push(produto)
        this.id ++
    }
    listar(){
        let tbody = window.document.getElementById('tbody')
        tbody.innerText = ''

        for (let i=0; i< this.arrayProdutos.length; i++){ // vai percorrer todo o array
            let tr = tbody.insertRow()  //insere uma linha no tbody referente ao novo produto a ser cadastrado
            let td_id = tr.insertCell()
            let td_nome = tr.insertCell()
            let td_preco = tr.insertCell()
            let td_deletar = tr.insertCell()
            td_id.innerText = this.arrayProdutos[i].id
            td_nome.innerText = this.arrayProdutos[i].nomeProduto
            td_preco.innerText = this.arrayProdutos[i].precoProduto
            let imagem = document.createElement('img') //declara que uma imagem será criada e estamos definindo uma Tag direto pelo JS
            imagem.src = 'lixo.png' 
            imagem.setAttribute('onclick','produto.deletar('+this.arrayProdutos[i].id+')')
            td_deletar.appendChild(imagem)
        }
    }
    cancelar(){
        window.document.getElementById('produto').value = ''
        window.document.getElementById('valor').value = ''
        
    }
    deletar(id){
        let tbody = document.getElementById('tbody')
        for (let i=0; i < this.arrayProdutos.length; i++){
            if (this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i,1)
                tbody.deleteRow(i)   
            }    
        }
        alert('O item foi apagado com sucesso') 
    }

}
var produto = new Produto(); //esse trecho precisa existir para inicializar uma variável que irá receber valores na classe Produto

