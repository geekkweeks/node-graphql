import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { products, categories, transactions } from "./_db.js";

// SDL (Schema Definition Language)
// Define the schema using the SDL
const typeDefs = `#graphql
    type Category{
        id: ID
        name: String
        description: String
    }
    
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        categoryId: Int
    }

    type Transaction{
        id: ID
        quantity: Int
        total: Float
        dateAt: String
        Product(id: ID): Product
    }

    type Query {
        products: [Product],
        product(id: ID): Product,
        categories: [Category],
        transactions: [Transaction],
        transaction(id: ID): Transaction,

    }
`;

const resolvers = {
    Query: {
        products: () => { return products },
        product: (_, args) => {
            console.log("🚀 ~ args:", args)
            return products.find(product => product.id === args.id)
        },
        categories: () => { return categories },
        transactions: () => { return transactions },
        transaction: (_, args) => {
            return transactions.find(transaction => transaction.id === args.id)
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`Server ready at ${url}`);