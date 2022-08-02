const app = require("./server");
const http = require("http").createServer(app);

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
