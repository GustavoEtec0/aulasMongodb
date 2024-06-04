const database = 'libri-database'
 
use(database);

db['libri-collection'].updateOne(
    {categoria: 'Ficção Científica'},
    {
        $set:{valor:250}
    }
)

db['libri-collection'].updateMany(
    {categoria: 'Ficção Científica'},
    {
        $set:{valor:250}
    }
)