const database = 'libri-database'
 
use(database);
 
db['libri-collection'].deleteOne(
    {
        codigo: '5'
    }
)
 
db['libri-collection'].find(
    {
        'codigo': '5'
    }
)
 
 
db['libri-collection'].find(
    {
        'categoria': 'Fantasia Heroica'
    }
)
 
db['libri-collection'].deleteMany(
    {
        categoria: {$ne: "Fantasia Heroica"}
    }
)
 
 
db['libri-collection'].find()