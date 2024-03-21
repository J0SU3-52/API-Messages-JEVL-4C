const cors = require('cors');

const corsMiddleware = cors ({
    origin: 'http://localhost:9000',
    optionsSuccessStatus: 200,
});

export default corsMiddleware;