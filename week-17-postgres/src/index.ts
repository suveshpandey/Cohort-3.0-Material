import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());

//* there are two ways to connect the new client with the db

// const pgClient = new Client("postgresql://neondb_owner:npg_MJO9BWtyoin8@ep-wispy-bonus-a5xnwaxb-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require");

const pgClient = new Client({
    user: "neondb_owner",
    password: "npg_MJO9BWtyoin8",
    port: 5432,
    host: "ep-wispy-bonus-a5xnwaxb-pooler.us-east-2.aws.neon.tech",
    database: "neondb",
    ssl: true
})
pgClient.connect();

app.post("/signup", async (req, res) => {
    const {username, email, password} = req.body;
    try{
        //! bad way to send query intp db, sql injections can be send easily.
        // const response = await pgClient.query(`INSERT INTO users (username, email, password)
        //     VALUES ( '${username}', '${email}', '${password}' )
        // `);

        //* correct way:
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;
        const response = await pgClient.query(insertQuery, [username, email, password]);

        res.status(201).json({message: "User signed-up successfully.",});
    }
    catch(error){
        res.status(500).json({message: "Error while signing-up",});
    }
})

app.listen(3000, () => console.log("Server is running on port 3000..."));
