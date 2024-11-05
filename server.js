const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Ако използваш MongoDB

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());  // Позволява ни да приемаме JSON данни

// Свързване с MongoDB (по избор)
// mongoose.connect('your_mongo_connection_string', { useNewUrlParser: true, useUnifiedTopology: true });

// За MongoDB, ще създадем модел за поръчка
const orderSchema = new mongoose.Schema({
    name: String,
    surname: String,
    phone: String,
    email: String,
    address: String,
    city: String,
    postal: String,
    cart: Array
});
const Order = mongoose.model('Order', orderSchema);

// Маршрут за обработка на POST заявката
app.post('/order', (req, res) => {
    const { formData, cart } = req.body;  // Вземаме данните от заявката

    // Можем да съхраним поръчката в MongoDB (ако използваме база данни)
    const newOrder = new Order({
        ...formData,
        cart
    });

    // Съхраняваме поръчката в базата данни
    newOrder.save((err) => {
        if (err) {
            return res.status(500).json({ message: 'Грешка при съхраняването на поръчката' });
        }
        res.json({ message: 'Поръчката е успешно съхранена!' });
    });
});

// Стартиране на сървъра
app.listen(PORT, () => {
    console.log(`Сървърът работи на http://localhost:${PORT}`);
});
