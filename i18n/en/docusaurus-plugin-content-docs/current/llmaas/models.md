---
title: AI Models Catalog
sidebar_position: 2
---

# LLM as a Service Models Catalog

## View the updated catalog

The **[models catalog and lifecycle](https://llmaas.status.cloud-temple.app/lifecycle)** is the reference for production models, deprecations, end-of-support dates, LTS statuses, and recommended migrations. Use its filters and search to prepare a new project or track the models used in your applications. For lifecycle dates and migrations, the information published on this page takes precedence over any older examples or copies of the catalog.

This page explains how to choose and use a model. Inventories, dates, and performance metrics can be consulted directly in the following sources:

| Need | Source to consult |
|--------|--------------------|
| Choose a model, check its context and lifecycle | [Catalog and lifecycle](https://llmaas.status.cloud-temple.app/lifecycle) |
| Obtain identifiers exposed by the API | `GET /v1/models` ([documentation](./api.md)) |
| Check availability and observed performance | [Service status](https://llmaas.status.cloud-temple.app/) |
| View service updates and migration announcements | [LLMaaS Changelog](https://llmaas.status.cloud-temple.app/changelog) |
| Examine past metrics | [Supervision history](https://llmaas.status.cloud-temple.app/history) |

## Choose based on your use case

The service covers the following use cases. Verify the capabilities of the selected model before integration: not all models support the same inputs or features.

### Chat and reasoning

For assistants, summarization, or analysis, compare the quality of responses on your own documents, response time, and required context size. For an application intended to last, examine the **LTS** status and the published end-of-support date.

### Programming and agents

To generate code or build an agent, verify support for tool calling and test complete execution sequences. The [quickstart guide](./quickstart.md) presents an example of a function call.

### Vision and multimodal

Choose a model that accepts images for visual analysis and text extraction. Verify the formats accepted by the API and context capacity; text support does not imply image support. Consult examples of [multimodal requests](./api.md).

### Embedding and semantic search

Embeddings transform text into vectors used by search. Compare language coverage, accepted text length, and relevance on your corpus. Changing models may require recalculating vectors and rebuilding the index: do not mix embeddings from different models. Consult the [RAG guide](./rag_explained.md).

## Reranking Models

Reranking reorders retrieved documents based on their relevance to a question. It complements vector search before answer generation. The `/v1/rerank` and `/v2/rerank` endpoints are presented in the [Reranking guide](./rerank.md).

### Security and guardrails

Security models allow evaluating content within an application workflow. Define filtering criteria, thresholds, and handling of ambiguous cases with your business teams; validate them on your data.

### Translation

For a multilingual application, test the relevant languages, your terminology, and formatting preservation. Quality must be evaluated on the documents actually processed.

### Audio and image

The catalog includes audio transcription and image generation use cases. Verify the model and required protocol for each use case, particularly the distinction between file transcription and real-time transcription.

## Retrieve identifiers via the API

```bash
curl "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

Use the exact identifier returned by the API in the `model` parameter. The presence of an identifier does not guarantee that it still refers to the original model: an old name may be redirected to a successor. Also check its [lifecycle](https://llmaas.status.cloud-temple.app/lifecycle).

## Prepare for production

1. Select a model suitable for your use case and verify its license.
2. Check its status, end-of-support date, and recommended migration.
3. Test quality, latency, cost, and required capabilities on your real-world cases.
4. Keep the model identifier in your application configuration to facilitate migration.
5. Follow the changelog and apply the [migration guide](./concepts.md#migration-to-another-model) when a change is announced.

Observed speeds depend notably on load, request length, and generation mode. They serve as benchmarks, not throughput guarantees for your application.

To find out the current public prices and create your estimate, consult the [official Cloud Temple pricing catalog](https://www.cloud-temple.com/en/our-public-rates/). For technical tiers, consult the [API documentation](./api.md). For deferred processing, consult the [Batch mode](./batch.md).
