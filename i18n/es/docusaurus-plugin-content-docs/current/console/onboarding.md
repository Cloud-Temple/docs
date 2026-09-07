---
title: Onboarding
description: Cree su organización, abra sus entornos y active sus productos — la configuración en la plataforma Cloud Temple, desde el registro hasta el primer despliegue.
tags: [onboarding]
---
import shivaLogin from '@site/docs/console/images/shiva_login.png'
import shivaHome from '@site/docs/console/images/shiva_home.png'
import tenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import orgAccess from '@site/docs/console/images/shiva_org_access.png'
import supportSelectProduct from '@site/docs/console/images/console_support_new_ticket_select_product.png'
import tenantProductsEdit from '@site/docs/console/images/shiva_org_tenant_products_edit.png'

# Onboarding

En Cloud Temple, no esperas tu nube: la creas.

Crea tu organización desde un formulario en línea en pocos minutos. Tus entornos se crean a continuación con un solo clic desde la Consola. Puedes activar y desactivar productos con total autonomía, facturados según el uso. Todo ello sobre una infraestructura soberana, operada en Francia. La Consola indica, por inquilino y por producto, lo que corresponde a la calificación **SecNumCloud**.

<div class="cert-row cert-row--doc">
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">SecNumCloud 3.2</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">ISO 27001</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">HDS</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">ISAE 3402</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">C5</a>
</div>

## Lo que obtienes al suscribirte

- **Sin demora** : un formulario es suficiente. Tu organización se crea automáticamente, en unos minutos, sin intervención de nuestros equipos.
- **Sin compromiso de volumen** : los productos de autoservicio se facturan según el uso.
- **Sin adenda** : abre nuevos entornos bajo tu contrato existente, en las condiciones que este establece.
- **Soberano por diseño** : infraestructura operada en Francia, y un perímetro de calificación **SecNumCloud** identificado en la Consola.

## Los tres recorridos

Esta página describe esta configuración, de extremo a extremo.

<div class="card-grid">
  <div class="card">
    <h3>Crear su organización</h3>
    <p>El formulario de registro en línea y lo que se activa detrás.</p>
    <a href="#recorrido-1--crear-su-organización" class="card-link">Comenzar &rarr;</a>
  </div>
  <div class="card">
    <h3>Agregar un entorno</h3>
    <p>Un nuevo tenant desde la Consola, en unos minutos y de forma autónoma.</p>
    <a href="#recorrido-2--agregar-un-entorno" class="card-link">Ver cómo &rarr;</a>
  </div>
  <div class="card">
    <h3>Evolucionar un entorno</h3>
    <p>Activar un producto, habilitar un acceso, delegar la gestión a un tercero.</p>
    <a href="#ruta-3--evolucionar-un-entorno" class="card-link">Explorar &rarr;</a>
  </div>
</div>

## El vocabulario, en dos palabras

Toda la plataforma se basa en dos niveles.

**Su organización**, es usted: su empresa. Gestiona su contrato y su facturación.

**Un tenant**, es un entorno de trabajo dentro de su organización. Puede tener varios, aislados entre sí.

```
Su organización
├── Tenant «production»
├── Tenant «recette»
└── Tenant «lab»
```

En la práctica: firma **un** contrato y abre sus entornos en las condiciones que este establece, sin mezclar nunca sus datos entre ellos. Aislar un entorno de pruebas, aislar una filial o montar un laboratorio no requiere un anexo contractual.

Dos roles reciben accesos:

- el **propietario de la organización** — accede a todo e invita a otros usuarios
- el **propietario de un tenant** — accede a este entorno

Puede ser la misma persona.

---

## Recorrido 1 — Crear su organización

Es su punto de entrada a la plataforma. Solo ocurre una vez y se realiza en línea.

### El formulario de registro

Su configuración comienza con un **formulario de registro en línea**, al que su contacto de Cloud Temple le facilitará el acceso.

Es breve y se completa de una sola vez. Le solicita cuatro elementos.

**Quién es usted.** El nombre de su organización, su forma jurídica, su país de establecimiento y su número SIREN.

**Quién administrará la plataforma.** El nombre, los apellidos y la dirección de correo electrónico profesional de la persona que será **propietaria de la organización**. Esta persona recibirá los accesos e invitará posteriormente a sus colaboradores.

**Qué datos almacenará.** Su sector de actividad y la naturaleza de los datos que manipulará su proyecto: datos de salud, datos personales, datos financieros, datos sensibles.

**Desde dónde se conectará.** Las direcciones IP públicas autorizadas para acceder a su Consola.

:::caution[Las direcciones IP no son opcionales]
Solo las direcciones que declare podrán acceder a la Consola.

Recuerde incluir **todos** sus sitios y sus salidas VPN. Un olvido no es definitivo: la lista se ampliará posteriormente desde la Consola, de forma autónoma.
:::

Finalice declarando que está autorizado para comprometer a su organización y aceptando las **[condiciones generales](/contracts)**.

### Lo que sucede a continuación

Todo es automático. Su organización se crea a partir de la información que ha ingresado, y su espacio se configura en los minutos siguientes: su directorio de identidades, su primer entorno, sus accesos.

No necesita realizar ninguna acción durante este tiempo.

:::tip[Este primer entorno llega vacío]
El entorno creado por su registro no tiene **ningún producto activado**: se configura mediante nuestro sistema automatizado, sin formulario, por lo que no es posible realizar ninguna selección. Esto es intencional: no se comienza a facturar nada hasta que usted mismo active un producto.

Los cuatro productos de autoservicio están **disponibles** en su Consola desde el inicio. Disponible no significa activado: los activa cuando usted lo decida, consulte [Los productos](#los-productos).
:::

### Lo que recibes

Un correo electrónico de **creación de cuenta**, dirigido al propietario designado. Allí configurará su contraseña y activará su segundo factor de autenticación.

Detalles : [Los correos electrónicos que recibe](#los-correos-electrónicos-que-recibe).

### Estás conectado

Accedes a la Consola en la dirección [shiva.cloud-temple.com](https://shiva.cloud-temple.com). A partir de este momento, puedes invitar a tus colaboradores y asignarles permisos: consulta [Identités et accès](/console/iam).

<img src={shivaLogin} />

<img src={shivaHome} />

:::tip[¿Y la parte contractual?]
No te impide avanzar. La información administrativa y de facturación: datos de facturación, método de pago, referencia de la orden de compra, se completa en paralelo junto con tu interlocutor de Cloud Temple. No es necesario esperar a que estén finalizadas para empezar a utilizar la plataforma.
:::

---

## Recorrido 2 — Agregar un entorno

Ya cuenta con una organización y desea un nuevo entorno — para pruebas, un nuevo proyecto o una filial.

**Realiza todo desde la Consola, bajo las condiciones de su contrato. No es necesario realizar ninguna gestión con nosotros.**

### Los pasos

1. Desde la Consola, cree un **nuevo tenant** desde la pestaña **Tenants**.
2. Asigne un **nombre** descriptivo: *producción*, *pruebas*, el nombre de un proyecto.
3. El creador del tenant se convierte en su propietario por defecto. Podrá agregar otros administradores posteriormente, a través de la pestaña **Usuarios**, una vez conectado al tenant.
4. Seleccione los **productos** a activar.

<img src={tenantNew} />

### Qué sucede a continuación

Su entorno se configura automáticamente en unos pocos minutos. No tiene que hacer nada.

Si el propietario del tenant aún no tiene una cuenta, recibirá el correo electrónico de creación de cuenta. Si ya tiene una, accederá al nuevo entorno sin necesidad de una nueva invitación.

:::tip[Nada se activa por defecto]
Usted selecciona los productos del tenant **desde el formulario de creación** — el paso 4 anterior — y puede ajustar este alcance en cualquier momento. Ningún producto se habilita sin que usted lo seleccione: solo paga por lo que consume.
:::

---

## Ruta 3 — Evolucionar un entorno

Sus necesidades cambian. A continuación, se explica cómo evolucionar un entorno existente.

### Activar un producto

Si el producto forma parte de su catálogo, aparecerá en la Consola: **actívelo de forma completamente autónoma** en el tenant correspondiente. Espere unos minutos antes de que esté disponible para su uso.

Desde la lista de sus tenants, la acción **« Modificar productos »** abre el catálogo. Marque los que desea habilitar, desmarque los que desea desactivar y luego **Guardar**.

Si no aparece, es porque aún no está en su catálogo: consulte [Demander un produit supplémentaire](#solicitar-un-producto-adicional).

<img src={tenantProductsEdit} />

### Detener un producto

Puede desactivar un producto que ya no utilice, y la facturación cesará con él.

Se realiza una verificación previa: si aún se están consumiendo recursos, la desactivación se rechazará y la Consola le indicará qué está bloqueando el proceso. Elimine estos recursos y vuelva a intentarlo.

Se trata de una medida de protección: evita interrumpir un servicio que aún se está utilizando y perder sus datos.

### Añadir una dirección IP

El **agregado** se realiza desde la Consola, en **Administración > Acceso**. La página enumera las direcciones públicas autorizadas; el botón **« Agregar una IP »** permite declarar una nueva, en notación CIDR, con una descripción.

Se requiere el permiso `console_public_access_read` para consultar la lista, y `console_public_access_write` para ampliarla.

Espere una **decena de minutos** antes de que la nueva dirección tenga efecto.

:::caution[Esta lista es la de su organización]
Solo existe una lista para toda la organización. La página es accesible desde un tenant, pero **una dirección agregada allí autoriza el acceso a la Consola para toda la organización**, no solo para este tenant.
:::

La **eliminación** de una dirección, por su parte, se realiza mediante una **solicitud de soporte** desde la Consola. Esto es intencional: retirar un acceso es una operación irreversible para quienes se conecten desde dicha dirección.

<img src={orgAccess} />

### Cambiar un responsable

El propietario de la organización gestiona a los usuarios y sus derechos directamente desde la Consola : ver [Identités et accès](/console/iam).

También puede **delegar** sus derechos a un socio externo o a un jefe de proyecto Cloud Temple : útil si confía la operación a un tercero.

---

## Los correos electrónicos que recibe

Solo un correo electrónico requiere una acción por su parte.

### El correo electrónico de creación de cuenta

| | |
| --- | --- |
| **Remitente** | `shiva.support@cloud-temple.com` |
| **Destinatarios** | El propietario de la organización, y luego cualquier propietario de tenant que aún no tenga una cuenta |
| **Contenido** | Un enlace para elegir su contraseña y activar su segundo factor (OTP) |
| **Cuándo** | Algunos minutos después de la creación |
| **Validez** | **96 horas** |

:::warning[¿Enlace expirado?]
Pasadas 96 horas, el enlace deja de funcionar. Es una medida de seguridad, no una falla.

Escriba a **`shiva.support@cloud-temple.com`**: le reenviaremos uno.

Es el único canal utilizable en esta etapa: sin acceso a la Consola, aún no puede abrir una solicitud allí.
:::

:::note[¿No ha recibido nada?]
Revise su correo no deseado: el mensaje a veces se filtra. Es enviado por **`shiva.support@cloud-temple.com`**: autorice esta dirección en su cliente de correo. Si no recibe nada en la siguiente hora, contáctenos a la misma dirección.
:::

---

## Los productos

### Lo que usted activa por sí mismo

Ningún producto se activa automáticamente, ni al crear su organización, ni al crear un tenant. Sin embargo, cuatro productos están **disponibles** en su Consola desde el inicio: usted los activa por sí mismo, en el tenant de su elección, y están **facturados por uso** — sin compromiso de volumen, sin tramos que negociar, solo paga lo que consume.

| Producto | Para qué sirve | Más información |
| --- | --- | --- |
| **VM Instances** | Máquinas virtuales bajo demanda | [Documentation](/public_cloud/vm_instances) |
| **VPC** | Una red privada virtual | [Documentation](/network/vpc) |
| **LLMaaS** | Modelos de IA soberanos | [Documentation](/llmaas) |
| **Object Storage** | Almacenamiento compatible con S3 | [Documentation](/storage/oss) |

### El resto del catálogo

Estos productos se habilitan en el marco de su contrato, con su interlocutor comercial :

- [IaaS VMware](/iaas_vmware) y [IaaS OpenSource](/iaas_opensource)
- [Bare metal](/iaas_bare-metal)
- [PaaS OpenShift](/paas_openshift) y [Kubernetes managé](/managed_kubernetes)
- Bases de datos gestionadas : [PostgreSQL](/managed_postgresql), [MariaDB](/managed_mariadb)
- [Bastion](/bastion)
- [Housing](/housing)
- [Backbone privé](/network/private_backbone) y [Internet](/network/internet)
- [Marketplace](/marketplace)

Vista general : [nos produits](/managedproducts_overview).

---

## Solicitar un producto adicional

¿El producto que desea no aparece en su Consola? Aún no está en su catálogo.

1. Desde la Consola, cree una **solicitud de soporte**
2. Indique el **producto** correspondiente y el volumen previsto, si lo conoce
3. Nos pondremos en contacto con usted para informarle sobre las condiciones
4. Una vez validado, el producto aparecerá en su Consola
5. Podrá activarlo en uno o varios tenants

<img src={supportSelectProduct} />

### Cambiar de nivel de soporte

Existen tres niveles, presentados en [nuestro sitio](https://www.cloud-temple.com/produits/niveaux-de-support).

Puede subir o bajar de nivel: realice la solicitud a través del soporte desde la Consola, o con su contacto comercial.

---

## Preguntas frecuentes

**¿Cuánto tiempo tarda la creación de un entorno?**
Algunos minutos, en los tres casos. La creación es automática, ya sea para su primer acceso o para un nuevo entorno.

**¿Cuántos tenants puedo crear?**
Todos los que sean necesarios, dentro de las condiciones de su contrato.

**Mi proyecto contiene datos de salud o datos sensibles. ¿Puedo registrarme en línea?**
Sí. Indíquelo en el formulario: su organización se crea normalmente y nuestros equipos le asistirán con la habilitación de los servicios correspondientes.

**¿Puedo delegar la gestión a un proveedor de servicios?**
Sí. El propietario de la organización puede delegar sus derechos a un socio externo o a un jefe de proyecto de Cloud Temple.

**He olvidado una dirección IP y ya no puedo conectarme.**
Si un colega de su organización aún tiene acceso a la Consola, puede agregar la dirección desde **Administración > Acceso**. Si nadie tiene acceso, escriba a **`shiva.support@cloud-temple.com`**: es el canal de respaldo cuando la Consola no es accesible.

**Acabo de activar un producto, pero aún no lo veo.**
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
    <a href="./iam" class="card-link">Explorar IAM &rarr;</a>
  </div>
  <div class="card">
    <h3>Solicitar recursos</h3>
    <p>Despliega tus primeros recursos y sigue su disponibilidad.</p>
    <a href="./orders" class="card-link">Ver solicitudes &rarr;</a>
  </div>
  <div class="card">
    <h3>Facturación</h3>
    <p>Seguimiento de tu consumo por tenant y por producto, a lo largo del mes.</p>
    <a href="./billing/concepts" class="card-link">Acceder al módulo &rarr;</a>
  </div>
  <div class="card">
    <h3>Responsabilidades compartidas</h3>
    <p>Lo que opera Cloud Temple y lo que queda a tu cargo.</p>
    <a href="../shared-responsibility" class="card-link">Leer el modelo &rarr;</a>
  </div>
  <div class="card">
    <h3>Compromisos y SLA</h3>
    <p>Niveles de servicio, disponibilidad y condiciones contractuales.</p>
    <a href="../contracts" class="card-link">Consultar los compromisos &rarr;</a>
  </div>
</div>