#!/usr/bin/env node
/**
 * Test JavaScript Node.js - Validation Documentation API LLMaaS
 * Teste l'exemple JavaScript axios de docs/llmaas/api.md
 */

const axios = require('axios');
const process = require('process');

// Configuration
const API_KEY = process.env.LLMAAS_API_KEY || 'test-token-for-docs';
const BASE_URL = 'https://api.ai.cloud-temple.com/v1';

async function testChatCompletion() {
    console.log('🧪 Test: JavaScript Node.js - Chat Completion');
    
    try {
        const response = await axios.post(
            `${BASE_URL}/chat/completions`,
            {
                model: 'granite3.3:8b',
                messages: [
                    { role: 'user', content: 'Bonjour !' }
                ],
                max_tokens: 100
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                },
                timeout: 30000
            }
        );
        
        console.log(`Status: ${response.status}`);
        console.log(`Content-Type: ${response.headers['content-type']}`);
        
        if (response.status === 200) {
            const result = response.data;
            console.log('✅ Succès!');
            console.log(`Content: ${result.choices[0].message.content}`);
            console.log(`Usage:`, result.usage);
            return true;
        } else {
            console.log(`❌ Status inattendu: ${response.status}`);
            return false;
        }
        
    } catch (error) {
        if (error.response) {
            console.log(`❌ Erreur HTTP ${error.response.status}`);
            console.log(`Response:`, error.response.data);
        } else if (error.request) {
            console.log('❌ Erreur réseau:', error.message);
        } else {
            console.log('❌ Erreur:', error.message);
        }
        return false;
    }
}

async function testModelsList() {
    console.log('\n🧪 Test: Liste des modèles');
    
    try {
        const response = await axios.get(
            `${BASE_URL}/models`,
            {
                headers: {
                    'Authorization': `Bearer ${API_KEY}`
                },
                timeout: 15000
            }
        );
        
        console.log(`Status: ${response.status}`);
        
        if (response.status === 200) {
            const result = response.data;
            const modelsCount = result.data?.length || 0;
            console.log(`✅ Succès! ${modelsCount} modèles trouvés`);
            
            // Affiche les 3 premiers modèles
            result.data?.slice(0, 3).forEach((model, index) => {
                console.log(`  ${index + 1}. ${model.id || 'N/A'}`);
            });
            
            return true;
        } else {
            console.log(`❌ Status inattendu: ${response.status}`);
            return false;
        }
        
    } catch (error) {
        if (error.response) {
            console.log(`❌ Erreur HTTP ${error.response.status}`);
            console.log(`Response:`, error.response.data);
        } else {
            console.log('❌ Erreur réseau:', error.message);
        }
        return false;
    }
}

async function testErrorHandling() {
    console.log('\n🧪 Test: Gestion d\'erreur (modèle inexistant)');
    
    try {
        const response = await axios.post(
            `${BASE_URL}/chat/completions`,
            {
                model: 'modele-inexistant-test',
                messages: [
                    { role: 'user', content: 'Test' }
                ],
                max_tokens: 10
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                },
                timeout: 15000
            }
        );
        
        console.log(`⚠️  Status inattendu: ${response.status}`);
        console.log(`Response:`, response.data);
        return false;
        
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.log(`Status: ${error.response.status}`);
            console.log('✅ Erreur 404 correctement gérée');
            console.log(`Error message: ${error.response.data?.error?.message || 'N/A'}`);
            return true;
        } else if (error.response) {
            console.log(`❌ Status inattendu: ${error.response.status}`);
            console.log(`Response:`, error.response.data);
            return false;
        } else {
            console.log('❌ Erreur réseau:', error.message);
            return false;
        }
    }
}

async function testInvalidAuth() {
    console.log('\n🧪 Test: Authentification invalide');
    
    try {
        const response = await axios.post(
            `${BASE_URL}/chat/completions`,
            {
                model: 'granite3.3:8b',
                messages: [
                    { role: 'user', content: 'Test' }
                ],
                max_tokens: 10
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer token-invalid-test'
                },
                timeout: 15000
            }
        );
        
        console.log(`⚠️  Status inattendu: ${response.status}`);
        console.log(`Response:`, response.data);
        return false;
        
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.log(`Status: ${error.response.status}`);
            console.log('✅ Erreur 401 correctement gérée');
            console.log(`Error type: ${error.response.data?.error?.type || 'N/A'}`);
            return true;
        } else if (error.response) {
            console.log(`❌ Status inattendu: ${error.response.status}`);
            console.log(`Response:`, error.response.data);
            return false;
        } else {
            console.log('❌ Erreur réseau:', error.message);
            return false;
        }
    }
}

async function testStreaming() {
    console.log('\n🧪 Test: Streaming basique');
    
    try {
        const response = await axios.post(
            `${BASE_URL}/chat/completions`,
            {
                model: 'granite3.3:8b',
                messages: [
                    { role: 'user', content: 'Dites bonjour en 5 mots' }
                ],
                stream: true,
                max_tokens: 50
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                },
                responseType: 'stream',
                timeout: 30000
            }
        );
        
        console.log(`Status: ${response.status}`);
        console.log(`Content-Type: ${response.headers['content-type']}`);
        
        if (response.status !== 200) {
            console.log('❌ Status code incorrect');
            return false;
        }
        
        console.log('\n📡 Streaming en cours...');
        console.log('Response: ', { output: '' });
        
        let chunksReceived = 0;
        let contentReceived = '';
        
        return new Promise((resolve) => {
            response.data.on('data', (chunk) => {
                const lines = chunk.toString().split('\n');
                
                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const data = line.slice(6);
                        
                        if (data === '[DONE]') {
                            console.log('\n✅ Signal [DONE] reçu');
                            resolve(true);
                            return;
                        }
                        
                        try {
                            const parsed = JSON.parse(data);
                            chunksReceived++;
                            
                            const content = parsed.choices?.[0]?.delta?.content || '';
                            if (content) {
                                process.stdout.write(content);
                                contentReceived += content;
                            }
                            
                            const finishReason = parsed.choices?.[0]?.finish_reason;
                            if (finishReason === 'stop') {
                                console.log(`\n✅ Streaming terminé (finish_reason: stop)`);
                                console.log(`\n📊 Chunks reçus: ${chunksReceived}`);
                                console.log(`Contenu total: ${contentReceived.length} caractères`);
                                resolve(chunksReceived > 0 && contentReceived.length > 0);
                                return;
                            }
                            
                        } catch (e) {
                            console.log(`\n❌ Erreur JSON: ${e.message}`);
                            console.log(`Data: ${data}`);
                            resolve(false);
                            return;
                        }
                    }
                }
            });
            
            response.data.on('end', () => {
                console.log(`\n📊 Stream terminé - Chunks: ${chunksReceived}, Contenu: ${contentReceived.length} chars`);
                resolve(chunksReceived > 0);
            });
            
            response.data.on('error', (error) => {
                console.log(`\n❌ Erreur stream: ${error.message}`);
                resolve(false);
            });
        });
        
    } catch (error) {
        if (error.response) {
            console.log(`❌ Erreur HTTP ${error.response.status}`);
            console.log(`Response:`, error.response.data);
        } else {
            console.log('❌ Erreur réseau:', error.message);
        }
        return false;
    }
}

async function main() {
    console.log('🚀 Tests JavaScript Node.js - Documentation LLMaaS API');
    console.log('='.repeat(55));
    
    const tests = [
        { name: 'Models List', func: testModelsList },
        { name: 'Chat Completion', func: testChatCompletion },
        { name: 'Error Handling', func: testErrorHandling },
        { name: 'Invalid Auth', func: testInvalidAuth },
        { name: 'Streaming', func: testStreaming }
    ];
    
    let passed = 0;
    const total = tests.length;
    
    for (const test of tests) {
        try {
            const result = await test.func();
            if (result) {
                passed++;
            }
        } catch (error) {
            console.log(`❌ Exception dans ${test.name}: ${error.message}`);
        }
    }
    
    console.log('\n' + '='.repeat(55));
    console.log(`📊 Résultats JavaScript: ${passed}/${total} tests réussis`);
    
    if (passed === total) {
        console.log('✅ Tous les tests JavaScript passent!');
        process.exit(0);
    } else {
        console.log('❌ Certains tests JavaScript échouent');
        process.exit(1);
    }
}

// Vérification des dépendances
try {
    require('axios');
} catch (error) {
    console.log('❌ Erreur: axios n\'est pas installé');
    console.log('Installez avec: npm install axios');
    process.exit(1);
}

if (require.main === module) {
    main();
}
