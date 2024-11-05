const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Ако планираш да добавиш база данни

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Свързване с MongoDB (по избор)
// mongoose.connect('your_mongo_connection_string', { ... });

app.post('/order', (req, res) => {
    const orderData = req.body;
    console.log('Получена поръчка:', orderData); // Тук ще видиш данните в конзолата

    // Тук можеш да добавиш код за съхраняване на поръчката в база данни

    res.json({ message: 'Поръчката е получена успешно!' });
});

app.listen(PORT, () => {
    console.log(`Сървърът работи на http://localhost:${PORT}`);
});
