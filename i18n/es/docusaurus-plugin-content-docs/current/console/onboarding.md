---
title: Onboarding
description: "Cree su organización, proteja sus accesos, abra sus entornos, invite a sus equipos y active sus productos. La puesta en marcha en la plataforma Cloud Temple, desde el registro hasta el primer despliegue."
tags: [onboarding]
---
import shivaLogin from '@site/docs/console/images/shiva_login.png'
import shivaHome from '@site/docs/console/images/shiva_home.png'
import imgSelector from '@site/docs/console/images/shiva_org_selector.png'
import tenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import orgAccess from '@site/docs/console/images/shiva_org_access.png'
import shivaOnboard_004 from '@site/docs/console/iam/images/shiva_onboard_004.png'
import shivaOnboard_005 from '@site/docs/console/iam/images/shiva_onboard_005.png'
import supportSelectProduct from '@site/docs/console/images/console_support_new_ticket_select_product.png'
import tenantProductsEdit from '@site/docs/console/images/shiva_org_tenant_products_edit.png'
import shivaOnboard_008 from '@site/docs/console/images/shiva_onboard_008.png'

# Onboarding

En Cloud Temple, usted no espera su cloud: lo crea.

Crea su organización desde un formulario en línea, en pocos minutos. Sus entornos se crean a continuación con un clic desde la consola. Puede activar y desactivar productos con total autonomía, facturados según el uso. Todo ello sobre una infraestructura soberana, operada en Francia. La consola señala, tenant por tenant y producto por producto, lo que corresponde a la cualificación **SecNumCloud**.


## Lo que obtiene al registrarse

- **Sin demora**: un formulario es suficiente. Su organización se crea automáticamente, en pocos minutos, sin intervención de nuestros equipos.
- **Sin compromiso de volumen**: los productos en autoservicio se facturan según el uso.
- **Sin adenda**: abra nuevos entornos bajo su contrato existente, en las condiciones que este prevé.
- **Soberano por diseño**: infraestructura operada en Francia, y un perímetro de cualificación **SecNumCloud** identificado en la consola.

<a id="les-trois-parcours"></a>

## Las etapas de su puesta en marcha

Esta página describe su puesta en marcha de principio a fin, en el orden en que la vive. Cada etapa es breve y remite a la documentación de referencia para el detalle.

1. [Crear su organización](#etapa-1-crear-su-organización): el formulario de registro, y lo que se desencadena detrás.
2. [Conectarse y proteger sus accesos](#etapa-2-conectarse-y-proteger-sus-accesos): la conexión, el doble factor y las direcciones IP autorizadas.
3. [Elegir o crear un entorno](#etapa-3-elegir-o-crear-un-entorno): un tenant por uso, creado en pocos minutos y de forma autónoma.
4. [Invitar a sus colaboradores](#etapa-4-invitar-a-sus-colaboradores): sus cuentas y sus permisos, tenant por tenant.
5. [Activar sus productos](#etapa-5-activar-sus-productos): abrir, detener o solicitar un producto.
6. [Automatizar](#etapa-6-automatizar): la API de la consola y el provider Terraform.

Una vez todo en marcha, el [recorrido por la consola](./console_quickstart) le presenta el resto de la interfaz: panel de control, costos, registro de actividades, soporte.

## El vocabulario, en dos palabras

Toda la plataforma se basa en dos niveles.

**Su organización** es usted: su empresa. Es la que porta su contrato y su facturación.

**Un tenant** es un entorno de trabajo dentro de su organización. Puede tener varios, aislados entre sí.

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

<a id="parcours-1-créer-votre-organisation"></a>

## Etapa 1. Crear su organización

Es su punto de entrada en la plataforma. Solo ocurre una vez, y se realiza en línea.

### El formulario de registro

Su puesta en marcha comienza con un **formulario de registro en línea**, cuyo acceso le comunica su interlocutor de Cloud Temple.

Es breve y se completa de una sola vez. Le pide cuatro cosas.

**Quién es usted.** El nombre de su organización, su forma jurídica, su país de establecimiento y su número SIREN.

**Quién gestionará la plataforma.** El apellido, el nombre y la dirección de correo electrónico profesional de la persona que será **propietaria de la organización**. Ella será quien reciba los accesos y quien luego invite a sus colaboradores.

**Qué va a poner en ella.** Su sector de actividad, y la naturaleza de los datos que su proyecto manipula: datos de salud, datos personales, datos financieros, datos sensibles.

**Desde dónde se conectará.** Las direcciones IP públicas autorizadas a acceder a su consola.

:::caution[Las direcciones IP no son opcionales]
Solo las direcciones que declare podrán acceder a la consola.

Piense en incluir **todos** sus sitios y sus salidas VPN. Un olvido no es definitivo: la lista se amplía luego desde la consola, de forma autónoma (ver [Añadir una dirección IP](#añadir-una-dirección-ip)).
:::

Termina declarando que está habilitado para comprometer a su organización, y aceptando las **[condiciones generales](https://www.cloud-temple.com/contracts)**.

### Lo que sucede a continuación

Todo es automático. Su organización se crea a partir de la información que ha introducido, y su espacio se construye en los minutos siguientes: su directorio de identidades, su primer entorno, sus accesos.

No tiene que realizar ninguna gestión durante este tiempo.

:::tip[Este primer entorno llega vacío]
El entorno creado por su registro no tiene **ningún producto activado**: lo monta nuestro automatismo, sin formulario, por lo tanto sin selección posible. Es deliberado: nada comienza a facturarse mientras usted mismo no haya activado un producto.

Los cuatro productos en autoservicio están **disponibles** en su consola desde la apertura. Disponible no significa activado: los activa cuando lo decida, ver [Los productos](#les-produits).
:::

### Lo que recibe

Un correo electrónico de **creación de cuenta**, dirigido al propietario designado. En él define su contraseña y activa su segundo factor de autenticación.

Detalles: [Los correos electrónicos que recibe](#les-courriels-que-vous-recevez).

:::tip[¿Y la parte contractual?]
No le bloquea. La información administrativa y de facturación (datos de facturación, método de pago, referencia de orden de compra) se completa en paralelo, con su interlocutor de Cloud Temple. No necesita esperar a que esté finalizada para tomar el control de la plataforma.
:::

---

<a id="connexion-à-votre-tenant-cloud-temple"></a>

## Etapa 2. Conectarse y proteger sus accesos

<a id="vous-êtes-connecté"></a>

### Conectarse

La consola es accesible en la dirección [shiva.cloud-temple.com](https://shiva.cloud-temple.com), o desde la dirección directa que se le ha comunicado por correo electrónico.

1. En la primera página, indique la [organización](./iam/concepts.md#organizaciones) en la que se creó su cuenta y, a continuación, haga clic en **Iniciar sesión**.
2. Autentíquese con su contraseña y, después, con el código de un solo uso de su segundo factor.

<img src={shivaLogin} />

Llega a la página de inicio de la consola.

<img src={shivaHome} />

### El doble factor es obligatorio

La autenticación de doble factor (MFA) es **obligatoria** para todas las cuentas de la consola: después de la contraseña, la consola solicita un código de un solo uso. Usted la activa desde el correo electrónico de creación de cuenta. Si su organización está federada con su propio directorio, consulte los [mecanismos de autenticación](./iam/concepts.md#mecanismos-de-autenticación).

### Añadir una dirección IP

Al estar la consola alojada en una infraestructura cualificada SecNumCloud, su acceso está limitado a las direcciones IP públicas que usted ha autorizado.

El **añadido** se realiza desde la consola, en **Administración > Acceso**. La página lista las direcciones públicas autorizadas; el botón **« Añadir una IP »** declara una nueva, en notación CIDR, con una descripción.

Se requiere el permiso `console_public_access_read` para consultar la lista, y `console_public_access_write` para ampliarla.

Calcule unos **diez minutos** antes de que la nueva dirección sea efectiva.

:::caution[Esta lista es la de su organización]
Solo existe una lista para toda la organización. La página es accesible desde un tenant, pero **una dirección añadida allí autoriza el acceso a la consola para toda la organización**, no solo para ese tenant.
:::

La **supresión** de una dirección, en cambio, se realiza mediante una **solicitud de soporte** desde la consola. Es deliberado: retirar un acceso es una operación irreversible para quienes se conectan desde esa dirección.

<img src={orgAccess} />

Para ir más allá: las [recomendaciones de seguridad](./security/security_recommendations.md) para el acceso a la consola.

---

<a id="parcours-2-ajouter-un-environnement"></a>

## Etapa 3. Elegir o crear un entorno

### Elegir su tenant de trabajo

Los recursos técnicos (cómputo, almacenamiento, red…) son **exclusivos de cada tenant** y no se comparten entre tenants. Antes de actuar, elija el tenant en el que trabaja:

- desde la barra superior de la consola, abra el selector **« Mis tenants »** y haga clic en el tenant deseado;
- o desde **Administración > Tenants**, utilice la acción **« Conectarse al tenant »** de una fila.

El selector señala con una insignia **SecNumCloud** los tenants cualificados.

<img src={imgSelector} />

### Crear un nuevo entorno

Ya tiene una organización y desea un nuevo entorno, para un entorno de pruebas, un nuevo proyecto o una filial.

**Lo hace todo desde la consola, en las condiciones de su contrato. No es necesario ningún trámite ante nosotros.**

### Los pasos

1. Desde **Administración > Tenants**, haga clic en **« Nuevo tenant »**.
2. Dele un **nombre** descriptivo: *production*, *recette*, el nombre de un proyecto. El nombre se valida en tiempo real; es posible añadir una descripción.
3. El creador del tenant se convierte en su propietario por defecto. Podrá añadir otros responsables después, a través de la pestaña **Usuarios**, una vez conectado al tenant.
4. Elija los **productos** que desea activar en él y, a continuación, valide con **« Crear »**.

<img src={tenantNew} />

### Lo que sucede a continuación

Su entorno se construye automáticamente, en pocos minutos. No tiene nada que hacer.

Si el propietario del tenant aún no tiene una cuenta, recibe su correo electrónico de creación de cuenta. Si ya tiene una, accede al nuevo entorno sin nueva invitación.

:::tip[Nada se activa por defecto]
Usted elige los productos del tenant **desde el formulario de creación** (el paso 4 anterior) y puede modificar este perímetro en cualquier momento. Ningún producto se abre sin que usted lo haya marcado: solo paga lo que consume.
:::

---

## Etapa 4. Invitar a sus colaboradores

Las cuentas son **globales a la organización**; los permisos, en cambio, se otorgan **tenant por tenant**.

1. **Invite al colaborador.** Desde **Administración > Usuarios**, el botón **« Nuevo usuario »** solicita su dirección de correo electrónico. Recibe un correo electrónico de verificación; su cuenta aparece en gris mientras no la haya validado.
2. **Otórguele sus permisos.** Una cuenta recién creada no tiene **ningún permiso**. En el menú **Acciones** del usuario, elija **« Editar »** y, a continuación, marque los permisos necesarios, en cada tenant donde deba intervenir.

<img src={shivaOnboard_004} />

<img src={shivaOnboard_005} />

Para invitar a un usuario o asignarle un permiso, necesita el permiso `iam_write`, y solo puede asignar un permiso que usted mismo posea.

El detalle de los procedimientos (reinvitación, eliminación, propietarios de tenant) y la lista de permisos se encuentran en la [referencia IAM](./iam/concepts.md). Si su organización utiliza su propio directorio de identidades, consulte los [tutoriales de federación de identidad](/console/iam/tutorials).

### Cambiar un responsable

El propietario de la organización gestiona los usuarios y sus permisos directamente desde la consola: ver [Identidades y accesos](/console/iam).

También puede **delegar** sus permisos a un socio externo o a un jefe de proyecto de Cloud Temple: útil si confía la operación a un tercero.

---

<a id="parcours-3-faire-évoluer-un-environnement"></a>

## Etapa 5. Activar sus productos

Sus necesidades cambian. A continuación se explica cómo hacer evolucionar el perímetro de un entorno existente.

### Activar un producto

Si el producto forma parte de su catálogo, aparece en la consola: **actívelo con total autonomía** en el tenant correspondiente. Calcule unos minutos antes de que sea utilizable.

Desde la lista de sus tenants, la acción **« Modificar los productos »** abre el catálogo. Marque los que desee abrir, desmarque los que desee detener y, a continuación, **Guardar**.

Si no aparece, es que aún no está en su catálogo: ver [Solicitar un producto adicional](#demander-un-produit-supplémentaire).

<img src={tenantProductsEdit} />

### Detener un producto

Puede desactivar un producto que ya no utiliza, y la facturación se detiene con él.

Antes se realiza una verificación: si aún se están consumiendo recursos, la desactivación se deniega y la consola le indica qué la bloquea. Elimine esos recursos y vuelva a intentarlo.

Es una protección: evita cortar un servicio que aún se utiliza y perder sus datos.

### Los productos {/* #les-produits */}

#### Lo que usted activa por sí mismo

Ningún producto se activa de oficio, ni en la creación de su organización, ni en la de un tenant. En cambio, cuatro productos están **disponibles** en su consola desde la apertura: los activa usted mismo, en el tenant de su elección. Se **facturan según el uso**, sin compromiso de volumen ni tramo que negociar: solo paga lo que consume.

| Producto | Para qué sirve | Más información |
| --- | --- | --- |
| **VM Instances** | Máquinas virtuales bajo demanda | [Documentación](/public_cloud/vm_instances) |
| **VPC** | Una red privada virtual | [Documentación](/network/vpc) |
| **LLMaaS** | Modelos de IA soberanos | [Documentación](/llmaas) |
| **Object Storage** | Almacenamiento compatible con S3 | [Documentación](/storage/oss) |

#### El resto del catálogo

Estos productos se abren en el marco de su contrato, con su interlocutor comercial:

- [IaaS VMware](/iaas_vmware) e [IaaS OpenSource](/iaas_opensource)
- [Bare metal](/iaas_bare-metal)
- [PaaS OpenShift](/paas_openshift) y [Kubernetes gestionado](/managed_kubernetes)
- Bases de datos gestionadas: [PostgreSQL](/managed_postgresql), [MariaDB](/managed_mariadb)
- [Bastion](/bastion)
- [Housing](/housing)
- [Backbone privado](/network/private_backbone) e [Internet](/network/internet)
- [Marketplace](/marketplace)

Visión general: [nuestros productos](/managedproducts_overview).

### Solicitar un producto adicional {/* #demander-un-produit-supplémentaire */}

¿El producto que desea no aparece en su consola? Todavía no está en su catálogo.

1. Desde la consola, cree una **solicitud de soporte**
2. Indique el **producto** en cuestión, y el volumen previsto si lo conoce
3. Nos pondremos en contacto con usted sobre las condiciones
4. Una vez validado, el producto aparece en su consola
5. Puede activarlo en uno o varios tenants

<img src={supportSelectProduct} />

#### Cambiar de nivel de soporte

Existen tres niveles, presentados en [nuestro sitio web](https://www.cloud-temple.com/produits/niveaux-de-support).

Puede subir o bajar de nivel: solicítelo a través del soporte desde la consola, o a su interlocutor comercial.

---

## Etapa 6. Automatizar

Todo lo que hace en la consola también es posible mediante programación.

- **La API de la consola** da acceso al conjunto de sus funcionalidades. Se autentica en ella con una clave API, o *Personal Access Token* (PAT), vinculada a un tenant y al usuario que la creó. El detalle de las llamadas se puede consultar desde **Perfil > APIs**. Consulte la [documentación de la API](./api.md).
- **El provider Terraform** gestiona su plataforma *as code*. Consulte [Terraform Provider](/terraform).

<img src={shivaOnboard_008} />

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

:::warning[¿Enlace caducado?]
Pasadas 96 horas, el enlace ya no funciona. Es una medida de seguridad, no una avería.

Escriba a **`shiva.support@cloud-temple.com`**: le enviaremos uno nuevo.

Es el único canal utilizable en esta etapa: sin acceso a la consola, aún no puede abrir una solicitud en ella.
:::

:::note[¿No ha recibido nada?]
Revise su carpeta de correo no deseado: el mensaje a veces se filtra. Lo envía **`shiva.support@cloud-temple.com`**: autorice esta dirección en su mensajería. Si no ha recibido nada en la hora siguiente, contáctenos en esa misma dirección.
:::

---

## Preguntas frecuentes

**¿Cuánto tiempo tarda la creación de un entorno?**
Algunos minutos. La creación es automática, ya sea para su primera llegada o para un nuevo entorno.

**¿Cuántos tenants puedo crear?**
Tantos como sea necesario, en las condiciones de su contrato.

**Mi proyecto maneja datos de salud o datos sensibles. ¿Puedo registrarme en línea?**
Sí. Indíquelo en el formulario: su organización se crea normalmente, y nuestros equipos le acompañan en la apertura de los servicios correspondientes.

**¿Puedo confiar la gestión a un proveedor?**
Sí. El propietario de la organización puede delegar sus permisos a un socio externo o a un jefe de proyecto de Cloud Temple.

**He olvidado una dirección IP, ya no puedo conectarme.**
Si un colega de su organización aún tiene acceso a la consola, añade la dirección desde **Administración > Acceso**. Si ya nadie tiene acceso, escriba a **`shiva.support@cloud-temple.com`**: es el canal de emergencia cuando la consola está fuera de alcance.

**Acabo de activar un producto, aún no lo veo.**
Espere unos minutos. Si sigue sin aparecer, contacte con el soporte.

Otras preguntas sobre las cuentas y los permisos: consulte las [preguntas frecuentes IAM](./iam/quickstart.md).

---

## Ir más allá

<div class="card-grid">
  <div class="card">
    <h3>Recorrido por la consola</h3>
    <p>El resto de la interfaz: panel de control, costos, registro de actividades, soporte.</p>
    <a href="./console_quickstart" class="card-link">Hacer el recorrido &rarr;</a>
  </div>
  <div class="card">
    <h3>Identidades y accesos</h3>
    <p>La referencia de las cuentas, los propietarios y los permisos, tenant por tenant.</p>
    <a href="./iam" class="card-link">Explorar el IAM &rarr;</a>
  </div>
  <div class="card">
    <h3>Solicitar recursos</h3>
    <p>Despliegue sus primeros recursos y siga su puesta a disposición.</p>
    <a href="./orders" class="card-link">Ver los pedidos &rarr;</a>
  </div>
  <div class="card">
    <h3>Facturación</h3>
    <p>Siga su consumo por tenant y por producto, a lo largo del mes.</p>
    <a href="./billing/concepts" class="card-link">Acceder al módulo &rarr;</a>
  </div>
  <div class="card">
    <h3>Responsabilidades compartidas</h3>
    <p>Lo que Cloud Temple opera, lo que queda a su cargo.</p>
    <a href="../shared-responsibility" class="card-link">Leer el modelo &rarr;</a>
  </div>
  <div class="card">
    <h3>Compromisos y SLA</h3>
    <p>Niveles de servicio, disponibilidad y condiciones contractuales.</p>
    <a href="https://www.cloud-temple.com/contracts" class="card-link">Consultar los compromisos &rarr;</a>
  </div>
</div>
