# Understanding RAG: Embedding and Vector Distance

The script `simple-rag-demo` is an excellent illustration of how a RAG (Retrieval-Augmented Generation) system works. This page explains the fundamental concepts that make it work: **embedding** and **similarity search**.

## The Problem: LLMs Don't Have Long-Term Memory

A large language model (LLM) like Mistral or Granite is very powerful, but it only knows the data it was trained on. It doesn't know your internal documents, the latest news articles, or the specifics of your business.

**RAG** is a technique that allows a LLM to have an "external memory" by providing it with the most relevant document excerpts at the time of the question to help it formulate its response.

The process occurs in two steps:
1.  **Retrieval (Retrieval)** : Find the right documents.
2.  **Augmented Generation (Augmented Generation)** : Use these documents to generate a response.

It is the "Retrieval" step that interests us here. How can a computer "understand" that a question is semantically close to a paragraph? The answer is: with vectors.

![Conceptual diagram of RAG](./images/rag_concept_overview.png)

## Step 1: Embedding - Transform Words into Numbers

A computer does not understand words, but it is excellent at manipulating numbers. **Embedding** is the process that translates text (a word, a sentence, a document) into a list of numbers, called a **vector**.

`"The cat is on the mat."`  →  `[-0.01, 0.98, 0.45, ..., -0.33]`

![Example of an embedding vector](./images/embedding_vector_example.png)

This vector is not random. It represents the "position" of the text in a multidimensional semantic space. Texts with similar meanings will have vectors that point in similar directions.

**Analogy**: Imagine a geographical map. "Paris" and "France" would be very close, just like "Rome" and "Italy". "Paris" would be closer to "Rome" than to "France", but closer to "France" than to "Tokyo". Embedding does the same thing, but with thousands of "dimensions" instead of two, to capture complex semantic nuances.

In our script, the endpoint `/v1/embeddings` and the model `granite-embedding:278m` are responsible for this translation.

## Step 2: The Search - Measuring Semantic Proximity

Once our question and all our documents are transformed into vectors, the search becomes a mathematical problem: **find the document vector that is the "closest" to the question vector.**

There are several ways to measure this "proximity". Our script uses two of them: Cosine Similarity and Euclidean Distance.

### Cosine Similarity (The Standard)

-   **Concept** : It does not measure distance, but the **angle** between two vectors. A small angle (close to 0°) means the vectors point in the same direction, and therefore the texts have a very similar meaning.
-   **Score** : The cosine of a 0° angle is 1 (perfect similarity). The cosine of a 90° angle is 0 (no similarity).
-   **Why is it so widely used?** For text, the semantic **direction** is much more important than the **magnitude** (length) of the vector. Cosine similarity ignores magnitude and focuses solely on direction.

**Simple example in 2D:**
-   Question : `v_q = [2, 2]`
-   Document A : `v_a = [4, 4]` (same direction, longer)
-   Document B : `v_b = [-2, 2]` (different direction)

The cosine similarity calculation will give:
-   `cos(v_q, v_a) = 1.0` → 0° angle. Perfect similarity.
-   `cos(v_q, v_b) = 0.0` → 90° angle. No similarity.

![Cosine Similarity Illustration](./images/cosine_similarity_concept.png)

This is the result we want: Document A is semantically identical to the question, even if the wording is longer.

### Euclidean Distance (The Rule)

-   **Concept** : It is the "as the crow flies" distance between the endpoint points of the two vectors.
-   **Score** : A score of 0 means the vectors are identical. The higher the score, the farther apart they are.
-   **Drawback for text** : It is sensitive to magnitude. In our example above, the distance between `v_q` and `v_a` would not be zero, as the vectors do not have the same length, even if they have the same direction.

![Illustration of the Euclidean Distance](./images/euclidean_distance_concept.png)

## Conclusion

The table displayed by the script `simple-rag-demo` allows you to visualize these two metrics. You will notice that although rankings may sometimes differ slightly, the **cosine similarity is generally the preferred metric** for text-based semantic search applications.

The biggest challenge, as shown in the example, remains the **quality of the embedding model**. A good model will produce vectors that faithfully capture meaning, making the calculation of proximity, regardless of the method, much more reliable.