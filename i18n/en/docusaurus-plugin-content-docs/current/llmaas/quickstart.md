---
title: Getting Started Guide
sidebar_position: 3
---

# Quick Start Guide

This guide allows you to make your first LLMaaS API request in under 5 minutes.

## Prerequisites

- Access to the Cloud Temple Console
- Account with LLMaaS permissions enabled

## Step 1: Generate an API key

1. Log in to the Cloud Temple Console
2. Access your account settings
3. Generate a new LLMaaS API key
4. Copy and save the key (it will only be shown once)

## Step 2: Test the connection

Verify your key works by listing available models:

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

You should receive a JSON list of available models.

## Step 3: First request

Make your first text generation with a fast model:

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user",
        "content": "Write a haiku about technology."
      }
    ],
    "max_tokens": 100,
    "temperature": 0.7
  }'
```

## Step 4: Test with Python

Install the requests library and test with Python code:

```bash
pip install requests
```

```python
import requests
import json

# Configuration
API_KEY = "YOUR_API_KEY"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

# Headers
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Request
payload = {
    "model": "granite3.3:8b",
    "messages": [
        {
            "role": "user",
            "content": "Explain photosynthesis in 3 sentences."
        }
    ],
    "max_tokens": 150,
    "temperature": 0.7
}

response = requests.post(
    f"{BASE_URL}/chat/completions",
    headers=headers,
    json=payload
)

if response.status_code == 200:
    result = response.json()
    print(result["choices"][0]["message"]["content"])
else:
    print(f"Error: {response.status_code}")
    print(response.text)
```

## Model Selection

For your first test, use one of these recommended models:

| Model | Usage | Speed | Note |
|--------|--------|---------|------|
| `granite3.3:8b` | General use, balanced | Fast | Recommended for beginners |
| `qwen3:14b` | Complex tasks | Medium | "Thinking" mode visible |
| `gemma3:4b` | Fast tests, prototyping | Very fast | Detailed responses |

See the [complete model catalog](./models) for more options.

## Recommended Parameters

For starters, use these settings:

```json
{
  "temperature": 0.7,    // Moderate creativity
  "max_tokens": 200,     // Concise responses
  "top_p": 1.0,         // Standard diversity
  "stream": false       // Full response at once
}
```

## Common Error Handling

### Error 401 - Unauthorized
```json
{"error": {"message": "Invalid API key", "type": "invalid_request_error"}}
```
**Solution**: Check your API key in the Cloud Temple Console.

### Error 400 - Model not found
```json
{"error": {"message": "Model not found", "type": "invalid_request_error"}}
```
**Solution**: Use `/v1/models` to list available models.

### Error 429 - Rate limit exceeded
```json
{"error": {"message": "Rate limit exceeded", "type": "rate_limit_error"}}
```
**Solution**: Wait a few seconds and try again.

## Usage Monitoring

In the Cloud Temple Console, you can:
- View your requests in real-time
- Check your token consumption
- Set up cost alerts
- Analyze performance by model

## Next Steps

After your first test:

1. **Explore models**: Test different models according to your needs
2. **Optimize prompts**: Improve response quality
3. **Integrate into your application**: See the [API documentation](./api)
4. **Advanced use cases**: See the [tutorials](./tutorials)

## Support

In case of issues:
- Consult the [complete API documentation](./api)
- Check the service status in the Console
- Contact support via the Cloud Temple Console