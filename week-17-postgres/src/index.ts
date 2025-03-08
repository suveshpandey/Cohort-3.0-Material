import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());

//* there are two ways to connect the new client with the db

const pgClient = new Client("postgresql://neondb_owner:npg_2QrGEUD0vuRF@ep-aged-water-a8z5zlnj-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");

// const pgClient = new Client({
//     user: "neondb_owner",
//     password: "npg_MJO9BWtyoin8",
//     port: 5432,
//     host: "ep-wispy-bonus-a5xnwaxb-pooler.us-east-2.aws.neon.tech",
//     database: "neondb",
//     ssl: true
// })

pgClient.connect();

app.post("/signup", async (req, res) => {
    const {username, email, password, city, country} = req.body;
    try{
        //! bad way to send query intp db, sql injections can be send easily.
        // const response = await pgClient.query(`INSERT INTO users (username, email, password)
        //     VALUES ( '${username}', '${email}', '${password}' )
        // `);

        //* correct way:

        pgClient.query("BEGIN;"); //* transactions

        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`;
        const response = await pgClient.query(insertQuery, [username, email, password]);

        const addressQuery = `INSERT INTO addresses (user_id, city, country) VALUES ($1, $2, $3)`;
        const addResponse = await pgClient.query(addressQuery, [response.rows[0].id, city, country])

        pgClient.query("COMMIT;");

        res.status(201).json({message: "User signed-up successfully.",});
    }
    catch(error){
        res.status(500).json({message: "Error while signing-up", error});
    }
})
app.get("/get-metadata", async (req, res) => {
    const id =req.query.id;
    const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.country
    FROM users 
    JOIN addresses a ON users.id = addresses.user_id
    WHERE users.id = $1;`

    const response = await pgClient.query(query, [id]);

    res.json({message: response});
})

app.listen(3000, () => console.log("Server is running on port 3000..."));
