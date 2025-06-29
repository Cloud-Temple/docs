# Verstehen von RAG: Embedding und Vektorabstand

Das Skript `simple-rag-demo` ist eine hervorragende Illustration des Funktionsprinzips eines RAG-Systems (Retrieval-Augmented Generation). Diese Seite erklärt die grundlegenden Konzepte, die es ermöglichen: das **Embedding** und die **Similaritätsuche**.

## Das Problem: LLMs haben kein langfristiges Gedächtnis

Ein großes Sprachmodell (LLM) wie Mistral oder Granite ist sehr leistungsstark, kennt aber nur die Daten, auf denen es trainiert wurde. Es kennt Ihre internen Dokumente, die neuesten Zeitungsartikel oder die Besonderheiten Ihres Geschäfts nicht.

**RAG** ist eine Technik, die es dem LLM ermöglicht, ein "externes Gedächtnis" zu erhalten, indem es ihm bei der Fragestellung die relevantesten Dokumentenauszüge liefert, um ihm bei der Formulierung seiner Antwort zu helfen.

Der Prozess erfolgt in zwei Schritten:
1. **Retrieval (Abruf):** Die richtigen Dokumente finden.
2. **Augmented Generation (Erweiterte Generierung):** Diese Dokumente verwenden, um eine Antwort zu generieren.

Es ist der Schritt des „Retrieval“, der uns hier interessiert. Wie kann ein Computer „verstehen“, dass eine Frage semantisch ähnlich zu einem Absatz ist? Die Antwort lautet: mit Vektoren.

![Konzeptuelles Diagramm des RAG](./images/rag_concept_overview.png)

## Schritt 1: Embedding – Wörter in Zahlen umwandeln

Ein Computer versteht keine Wörter, ist aber hervorragend darin, mit Zahlen zu arbeiten. Das **Embedding** ist der Prozess, der einen Text (ein Wort, einen Satz, ein Dokument) in eine Liste von Zahlen, sogenannte **Vektoren**, übersetzt.

`"Le chat est sur le tapis."`  →  `[-0.01, 0.98, 0.45, ..., -0.33]`

![Beispiel eines Embedding-Vektors](./images/embedding_vector_example.png)

Dieser Vektor ist nicht zufällig. Er stellt die „Position“ des Textes in einem mehrdimensionalen semantischen Raum dar. Texte mit ähnlicher Bedeutung haben Vektoren, die in ähnliche Richtungen zeigen.

**Analogie**: Stellen Sie sich eine geografische Karte vor. „Paris“ und „Frankreich“ wären sehr nahe beieinander, genauso wie „Rom“ und „Italien“. „Paris“ wäre weiter von „Rom“ entfernt als von „Frankreich“, aber näher als von „Tokio“. Das Embedding macht dasselbe, nur mit tausenden „Dimensionen“ statt zwei, um komplexe Bedeutungsnuancen zu erfassen.

In unserem Skript ist der Endpoint `/v1/embeddings` und das Modell `granite-embedding:278m` für diese Übersetzung verantwortlich.

## Schritt 2: Die Suche – Die semantische Nähe messen

Sobald unsere Frage und alle unsere Dokumente in Vektoren umgewandelt wurden, wird die Suche zu einem mathematischen Problem: **den Vektor des Dokuments finden, der dem Vektor der Frage am 'nächsten' ist.**

Es gibt verschiedene Weisen, diese 'Nähe' zu messen. Unser Skript verwendet zwei davon: die Kosinus-Ähnlichkeit und die euklidische Distanz.

### Die Kosinus-Ähnlichkeit (Der Standard)

-   **Konzept** : Sie misst nicht den Abstand, sondern den **Winkel** zwischen zwei Vektoren. Ein kleiner Winkel (nahe bei 0°) bedeutet, dass die Vektoren in die gleiche Richtung zeigen, und somit haben die Texte eine sehr ähnliche Bedeutung.
-   **Score** : Der Kosinus eines Winkels von 0° ist 1 (perfekte Ähnlichkeit). Der Kosinus eines Winkels von 90° ist 0 (keine Ähnlichkeit).
-   **Warum wird sie so häufig verwendet?** Für Texte ist die *semantische Richtung* viel wichtiger als die *Größe* (die Länge) des Vektors. Die Kosinus-Ähnlichkeit ignoriert die Größe und konzentriert sich ausschließlich auf die Richtung.

**Einfaches Beispiel in 2D :**
-   Frage : `v_q = [2, 2]`
-   Dokument A : `v_a = [4, 4]` (gleiche Richtung, länger)
-   Dokument B : `v_b = [-2, 2]` (andere Richtung)

Die Berechnung der Kosinus-Ähnlichkeit ergibt:
-   `cos(v_q, v_a) = 1.0` → Winkel von 0°. Perfekte Ähnlichkeit.
-   `cos(v_q, v_b) = 0.0` → Winkel von 90°. Keine Ähnlichkeit.

![Illustration der Kosinus-Ähnlichkeit](./images/cosine_similarity_concept.png)

Das ist das Ergebnis, das wir wollen: Das Dokument A ist semantisch identisch mit der Frage, auch wenn die Formulierung länger ist.

### Die euklidische Distanz (Die Regel)

-   **Konzept** : Das ist die "Luftlinie" zwischen den Endpunkten der beiden Vektoren.
-   **Score** : Ein Score von 0 bedeutet, dass die Vektoren identisch sind. Je höher der Score, desto weiter sind sie voneinander entfernt.
-   **Nachteil für den Text** : Sie ist empfindlich gegenüber der Magnitude. In unserem Beispiel oben wäre die Distanz zwischen `v_q` und `v_a` nicht null, da die Vektoren nicht die gleiche Länge haben, selbst wenn sie die gleiche Richtung haben.

![Illustration der euklidischen Distanz](./images/euclidean_distance_concept.png)

## Fazit

Die Tabelle, die vom Skript `simple-rag-demo` angezeigt wird, ermöglicht die Visualisierung dieser beiden Metriken. Sie werden bemerken, dass sich die Rangfolgen zwar manchmal leicht unterscheiden können, die **Kosinus-Ähnlichkeit ist in der Regel die bevorzugte Metrik** für semantische Suchanwendungen basierend auf Text.

Das größte Problem, wie das Beispiel zeigt, bleibt die **Qualität des Embedding-Modells**. Ein gutes Modell erzeugt Vektoren, die den Sinn präzise erfassen, wodurch die Berechnung der Nähe, egal welche Methode verwendet wird, viel zuverlässiger wird.