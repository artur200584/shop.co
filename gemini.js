// Підключаємо бібліотеки
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config(); // Завантажує змінні з .env у process.env

// Ініціалізуємо клієнт Gemini за допомогою ключа з .env
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function askGemini() {
  // Отримуємо текст запиту, який ви напишете в терміналі
  const prompt = process.argv.slice(2).join(" ");

  if (!prompt) {
    console.log("Будь ласка, вкажіть запит після назви файлу.");
    console.log("Приклад: node gemini.js 'Чому небо синє?'");
    return;
  }

  try {
    // Використовуємо модель gemini-1.5-flash (швидка та підходить для більшості завдань)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    console.log("Запит надсилається...");
    const result = await model.generateContent(prompt);

    console.log("\n--- Відповідь Gemini ---");
    console.log(result.response.text());
  } catch (error) {
    console.error("Виникла помилка під час запиту:", error.message);
  }
}

askGemini();
