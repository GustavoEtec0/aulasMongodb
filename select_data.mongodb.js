// Define o nome do banco de dados
const database = "libri-database";

// acessa o banco de dados libri-database
use(database);

// db["libri-collection"].find();

// db["libri-collection"].find(
//   { categoria: "ficção" },
//   { _id: false, codigo: false }
// );

// db["libri-collection"].find({}, { _id: false, codigo: false });

db["libri-collection"].find(
  { titulo: /robôs/i },
  { _id: false, codigo: false }
);
