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

Dział używa tej samej identyfikacji co strona projektu, sześciu etapów, przyklejonego spisu treści na komputerze, listy przygotowań i odsyłacza e-mail do konsultacji. Lista działa tylko na otwartej stronie, bez zapisywania danych i bez analityki. Pełne opracowanie zachowuje oznaczenia materiałów roboczych oraz pytań do dalszej weryfikacji.
