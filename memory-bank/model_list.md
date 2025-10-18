# Liste des Modèles (ia01-ia06 & ai-mac-01, ai-mac-02, ai-mac-03, ai-mac-04, ai-mac-05, ai-mac-06, ai-mac-07)

| Modèle                 | Phase      | DMP        | DSP        | Contexte (num_ctx) | Vitesse (t/s) | Conso (kWh/Mtoken) | Serveurs             | Commentaire                                                                                       |
| :--------------------- | :--------- | :--------- | :--------- | :----------------- | :------------ | :----------------- | :------------------- | :------------------------------------------------------------------------------------------------ |
| cogito:14b             | Production | 13/06/2025 | 30/06/2026 | 32000              | 60            | 4.40               | ia05, ia06           |                                                                                                   |
| cogito:32b             | Production | 13/06/2025 | 30/06/2026 | 32000              | 32            | 8.25               | ia05, ia06           |                                                                                                   |
| cogito:3b              | Production | 13/06/2025 | 30/06/2026 | 32000              | 55            | 0.61               | ai-mac-02, ai-mac-03 |                                                                                                   |
| cogito:8b              | Production | 13/06/2025 | 30/06/2026 | 32000              | 30            | 1.11               | ai-mac-02, ai-mac-03 |                                                                                                   |
| deepcoder:14b          | Production | 13/06/2025 | 30/06/2026 | 32000              | 64            | 4.12               | ia05, ia06           |                                                                                                   |
| deepseek-r1:14b        | Production | 13/06/2025 | 31/12/2025 | 32000              | 62            | 4.26               | ia05, ia06           |                                                                                                   |
| deepseek-r1:32b        | Production | 13/06/2025 | 31/12/2025 | 32000              | 33            | 7.99               | ia05, ia06           |                                                                                                   |
| deepseek-r1:70b        | Production | 13/06/2025 | 31/12/2025 | 32000              | 21            | 12.56              | ia06                 |                                                                                                   |
| devstral:24b           | Production | 13/06/2025 | 31/12/2026 | 120000             | 45            | 5.86               | ia05, ia06           | Agentic LLM for software engineering                                                              |
| foundation-sec:8b      | Production | 13/06/2025 | 30/09/2025 | 16384              | 21            | 1.59               | ai-mac-03            | ID Ollama: hf.co/roadus/Foundation-Sec-8B-Q4_K_M-GGUF:Q4_K_M (Installation sur ai-mac-02 échouée) |
| gemma3:12b             | Production | 13/06/2025 | 31/12/2026 | 120000             | 56            | 4.71               | ia05, ia06           |                                                                                                   |
| gemma3:1b              | Production | 13/06/2025 | 31/12/2026 | 32000              | 112           | 0.15               | ai-mac-01, ai-mac-02 | Contexte standardisé.                                                                             |
| gemma3:27b             | Production | 13/06/2025 | 31/12/2026 | 120000             | 20            | 6.67               | ai-mac-04, ai-mac-05 |                                                                                                   |
| gemma3:4b              | Production | 13/06/2025 | 31/12/2026 | 120000             | 57            | 0.58               | ai-mac-02, ai-mac-03 |                                                                                                   |
| granite-embedding:278m | Production | 13/06/2025 | 31/12/2026 | 512                | N/A           | N/A                | ia05, ia06           |                                                                                                   |
| granite3-guardian:2b   | Production | 13/06/2025 | 31/12/2026 | 8192               | N/A           | N/A                | ai-mac-02, ai-mac-03 |                                                                                                   |
| granite3-guardian:8b   | Production | 13/06/2025 | 31/12/2026 | 32000              | N/A           | N/A                | ai-mac-02, ai-mac-03 |                                                                                                   |
| granite3.1-moe:3b      | Production | 13/06/2025 | 31/12/2026 | 32000              | 74            | 0.45               | ai-mac-02, ai-mac-03 |                                                                                                   |
| granite3.2-vision:2b   | Production | 13/06/2025 | 31/12/2026 | 16384              | 48            | 0.69               | ai-mac-02, ai-mac-03 |                                                                                                   |
| granite3.3:2b          | Production | 13/06/2025 | 31/12/2026 | 120000             | 45            | 0.74               | ai-mac-02, ai-mac-03 |                                                                                                   |
| granite3.3:8b          | Production | 13/06/2025 | 31/12/2026 | 60000              | 30            | 1.11               | ai-mac-02, ai-mac-03 |                                                                                                   |
| llama3.1:8b            | Production | 13/06/2025 | 31/12/2025 | 32000              | 31            | 1.08               | ai-mac-02, ai-mac-03 |                                                                                                   |
| llama3.3:70b           | Production | 13/06/2025 | 31/12/2026 | 60000              | 26            | 11.75              | vLLM ia01            | Alias: ibnzterrell/Meta-Llama-3.3-70B-Instruct-AWQ-INT4                                           |
| lucie-instruct:7b      | Production | 13/06/2025 | 30/10/2025 | 32000              | 4             | 8.33               | ai-mac-02, ai-mac-03 |                                                                                                   |
| magistral:24b          | Production | 13/06/2025 | 31/12/2026 | 40000              | 25            | 5.33               | ai-mac-04, ai-mac-05 |                                                                                                   |
| mistral-small3.1:24b   | Production | 13/06/2025 | 31/12/2026 | 120000             | 35            | 3.72               | ai-mac-06, ai-mac-07 | Perf. Mac Studio mesurée                                                                          |
| mistral-small3.2:24b   | Production | 23/06/2025 | 30/03/2026 | 120000             | 35            | 3.72               | ai-mac-06, ai-mac-07 | Amélioration instruction following & function calling.                                            |
| phi4-reasoning:14b     | Production | 13/06/2025 | 31/12/2025 | 32000              | 71            | 3.71               | ia05, ia06           |                                                                                                   |
| qwen2.5:0.5b           | Production | 13/06/2025 | 31/12/2025 | 32000              | 162           | 0.10               | ai-mac-01, ai-mac-02 | Contexte standardisé.                                                                             |
| qwen2.5:1.5b           | Production | 13/06/2025 | 31/12/2025 | 32000              | 102           | 0.33               | ai-mac-02, ai-mac-03 |                                                                                                   |
| qwen2.5:14b            | Production | 13/06/2025 | 31/12/2025 | 32000              | 61            | 4.33               | ia05, ia06           |                                                                                                   |
| qwen2.5:32b            | Production | 13/06/2025 | 31/12/2025 | 32000              | 31            | 8.51               | ia05, ia06           |                                                                                                   |
| qwen2.5:3b             | Production | 13/06/2025 | 31/12/2025 | 32000              | 64            | 0.52               | ai-mac-02, ai-mac-03 |                                                                                                   |
| qwen2.5vl:32b          | Production | 13/06/2025 | 31/12/2026 | 120000             | 18            | 7.41               | ai-mac-04, ai-mac-05 | Vision & Language Model                                                                           |
| qwen2.5vl:32b          | Production | 13/06/2025 | 31/12/2026 | 120000             | 18            | 7.41               | ai-mac-04, ai-mac-05 | Vision & Language Model                                                                           |
| qwen2.5vl:3b           | Production | 13/06/2025 | 31/12/2026 | 128000             | 65            | 0.51               | ai-mac-02, ai-mac-03 | Vision & Language Model                                                                           |
| qwen2.5vl:72b          | Production | 13/06/2025 | 31/12/2026 | 128000             | 15            | 8.89               | ai-mac-06, ai-mac-07 | Vision & Language Model (Très Large)                                                              |
| qwen2.5vl:7b           | Production | 13/06/2025 | 31/12/2026 | 128000             | 35            | 0.95               | ai-mac-02, ai-mac-03 | Vision & Language Model                                                                           |
| qwen3:0.6b             | Production | 13/06/2025 | 31/12/2026 | 32000              | 112           | 0.15               | ai-mac-01, ai-mac-02 | Contexte standardisé.                                                                             |
| qwen3:1.7b             | Production | 13/06/2025 | 31/12/2026 | 32000              | 88            | 0.38               | ai-mac-02, ai-mac-03 |                                                                                                   |
| qwen3:14b              | Production | 13/06/2025 | 31/12/2026 | 32000              | 68            | 3.88               | ia05, ia06           | Contexte standardisé.                                                                             |
| qwen3:30b-a3b          | Production | 13/06/2025 | 31/12/2026 | 32000              | 106           | 2.88               | vLLM ia03, vLLM ia04 | Modèle MoE FP8                                                                                    |
| qwen3:4b               | Production | 13/06/2025 | 31/12/2026 | 32000              | 49            | 0.68               | ai-mac-02, ai-mac-03 |                                                                                                   |
| qwen3:8b               | Production | 13/06/2025 | 31/12/2026 | 32000              | 33            | 1.01               | ai-mac-02, ai-mac-03 | Contexte standardisé à 32k sur les deux serveurs.                                                 |
| qwen3:32b              | Production | 13/06/2025 | 31/12/2026 | 40000              | 18            | 7.41               | ai-mac-04, ai-mac-05 |                                                                                                   |
| qwen3:235b             | Production | 13/06/2025 | 31/12/2026 | 60000              | 17            | 7.84               | ai-mac-06, ai-mac-07 | Données de perf du 29/05/2025 (Mac Studio 480W)                                                   |
| qwq:32b                | Production | 13/06/2025 | 31/12/2025 | 32000              | 35            | 7.54               | ia05, ia06           |                                                                                                   |
| deepseek-r1:671b       | Production | 13/06/2025 | 31/12/2025 | 16000              | 12            | 11.11              | ai-mac-06, ai-mac-07 | Données de perf du 04/06/2025 (Mac Studio 480W)                                                   |

Stratégie de Répartition Cible :

La répartition des modèles suit une stratégie de haute disponibilité et de spécialisation des plateformes. Chaque modèle est déployé sur une paire de serveurs pour garantir la redondance.

- **Serveurs A100 (`ia05`, `ia06`)** : Plateforme principale pour les modèles flexibles et très utilisés.
- **Serveurs Mac Studio (`ai-mac-04` à `ai-mac-07`)** : Spécialisés pour les modèles nécessitant une très grande capacité mémoire (très grands modèles ou très grands contextes).
- **Serveurs Mac mini (`ai-mac-01` à `ai-mac-03`)** : Pour les modèles légers et les expérimentations.
- **Serveurs VLLM (`ia01` à `ia04`)** : Dédiés aux modèles les plus critiques nécessitant un débit maximal.

La colonne "Serveurs" de ce tableau reflète la répartition actuelle et cible.

---
### Légende

- **Phase**: Cycle de vie du modèle (Évaluation, Production, Déprécié)
- **DMP**: Date de Mise en Production
- **DSP**: Date de Suppression Prévisionnelle
