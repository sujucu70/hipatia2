# hipatia2 · Estatus V1 Modernización de Aplicaciones

> Documento de trabajo Guberna (bucle PM ↔ Susana). No sale del perímetro interno.
> Fecha: 16 jul 2026. Base: feedback Menti del 26 jun (equipo comercial), reunión SM del 23 jun, backlog P0/P1/P2 y código real del repo (últimos commits: 25 jun).

---

## 1. Alcance V1 · decidido (16 jul)

**V1 = recorrido completo con contenido real de Modernización, poda aplicada, CRM encuadrado y los agentes marcados honestamente "en preparación" con dueño y fecha.**

Lo que esto significa en la práctica:

- Los tres agentes reales (escaneo de cuenta, localizador de contactos, agente de visita) **no condicionan la V1**. Salen como "en preparación", cada uno con un dueño nombrado y una fecha orientativa visible. Pasan a ser el corazón de la V2 junto con la decisión de plataforma.
- La V1 se cierra con trabajo que está en nuestra mano más un único dependiente externo: **el paquete de contenido de Jorge**.
- Fuera de alcance V1, explícitamente: correos de los 6 sectores (sale con Financiero, el resto nombrado como backlog), calculadora de business case, panel del PM con datos reales, cruce automático con CRM, y la pieza de visión sectorial/competencia/cross-selling que pidió el Menti (se encuadra como V2).

---

## 2. Qué dijo el Menti (26 jun) y qué hacemos con cada señal

**Participación:** 22 asistentes · 17 respuestas sobre uso · 8 propuestas · 24 comentarios de cambio. Uso actual de Hipatia: abrumadoramente "buscar presentaciones" — hoy es un repositorio de documentos, lo que confirma el as-is de la portada.

| # | Señal | Frecuencia | Respuesta en V1 |
|---|---|---|---|
| 1 | **CRM**: integración, redundancia, "¿sustituye al CRM?" | ~5 comentarios | ✅ Entra: encuadre visible en el portal ("alimenta tu CRM, no lo sustituye"). La integración real queda en V2 |
| 2 | **Densidad**: "demasiado denso", "me pierdo" | ~4 comentarios | ✅ Entra: segunda poda del escaparate (Tarjeta y Kit) |
| 3 | **Actualización y gobierno**: "¿quién lo mantiene?", "¿quién da fe de las referencias?" | ~5 comentarios | ✅ Entra: dueño de mantenimiento nombrado antes de lanzar + sello de vigencia ya construido. El autoenvejecimiento automático queda como backend V2 |
| 4 | **Visión estratégica**: sector, competencia, cross-selling | 5 de 8 propuestas | ⏭ V2, encuadrada. El benchmark existe como análisis interno Guberna; lo que se enseñe al comercial hay que curarlo. El cross-selling conecta con el fork de preventa |
| 5 | **Contactos con alerta/suscripción** | 2 menciones | Parcial: el paso "Contactos del área" ya está maquetado (25 jun) y sale en V1 como "en preparación" con dueño. La suscripción/alerta es matiz de backend V2 |

También salió: el test de las 5 preguntas cuestionado (se responde con el ajuste de acreditación, punto 8), la confidencialidad de los adjuntos (política, punto 10) y tres comentarios claramente positivos ("está muy completa", "bien organizado, perfecto").

**Lectura:** el comercial no pidió herramientas nuevas del recorrido; pidió que no choque con el CRM, que no abrume, que esté vivo y que le dé visión de mercado. Las tres primeras entran en V1; la cuarta queda reconocida y encuadrada en V2.

---

## 3. Qué está hecho ya

**Infraestructura y perímetro.** Repo `sujucu70/hipatia2` → Cloudflare Worker → hipatia2.guberna.es, tras Cloudflare Access (OTP @entelgy.com). Auto-deploy en push.

**Portal de tres niveles.** Portada en dos tiempos (as-is con capturas reales + menú de prácticas) → Ciclo de Software → Modernización. Las demás prácticas marcadas "En preparación".

**El recorrido completo, 10 pasos** (estado post-reunión SM, commits 25 jun):

| Paso | Estado |
|---|---|
| Home | ✅ Espina clicable, bucle 2×2 de agentes. Banda "Tus cuentas" retirada (25 jun) |
| Tarjeta de entrada | ✅ Construida y jerarquizada. Pendiente V1: poda + contenido de Jorge |
| Acreditación | ✅ Mecánica real (5/5, anti-fuerza-bruta, sello al final). Pendiente V1: distractores validados + ajuste de suavidad |
| Estado de la cuenta | ✅ Funcional para Grupo Lantia. En V1 queda así: Lantia como demo + "en preparación" con dueño y fecha para el agente real |
| Primer contacto | ✅ Correo por defecto, autodiagnóstico opcional. V1 sale con Financiero; el resto, backlog nombrado |
| Kit de visita | ✅ Ficha de cuenta, pitch por rol, dossier imprimible, Assessment como cierre. Pendiente V1: poda + mensajes clave de Jorge |
| Repositorio | ✅ Funcional: buscador, filtros, ficha por pieza, sello de vigencia, 4 zonas + histórico. Pendiente V1: documento real detrás de cada ficha + casos citables |
| Contactos del área | ✅ Maquetado (25 jun) con personas por servicio + canal Teams. En V1 sale "en preparación" con dueño |
| Novedades y feedback | ✅ Feedback en un clic + trazabilidad + salud del área. El encaminado real al PM: dueño y fecha |
| Fase 2 | ✅ Dos tarjetas, honesta como futuro |

**Autodiagnóstico** como página propia por cuenta (grupo-lantia), wizard de 10 preguntas + PDF. Pendiente V1: redacción y scoring reales de Jorge.

**Respuesta ya dada al feedback del 23 jun** (antes incluso del Menti): principio del escaparate aplicado en primera pasada, agenda de contactos maquetada (P1-9), canal Teams enlazado (P1-10).

---

## 4. Lo que queda para cerrar la V1 · lista cerrada

### A · Contenido — camino crítico, depende de Jorge (paquete único, ya definido, sin enviar)

1. ✅ **HECHO (16 jul)** — Sign-off de **referenciabilidad**: Jorge confirma y los seis casos pasan a `citable` en el portal, con la leyenda "en presentación sí · envío formal por cuenta". Dossier y trazabilidad en `paquete-jorge/01-referenciabilidad-casos.md`. Queda viva la verificación de cifras por caso (H10 ~90% la más señalada).
2. **Autodiagnóstico**: las 10 preguntas, pesos, umbrales y frases de lectura.
3. ✅ **HECHO (16 jul)** — Resultados de los **seis casos** redactados, validados por Jorge y volcados a las fichas del Repositorio (`paquete-jorge/03-casos-repositorio.md`).
4. **Mensajes clave**: 3–4 keynotes por dolor (P1-7) + 3 frases a medida de cuenta (P1-8).
5. Validar **distractores** de la acreditación y las cifras flagged (el "+70%" no sale sin sign-off).
6. Los **materiales cliente** del repositorio — las 5–6 piezas curadas por zona.

### B · Construcción — nuestro, respuesta directa al Menti

7. **Encuadre CRM visible** en Home o Tarjeta: "Hipatia alimenta tu CRM, no lo sustituye; el CRM sigue siendo el registro único". Cuesta poco y desactiva la objeción más repetida.
8. **Poda del escaparate, segunda pasada**: Tarjeta a su núcleo (las tres frases + por qué ahora + prueba; el resto a "más información") y Kit a vista de escaparate. Resolver de paso la acreditación: mantener 5/5 pero mostrar cuáles fallaste, sin chivar la correcta.
9. **Fichas del repositorio → documento real**: que cada ficha enlace o previsualice la pieza. Sin esto, el repositorio nuevo pierde contra el SharePoint viejo en lo único que el comercial hace hoy.
10. **Sellos "en preparación" con dueño y fecha** en los tres agentes + encaminado del feedback: es la pieza que convierte la decisión de alcance en algo visible y honesto. Requiere una pasada corta con MA para poner nombres (escaneo de cuenta · localizador de contactos · agente de visita · encaminado feedback→PM).

### C · Gobierno — condición de lanzamiento, no de código

11. **Dueño del mantenimiento nombrado**: quién persigue al SM y con qué cadencia (la respuesta de MA del 23 jun: recursos dedicados — ponerle nombre antes de lanzar).
12. **Política del botón de adjuntar** (qué pasa con los archivos subidos) — la mención a confidencialidad del Menti la hace obligatoria.
13. **Respuesta pública al Menti** en "Novedades y feedback": qué se ha incorporado ("tu sugerencia salió como…"). Primera prueba de que el bucle funciona.

### Fuera de V1 · registrado para que nadie lo dé por perdido

- Agentes funcionando (escaneo real, contactos, visita) → V2, con la decisión de plataforma.
- Correos de los 5 sectores restantes · calculadora de business case · cruce automático CRM · panel del PM (Fernando Naranjo) · autoenvejecimiento automático del repositorio · suscripción/alerta de contactos.
- **Visión sectorial / competencia / cross-selling** (lo nuevo del Menti) → pieza V2 a definir con MA y Jorge.
- **P0-FORK preventa dentro/fuera** (MA + Pablo) y **plataforma definitiva** — no bloquean la V1, pero hay que decidirlas **antes de replicar** a otras áreas.

---

## 5. Secuencia

- **Ahora → fin de julio:** enviar el paquete único a Jorge (A) · encuadre CRM (7) · segunda poda + acreditación (8) · sellos con dueño y fecha (10, tras pasada corta con MA) · respuesta pública al Menti (13).
- **Agosto (pausa):** maduran preventa dentro/fuera, plataforma y dueño de mantenimiento (11). Jorge devuelve el paquete.
- **Septiembre:** volcado del contenido de Jorge · fichas con documento real (9) · política de adjuntos (12) → **cierre V1 Modernización y arranque de la réplica.**

El único camino crítico externo es Jorge. Todo lo demás es nuestro o es una pasada corta con MA para poner nombres y fechas.
