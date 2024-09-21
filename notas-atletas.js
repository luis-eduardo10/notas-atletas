class Atleta {
    constructor(atletas) {
      this.atletas = atletas;
    }
  
    obterAtleta() {
      let atleta = ` Atleta: ${this.atletas[0].nome} \n Notas Obtidas: ${this.atletas[0].notas} \n Média Válida: ${this.obterMedia(0)}\n`
      for(let i = 1; i < this.atletas.length; i++) {
        atleta = atleta + ` \n Atleta: ${this.atletas[i].nome} \n Notas Obtidas: ${this.atletas[i].notas} \n Média Válida: ${this.obterMedia(i)}\n`
      }
      
      return atleta;
    }
    
  
    obterMedia(a) { 
      let ordem = this.atletas[a].notas.sort(function(a, b) {
        return a - b;
      })
      
      let meio = ordem.slice(1, 4)
      
      let total = meio.reduce(function(acumulador, valorAtual) {
        return acumulador + valorAtual;
      }, 0)
  
      let media = total/3;
      return media;
    }
  }
  
  let atletas = [
   {
     nome: "Cesar Abascal",
     notas: [10, 9.34, 8.42, 10, 7.88]
   },
   {
     nome: "Fernando Puntel",
     notas:  [8, 10, 10, 7, 9.33]
   },
   {
     nome: "Daiane Jelinsky",
     notas: [7, 10, 9.5, 9.5, 8]
   },
   {
     nome: "Bruno Castro",
     notas: [10, 10, 10, 9, 9.5]
   }
  ];
  
  let atleta = new Atleta(atletas)
  console.log(atleta.obterAtleta());