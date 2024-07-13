import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

const app = express();

const PORT = 3000;

// app.use((req, res, next) => {
//   next();
// });
app.use(cors());
app.use(pino({
    transport: {
      target: 'pino-pretty',
    },
  }));
app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});
app.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Something went wrong',
    error: err.message,
  });
});

app.use('*', (req, res, next) => {
  res.status(404).json({ message: 'NOT FOUND' });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
