import connectDB from './db/db.js';
import app from './app.js';
import { home } from './routes/index.js';
import { contact } from './routes/contact.js';
import cors from 'cors';



const port = process.env.PORT || 3000;
app.use(cors());
connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

    home();
    contact();
})
.catch((error) => {
    console.log(error.message);
    // process.exit(1);
})


