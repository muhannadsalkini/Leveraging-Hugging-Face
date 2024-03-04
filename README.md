# Hugging Face with TypeScript

## Introduction

This repository explores the powerful combination of the Huggingface.js library and TypeScript for natural language processing tasks. By leveraging TypeScript's type safety and code readability features, developers can enhance their workflow when working with Transformers. We'll walk through setting up a TypeScript project and basic usage of Transformers.

Hugging Face is a company known for its open-source community and the Transformers library, which provides pre-trained models for natural language processing tasks. They offer state-of-the-art models like BERT and GPT, making advanced NLP accessible to developers and researchers. Hugging Face's platform also facilitates sharing and collaboration in the NLP community.

Transformers.js is a JavaScript library that allows you to run machine learning models, specifically those from the Transformers family, directly in web applications without needing a server.

## Getting Started

1. To get started, create an account on Hugging Face; no credit card is required. Once logged in, navigate to settings and generate an API key. Then, add this key to your `.env` file. Now, let's proceed with the steps.

    [Generate API Key](https://huggingface.co/settings/tokens)

2. Setting Up the Project:

    Firstly, import the necessary libraries including the Hugging Face inference library. Initialize your `.env` file and access the API key.

    ```typescript
    import { HfInference } from "@huggingface/inference";
    import * as dotenv from "dotenv";

    dotenv.config();
    ```

    Next, initialize the Hugging Face inference class.

    ```typescript
    const inference = new HfInference(process.env.TOKEN);
    ```

    To use a custom or specific model from their hub, navigate to the models section where you'll find various models categorized by tasks. Choose a model that suits your needs:

    [Hugging Face Models](https://huggingface.co/models)

    For instance, I'll use an image-to-text model. Copy the model URL and paste it into your code.

    ```typescript
    const model = "nlpconnect/vit-gpt2-image-captioning";
    ```

    In the example, I'll use an image of a mountain.

    ```typescript
    const imageUrl = "https://images.pexels.com/photos/673020/pexels-photo-673020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    // Fetch the image as a Blob
    const response = await fetch(imageUrl);
    const imageBlob = await response.blob();
    ```

    Then I'll use the `imageToText` function to get the image caption.

    ```typescript
    // use the model
    const result = await inference.imageToText({
      data: imageBlob,
      model: model,
    });

    // log the result
    console.log(result)
    ```

    You should see an output similar to this:

    ```json
    { generated_text: 'a mountain range with a sky background' }
    ```

3. Basic Usage of Built-in Libraries:

    Now, to leverage the wrapper, explore the inference page on Hugging Face JS, which offers built-in libraries and examples. This is a great resource for understanding different model types and their parameters.

    Initialize:

    ```typescript
    import { HfInference } from '@huggingface/inference'

    const hf = new HfInference('your access token')
    ```

    With just a few lines of code, you can harness powerful models. Experiment with various models available, including those for NLP, image processing, voice recognition, and more.

    Basic examples:

    ```typescript
    // Natural Language

    await hf.questionAnswer({
      model: 'deepset/roberta-base-squad2',
      inputs: {
        question: 'What is the capital of France?',
        context: 'The capital of France is Paris.'
      }
    })
    /*
    Expected output:
    { score: 0.9703434109687805, start: 25, end: 30, answer: 'Paris' }
    */

    await hf.textGeneration({
      model: 'gpt2',
      inputs: 'The answer to the universe is'
    })
    /*
    Expected output:
    {
      generated_text: "The answer to the universe is really no-one at all.
      It's just an internal one. A single one at that. That's part of the 
      mystery behind the rise of gravitational waves. And part of the mystery 
      behind the discovery of"
    }
    */

    // Audio

    await hf.automaticSpeechRecognition({
      model: 'facebook/wav2vec2-large-960h-lv60-self',
      data: readFileSync('test/sample1.flac')
    })

    // Computer Vision

    await hf.imageClassification({
      data: readFileSync('test/cheetah.png'),
      model: 'google/vit-base-patch16-224'
    })

    /* and more on the website.. */
    ```

## Conclusion

In conclusion, Hugging Face provides a versatile platform for exploring AI models. Whether you're working on text summarization, translation, or even text-to-speech applications, Hugging Face offers a range of models to experiment with. Feel free to explore further and share your experience. If you have any questions, reach out to me or drop them in the comments.

## Additional Resources

Certainly! Here are some additional resources related to Hugging Face and JavaScript-based AI development:

- [Hugging Face Documentation](https://huggingface.co/docs): Explore the official documentation provided by Hugging Face. It covers various aspects such as getting started, using models, datasets, and more.
- [Hugging Face Community Forum](https://discuss.huggingface.co/): Join the community forum to connect with other users, ask questions, share your experiences, and stay updated with the latest developments in the Hugging Face ecosystem.
- [Hugging Face GitHub Repository](https://github.com/huggingface): Dive into the source code of Hugging Face projects on GitHub. You can contribute to the development, report issues, or explore the codebase to deepen your understanding.
- [Huggingface.js: Step-by-Step Guide to Getting Started](https://huggingface.co/docs/huggingfacejs/installation): Official guide to getting started with Huggingface.js.

Thank you for reading! Your time and interest are appreciated. Have any feedback or questions? Feel free to share in the comments. Stay connected for future updates and discussions. Happy coding!
