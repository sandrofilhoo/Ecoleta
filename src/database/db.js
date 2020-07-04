const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//db.serialize(() => {
    //criar tabela
 //  db.run(`
 //      CREATE TABLE IF NOT EXITS places (
 //          id INTEGER PRIMARY KEY AUTOINCREMENT,
 //          image TEXT,
 //          name TEXT,
 //          address TEXT,
 //          address2 TEXT,
 //          states TEXT,
 ///          city TEXT,
//           items TEXT
 //      );
 //  `)
 //  // inserir dados na tabela 
 //  const query =`
  // INSERT INTO places (
   //    image,
//       name,
//       address,
//       address2,
//       state,
//       city,
//       items
//   ) VALUES (?,?,?,?,?,?,?)
//`

//   const values = [
//       "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//       "Colectoria",
//       "Guilherme Gamballa, Jardim America",
//       "N° 260",
//       "Santa Catarina",
//       "Rio do Sul",
//       "Residuos Eletronicos, Lampadas"
 //  ]
 //  function afterInsertData(err){
 //       if(err){
 //           return console.log(err)
 //       }

       // console.log("Cadastrado com sucesso")
     //   console.log(this)

   //}
 //  db.run(query, values, afterInsertData) 
 //  db.all(`SELECT * FROM places`, function(err, rows){
 //   if(err){
 //       return console.log(err)
 //   }
 //   console.log("Cadastrado com sucesso")
 //   console.log(rows)
 //  })

//   db.run(`DELETE FROM places WHERE ID = ?`, [1], function(err){
 //   if(err){
 //       return console.log(err)
 //   }
 //   console.log("Deletado com sucesso")
 //  })
//})
