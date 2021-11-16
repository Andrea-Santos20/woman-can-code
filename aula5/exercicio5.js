function validaMaioridade(anoDeNascimento) {

     let idade = 2021 - anoDeNascimento
 
   if(idade >= 18) {
       console.log ("Você é maior de idade. Liberação autorizada!")
   }else if (idade === 18) {
        console.log ("Validar documento de identidade!")
   } else {
       console.log ("ATENÇÃO: Liberação não autorizada, você é menor de idade!")
   }          
}
     let resultado = validaMaioridade(1982)
     return resultado
     

     
    

