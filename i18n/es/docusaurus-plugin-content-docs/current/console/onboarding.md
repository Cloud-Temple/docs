---
title: Onboarding
description: "Cree su organización, abra sus entornos y active sus productos. La configuración en la plataforma Cloud Temple, desde el registro hasta el primer despliegue."
tags: [onboarding]
---
import shivaLogin from '@site/docs/console/images/shiva_login.png'
import shivaHome from '@site/docs/console/images/shiva_home.png'
import tenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import orgAccess from '@site/docs/console/images/shiva_org_access.png'
import supportSelectProduct from '@site/docs/console/images/console_support_new_ticket_select_product.png'
import tenantProductsEdit from '@site/docs/console/images/shiva_org_tenant_products_edit.png'

# Onboarding

En Cloud Temple, no esperas tu cloud: lo creas.

Creas tu organización desde un formulario en línea, en pocos minutos. Tus entornos se crean a continuación con un clic desde la Consola. Puedes activar y desactivar productos con total autonomía, facturados según el uso. Todo ello sobre una infraestructura soberana, operada en Francia. La Consola señala, tenant por tenant y producto por producto, lo que corresponde a la calificación **SecNumCloud**.

<div class="cert-row cert-row--doc">
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">SecNumCloud 3.2</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">ISO 27001</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">HDS</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">ISAE 3402</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">C5</a>
</div>

## Lo que obtiene al registrarse

- **Sin demora** : un formulario es suficiente. Su organización se crea automáticamente, en pocos minutos, sin intervención de nuestros equipos.
- **Sin compromiso de volumen** : los productos de autoservicio se facturan según el uso.
- **Sin adenda** : abra nuevos entornos bajo su contrato existente, en las condiciones que este prevé.
- **Soberano por diseño** : infraestructura operada en Francia, y un perímetro de calificación **SecNumCloud** identificado en la Consola.

## Los tres recorridos

Esta página describe esta implementación, de principio a fin.

<div class="card-grid">
  <div class="card">
    <h3>Crear su organización</h3>
    <p>El formulario de registro en línea, y lo que se desencadena detrás.</p>
    <a href="#parcours-1-créer-votre-organisation" class="card-link">Comenzar &rarr;</a>
  </div>
  <div class="card">
    <h3>Agregar un entorno</h3>
    <p>Un nuevo tenant desde la Consola, en pocos minutos y de forma autónoma.</p>
    <a href="#parcours-2-ajouter-un-environnement" class="card-link">Ver cómo &rarr;</a>
  </div>
  <div class="card">
    <h3>Evolucionar un entorno</h3>
    <p>Activar un producto, abrir un acceso, delegar la gestión a un tercero.</p>
    <a href="#parcours-3-faire-évoluer-un-environnement" class="card-link">Explorar &rarr;</a>
  </div>
</div>

## El vocabulario, en dos palabras

Toda la plataforma se basa en dos niveles.

**Su organización**, es usted: su empresa. Es la que porta su contrato y su facturación.

**Un tenant**, es un entorno de trabajo dentro de su organización. Puede tener varios, aislados entre sí.

```
Votre organisation
├── Tenant « production »
├── Tenant « recette »
└── Tenant « lab »
```

Concretamente: firma **un** contrato y abre sus entornos en las condiciones que este prevé, sin mezclar nunca sus datos entre ellos. Aislar un entorno de pruebas, separar una filial o montar un laboratorio no requiere ninguna adenda.

Dos roles reciben accesos:

- el **propietario de la organización** accede a todo e invita a los demás usuarios
- el **propietario de un tenant** accede a ese entorno

Puede ser la misma persona.

---

## Recorrido 1. Crear su organización

Es su punto de entrada en la plataforma. Solo ocurre una vez, y se realiza en línea.

### El formulario de registro

Su implementación comienza con un **formulario de registro en línea**, al cual su interlocutor de Cloud Temple le comunicará el acceso.

Es breve y se completa en una sola vez. Le pide cuatro cosas.

**Quién es usted.** El nombre de su organización, su forma jurídica, su país de establecimiento y su número SIREN.

**Quién gestionará la plataforma.** El apellido, el nombre y la dirección de correo electrónico profesional de la persona que será **propietaria de la organización**. Ella será quien reciba los accesos y quien luego invite a sus colaboradores.

**Qué va a poner en ella.** Su sector de actividad, y la naturaleza de los datos que su proyecto manipula: datos de salud, datos personales, datos financieros, datos sensibles.

**Desde dónde se conectará.** Las direcciones IP públicas autorizadas a acceder a su Consola.

:::caution[Las direcciones IP no son opcionales]
Solo las direcciones que declare podrá acceder a la Consola.

Piense en incluir **todos** sus sitios y sus salidas VPN. Un olvido no es definitivo: la lista se enriquece luego desde la Consola, de forma autónoma.
:::

Termina declarando que está habilitado para comprometer a su organización, y aceptando las **[condiciones generales](https://www.cloud-temple.com/contracts)**.

### Lo que sucede a continuación

Todo es automático. Su organización se crea a partir de la información que ha ingresado, y su espacio se construye en los minutos siguientes: su directorio de identidades, su primer entorno, sus accesos.

No tiene que realizar ninguna acción durante este tiempo.

:::tip[Este primer entorno llega vacío]
El entorno creado por su registro no tiene **ningún producto activado**: está montado por nuestro automatismo, sin formulario, por lo tanto sin selección posible. Es deliberado: nada comienza a facturarse hasta que usted mismo no haya activado un producto.

Los cuatro productos en libre servicio están **disponibles** en su Consola desde la apertura. Disponible no significa activado: los activa cuando lo decida, ver [Les produits](#les-produits).
:::

### Lo que recibes

Un correo electrónico de **creación de cuenta**, dirigido al propietario designado. En él defines tu contraseña y activas tu segundo factor de autenticación.

Detalles: [Les courriels que vous recevez](#les-courriels-que-vous-recevez).

### Estás conectado

Llegas a la Consola, en la dirección [shiva.cloud-temple.com](https://shiva.cloud-temple.com). Puedes entonces invitar a tus colaboradores y asignarles permisos: ver [Identités et accès](/console/iam).

<img src={shivaLogin} />

<img src={shivaHome} />

:::tip[Et la partie contractuelle ?]
No te bloquea. La información administrativa y de facturación: datos de facturación, método de pago, referencia de orden de compra se completan en paralelo, con tu interlocutor de Cloud Temple. No esperas a que estén finalizadas para tomar el control de la plataforma.
:::

---

## Recorrido 2. Agregar un entorno

Ya tiene una organización y desea un nuevo entorno, para un entorno de pruebas, un nuevo proyecto o una filial.

**Realiza todo desde la Consola, en las condiciones de su contrato. No es necesario ningún trámite de nuestra parte.**

### Los pasos

1. Desde la Consola, cree un **nuevo tenant** desde la pestaña **Tenants**.
2. Dale un **nombre** descriptivo: *production*, *recette*, el nombre de un proyecto.
3. El creador del tenant se convierte en propietario por defecto. Podrá agregar otros responsables después, a través de la pestaña **Usuarios**, una vez conectado al tenant.
4. Elija los **productos** a activar en él.

<img src={tenantNew} />

### Lo que sucede a continuación

Su entorno se construye automáticamente en pocos minutos. No tiene nada que hacer.

Si el propietario del tenant aún no tiene una cuenta, recibe su correo de creación de cuenta. Si ya tiene una, accede al nuevo entorno sin nueva invitación.

:::tip[Nada se activa por defecto]
Usted elige los productos del tenant **desde el formulario de creación** (el paso 4 anterior) y puede modificar este alcance en cualquier momento. Ningún producto se abre sin que usted lo haya marcado: solo paga lo que consume.
:::

---

## Recorrido 3. Evolucionar un entorno

Sus necesidades cambian. A continuación se explica cómo evolucionar un entorno existente.

### Activar un producto

Si el producto forma parte de su catálogo, aparece en la Consola: **actívelo en completa autonomía** en el tenant correspondiente. Espere unos minutos antes de que esté disponible.

Desde la lista de sus tenants, la acción **« Modificar los productos »** abre el catálogo. Marque los que desee habilitar, desmarque los que desee detener y luego **Guardar**.

Si no aparece, es que aún no está en su catálogo: ver [Demander un produit supplémentaire](#demander-un-produit-supplémentaire).

<img src={tenantProductsEdit} />

### Detener un producto

Puede desactivar un producto que ya no utiliza, y la facturación se detiene con él.

Se realiza una verificación antes: si aún se están consumiendo recursos, la desactivación se deniega y la Consola le indica qué es lo que bloquea. Elimine estos recursos y vuelva a intentarlo.

Es una protección: evita cortar un servicio que aún se utiliza y perder sus datos.

### Añadir una dirección IP

El **añadido** se realiza desde la Consola, en **Administración > Acceso**. La página lista las direcciones públicas autorizadas; el botón **« Añadir una IP »** declara una nueva, en notación CIDR, con una descripción.

Se requiere el permiso `console_public_access_read` para consultar la lista, y `console_public_access_write` para enriquecerla.

Calcule unos **diez minutos** antes de que la nueva dirección sea efectiva.

:::caution[Esta lista es la de su organización]
Solo existe una lista para toda la organización. La página es accesible desde un tenant, pero **una dirección añadida allí autoriza el acceso a la Consola para toda la organización**, no solo para ese tenant.
:::

La **supresión** de una dirección, en cambio, se realiza mediante una **solicitud de soporte** desde la Consola. Es deliberado: retirar un acceso es una operación irreversible para quienes se conectan detrás.

<img src={orgAccess} />

### Cambiar un responsable

El propietario de la organización gestiona los usuarios y sus permisos directamente desde la Consola: ver [Identités et accès](/console/iam).

También puede **delegar** sus permisos a un socio externo o a un jefe de proyecto de Cloud Temple: útil si confía la operación a un tercero.

---

## Los correos electrónicos que recibe {/* #les-courriels-que-vous-recevez */}

Solo un correo electrónico requiere una acción de su parte.

### El correo electrónico de creación de cuenta

| | |
| --- | --- |
| **Remitente** | `shiva.support@cloud-temple.com` |
| **Quién lo recibe** | El propietario de la organización, luego cualquier propietario de tenant que aún no tenga cuenta |
| **Qué contiene** | Un enlace para elegir su contraseña y activar su segundo factor (OTP) |
| **Cuándo** | Algunos minutos después de la creación |
| **Validez** | **96 horas** |

:::warning[¿Enlace expirado?]
Más allá de 96 horas, el enlace ya no funciona. Es una medida de seguridad, no una avería.

Escriba a **`shiva.support@cloud-temple.com`**: le enviaremos uno nuevo.

Es el único canal utilizable a esta etapa: sin acceso a la Consola, aún no puede abrir una solicitud allí.
:::

:::note[¿No ha recibido nada?]
Revise su carpeta de correo no deseado: el mensaje a veces se filtra. Es enviado por **`shiva.support@cloud-temple.com`**: autorice esta dirección en su mensajería. Si no ha recibido nada en la hora siguiente, contáctenos a la misma dirección.
:::

---

## Los productos {/* #les-produits */}

### Lo que usted activa por sí mismo

Ningún producto se activa de forma predeterminada, ni en la creación de su organización, ni en la de un tenant. Cuatro productos están en cambio **disponibles** en su Consola desde el inicio: los activa usted mismo, en el tenant de su elección. Se **facturan según el uso**, sin compromiso de volumen ni tramo por negociar: solo paga lo que consume.

| Producto | Para qué sirve | Más información |
| --- | --- | --- |
| **VM Instances** | Máquinas virtuales bajo demanda | [Documentación](/public_cloud/vm_instances) |
| **VPC** | Una red privada virtual | [Documentación](/network/vpc) |
| **LLMaaS** | Modelos de IA soberanos | [Documentación](/llmaas) |
| **Object Storage** | Almacenamiento compatible con S3 | [Documentación](/storage/oss) |

### El resto del catálogo

Estos productos se abren en el marco de su contrato, con su interlocutor comercial:

- [IaaS VMware](/iaas_vmware) et [IaaS OpenSource](/iaas_opensource)
- [Bare metal](/iaas_bare-metal)
- [PaaS OpenShift](/paas_openshift) et [Kubernetes managé](/managed_kubernetes)
- Bases de datos gestionadas : [PostgreSQL](/managed_postgresql), [MariaDB](/managed_mariadb)
- [Bastion](/bastion)
- [Housing](/housing)
- [Backbone privé](/network/private_backbone) et [Internet](/network/internet)
- [Marketplace](/marketplace)

Vista general : [nos produits](/managedproducts_overview).

---

## Solicitar un producto adicional {/* #demander-un-produit-supplémentaire */}

¿El producto que desea no aparece en su Consola? Todavía no está en su catálogo.

1. Desde la Consola, cree una **solicitud de soporte**
2. Indique el **producto** concernido y el volumen previsto si lo conoce
3. Nosotros nos pondremos en contacto con usted sobre las condiciones
4. Una vez validado, el producto aparecerá en su Consola
5. Puede activarlo en uno o varios tenants

<img src={supportSelectProduct} />

### Cambiar de nivel de soporte

Existen tres niveles, presentados en [notre site](https://www.cloud-temple.com/produits/niveaux-de-support).

Puede subir o bajar de nivel: solicítelo a través del soporte desde la Consola, o a su interlocutor comercial.

---

## Preguntas frecuentes

**¿Cuánto tiempo toma la creación de un entorno?**
Algunos minutos, en los tres casos. La creación es automática, ya sea para su primera llegada o para un nuevo entorno.

**¿Cuántos tenants puedo crear?**
Tantos como sea necesario, en las condiciones de su contrato.

**Mi proyecto maneja datos de salud o datos sensibles. ¿Puedo registrarme en línea?**
Sí. Indíquelo en el formulario: su organización se crea normalmente, y nuestros equipos le acompañan en la apertura de los servicios correspondientes.

**¿Puedo delegar la gestión a un proveedor?**
Sí. El propietario de la organización puede delegar sus derechos a un socio externo o a un jefe de proyecto de Cloud Temple.

**He olvidado una dirección IP, ya no puedo conectarme.**
Si un colega de su organización aún tiene acceso a la Consola, añade la dirección desde **Administración > Acceso**. Si nadie tiene acceso, escriba a **`shiva.support@cloud-temple.com`**: es el canal de respaldo cuando la Consola no está accesible.

**Acabo de activar un producto, aún no lo veo.**
Espere unos minutos. Si aún no aparece, contacte al soporte.

---

## Ir más allá

<div class="card-grid">
  <div class="card">
    <h3>Primeros pasos con la Consola</h3>
    <p>Recorrido completo de la interfaz: tenants, usuarios, accesos, costos.</p>
    <a href="./console_quickstart" class="card-link">Iniciar el Quickstart &rarr;</a>
  </div>
  <div class="card">
    <h3>Identidades y accesos</h3>
    <p>Invite a tus colaboradores y asigna sus permisos, tenant por tenant.</p>
    <a href="./iam" class="card-link">Explorar el IAM &rarr;</a>
  </div>
  <div class="card">
    <h3>Solicitar recursos</h3>
    <p>Despliega tus primeros recursos y sigue su disponibilidad.</p>
    <a href="./orders" class="card-link">Ver las solicitudes &rarr;</a>
  </div>
  <div class="card">
    <h3>Facturación</h3>
    <p>Sigue tu consumo por tenant y por producto, a lo largo del mes.</p>
    <a href="./billing/concepts" class="card-link">Acceder al módulo &rarr;</a>
  </div>
  <div class="card">
    <h3>Responsabilidad compartida</h3>
    <p>Lo que Cloud Temple opera, lo que queda a tu cargo.</p>
    <a href="../shared-responsibility" class="card-link">Leer el modelo &rarr;</a>
  </div>
  <div class="card">
    <h3>Compromisos y SLA</h3>
    <p>Niveles de servicio, disponibilidad y condiciones contractuales.</p>
    <a href="https://www.cloud-temple.com/contracts" class="card-link">Consultar los compromisos &rarr;</a>
  </div>
</div>