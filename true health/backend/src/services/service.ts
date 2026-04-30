import Gemini from "../config/geminiConfig.js";

class Service {
  public useGemini = async (mediImage: string) => {
    const geminiRes = await Gemini(mediImage);
    console.log(geminiRes, "it is from gemini res ");
  };
}

export default Service;
