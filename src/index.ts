import app from './app';

const PORT = 3000;
// inicio

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
