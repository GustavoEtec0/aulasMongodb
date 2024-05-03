// Define o nome do banco de dados
const database = 'libri-database'

// define o nome da collection
const collection = 'libri-collection'

// acessa o banco de dados libri-database
use(database);

//create colection
db.createCollection(collection);