const products = [
    { id: "1", name: "Product A", description: "Description A", price: 19.99, categoryId: "1" },
    { id: "2", name: "Product B", description: "Description B", price: 29.99, categoryId: "2" },
    { id: "3", name: "Product C", description: "Description C", price: 39.99, categoryId: "3" },
    { id: "4", name: "Product D", description: "Description D", price: 49.99, categoryId: "4" },
    { id: "5", name: "Product E", description: "Description E", price: 59.99, categoryId: "5" },
    { id: "6", name: "Product C", description: "Description C", price: 39.99, categoryId: "3" },
    { id: "7", name: "Product D", description: "Description D", price: 49.99, categoryId: "4" },
    { id: "8", name: "Product E", description: "Description E", price: 59.99, categoryId: "5" }
]

const categories = [
    { id: "1", name: "Category A", description: "Description A" },
    { id: "2", name: "Category B", description: "Description B" },
    { id: "3", name: "Category C", description: "Description C" },
    { id: "4", name: "Category D", description: "Description D" },
    { id: "5", name: "Category E", description: "Description E" }
]

const transactions = [
    { id: "1", productId: "1", quantity: 1, total: 19.99, dateAt: "2021-10-01 22:00:02" },
    { id: "3", productId: "2", quantity: 1, total: 19.99, dateAt: "2021-10-01 22:00:02" }
]

export { products, categories, transactions }