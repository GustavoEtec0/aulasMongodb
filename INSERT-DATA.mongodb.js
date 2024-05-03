// Define o nome do banco de dados
const database = 'libri-database'

// define o nome da collection
const collection = 'libri-collection'

// acessa o banco de dados libri-database
use(database);

// insere um documento de dados na colection
db['libri-collection'].insertOne(
    {
        "codigo":"1",
        "titulo": "As Cavernas de Aço",
        "autor": "Isaac Asimov",
        "descricao": "As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais.",
        "imagem":"/livros/cavernas_aco.jpg"
    },
);
