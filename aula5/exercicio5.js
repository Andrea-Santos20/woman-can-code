function validaMaioridade(anoDeNascimento) {

     let idade = 2021 - anoDeNascimento
 
   if(idade >= 18) {
       return ("Você é maior de idade. Liberação autoriza!")
   }else if (idade === 18) {
        return ("Validar documento de identidade!")
   } else {
       return ("ATENÇÃO: Liberação não autorizada, você é menor de idade!")
   }          
}
     let resultado = validaMaioridade(1982)
     
     console.log(resultado)
     

     
    

