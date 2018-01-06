---
layout: default
title: Markdown Syntax
---

<details>
  <summary>Inhalt</summary>
<ul>
<li><a href="/marc-q/fmtone/blob/master/wiki/markdown.md#absatz">Absatz</a></li>
<li><a href="/marc-q/fmtone/blob/master/wiki/markdown.md#zeilenumbruch">Zeilenumbruch</a></li>
<li><a href="/marc-q/fmtone/blob/master/wiki/markdown.md#schrift-ver%C3%A4ndern">Schrift verändern</a>
	<ul>
		<li><a href="/marc-q/fmtone/blob/master/wiki/markdown.md#kursiv">Kursiv</a></li>
		<li><a href="/marc-q/fmtone/blob/master/wiki/markdown.md#fett">Fett</a></li>
		<li><a href="/marc-q/fmtone/blob/master/wiki/markdown.md#fett-kursiv">Fett kursiv</a></li>
	</ul>
</li>
<li><a href="/marc-q/fmtone/blob/master/wiki/markdown.md#text-markieren">Text markieren</a></li>
<li><a href="/marc-q/fmtone/blob/master/wiki/markdown.md#listen">Listen</a>
	<ul>
		<li><a href="/marc-q/fmtone/blob/master/wiki/markdown.md#ungeordnete-liste">Ungeordnete Liste</a></li>
		<li><a href="/marc-q/fmtone/blob/master/wiki/markdown.md#geordnete-liste">Geordnete Liste</a></li>
	</ul>
</li>
<li><a href="/marc-q/fmtone/blob/master/wiki/markdown.md#%C3%9Cberschriften">Überschriften</a>
	<ul>
		<li><a href="/marc-q/fmtone/blob/master/wiki/markdown.md#html-%C3%9Cberschriften">HTML-Überschriften</a></li>
		<li><a href="/marc-q/fmtone/blob/master/wiki/markdown.md#alternativen">Alternativen</a></li>
	</ul>
</li>
<li><a href="/marc-q/fmtone/blob/master/wiki/markdown.md#zitate">Zitate</a></li>
<li><a href="/marc-q/fmtone/blob/master/wiki/markdown.md#links">Links</a></li>
<li><a href="/marc-q/fmtone/blob/master/wiki/markdown.md#bilder">Bilder</a></li>
<li><a href="/marc-q/fmtone/blob/master/wiki/markdown.md#tabellen">Tabellen</a></li>
</ul>
</details>

Absatz
======

Markdown ist ein einfacher Weg Notizen übersichtlich zu gestalten.

Eine Leerzeile erzeugt dabei einen Absatz.

Zeilenumbruch
=============

Zwei oder mehr Lehrzeichen am Ende der Zeile  
erzeugen eine Zeilenumbruch.

Schrift verändern
=================

Kursiv
------

```markdown
*Kursiv* oder _Kursiv_
```

*Kursiv* oder _Kursiv_

Fett
----

```markdown
**Fett** oder __Fett__
```

**Fett** oder __Fett__

Fett kursiv
-----------

```markdown
***Fett kursiv*** oder ___Fett kursiv___
```

***Fett kursiv*** oder ___Fett kursiv___

Text markieren
==============

```markdown
Markierter `Quelltext`
```

Markierter `Quelltext`

Listen
======

Ungeordnete Liste
-----------------

```markdown
* Ein Punkt in einer ungeordneten Liste.
		* Ein unterpunkt von dem Punkt über diesem.
* Ein weiterer Punkt.
```

* Ein Punkt in einer ungeordneten Liste.
    * Ein unterpunkt von dem Punkt über diesem.
* Ein weiterer Punkt.

Geordnete Liste
---------------

```markdown
1. Punkt eins in einer geordneten Liste.
2. Punkt zwei.
```

1. Punkt eins in einer geordneten Liste.
2. Punkt zwei.

Überschriften
=============

HTML-Überschriften
------------------

```markdown
# Überschrift von der ersten Ebene
## Überschrift der zweiten Ebene
```

# Überschrift von der ersten Ebene
## Überschrift der zweiten Ebene

Alternativen
------------

```markdown
Überschrift der ersten Ebene
============================

Überschrift der zweiten Ebene
-----------------------------
```

Überschrift der ersten Ebene
============================

Überschrift der zweiten Ebene
-----------------------------

Zitate
======

```markdown
> Ein Zitat welches in ein HTML-Blockquote-Element gepackt wird.
```
> Ein Zitat welches in ein HTML-Blockquote-Element gepackt wird.

Links
=====

```markdown
[Beschriftung des Links](http://fmt.one/ "Titel, der beim überfahren mit der Maus angezeigt wird")
```

[Beschriftung des Links](http://fmt.one/ "Titel, der beim überfahren mit der Maus angezeigt wird")

Bilder
======

```markdown
![Alternativtext](/assets/img/avatar.png "Bildtitel")
```

![Alternativtext](/assets/img/avatar.png "Bildtitel")

Tabellen
========

```markdown
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
