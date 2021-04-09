import * as express from "express"
import { createConnection } from 'typeorm';
import v1 from "../routes/app/v1"

const app = express();
const port = 3000;


app.use(express.json())
app.use('/v1', v1)


app.use((req, res) => {
    return res.send("404, page not found")
})


app.listen(port, () => {
    console.log(`Your server is running on http://localhost:${port}`)
})


