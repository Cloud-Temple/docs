---
title: Catálogo de Modelos de IA
sidebar_position: 2
---

# Catálogo de Modelos LLM como Servicio

## Descripción general

Cloud Temple LLMaaS ofrece **56 modelos de lenguaje grande** cuidadosamente seleccionados y optimizados para cumplir con los requisitos más estrictos de **SecNumCloud**. Nuestro catálogo abarca todo el espectro, desde micro-modelos ultraeficientes hasta modelos extremadamente grandes.

### Estadísticas Globales

| Métrica | Valor |
|----------|--------|
| **Número total de modelos** | 56 modelos |
| **Contexto mínimo** | 512 tokens |
| **Contexto máximo** | 1,000,000 tokens |
| **Cumplimiento** | SecNumCloud ✅ HDS ✅ Soberanía ✅ C5 ✅ |
| **Ubicación** | 100% Francia 🇫🇷 |

### Precios

| Tipo de uso | Precio |
|-------------------|------|
| **Tokens de entrada** | 1.8€ / millón de tokens |
| **Tokens de salida** | 8€ / millón de tokens |
| **Razonamiento avanzado** | 8€ / millón de tokens |
| **Reclasificación de documentos** | 4€ / millón de tokens reclasificados |
| **Lote asíncrono (entrada)** | 0.9€ / millón de tokens |
| **Lote asíncrono (salida)** | 4€ / millón de tokens |

## Modelos de Chat y Razonamiento

Modelos generalistas para el diálogo, el análisis, el razonamiento y las tareas multilingües.

### cogito:32b
**Deep Cogito • 32B parámetros • Contexto : 32,000 tokens**

Modelo de razonamiento analítico avanzado, diseñado para la descomposición de problemas complejos y la verificación lógica.

**Especificaciones técnicas:**
- **Velocidad** : 21 tokens/segundo
- **Consumo** : 6.32 kWh/millón de tokens
- **Licencia** : [LLAMA 3.2 Community Licence](./licences/llama_3.2_community_licence.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `Agent` `Raisonnement` `Compréhension` `Analyse`

**Casos de uso :**
- Análisis de escenarios multifactoriales
- Resolución de problemas científicos con demostración formal
- Sistemas expertos (juridique, médical, technique)

---

### gemma3:27b
**Google • 27B parámetros • Contexto : 120,000 tokens**

Modelo multimodal de Google con visión integrada y soporte para 140+ idiomas. Contexto de 120K tokens.

**Especificaciones técnicas:**
- **Velocidad** : 23 tokens/segundo
- **Consumo** : 5.80 kWh/millón de tokens
- **Licencia** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Vision` `Agent` `Grand Contexte`

**Casos de uso :**
- Análisis de documentos con contexto extendido (120K tokens)
- Procesamiento simultáneo de imágenes y texto
- Extracción estructurada a partir de PDF y documentos escaneados

---

### glm-4.7-flash:30b
**Zhipu AI • 30B parámetros • Contexto : 120,000 tokens**

Modelo rápido con un excelente equilibrio rendimiento/latencia para el razonamiento y el análisis.

**Especificaciones técnicas:**
- **Velocidad** : 88 tokens/segundo
- **Consumo** : 1.58 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `Agente` `Rápido` `Gran Contexto` `Multilingüe`

**Casos de uso :**
- Asistentes conversacionales rápidos
- Análisis de documentos largos (120k tokens)
- Tareas de razonamiento con baja latencia

---

### gpt-oss:120b
**OpenAI • 120B parámetros • Contexto : 120,000 tokens**

Modelo open-weight de vanguardia de OpenAI con razonamiento configurable y cadena de pensamiento transparente.

**Especificaciones técnicas:**
- **Velocidad** : 94 tokens/segundo
- **Consumo** : 2.37 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `MoE` `Agent` `Raisonnement` `Open-Source` `Très Large`

**Casos de uso :**
- Agentes conversacionales avanzados con razonamiento complejo
- Aplicaciones que requieren transparencia en el proceso de razonamiento
- Escenarios comerciales que requieren una licencia permisiva

---

### gpt-oss:20b
**OpenAI • 20B parámetros • Contexto : 120,000 tokens**

Versión compacta del modelo OpenAI, optimizada para la inferencia rápida con buenas capacidades de razonamiento.

**Especificaciones técnicas:**
- **Velocidad** : 41 tokens/segundo
- **Consumo** : 3.25 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `MoE` `Agente` `Razonamiento` `Open-Source` `Compacto` `Rápido`

**Casos de uso :**
- Inferencia rápida con buenas capacidades de razonamiento
- Casos de uso agenticos (llamada a funciones, navegación web, ejecución de código)
- Aplicaciones con presupuesto de cómputo limitado

---

### llama3.3:70b
**Meta • 70B parámetros • Contexto : 132,000 tokens**

Modelo multilingüe de Meta, excelente en diálogo natural y comprensión matizada en 8 idiomas.

**Especificaciones técnicas:**
- **Velocidad** : 10 tokens/segundo
- **Consumo** : 13.33 kWh/millón de tokens
- **Licencia** : [LLAMA 3.3 Community Licence](./licences/llama_3.3_community_licence.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Agente` `Diálogo` `Multilingüe`

**Casos de uso :**
- Chatbots multilingües (8 idiomas)
- Análisis de documentos jurídicos o técnicos voluminosos
- Generación de textos estructurados con fidelidad estilística

---

### ministral-3:14b
**Mistral AI • 14B parámetros • Contexto : 250,000 tokens**

El más potente de la familia Ministral, con razonamiento y codificación avanzados. Contexto de 250K tokens.

**Especificaciones técnicas:**
- **Velocidad** : 28 tokens/segundo
- **Consumo** : 4.74 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `Haute Performance` `Raisonnement` `Code`

**Casos de uso :**
- Resolución de problemas complejos
- Asistentes de codificación e ingeniería
- Análisis exhaustivo de documentos con razonamiento

---

### ministral-3:3b
**Mistral AI • 3B parámetros • Contexto : 250,000 tokens**

Modelo compacto de Mistral, eficiente a pesar de su pequeño tamaño. Contexto de 250K tokens.

**Especificaciones técnicas:**
- **Velocidad** : 22 tokens/segundo
- **Consumo** : 1.75 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Compact` `Efficient`

**Casos de uso :**
- Asistentes personales reactivos
- Clasificación y enrutamiento rápidos
- Tareas simples con gran contexto

---

### ministral-3:8b
**Mistral AI • 8B parámetros • Contexto : 250,000 tokens**

Modelo intermedio de Ministral con un excelente equilibrio entre rendimiento y velocidad. Contexto de 250K tokens.

**Especificaciones técnicas:**
- **Velocidad** : 40 tokens/segundo
- **Consumo** : 3.33 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `Efficient` `Raisonnement`

**Casos de uso :**
- Asistentes conversacionales avanzados
- Análisis de documentos y extracción de información
- Buen equilibrio entre velocidad y calidad

---

### mistral-small3.2:24b
**Mistral AI • 24B parámetros • Contexto : 128,000 tokens**

Modelo Mistral con seguimiento de instrucciones mejorado, function calling robusto y capacidades de visión. Detección de contenidos problemáticos integrada.

**Especificaciones técnicas:**
- **Velocidad** : 28 tokens/segundo
- **Consumo** : 5.05 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ✅ Seguridad

**Etiquetas :** `Vision` `Agent` `Sécurité` `Instruction Following`

**Casos de uso :**
- Agentes conversacionales fiables con seguimiento de instrucciones preciso
- Integración de herramientas externas mediante function calling
- Aplicaciones que requieren filtrado de seguridad nativo

---

### mistral-small4:119b
**Mistral AI • 119B parámetros • Contexto: 262.144 tokens**

Modelo Mistral de alto rendimiento (119B) con visión, seguridad integrada y contexto de 262K tokens. Rápido (100 t/s).

**Especificaciones técnicas:**
- **Velocidad** : 100 tokens/segundo
- **Consumo** : 2.00 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ✅ Seguridad

**Etiquetas :** `Vision` `Agent` `Sécurité` `Grand Contexte` `Rapide`

**Casos de uso:**
- Agentes conversacionales de alto rendimiento con visión
- Análisis de documentos muy largos (262K tokens)
- Aplicaciones críticas que requieren fiabilidad y seguridad

---

### nemotron-3-super:120b
**NVIDIA • 120B parámetros • Contexto : 1,000,000 tokens**

Modelo NVIDIA optimizado para agentes colaborativos, razonamiento prolongado y cargas de trabajo de alto volumen. Contexto de 1M tokens.

**Especificaciones técnicas:**
- **Velocidad** : 72 tokens/segundo
- **Consumo** : 1.93 kWh/millón de tokens
- **Licencia** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `Agente` `Razonamiento` `Gran Contexto`

**Casos de uso :**
- Agentes autónomos con múltiples llamadas a herramientas
- Automatización de flujos de trabajo de alto volumen
- Análisis de documentos largos con extracción precisa

---

### nemotron-cascade:30b
**NVIDIA • 30B parámetros • Contexto : 1,000,000 tokens**

Modelo NVIDIA especializado en matemáticas (medalla de oro IMO 2025) y descomposición de problemas. Contexto de 1M tokens.

**Especificaciones técnicas:**
- **Velocidad** : 130 tokens/segundo
- **Consumo** : 1.93 kWh/millón de tokens
- **Licencia** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `Agent` `Raisonnement` `Grand Contexte` `Maths`

**Casos de uso :**
- Resolución de problemas matemáticos complejos
- Agentes con múltiples llamadas a herramientas
- Análisis de documentos largos

---

### nemotron3-nano:30b
**NVIDIA • 30B parámetros • Contexto : 1,000,000 tokens**

Modelo NVIDIA ultra-rápido (160 t/s) con razonamiento y llamadas a funciones. Contexto de 1M tokens.

**Especificaciones técnicas:**
- **Velocidad** : 160 tokens/segundo
- **Consumo** : 1.56 kWh/millón de tokens
- **Licencia** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `Agente` `Razonamiento` `Gran Contexto` `Rápido`

**Casos de uso :**
- Agentes autónomos que requieren una respuesta rápida
- Razonamiento lógico y resolución de problemas
- Análisis de documentos largos con extracción precisa

---

### olmo-3:32b
**AllenAI • 32B parámetros • Contexto : 65,536 tokens**

Primer modelo de razonamiento completamente abierto a esta escala. Transparencia total (datos, código, pesos).

**Especificaciones técnicas:**
- **Velocidad** : 22 tokens/segundo
- **Consumo** : 5.98 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `Open-Source` `Grand Contexte` `Raisonnement` `Transparent` `Code` `Haute Performance`

**Casos de uso :**
- Razonamiento complejo y resolución de problemas en múltiples pasos
- Desarrollo de software con transparencia en el proceso de toma de decisiones
- Tareas críticas que requieren una auditabilidad completa

---

### olmo-3:7b
**AllenAI • 7B parámetros • Contexto : 65,536 tokens**

Modelo completamente abierto y eficiente, excelente en matemáticas y programación con total transparencia.

**Especificaciones técnicas:**
- **Velocidad** : 35 tokens/segundo
- **Consumo** : 1.13 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Open-Source` `Grand Contexte` `Transparent` `Efficient` `Maths` `Code`

**Casos de uso :**
- Investigación académica que requiera una reproducibilidad total
- Programación y resolución de problemas matemáticos
- Análisis de documentos con trazabilidad completa

---

### qwen3-2507-think:4b
**Qwen Team • 4B parámetros • Contexto : 250,000 tokens**

Modelo compacto optimizado para el razonamiento profundo (logique, maths, science, code). Contexto de 250K tokens.

**Especificaciones técnicas:**
- **Velocidad** : 55 tokens/segundo
- **Consumo** : 2.42 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `Agente` `Razonamiento` `Gran Contexto` `Compacto` `Rápido`

**Casos de uso :**
- Razonamiento complejo (logique, maths, science, code)
- Agentes con gran historial de conversación (250K tokens)
- Análisis de documentos extensos con razonamiento profundo

---

### qwen3-2507:235b
**Qwen Team • 235B parámetros • Contexto : 200,000 tokens**

Modelo más potente del catálogo (235B paramètres, 22B actifs). Destaca en matemáticas, programación y razonamiento lógico.

**Especificaciones técnicas:**
- **Velocidad** : 56 tokens/segundo
- **Consumo** : 3.97 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `MoE` `Agent` `Raisonnement` `Très Large`

**Casos de uso :**
- Resolución de problemas matemáticos y lógicos complejos
- Tareas que requieren una amplia base de conocimientos
- Asistente de codificación avanzado

---

### qwen3-omni:30b
**Qwen Team • 30B parámetros • Contexto : 32,768 tokens**

Modelo omnimodal nativo — comprende simultáneamente texto, imagen, vídeo y audio.

**Especificaciones técnicas:**
- **Velocidad** : 19 tokens/segundo
- **Consumo** : 7.43 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `Omni` `Audio` `Vision` `Agent` `Multimodal`

**Casos de uso :**
- Interacciones multimodales (texto + imagen + audio + vídeo)
- Análisis combinado de vídeo y audio
- Asistentes inteligentes de nueva generación

---

### qwen3.5:0.8b
**Qwen Team • 0.8B parámetros • Contexto : 250,000 tokens**

Modelo ultraligero con un contexto excepcional de 250K tokens — destacable para un modelo de este tamaño.

**Especificaciones técnicas:**
- **Velocidad** : 16 tokens/segundo
- **Consumo** : 2.39 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Compact` `Efficient` `Grand Contexte` `Multilingue`

**Casos de uso :**
- Procesamiento de texto con contexto muy extenso (250K tokens)
- Clasificación y ordenamiento rápido
- Asistentes ligeros con historial extenso

---

### qwen3.5:4b
**Qwen Team • 4B parámetros • Contexto : 250,000 tokens**

Modelo Qwen3.5 compacto con un buen equilibrio rendimiento/eficiencia y contexto de 250K tokens.

**Especificaciones técnicas:**
- **Velocidad** : 37 tokens/segundo
- **Consumo** : 3.64 kWh/millón tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Compact` `Efficient` `Grand Contexte` `Multilingue`

**Casos de uso :**
- Asistentes conversacionales con gran contexto
- Resumen de texto y clasificación
- Tareas de codificación simples

---

### qwen3.5:9b
**Qwen Team • 9B parámetros • Contexto : 250,000 tokens**

Modelo Qwen3.5 intermedio con razonamiento sólido y contexto extendido a 250K tokens.

**Especificaciones técnicas:**
- **Velocidad** : 32 tokens/segundo
- **Consumo** : 4.23 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `Eficiente` `Gran Contexto` `Multilingüe` `Razonamiento`

**Casos de uso :**
- Asistentes conversacionales avanzados
- Análisis de documentos y extracción de información
- Tareas de razonamiento de complejidad media

---

### qwen3.6:27b
**Qwen Team • 27B parámetros • Contexto : 1,000,000 tokens**

Modelo generalista de referencia con un contexto nativo de 1M de tokens. Destaca en razonamiento, seguimiento de instrucciones y multilingüe.

**Especificaciones técnicas:**
- **Velocidad** : 80 tokens/segundo
- **Consumo** : 2.78 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `Agent` `Grand Contexte` `Multilingue` `Vision` `Raisonnement`

**Casos de uso :**
- Asistentes versátiles con seguimiento preciso de instrucciones
- Análisis de documentos muy voluminosos (1M de tokens)
- Aplicaciones multilingües con razonamiento lógico
- Programación y generación de código

---

### qwen3:0.6b
**Qwen Team • 0.6B parámetros • Contexto : 40,000 tokens**

Micromodelo ultrarrápido para tareas simples y enrutamiento. 40K tokens de contexto.

**Especificaciones técnicas:**
- **Velocidad** : 46 tokens/segundo
- **Consumo** : 1.33 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Compacto` `Rápido` `Eficiente` `Multilingüe`

**Casos de uso :**
- Clasificación y ordenamiento rápido
- Asistentes ligeros con baja latencia
- Enrutamiento en arquitecturas multimodelo

---

## Modelos de Programación y Agentes

Modelos especializados en código, ingeniería de software y agentes autónomos.

### devstral-small-2:24b
**Mistral AI & All Hands AI • 24B parámetros • Contexto : 200,000 tokens**

Modelo agéntico de vanguardia para la ingeniería de software. Rendimiento cercano a los modelos >100B para código. Visión integrada.

**Especificaciones técnicas:**
- **Velocidad** : 33 tokens/segundo
- **Consumo** : 4.23 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ✅ Seguridad

**Etiquetas :** `Agent` `Programmation` `Vision` `Open-Source` `Grand Contexte` `Rapide`

**Casos de uso :**
- Agentes de codificación autónomos
- Refactorización rápida de código
- Tareas de ingeniería iterativas

---

### functiongemma:270m
**Google • 270M parámetros • Contexto : 32,768 tokens**

Micro-modelo especializado en la detección de llamadas a funciones. Ideal como enrutador en una arquitectura de agentes.

**Especificaciones técnicas:**
- **Velocidad** : 40 tokens/segundo
- **Consumo** : 0.97 kWh/millón de tokens
- **Licencia** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Agent` `Compact` `Efficient` `Function Calling`

**Casos de uso :**
- Enrutador de herramientas en una arquitectura de agentes
- Detección de intenciones de llamadas a funciones
- Pre-filtrado rápido antes del enrutamiento

---

### qwen-coder-next:80b
**Qwen Team • 80B parámetros • Contexto : 250,000 tokens**

Modelo de vanguardia para código y razonamiento complejo. Contexto de 250K tokens.

**Especificaciones técnicas:**
- **Velocidad** : 97 tokens/segundo
- **Consumo** : 2.29 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `Agent` `Programmation` `MoE` `Grand Contexte`

**Casos de uso :**
- Asistente de programación avanzado (nivel repositorio)
- Análisis y refactorización de código complejo
- Agentes autónomos de ingeniería de software

---

### qwen3-next:80b
**Qwen Team • 80B parámetros • Contexto : 250,000 tokens**

Modelo versátil de 80B optimizado para grandes contextos, llamadas a funciones y razonamiento estructurado.

**Especificaciones técnicas:**
- **Velocidad** : 67 tokens/segundo
- **Consumo** : 2.09 kWh/millón tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Agent` `Grand Contexte` `MoE`

**Casos de uso :**
- Agentes conversacionales avanzados con integración de herramientas
- Análisis de documentos muy voluminosos
- Generación de código y razonamiento estructurado

---

### qwen3.6:35b
**Qwen Team • 35B parámetros • Contexto : 1,000,000 tokens**

Líder en ingeniería de software agéntica (SWE-bench 73.4%). Contexto de 1M tokens, visión y tool calling integrados.

**Especificaciones técnicas:**
- **Velocidad** : 121 tokens/segundo
- **Consumo** : 2.07 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `Agent` `Programación` `Gran Contexto` `MoE` `Visión` `Razonamiento`

**Casos de uso :**
- Asistente de codificación agéntica en IDE (Cursor, Continue.dev, VS Code Copilot)
- Análisis de bases de código completas (1M tokens)
- Revisión de código automatizada y CI/CD inteligentes
- Resolución de errores complejos con razonamiento de múltiples pasos

---

### rnj-1:8b
**Essential AI • 8B parámetros • Contexto : 32,000 tokens**

Modelo especializado en STEM — destaca en código (83.5% HumanEval+), matemáticas y ciencias.

**Especificaciones técnicas:**
- **Velocidad** : 23 tokens/segundo
- **Consumo** : 1.69 kWh/millón de tokens
- **Licencia** : [Open Weights](./licences/open_weights.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `Code` `Maths` `STEM` `Raisonnement` `Efficient`

**Casos de uso :**
- Generación de código avanzado
- Resolución de problemas matemáticos complejos
- Tareas científicas y técnicas

---

## Modelos de Visión y Multimodal

Modelos para el análisis de imágenes, vídeos, OCR y documentos visuales.

### deepseek-ocr
**DeepSeek AI • 3B parámetros • Contexto : 8,192 tokens**

Modelo OCR especializado para la extracción de texto de alta precisión con preservación del formato (tablas, fórmulas).

**Especificaciones técnicas:**
- **Velocidad** : 84 tokens/segundo
- **Consumo** : 0.66 kWh/millón de tokens
- **Licencia** : [MIT licence](./licences/mit_licence.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Vision` `OCR` `Efficient`

**Casos de uso :**
- Extracción de texto estructurado (Markdown/LaTeX) desde imágenes/PDF
- Digitalización de documentos con tablas y fórmulas

---

### gemma4:31b
**Google • 31B parámetros • Contexto : 250,000 tokens**

Modelo denso multimodal de Google, clasificado 3.º mundial en Arena AI. Visión avanzada, razonamiento y codificación. Contexto de 250K tokens.

**Especificaciones técnicas:**
- **Velocidad** : 59 tokens/segundo
- **Consumo** : 3.77 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `Agent` `Grand Contexte` `Vision` `Raisonnement` `Multilingue` `Open-Source`

**Casos de uso :**
- Agentes autónomos con razonamiento y llamadas a herramientas
- Análisis de documentos extensos con visión
- Comprensión visual (OCR, graphiques, documents scannés)

---

### gemma4:e2b
**Google • 31B (E2B) parámetros • Contexto: 128,000 tokens**

Variante ultrarrápida (125 t/s) de Gemma 4 con visión. Excelente eficiencia energética.

**Especificaciones técnicas:**
- **Velocidad** : 125 tokens/segundo
- **Consumo** : 1.11 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Visión` `Rápido` `Eficiente`

**Casos de uso:**
- Análisis de imágenes con baja latencia
- Documentos voluminosos con huella reducida

---

### gemma4:e4b
**Google • 31B (E4B) parámetros • Contexto : 128,000 tokens**

Variante de Gemma 4 con mejor compromiso calidad/velocidad que la versión E2B. Visión integrada.

**Especificaciones técnicas:**
- **Velocidad** : 85 tokens/segundo
- **Consumo** : 1.63 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Vision` `Rapide`

**Casos de uso :**
- Análisis de documentos e imágenes con buen compromiso calidad/velocidad
- Alternativa rápida para tareas de visión

---

### granite3.2-vision:2b
**IBM • 2B parámetros • Contexto : 16,384 tokens**

Modelo de visión compacto IBM Granite para OCR rápido y extracción de datos desde documentos escaneados.

**Especificaciones técnicas:**
- **Velocidad** : 49 tokens/segundo
- **Consumo** : 0.80 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Vision` `Compact` `Efficient` `OCR`

**Casos de uso :**
- OCR rápido en documentos ligeros
- Extracción de datos desde imágenes
- Análisis visual de bajo consumo

---

### qwen3-vl:235b
**Qwen Team • 235B parámetros • Contexto : 200,000 tokens**

El modelo multimodal más potente del catálogo. Comprensión visual de vanguardia y razonamiento excepcional.

**Especificaciones técnicas:**
- **Velocidad** : 24 tokens/segundo
- **Consumo** : 5.56 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ✅ Razonamiento • ❌ Seguridad

**Etiquetas :** `Agent` `Raisonnement` `Grand Contexte` `Vision`

**Casos de uso :**
- Automatización documental compleja (OCR multilingue, extraction structurée)
- Agentes visuales inteligentes
- Análisis científico avanzado (STEM, raisonnement spatial)
- RAG Multimodal en documentos y vídeos

---

### qwen3-vl:2b
**Qwen Team • 2B parámetros • Contexto : 250,000 tokens**

Modelo de visión ultra compacto para OCR rápido, detección de objetos y aplicaciones integradas.

**Especificaciones técnicas:**
- **Velocidad** : 64 tokens/segundo
- **Consumo** : 0.95 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Vision` `Compact` `Efficient` `Multimodal` `OCR`

**Casos de uso :**
- Análisis de imágenes en tiempo real
- OCR y lectura de documentos ligeros
- Clasificación y ordenamiento visual rápido

---

### qwen3-vl:30b
**Qwen Team • 30B parámetros • Contexto : 250,000 tokens**

Modelo multimodal de alto rendimiento para OCR, detección de objetos, análisis de vídeo y razonamiento espaciotemporal.

**Especificaciones técnicas:**
- **Velocidad** : 39 tokens/segundo
- **Consumo** : 3.39 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Visión` `Agente` `Contexto Largo` `Multimodal` `Vídeo` `OCR`

**Casos de uso :**
- Análisis de vídeos largos y vigilancia inteligente
- Extracción de datos estructurados (documentos, tablas, gráficos)
- Asistentes visuales con comprensión espacial

---

### qwen3-vl:32b
**Qwen Team • 32B parámetros • Contexto : 250,000 tokens**

Variante de alto rendimiento para las tareas de visión más exigentes. Contexto 250K tokens.

**Especificaciones técnicas:**
- **Velocidad** : 17 tokens/segundo
- **Consumo** : 7.75 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Vision` `Agent` `Grand Contexte` `Multimodal` `Vidéo` `OCR`

**Casos de uso :**
- Análisis científico y técnico de imágenes de alta resolución
- Automatización de procesos visuales complejos
- Comprensión detallada de escenas dinámicas

---

### qwen3-vl:4b
**Qwen Team • 4B parámetros • Contexto : 250,000 tokens**

Modelo de visión compacto y rápido para el análisis documental y la comprensión de video.

**Especificaciones técnicas:**
- **Velocidad** : 57 tokens/segundo
- **Consumo** : 2.34 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Vision` `Compact` `Multimodal` `Efficient` `Vidéo` `OCR`

**Casos de uso :**
- Análisis documental automatizado (factures, formulaires)
- Comprensión de contenido de video
- Asistentes visuales interactivos

---

### qwen3-vl:8b
**Qwen Team • 8B parámetros • Contexto : 250,000 tokens**

Modelo de visión intermedio — buen equilibrio entre rendimiento y huella. Contexto de 250K tokens.

**Especificaciones técnicas:**
- **Velocidad** : 39 tokens/segundo
- **Consumo** : 3.38 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
✅ Herramientas/Agente • ✅ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Vision` `Multimodal` `Efficient` `Vidéo` `OCR`

**Casos de uso :**
- Análisis documental automatizado
- Comprensión de contenido de vídeo
- Asistentes visuales interactivos

---

## Modelos de Embedding

Modelos para la búsqueda semántica y Retrieval-Augmented Generation (RAG).

### bge-m3:567m
**BAAI • 567M parámetros • Contexto : 8,192 tokens**

Embedding multilingüe de última generación (100+ idiomas). Admite búsquedas densas, dispersas y multivectoriales.

**Especificaciones técnicas:**
- **Velocidad** : 171 tokens/segundo
- **Consumo** : 0.36 kWh/millón de tokens
- **Licencia** : [MIT](./licences/mit.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Embedding` `Multilingüe` `Eficiente`

**Casos de uso :**
- Búsqueda semántica multilingüe
- Generación Aumentada por Recuperación (RAG)
- Clustering y clasificación de documentos

---

### embeddinggemma:300m
**Google • 300M parámetros • Contexto : 2,048 tokens**

Embedding multilingüe de Google (100+ idiomas), optimizado para la búsqueda y recuperación semántica.

**Especificaciones técnicas:**
- **Velocidad** : 175 tokens/segundo
- **Consumo** : 0.35 kWh/millón de tokens
- **Licencia** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Embedding` `Compact` `Sémantique` `Efficient` `Multilingue`

**Casos de uso :**
- Búsqueda y recuperación de información
- Clasificación y clustering de documentos
- Búsqueda de similitud semántica

---

### granite-embedding:278m
**IBM • 278M parámetros • Contexto : 512 tokens**

Embedding IBM ultra-compacto para búsqueda semántica con latencia mínima.

**Especificaciones técnicas:**
- **Velocidad** : 196.3 tokens/segundo
- **Consumo** : 0.31 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Embedding` `Compact` `Efficient`

**Casos de uso :**
- Búsqueda semántica de alta frecuencia
- Agrupamiento de documentos

---

### qwen3-embedding:0.6b
**Qwen Team • 0.6B parámetros • Contexto : 32,768 tokens**

Embedding ultraligero y rápido para la búsqueda semántica de baja latencia.

**Especificaciones técnicas:**
- **Velocidad** : N/A
- **Consumo** : 0.57 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Embedding` `Compact` `Efficient`

**Casos de uso :**
- Búsqueda semántica rápida
- Clasificación de texto en tiempo real

---

### qwen3-embedding:4b
**Qwen Team • 4B parámetros • Contexto : 40,000 tokens**

Embedding de alto rendimiento con comprensión semántica profunda y contexto extendido (40K tokens).

**Especificaciones técnicas:**
- **Velocidad** : N/A
- **Consumo** : 0.57 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Embedding` `Grand Contexte` `Efficient`

**Casos de uso :**
- Búsqueda semántica en documentos largos
- RAG con contexto extendido
- Análisis semántico de precisión

---

### qwen3-embedding:8b
**Qwen Team • 8B parámetros • Contexto : 40,000 tokens**

Embedding de alta capacidad con la mejor comprensión semántica de la familia Qwen3. Contexto extendido (40K tokens).

**Especificaciones técnicas:**
- **Velocidad** : N/A
- **Consumo** : 0.57 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Embedding` `Grand Contexte` `Haute Performance`

**Casos de uso :**
- Búsqueda semántica de alta precisión
- RAG avanzado con contexto extendido
- Análisis semántico de documentos complejos

---

## Modelos de Reranking

Modelos para el reordenamiento de resultados en los pipelines RAG.

### bge-reranker-large
**BAAI • 335M parámetros • Contexto : 512 tokens**

Modelo de reranking de alto rendimiento de la familia BGE, multilingüe.

**Especificaciones técnicas:**
- **Velocidad** : N/A
- **Consumo** : N/A
- **Licencia** : [MIT](./licences/mit.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Reranker` `Haute Performance`

**Casos de uso :**
- Reordenación multilingüe para RAG

---

### nvidia/llama-nemotron-rerank-vl-1b-v2
**NVIDIA • 1B parámetros • Contexto : 4,096 tokens**

Modelo de reranking compatible con la API de Cohere (/v1/rerank et /v2/rerank). Ordena los documentos por relevancia en relación con una consulta.

**Especificaciones técnicas:**
- **Velocidad** : N/A
- **Consumo** : N/A
- **Licencia** : [NVIDIA Open Model License](./licences/nvidia_open_model_license.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Rerank` `RAG` `Compact`

**Casos de uso :**
- Reordenación de resultados de búsqueda semántica
- Refinamiento de la relevancia en pipelines RAG

---

### qwen3-reranker:0.6b
**Qwen Team • 0.6B parámetros • Contexto : 4,096 tokens**

Modelo de reranking compacto y eficiente para el reordenamiento rápido.

**Especificaciones técnicas:**
- **Velocidad** : N/A
- **Consumo** : N/A
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Reranker` `Compact` `Efficient`

**Casos de uso :**
- Reordenamiento rápido para RAG

---

### qwen3-reranker:4b
**Qwen Team • 4B parámetros • Contexto : 4,096 tokens**

Modelo de reranking de alto rendimiento con una gran capacidad de comprensión contextual.

**Especificaciones técnicas:**
- **Velocidad** : N/A
- **Consumo** : N/A
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Reranker` `Performance`

**Casos de uso :**
- Reordenamiento de alta calidad para RAG

---

## Modelos de Seguridad

Modelos para el filtrado de contenido, el cumplimiento y los guardrails.

### granite3-guardian:2b
**IBM • 2B parámetros • Contexto : 8,192 tokens**

Versión compacta del modelo de seguridad Granite Guardian para el filtrado de baja latencia.

**Especificaciones técnicas:**
- **Velocidad** : 60 tokens/segundo
- **Consumo** : 0.65 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ✅ Seguridad

**Etiquetas :** `Seguridad` `Guardrails` `Compacto` `Eficiente`

**Casos de uso :**
- Guardrails de baja latencia en flujos de trabajo agenticos
- Filtrado de seguridad en tiempo real

---

### granite3-guardian:8b
**IBM • 8B parámetros • Contexto : 8,192 tokens**

Modelo de seguridad especializado en la detección de contenidos problemáticos, jailbreak y cumplimiento normativo.

**Especificaciones técnicas:**
- **Velocidad** : 45 tokens/segundo
- **Consumo** : 3.09 kWh/millón de tokens
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ✅ Seguridad

**Etiquetas :** `Seguridad` `Guardrails` `Cumplimiento` `Filtrado`

**Casos de uso :**
- Detección de contenidos problemáticos y jailbreak
- Filtrado de seguridad pre/post-generación
- Cumplimiento normativo (RGPD, HDS)

---

## Modelos de Traducción

Modelos especializados en la traducción multilingüe de alta fidelidad.

### translategemma:12b
**Google • 12B parámetros • Contexto : 128,000 tokens**

Traducción de alta fidelidad para 55 idiomas con contexto de 128K tokens.

**Especificaciones técnicas:**
- **Velocidad** : 27 tokens/segundo
- **Consumo** : 4.87 kWh/millón tokens
- **Licencia** : [Gemma Terms of Use](./licences/gemma_terms_of_use.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Traducción` `Multilingüe` `Especializado`

**Casos de uso :**
- Traducción de documentos largos
- Comunicación interlingüística
- Localización de contenido

---

### translategemma:27b
**Google • 27B parámetros • Contexto : 120,000 tokens**

Traducción de alto rendimiento para 55 idiomas. Calidad superior para contenidos complejos y técnicos.

**Especificaciones técnicas:**
- **Velocidad** : 17 tokens/segundo
- **Consumo** : 7.84 kWh/millón de tokens
- **Licencia** : [Gemma Terms of Use](./licences/gemma_terms_of_use.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Traducción` `Multilingüe` `Especializado` `Alto Rendimiento`

**Casos de uso :**
- Traducción de alta precisión
- Traducción de documentos técnicos
- Matices literarios y culturales

---

### translategemma:4b
**Google • 4B parámetros • Contexto : 128,000 tokens**

Traducción rápida y eficiente para 55 idiomas. Ideal para la localización en tiempo real.

**Especificaciones técnicas:**
- **Velocidad** : 31 tokens/segundo
- **Consumo** : 1.25 kWh/millón de tokens
- **Licencia** : [Gemma Terms of Use](./licences/gemma_terms_of_use.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Traducción` `Multilingüe` `Especializado` `Eficiente`

**Casos de uso :**
- Traducción rápida de textos
- Localización en tiempo real
- Traducción con presupuesto limitado

---

## Modelos de Audio e Imagen

Modelos para la transcripción de audio y la generación de imágenes.

### voxtral
**Mistral AI • 4B parámetros • Contexto : 32,768 tokens**

Transcripción de audio en tiempo real vía WebSocket. Reconocimiento de voz en streaming con baja latencia.

**Especificaciones técnicas:**
- **Velocidad** : N/A
- **Consumo** : N/A
- **Licencia** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localización** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `ASR` `Audio` `Realtime` `WebSocket`

**Casos de uso :**
- Transcripción de audio en tiempo real (streaming)
- Asistentes de voz
- Subtitulado en directo

---

### z-image:16b
**Community • 16B parámetros • Contexto : 0 tokens**

Generación de imágenes a partir de prompts textuales, compatible con la API OpenAI /v1/images/generations.

**Especificaciones técnicas:**
- **Velocidad** : N/A
- **Consumo** : N/A
- **Licencia** : [Open Weights](./licences/open_weights.licence.md)
- **Ubicación** : FR 🇫🇷

**Capacidades:**
❌ Herramientas/Agente • ❌ Visión • ❌ Razonamiento • ❌ Seguridad

**Etiquetas :** `Image Generation` `Créatif` `Multimodal`

**Casos de uso :**
- Generación de imágenes a partir de descripciones textuales
- Creación de contenido visual
- Prototipado visual rápido

---

## Casos de Uso Recomendados

### Diálogo multilingüe

Chatbots y asistentes capaces de comunicarse en varios idiomas con detección automática y mantenimiento del contexto

**Modelos recomendados:**

- nemotron-3-super:120b
- qwen3.6:27b
- nemotron3-nano:30b
- gpt-oss:120b

### Análisis de documentos largos

Procesamiento de documentos voluminosos (>100 páginas) con extracción de información clave, resúmenes y respuestas a preguntas

**Modelos recomendados:**

- nemotron-3-super:120b
- qwen3.6:27b
- qwen3-2507:235b

### Programación y desarrollo

Generación, optimización y depuración de código en múltiples lenguajes, refactorización y creación de pruebas

**Modelos recomendados:**

- qwen3.6:35b
- qwen-coder-next:80b
- devstral-small-2:24b
- nemotron-3-super:120b

### Análisis visual

Procesamiento de imágenes y documentos visuales, OCR, interpretación de gráficos y tablas

**Modelos recomendados:**

- qwen3-vl:235b
- gemma4:31b
- deepseek-ocr
- qwen3-vl:30b

### Seguridad y cumplimiento

Filtrado de contenido sensible, detección de jailbreak, cumplimiento RGPD/HDS

**Modelos recomendados:**

- granite3-guardian:8b
- granite3-guardian:2b
- mistral-small4:119b

### Despliegues ligeros

Aplicaciones que requieren una huella mínima, baja latencia y bajo consumo

**Modelos recomendados:**

- qwen3.5:0.8b
- qwen3-vl:2b
- ministral-3:3b

### RAG (Retrieval-Augmented Generation)

Pipelines completos de búsqueda semántica, reordenamiento y generación aumentada por recuperación

**Modelos recomendados:**

- bge-m3:567m
- nvidia/llama-nemotron-rerank-vl-1b-v2
- qwen3.6:27b