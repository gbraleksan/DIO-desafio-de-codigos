fun main() {
    val titulo = readLine() ?: ""
    val autor = readLine() ?: ""
    
    // Aqui usamos a Extension Function "generateSlug()" nas Strings de Entrada.
    val slugTitulo = titulo.generateSlug()
    val slugAutor = autor.generateSlug()
    
    println("Slug gerado para o livro:")
    println(slugTitulo + "_" + slugAutor)
    //TODO: Formatar/Imprimir as slugs considerando o padrão de saída deste desafio.
}

fun String.generateSlug(): String {

    return this.lowercase()
    .replace(" ", "-")
    .replace(".", "")
    
}
