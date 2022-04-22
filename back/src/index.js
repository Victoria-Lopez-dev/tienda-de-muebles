
const { PORT } = require('./config/global');
const app = require('./server');




app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

