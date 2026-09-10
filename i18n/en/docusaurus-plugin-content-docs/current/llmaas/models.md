---
title: AI Model Catalog
sidebar_position: 2
---

# LLM as a Service Model Catalog

## Consult the up-to-date catalog

The **[model catalog and lifecycle](https://llmaas.status.cloud-temple.app/lifecycle)** is the reference for production models, deprecations, end-of-support dates, LTS statuses, and recommended migrations. Use its filters and search to prepare a new project or track the models in your applications. For lifecycle dates and migrations, the information published on this page is authoritative in case of discrepancies with an older example or a copy of the catalog.

This page explains how to select and use a model. Inventories, dates, and performance metrics can be viewed directly in the following sources:

| Need | Source to consult |
|--------|--------------------|
| Select a model, verify its context and lifecycle | [Catalog and lifecycle](https://llmaas.status.cloud-temple.app/lifecycle) |
| Get the identifiers exposed by the API | `GET /v1/models` ([documentation](./api.md)) |
| Check availability and observed performance | [Service status](https://llmaas.status.cloud-temple.app/) |
| Review service updates and migration announcements | [LLMaaS Changelog](https://llmaas.status.cloud-temple.app/changelog) |
| Examine historical metrics | [Monitoring history](https://llmaas.status.cloud-temple.app/history) |

## Choose based on your use case

The service covers the use cases below. Verify the capabilities of the selected model before integration: not all models support the same inputs or features.

### Chat and Reasoning

For assistants, summarization, or analysis, compare the quality of responses on your own documents, response time, and the required context size. For a long-lived application, examine the **LTS** status and the published end-of-support date.

### Programming and Agents

To generate code or build an agent, verify tool call support (*tool calling*) and test complete execution sequences. The [getting started guide](./quickstart.md) provides an example of a function call.

### Vision and multimodal

Choose a model that accepts images for visual analysis and text extraction. Verify the formats supported by the API and the context window; text support does not imply image support. See the examples of [multimodal requests](./api.md).

### Embeddings and Semantic Search

Embeddings transform text into vectors used for search. Compare linguistic coverage, supported text length, and relevance for your corpus. Changing a model may require recalculating the vectors and rebuilding the index: do not mix embeddings from different models. Consult the [guide RAG](./rag_explained.md).

## Reranking Models

Reranking re-ranks retrieved documents based on their relevance to a query. It complements vector search prior to response generation. The `/v1/rerank` and `/v2/rerank` endpoints are detailed in the [Reranking guide](./rerank.md).

### Security and guardrails

Security models enable the evaluation of content within an application workflow. Define filtering criteria, thresholds, and the handling of ambiguous cases with your business teams; validate them against your data.

### Translation

For a multilingual application, test the relevant languages, your terminology, and the preservation of formatting. Quality must be evaluated on the documents actually processed.

### Audio and Image

The catalog includes use cases for audio transcription and image generation. Check the required model and protocol for each use case, particularly the distinction between file transcription and real-time transcription.

## Retrieve IDs via the API

```bash
curl "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

Use the exact ID returned by the API in the `model` parameter. The presence of an ID does not guarantee that it still refers to the original model: an old name may be redirected to a successor. Also check its [lifecycle](https://llmaas.status.cloud-temple.app/lifecycle).

## Prepare for production

1. Select a model suitable for your use case and verify its license.
2. Check its status, end-of-support date, and recommended migration path.
3. Test quality, latency, cost, and required capabilities on your real-world use cases.
4. Store the model identifier in your application configuration to facilitate future migrations.
5. Follow the changelog and apply the [guide de migration](./concepts.md#migration-to-another-model) when a change is announced.

Observed speeds depend notably on load, request length, and generation mode. They serve as benchmarks, not throughput guarantees for your application.

For pricing and access tiers, refer to the [documentation API](./api.md). For deferred processing, refer to the [mode Batch](./batch.md).