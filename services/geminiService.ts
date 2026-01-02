
import { GoogleGenAI, Modality } from "@google/genai";
import { POSTER_DATA } from "../constants";

// The API key is handled automatically by the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the expert AI Academy Assistant for Techline Studio, Ambikapur. 
Your tone is professional, encouraging, and tech-savvy.

About the Program:
- Name: AI & Cybersecurity Excellence (1-Month Intensive)
- Starts: ${POSTER_DATA.startDate}
- Location: ${POSTER_DATA.location} (Beside Shubh Honda, MG Road)
- Contact: ${POSTER_DATA.contact}
- Fee/Enrollment: Ask them to fill the contact form or WhatsApp us.

Guidelines:
1. Use Google Search for general tech questions (e.g., "What is a firewall?").
2. Focus on getting students (Class 6-College) to visit the center.
3. Be helpful in both Hindi and English.
4. Keep answers short and exciting!
`;

export const getGeminiResponse = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ googleSearch: {} }],
      },
    });

    return {
      text: response.text || "I'm here to help! Could you rephrase that?",
      grounding: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    console.error("Gemini Error:", error);
    return { text: "I'm having a quick system update. Please try again in a moment!", grounding: [] };
  }
};

export const getGeminiTTS = async (text: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Say this professionally: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' }, 
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    return base64Audio || null;
  } catch (error) {
    return null;
  }
};

export const playAudio = async (base64Audio: string) => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
  
  const decode = (base64: string) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  };

  const decodeAudioData = async (data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number) => {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  };

  const bytes = decode(base64Audio);
  const audioBuffer = await decodeAudioData(bytes, audioContext, 24000, 1);
  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(audioContext.destination);
  source.start();
};
