// Define o nome do banco de dados
const database = "libri-database";

// acessa o banco de dados libri-database
use(database);

// maior que
db["libri-collection"].find({ valor: { $gt: 100 } });

// menor que
db["libri-collection"].find({ valor: { $lt: 100 } });

// maior ou igual que
db["libri-collection"].find({ valor: { $gte: 100 } });

// menor ou igual que
db["libri-collection"].find({ valor: { $lte: 100 } });

// maior ou igual que e menor ou igual que
db["libri-collection"].find({ valor: { $gte: 100, $lte: 150 } });

// maior ou igual que e menor ou igual que, e ordena do menor para o maior
db["libri-collection"]
  .find({ valor: { $gte: 100, $lte: 150 } }, { _id: false, codigo: false })
  .sort({ valor: 1 });

// maior ou igual que e menor ou igual que, e ordena do maior para o menor
db["libri-collection"]
  .find({ valor: { $gte: 100, $lte: 150 } })
  .sort({ valor: -1 });
