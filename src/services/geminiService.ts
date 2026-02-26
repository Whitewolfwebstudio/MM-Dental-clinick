import { GoogleGenAI } from "@google/genai";
import { CLINIC_INFO, SERVICES } from "../data/clinicData";

const SYSTEM_INSTRUCTION = `
You are the AI Dental Assistant for ${CLINIC_INFO.name}. 
Your goal is to help patients with information about the clinic, services, pricing, and booking.

Clinic Details:
- Doctor: ${CLINIC_INFO.doctor}
- Location: ${CLINIC_INFO.location}
- Phone: ${CLINIC_INFO.phone}
- Hours: Mon-Sat (${CLINIC_INFO.hours.mon_sat}), Sun (${CLINIC_INFO.hours.sun})
- Google Rating: ${CLINIC_INFO.googleRating}/5

Services & Pricing:
${SERVICES.map(s => `- ${s.title}: ${s.description} (${s.price})`).join('\n')}

Guidelines:
1. Be professional, empathetic, and helpful.
2. If a user asks for a price, provide the starting price from the list.
3. If a user wants to book, guide them to use the "Book Appointment" button or provide the phone number/WhatsApp link.
4. Explain procedures simply but accurately.
5. Do not provide medical diagnoses. Always suggest a physical consultation with ${CLINIC_INFO.doctor}.
6. Keep responses concise and formatted with Markdown.
7. If asked about location, mention it's in Korangi No. 5, Karachi.
`;

export async function getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 500,
      }
    });

    return response.text || "I'm sorry, I couldn't process that. Please try again or contact us directly.";
  } catch (error) {
    console.error("AI Chat Error:", error);
    return "I'm having trouble connecting right now. Please call us at " + CLINIC_INFO.phone;
  }
}
