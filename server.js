const express = require('express');


const app = express();
const port = 3000; // You can change the port if needed

// Middleware to parse JSON bodies
app.use(express.json());
function isNumber(str) {
    return /^\d+$/.test(str);
}
app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;
        const userId = "aayush_mittal_03062003";
        const email = "aayush0030.be21@chitkara.edu.in";
        const rollNumber = "2110990030";

        const evenNumbers = data.filter(num => isNumber(num) && parseInt(num) % 2 === 0).map(String);
        const oddNumbers = data.filter(num => isNumber(num) && parseInt(num) % 2 !== 0).map(String);
        const alphabets = data.filter(char => !isNumber(char)).map(char => char.toUpperCase());

        const response = {
            is_success: true,
            user_id: userId,
            email: email,
            roll_number: rollNumber,
            even_numbers: evenNumbers,
            odd_numbers: oddNumbers,
            alphabets: alphabets
        };

        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
});

