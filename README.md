# Zawodowy Wrocław

Strona projektu: https://adeodatus11.github.io/zawodowy-wroclaw/

Samodzielny przewodnik dla pracodawców: https://adeodatus11.github.io/zawodowy-wroclaw/pracodawcy/

Publiczne repozytorium zawiera wyłącznie stronę i materiały przeznaczone do publikacji. Oryginały toolboxu i materiały partnerów pozostają w repozytorium źródłowym. GitHub Pages publikuje katalog główny gałęzi `main`.

## Przewodnik dla pracodawców

Serwis „Ucz zawodu” obejmuje sześć etapów, ochronę małoletnich, finansowanie, szkolne umowy i dokumentację, kartę przygotowań oraz konsultacje online.

- `pracodawcy/finansowanie.html` — OHP, gmina, limity i dolnośląski wykaz refundacyjny.
- `pracodawcy/dokumenty.html` — cztery szkolne pliki umów i załączników oraz cztery dokumenty ubezpieczeniowe z https://szef.szkolamistrzow.info/; pobrane kopie zachowują treść i oznaczenia wersji oryginałów.
- `pracodawcy/karta-startowa.html` — lokalne wypełnienie i wydruk ustaleń, bez wysyłania danych.
- `pracodawcy/opracowanie.html` — koncepcja, źródła, przewodnik szczegółowy i plan.

Dane kontaktowe do konsultacji: kontakt@zsz5.edupage.org. Przycisk otwiera program pocztowy; termin i sposób połączenia ustala szkoła.

## Odtworzenie i publikacja

W repozytorium źródłowym `npm run build:employers` odtwarza HTML i ZIP. Źródła treści: `pracodawcy/www/`, dane i katalog dokumentów: `pracodawcy/dane/`, generatory: `scripts/render-employer-site.cjs`, `scripts/employer-resources.cjs`, pakowanie: `scripts/package-employer-materials.py`. Pliki szkolne znajdują się w `pracodawcy/pliki/szkolne/` w drzewie strony. Po zmianie publikacji PDF/Word odtworzyć ją i sprawdzić przed kopiowaniem do strony. Synchronizować tylko zawartość `site/`.

## Wygląd i zasoby

Identyfikacja „Ucz zawodu”: papierowe tło, czerń i żółty akcent. Własne style i skrypt w `pracodawcy/assets/`; lokalne Barlow Condensed i DM Sans na licencji SIL OFL. Pliki licencji dołączono przy fontach. Projekt według https://github.com/dobromirdikov/codex-frontend-design-skill/blob/main/skills/frontend-design/SKILL.md.

Ilustracje warsztatów są wygenerowane w ImageGen i oznaczone w opisie alternatywnym oraz stopce. Nie przedstawiają rzeczywistych uczniów. Strona nie korzysta z analityki ani zewnętrznych skryptów.
