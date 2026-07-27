---
title: Guía de inicio
---

Bienvenido a la guía de inicio de **PostgreSQL Administrado** Cloud Temple.

Esta guía le explica cómo conectarse a su clúster PostgreSQL administrado, recuperar sus credenciales de conexión e interactuar con el operador CloudNative-PG (CNPG) a través de Kubernetes.

---

## 1. Comprender los Servicios Expuestos

Cuando se despliega un clúster de PostgreSQL mediante el operador CNPG, se crean automáticamente varios servicios de Kubernetes para dirigir el tráfico a las instancias correctas.

| Servicio | Puerto | Rol |
| :--- | :--- | :--- |
| `<cluster-name>-rw` | `5432` | **Primary (lectura/escritura)** : dirige el tráfico únicamente a la instancia primaria actual. Úselo para aplicaciones que necesiten escribir datos. |
| `<cluster-name>-ro` | `5432` | **Replicas (solo lectura)** : distribuye el tráfico de lectura entre los réplicas disponibles. Úselo para consultas y reporting. |
| `<cluster-name>-r` | `5432` | **Read (cualquier instancia)** : dirige el tráfico hacia la primaria o cualquier réplica disponible. |

Puede listar estos servicios en su namespace con el siguiente comando:

```bash
kubectl get services -n <votre-namespace>
```

---

## 2. Recuperar sus Credenciales (Secretos)

Por razones de seguridad, las contraseñas se generan aleatoriamente y se almacenan de forma segura como *Secretos* de Kubernetes.

Se crean dos secretos principales:

- `<cluster-name>-superuser` : Credenciales del administrador del sistema (`postgres`).
- `<cluster-name>-app` : Credenciales del usuario de la aplicación (`app`).

Para recuperar la contraseña del usuario `postgres`, ejecute el siguiente comando (reemplazando con sus valores):

```bash
kubectl get secret <cluster-name>-superuser \
  -n <votre-namespace> \
  -o jsonpath='{.data.password}' | base64 -d
```

---

## 3. Conectar a la Base de Datos

Dado que las bases de datos no se exponen en Internet por defecto, puede acceder a ellas desde su equipo local utilizando un túnel seguro a través de `kubectl port-forward`.

### Paso 1: Abrir el túnel local

En una terminal, ejecute este comando para reenviar el puerto 5432 del servicio primario (`-rw`) a su máquina local:

```bash
kubectl port-forward svc/<cluster-name>-rw 5432:5432 -n <votre-namespace>
```

### Paso 2: Iniciar la conexión psql

En otra terminal, conéctese con el cliente `psql` :

```bash
psql -h localhost -U postgres
```

*(Se le pedirá que ingrese la contraseña recuperada en el paso 2)*

---

## 4. Verificar el Estado del Clúster y las Copias de Seguridad

Puede consultar los Custom Resources de CNPG y Barman para ver el estado de su infraestructura.

**Ver el estado de las instancias de PostgreSQL :**
```bash
kubectl get cluster -n <votre-namespace>
kubectl get pods -n <votre-namespace>
```

**Ver el estado de las copias de seguridad (Barman Cloud) :**
```bash
# Voir les politiques de sauvegarde planifiées
kubectl get scheduledbackup -n <votre-namespace>

# Voir l'historique des sauvegardes complétées
kubectl get backup -n <votre-namespace>
```