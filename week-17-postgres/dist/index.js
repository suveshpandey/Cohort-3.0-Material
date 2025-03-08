"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//* there are two ways to connect the new client with the db
const pgClient = new pg_1.Client("postgresql://neondb_owner:npg_2QrGEUD0vuRF@ep-aged-water-a8z5zlnj-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");
// const pgClient = new Client({
//     user: "neondb_owner",
//     password: "npg_MJO9BWtyoin8",
//     port: 5432,
//     host: "ep-wispy-bonus-a5xnwaxb-pooler.us-east-2.aws.neon.tech",
//     database: "neondb",
//     ssl: true
// })
pgClient.connect();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, city, country } = req.body;
    try {
        //! bad way to send query intp db, sql injections can be send easily.
        // const response = await pgClient.query(`INSERT INTO users (username, email, password)
        //     VALUES ( '${username}', '${email}', '${password}' )
        // `);
        //* correct way:
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`;
        const response = yield pgClient.query(insertQuery, [username, email, password]);
        const addressQuery = `INSERT INTO addresses (user_id, city, country) VALUES ($1, $2, $3)`;
        const addResponse = yield pgClient.query(addressQuery, [response.rows[0].id, city, country]);
        res.status(201).json({ message: "User signed-up successfully.", });
    }
    catch (error) {
        res.status(500).json({ message: "Error while signing-up", error });
    }
}));
app.listen(3000, () => console.log("Server is running on port 3000..."));
