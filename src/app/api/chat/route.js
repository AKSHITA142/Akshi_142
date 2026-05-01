import { portfolioData } from "@/lib/portfolioData";

export async function POST(req) {
  try {
    const { message, currentProject } = await req.json();

    if (!message || message.trim() === '') {
      return Response.json({ reply: "Hello! How can I help you today?" });
    }

    // Context management
    let finalMessage = message;
    if (message.toLowerCase().includes("this project") && currentProject) {
      finalMessage = `Explain this project: ${JSON.stringify(currentProject)}. User question: ${message}`;
    }

    // Mini-RAG: Filter data based on keywords
    let relevantData = { ...portfolioData };
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("frontend") || lowerMessage.includes("react") || lowerMessage.includes("next.js") || lowerMessage.includes("vue")) {
      relevantData.projects = portfolioData.projects.filter(p => 
        p.type === 'frontend' || p.tech.some(t => ['React', 'Next.js', 'Vue.js'].includes(t))
      );
    } else if (lowerMessage.includes("backend") || lowerMessage.includes("node") || lowerMessage.includes("python") || lowerMessage.includes("database")) {
      relevantData.projects = portfolioData.projects.filter(p => 
        p.tech.some(t => ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express'].includes(t))
      );
    } else if (lowerMessage.includes("mobile") || lowerMessage.includes("app")) {
      relevantData.projects = portfolioData.projects.filter(p => p.type === 'mobile');
    }

    // Improved Prompt
    const prompt = `
      You are a smart AI portfolio assistant named "AI Portfolio Assistant".
      Your job is to assist visitors navigating this developer portfolio.
      
      Rules:
      * Answer ONLY based on the provided Data below. Do not make up information.
      * If the user asks about projects, list the relevant ones.
      * If the user asks for the "best" or "most advanced" project, pick one marked 'advanced'.
      * If the user asks about skills, list them clearly.
      * Keep answers extremely concise and direct. MAXIMUM 2 sentences!
      * If the question is entirely unrelated to the portfolio, development, or tech, gently steer them back to the portfolio or say you can't help with that.
      
      Data:
      ${JSON.stringify(relevantData)}

      User Question:
      ${finalMessage}
    `;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Missing Gemini API Key");
      return Response.json({ reply: "Error: Gemini API key is missing from environment variables." }, { status: 500 });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.5,
            maxOutputTokens: 150,
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API Error:", errorText);
      return Response.json({ reply: `API Error: ${errorText}` }, { status: 500 });
    }

    const data = await response.json();
    const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!replyText) {
      return Response.json({ reply: "I couldn't process that. Would you like to see my projects or skills?" });
    }

    return Response.json({ reply: replyText });

  } catch (error) {
    console.error("Chat API Error:", error);
    return Response.json({ reply: "Sorry, an unexpected error occurred." }, { status: 500 });
  }
}
