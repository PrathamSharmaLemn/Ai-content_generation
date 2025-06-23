# 🧠 AI Content Generation Platform

A full-stack web platform that leverages **OpenAI's GPT-3** to generate intelligent, context-aware content in real time. Designed to demonstrate a seamless integration of frontend/backend systems with LLM-powered APIs.

• [📂 GitHub Repository](https://github.com/PrathamSharmaLemn/Ai-content_generation)

---

## 🚀 Features

- ✨ Real-time AI-generated responses via **OpenAI GPT-3 API**
- 🧩 Built with **React.js** (frontend) and **Node.js + Express** (backend)
- 🧠 Prompt-to-response pipeline with input sanitization
- ⚙️ RESTful APIs with error handling and modular architecture
- 📱 Fully responsive UI for desktop and mobile
- 📦 MongoDB for data persistence and future content versioning
- 💬 Clean UX for rapid experimentation and interaction with LLMs

---

## 🛠️ Tech Stack

| Layer      | Technologies |
|------------|--------------|
| Frontend   | React.js, JavaScript, CSS |
| Backend    | Node.js, Express |
| Database   | MongoDB (Mongoose ORM) |
| AI Engine  | OpenAI GPT-3 API |
| Tools      | Postman, Git, VS Code |

---

## ⚙️ Getting Started

```bash
# Clone the repository
git clone https://github.com/PrathamSharmaLemn/Ai-content_generation
cd Ai-content_generation

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

# Create .env file in /server with your OpenAI key
OPENAI_API_KEY=your_openai_api_key_here

# Run both frontend and backend
npm run dev  # or run frontend and backend separately
```

## 🧠 LLM Workflow

- The user inputs a prompt in the frontend UI  
- The backend sends the prompt to OpenAI’s GPT-3 API  
- The AI response is received and sent back to the client  
- Response is rendered in real time with proper formatting  

---

## 📌 Future Enhancements

- 🔍 Add RAG (Retrieval-Augmented Generation) via vector databases  
- 💾 Persist chat history with versioned prompts  
- 🧪 Add LangChain or OpenAI function-calling support  
- 🌐 Add Chrome Extension integration for cross-platform access  

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
