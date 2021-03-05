const {Pool} = require("pg");
async function criarConexao() {
    const pool = new Pool({
        connectionString: 'postgres://vlxskbfhoqufnr:c73245aea6f198b4922208e9262190876701a146f77d647e181357eab7c5d0b9@ec2-54-237-143-127.compute-1.amazonaws.com:5432/d12ubuuhn78lcv',
         ssl: {
            rejectUnauthorized: false
         }
        }),
        let con = await pool.connect();
         let res = await con.query(`
            create table aluno(
                id serial primary key, 
                nome varchar
            )`
        );
   console.log(res);
   con.release ();
}

criarconexão();
