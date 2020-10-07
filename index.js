
// const helmet = require("helmet"); // provides security defaults

// const db = require("./database/connection.js");

// server.use(helmet());
// server.use(express.json());


// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`API running on port ${PORT}`));

const server = require('./server.js')

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`API running on port ${PORT}`));
