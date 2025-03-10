require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

// ✅ Cấu hình CORS để cho phép tất cả các nguồn gốc (bạn có thể giới hạn lại nếu muốn)
app.use(cors({
    origin: '*', // Hoặc đặt danh sách các domain cụ thể thay vì '*'
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// ✅ Cho phép Express xử lý JSON
app.use(express.json());

// ✅ Kết nối với MongoDB
connectDB();

// ✅ Định nghĩa routes
app.use('/api/recipes', recipeRoutes);

// ✅ Xử lý route không tồn tại
app.use((req, res) => {
    res.status(404).json({ message: "Route Not Found" });
});

// ✅ Lắng nghe server trên cổng 5000 hoặc cổng được đặt trong biến môi trường
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
