
import { Pipe, PipeTransform } from '@angular/core'

// Recebe a string, trunca ela na x-ésima posição e concatena ela com "..."
@Pipe({
    name: 'reducedName'
})
export class ReducedName implements PipeTransform {
    
    // Recebe o dado que será tratado
    transform(text: string, truncate: number): string {
        // Verifica se a string possui mais do que a quantidade de caracteres na qual deve cortar a palavra
        if (text.length > truncate) {
            // Retorna a string truncada, concatenada com reticências
            // substr() recebe a primeira e a última posição da string
            return text.substr(0, truncate) + '...'
        }
        
      // else
      return text;
    }
}