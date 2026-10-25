# Zawodowy Wrocław

Publiczna strona informacyjna projektu i przygotowywanego konkursu „Mistrzowie” im. Jana Kilińskiego.

Strona: https://adeodatus11.github.io/zawodowy-wroclaw/

Statyczny HTML, CSS i niewielki skrypt nawigacji. GitHub Pages publikuje katalog główny gałęzi `main`. Wszystkie zasoby są lokalne; strona nie wykorzystuje analityki, zewnętrznych osadzeń ani formularza zbierającego dane.

Dokumenty konkursowe są projektami. Nabór nie jest uruchomiony. Oryginalny toolbox i materiały partnerów pozostają w osobnym, prywatnym repozytorium.

## Aktualizacja

W prywatnym repozytorium źródłowym pliki strony znajdują się w `site/`. Po edycji i sprawdzeniu należy zsynchronizować wyłącznie zawartość tego katalogu z tym repozytorium. Nie kopiować dokumentów źródłowych partnerów ani zgłoszeń uczniów.

## Zasoby

Font Manrope: Google Fonts, SIL Open Font License; tekst licencji w `assets/FONT-LICENSE.txt`.
Ilustracja warsztatu: wygenerowana narzędziem OpenAI Image Generation; nie przedstawia rzeczywistego uczestnika projektu.

## Dział dla pracodawców

Przewodnik: https://adeodatus11.github.io/zawodowy-wroclaw/pracodawcy/
Pełne opracowanie: https://adeodatus11.github.io/zawodowy-wroclaw/pracodawcy/opracowanie.html

`npm run build:employers` odtwarza HTML przewodnika i opracowania oraz pakiet ZIP z materiałów w `pracodawcy/`. PDF i DOCX są kopiowane z `pracodawcy/publikacja/`. Po ich zmianie najpierw odtworzyć publikację i sprawdzić jej wygląd, następnie uruchomić budowanie WWW.

Dział ma osobną identyfikację „Ucz zawodu”: papierowe tło, czerń, żółty akcent, Barlow Condensed i DM Sans. Samodzielne style i skrypt są w `pracodawcy/assets/`. Przewodnik obejmuje pięć rozwijanych rozdziałów, szósty etap z konsultacją, listę przygotowań i odsyłacz e-mail. Lista działa tylko na otwartej stronie, bez zapisywania danych i bez analityki. Pełne opracowanie zachowuje oznaczenia materiałów roboczych oraz pytań do dalszej weryfikacji.

Przebudowa według skillu https://github.com/dobromirdikov/codex-frontend-design-skill/blob/main/skills/frontend-design/SKILL.md. Nowa ilustracja mentor–uczeń jest wygenerowana w ImageGen; szczegóły i prompt: `projekt/strona-pracodawcy.md` w repozytorium źródłowym. Fonty lokalne Google Fonts na SIL OFL, teksty licencji w `pracodawcy/assets/LICENSE-Barlow.txt` oraz `LICENSE-DMSans.txt`.

## Finansowanie i narzędziownik 2026/2027

Serwis obejmuje też `pracodawcy/finansowanie.html`, `dokumenty.html`, `karta-startowa.html` i `szkoly.html`. Finansowanie rozróżnia OHP i gminę, uwzględnia nowelizację art. 122 od 13.07.2025, procedurę OHP od 1.12.2025 i wyszukiwanie w dolnośląskim wykazie 49 zawodów z uchwały 4075/VII/26. Lista szkół zawiera siedem potwierdzonych przykładów wraz ze źródłami. Karta jest wypełniana lokalnie i drukowana, bez wysyłania danych. Pełne opracowanie i ZIP zawierają wynik porównania materiałów przekazanych przez organizatora. Źródła nowych podstron: `pracodawcy/www/` oraz `pracodawcy/dane/` w repozytorium źródłowym; generator: `scripts/employer-resources.cjs`.
