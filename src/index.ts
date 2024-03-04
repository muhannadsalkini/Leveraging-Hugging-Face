import HuggingFace from "huggingface";

import { HfInference } from "@huggingface/inference";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  const inference = new HfInference(process.env.TOKEN);

  const hf = new HuggingFace(process.env.TOKEN);

  const model = "nlpconnect/vit-gpt2-image-captioning";
  const imageUrl =
    "https://images.pexels.com/photos/673020/pexels-photo-673020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  // Fetch the image as a Blob
  const response = await fetch(imageUrl);
  const imageBlob = await response.blob();

  // use the model
  const result = await inference.imageToText({
    data: imageBlob,
    model: model,
  });

  console.log(result);

  // Natural Language
  const questionAnswer = await hf.questionAnswer({
    model: "deepset/roberta-base-squad2",
    inputs: {
      question: "What is the capital of France?",
      context: "The capital of France is Paris.",
    },
  });

  console.log("questionAnswer: ", questionAnswer);

  const textGeneration = await hf.textGeneration({
    model: "gpt2",
    inputs: "The answer to the universe is",
  });

  console.log("textGeneration: ", textGeneration);

  /* and more on the website.. */
}

main().catch(console.error);
