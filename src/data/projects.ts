export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  gradient: string;
};

// Add liveUrl/repoUrl once you have live demos or public repos for these.
export const projects: Project[] = [
  {
    title: "AI Chatbot — Customer Service",
    description:
      "A RAG-based customer service chatbot for a fashion B2B business, answering questions on products, pricing, and ordering policies straight from a knowledge base.",
    tags: ["LangChain", "RAG", "ChromaDB", "OpenAI", "Streamlit"],
    repoUrl: "https://github.com/triasbudir/lemone-ai-chatbot",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "AI Workflow Automation — B2B Orders",
    description:
      "An AI agent that automatically parses reseller order messages, validates stock, computes price and discounts, and generates order confirmations.",
    tags: ["Groq LLM", "NLP Parsing", "CSV"],
    gradient: "from-sky-500 to-cyan-400",
  },
  {
    title: "AI Product Recommender",
    description:
      "A product recommendation system combining content-based and collaborative filtering with cosine similarity.",
    tags: ["Scikit-learn", "Collaborative Filtering"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Fashion Image Classifier",
    description:
      "Automatically classifies clothing photos into product categories using CLIP zero-shot classification, plus an AI analyst layer for generated insights — no labeled training data required.",
    tags: ["CLIP", "HuggingFace", "Groq", "Pillow"],
    repoUrl: "https://github.com/triasbudir/lemone-image-classifier",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "AI Analytics Dashboard",
    description:
      "An interactive sales dashboard with natural-language query — ask questions in plain language and get AI-generated insights.",
    tags: ["Plotly", "Pandas", "Groq NLQ"],
    gradient: "from-rose-500 to-pink-500",
  },
];
