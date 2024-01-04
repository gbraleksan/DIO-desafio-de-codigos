class Product(val name: String, val price: Double, val quantity: Int)

class CustomOrder private constructor(
  val customerName: String,
  val products: List<Product>,
  val total: Double,
  val deliveryAddress: String
) {
  class Builder {
    private var customerName: String = ""
    private var products: MutableList<Product> = mutableListOf()
    private var deliveryAddress: String = ""

    fun setCustomerName(name: String) = apply { customerName = name }
    fun addProduct(product: Product) = apply { products.add(product) }
    fun setDeliveryAddress(address: String) = apply { deliveryAddress = address }

    fun build(): CustomOrder {
        var total = 0.0
        this.products.forEachIndexed { index, product ->
      		val precoProduto = product.price
        	val quantidadeProduto = product.quantity
        	total = precoProduto * quantidadeProduto
    	}

      //TODO: Implemente a lógica para calcular o Total do Pedido (a partir dos dados de Produtos).
      //TODO: Instancie corretamente um CustomOrder, consolidando o Builder!
      return CustomOrder(customerName, products, total, deliveryAddress)
    }
  }
  
  fun printReceipt() {
    println("${this.customerName}")
    this.products.forEachIndexed { index, product ->
      println("${index + 1}. ${product.name} | ${product.price} | ${product.quantity}")
    }
    println("Total: ${this.total}")
    println("End: ${this.deliveryAddress}")
  }
}

fun main() {
  val customerName = readLine() ?: ""
    
  val orderBuilder = CustomOrder.Builder().setCustomerName(customerName)

  val numProducts = readLine()?.toIntOrNull() ?: 0
  for (i in 1..numProducts) {
    val productName = readLine() ?: ""
    val productPrice = readLine()?.toDoubleOrNull() ?: 0.0
    val productQuantity = readLine()?.toIntOrNull() ?: 0

    orderBuilder.addProduct(Product(productName, productPrice, productQuantity))
  }

  val deliveryAddress = readLine() ?: ""

  val customOrder = orderBuilder.setDeliveryAddress(deliveryAddress).build()

  customOrder.printReceipt()
}
