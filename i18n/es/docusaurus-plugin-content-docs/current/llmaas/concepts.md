---
title: Conceptos
sidebar_position: 3
---

# Conceptos y Arquitectura LLMaaS

## 🏗️ Arquitectura Técnica

### Infraestructura Cloud Templo

import ArchitectureLLMaaS from './images/llmaas_architecture_001.png';

<img src={ArchitectureLLMaaS} alt="Arquitectura Técnica LLMaaS Cloud Templo" />

### Componentes Principales

#### 1. **API Gateway LLMaaS**
- **Compatible con OpenAI** : Integración transparente con el ecosistema existente
- **Límite de tasas** : Gestión de los límites por nivel de facturación
- **Balanceo de carga** : Distribución inteligente en 12 máquinas GPU
- **Monitoreo** : Métricas en tiempo real y alertas

#### 2. **Servicio de Autenticación**
- **Tokens API seguros** 
- **Control de acceso** : Permisos granulares por modelo
- **Auditorías** : Rastreabilidad completa de los accesos

## 🤖 Modelos y Tokens

### Catálogo de Modelos

*Catálogo completo : [Lista de modelos](./models)*

### Gestión de Tokens

#### **Tipos de Tokens**
- **Tokens de entrada** : Su prompt y contexto
- **Tokens de salida** : Respuesta generada por el modelo
- **Tokens del sistema** : Metadatos e instrucciones

#### **Cálculo de Costos**
```
Coût total = (Tokens entrée × 0.9€/M) + (Tokens sortie × 4€/M) +  (Tokens sortie Raisonnement × 21€/M)
```

#### **Optimización**
- **Ventana de contexto** : Reutilice las conversaciones para ahorrar
- **Modelos adecuados** : Elija el tamaño según la complejidad
- **Máximo de tokens** : Limite la longitud de las respuestas

### Tokenización

```python
```

# Ejemplo de estimación de tokens
def estimate_tokens(text: str) -> int:
    """Estimación aproximada: 1 token ≈ 4 caracteres"""
    return len(text) // 4

prompt = "Explique la fotosíntesis"
response_max = 200  # tokens máximos deseados

estimated_input = estimate_tokens(prompt)  # ~6 tokens
total_cost = (estimated_input * 0.9 + response_max * 4) / 1_000_000
print(f"Costo estimado: {total_cost:.6f}€")
```

## 🔒 Seguridad y Conformidad

### Calificación SecNumCloud

El servicio LLMaaS se ejecuta en una infraestructura IaaS Cloud Temple que cuenta con la **calificación SecNumCloud 3.2** de la ANSSI, garantizando :

#### **Protección de datos**
- **Cifrado extremo a extremo** : TLS 1.3 para todos los intercambios
- **Almacenamiento seguro** : Datos cifrados en reposo 
- **Aislamiento** del entorno

#### **Soberanía Numérica**
- **Almacenamiento en Francia** : Datacenters Cloud Temple certificados
- **Derecho francés** : Cumplimiento RGPD 
- **Sin exposición** : Ningún transferencia a nubes extranjeras y ningún almacenamiento de datos

#### **Auditoría y Trazabilidad**
- **Logs completos** : Todas las interacciones registradas
- **Retención** : Conservación según políticas legales
- **Cumplimiento**

### Controles de Seguridad

import SecurityControls from './images/llmaas_security_002.png';

<img src={SecurityControls} alt="Controles de Seguridad LLMaaS" />

## 📈 Rendimiento y Escalabilidad

### Métricas de rendimiento

#### **Latencia**
- **Tiempo de respuesta promedio** : < 2 segundos para modelos 8B
- **Tiempo del primer token** : < 1500 ms
- **Débito de transmisión** : 15-100 tokens por segundo según el modelo

#### **Ancho de banda**
- **Peticiones simultáneas** : Hasta 1000 peticiones por minuto por inquilino
- **Escalado automático** : Adaptación de la carga en tiempo real según los modelos solicitados
- **Disponibilidad** : Objetivo de SLA del 99,9% de disponibilidad mensual

### Monitoreo en Tiempo Real

Acceso a través de **Console Cloud Temple** :
- Métricas de uso por modelo
- Gráficos de latencia y rendimiento
- Alertas sobre umbrales de rendimiento
- Historial de consultas

## 🌐 Integración y Ecosistema

### Compatibilidad OpenAI

El servicio LLMaaS es **compatible** con la API OpenAI :

```python
```

# Migración transparente
from openai import OpenAI

# Antes (OpenAI)
client_openai = OpenAI(api_key="sk-...")

# Después (Cloud Temple LLMaaS)
client_ct = OpenAI(
    api_key="votre-token-cloud-temple",
    base_url="https://api.ai.cloud-temple.com/v1"
)

# Código idéntico !
response = client_ct.chat.completions.create(
    model="granite3.3:8b",  # Modelo Cloud Temple
    messages=[{"role": "user", "content": "Bonjour"}]
)
```

### Ecosistema Soportado

#### **Frameworks de IA**
- ✅ **LangChain** : Integración nativa
- ✅ **Haystack** : Pipeline de documentos
- ✅ **Semantic Kernel** : Orquestación de Microsoft
- ✅ **AutoGen** : Agentes conversacionales

#### **Herramientas de Desarrollo**
- ✅ **Jupyter** : Notebooks interactivos
- ✅ **Streamlit** : Aplicaciones web rápidas
- ✅ **Gradio** : Interfaces de usuario de IA
- ✅ **FastAPI** : APIs backend

#### **Plataformas No-Code**
- ✅ **Zapier** : Automatizaciones
- ✅ **Make** : Integraciones visuales
- ✅ **Bubble** : Aplicaciones web

## 🔄 Ciclo de Vida de los Modelos

### Actualización de Modelos

import ModelLifecycle from './images/llmaas_lifecycle_003.png';

<img src={ModelLifecycle} alt="Ciclo de Vida de los Modelos LLMaaS" />

### Política de Versioning

- **Modelos estables** : Versiones fijas disponibles durante 6 meses
- **Modelos experimentales** : Versiones beta para early adopters
- **Depreciación** : Aviso de 3 meses antes del retiro
- **Migración** : Servicios profesionales disponibles para garantizar sus transiciones

## 💡 Buenas prácticas

### Optimización de Costos

1. **Selección del modelo**
   ```python
   # Tâche simple → modèle léger
   if task_complexity == "simple":
       model = "llama3.2:3b"  # Moins cher
   else:
       model = "llama3.1:70b"  # Plus capable
   ```

2. **Gestión del contexto**
   ```python
   # Réutiliser les conversations
   messages = [
       {"role": "system", "content": "Vous êtes un assistant IA."},
       {"role": "user", "content": "Question 1"},
       {"role": "assistant", "content": "Réponse 1"},
       {"role": "user", "content": "Question 2"}  # Réutilise le contexte
   ]
   ```

3. **Limitación de tokens**
   ```python
   response = client.chat.completions.create(
       model="granite3.3:8b",
       messages=messages,
       max_tokens=100,  # Limite la longueur
       temperature=0.7
   )
   ```

### Rendimiento

1. **Solicitudes asíncronas**
   ```python
   import asyncio
   import aiohttp
   
   async def batch_requests(prompts):
       tasks = [process_prompt(prompt) for prompt in prompts]
       return await asyncio.gather(*tasks)
   ```

2. **Streaming para UX**
   ```python
   # Interfaz en tiempo real
   for chunk in client.chat.completions.create(
       model="granite3.3:8b",
       messages=messages,
       stream=True
   ):
       if chunk.choices[0].delta.content:
           print(chunk.choices[0].delta.content, end="")
   ```

### Seguridad

1. **Validación de entradas**
   ```python
   def sanitize_input(user_input: str) -> str:
       # Limpiar las inyecciones potenciales
       cleaned = user_input.replace("```", "")
       return cleaned[:1000]  # Limitar el tamaño
   ```

2. **Gestión de errores**
   ```python
   try:
       response = client.chat.completions.create(...)
   except Exception as e:
       logger.error(f"LLMaaS error: {e}")
       return "Désolé, erreur temporaire."
   ```