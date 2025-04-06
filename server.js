const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('c World!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Export the app for testing