---
title: Co mnie boli w branży IT - management
date: "2017-07-19"
layout: post
path: "/co-mnie-boli-w-it-management/"
lang: pl
---

> słaby management jako źródło nieszczęścia programisty

Pracuje jako programista, albo właściwie inżynier oprogramowania, od ponad 8 lat. Specjalizuje się w tak zwanych technologiach front-end. Jeden z poważniejszych problemów, które zauważam w naszej branży to management. Niestety, ale zwykle stoi on na dość niskim poziomie. Przedstawię w punktach kilka moich obserwacji, z identyfikacja problemu i propozycją rozwiązania. Rozwiązanie zakłada zawsze mocny, dobrze zgrany, zmotywowany zespół techniczny. Temat, jak zbudować taki zespół, na pewno będzie poruszany przeze mnie w przyszłości.

#### 1. Oprogramowanie jest "projektowane" przez managerów, którzy nie mają wiedzy o budowie oprogramowania

Ile razy wam się zdarzyło, że dostaliście zadanie ze specyfikacją albo szczegółami rozwiązania problemu, które jak zajrzeliście do kodu **nie miało żadnego sensu?** Managerowie lubią siedzieć na długich spotkaniach, zwykle wykraczających poza godziny pracy, na których opracowują swoje plany. Problem jest taki, że czasem dobry deweloper rozbije je kilkoma prostymi pytaniami. W innych wypadkach problemy zaczną się dalej w trakcie realizacji projektu. Nikt nie jest w stanie przewidzieć wszystkich możliwych aspektów oprogramowania bez rzeczywiście napisania go i przetestowania.

Proste rozwiązanie to **lepsza komunikacja**. Manager powinien sprawdzić swój nowy pomysł najpierw z zespołem technicznym oraz wprowadzić regularną komunikację już na etapie planowania projektu. Cały aspekt techniczny projektu należy do zespołu, zespół też wie jak skomplikowane jest dane zadanie.

W prawidłowej organizacji tworzącej oprogramowanie rola managera, który ingeruje w aspekty techniczne, nie powinna tak naprawdę istnieć. Product Owner powinien wyznaczać cele, albo strategie produktu, zespół techniczny powinien opracowywać rozwiązania i je iteratywnie implementować. Product Owner powinien też zgłaszać feedback, aby pomagać w kształtowaniu misji projektu.

> Tak na marginesie to czasem mam wrażenie, że projekt managerowie są jak cząstki elementarne, biegają gdzieś po omacku, odbijając się od ścian, czasem jak się zderzą ze sobą, to wyzwali się energia, czyli oni wpadną na jakiś nowy, nierealistyczny i nikomu niepotrzebny pomysł. Który, oczywiście, będzie musiał być zaimplementowany ASAP.

#### 2. Produkt jest budowany przez managerów, którzy nie mają pojęcia o produkcie i użytkownikach

Problem podobny do powyższego, tylko w nieco innej dziedzinie. Jest to też dobre miejsce na wprowadzenie terminu, który usłyszałem niedawno na jednej konferencji. **HiPPO (ang. Highest Paid Person's Opinion)** - jest to piękne określenie na osoby, które wpływają na projekt informatyczny (a nie powinny).

Ile razy implementowaliście coś, albo zmienialiście na ostatnią chwilę, tylko dlatego, że szef wpadł właśnie na taki pomysł, albo uważa ze tak będzie to wyglądało lepiej? Ile waszych projektów nigdy nie doświadczyło prawdziwych użytkowników, bo projekt został zamknięty albo zapomniany?

Ponownie kluczem do prawidłowego funkcjonowania organizacji jest **zaangażowanie zespołu technicznego od początku budowy produktu**. Członkowie zespołu muszą rozumieć idee produktu, profil docelowych użytkowników, problemy jakie produkt ma rozwiązywać itd. Decyzje powinny być poparte danymi i rezultatami testów. Mogą to być testy A/B albo bezpośrednie sesje z użytkownikami. Zespół powinien także mieć w składzie osoby zorientowane na UI oraz UX. Ważne dla produktu jest także jak najszybsze dostarczenie go do prawdziwych użytkownikow.

> Na marginesie, to wszystkie firmy teraz rekrutują jak szalone, bo potrzebują więcej programistów. A zauważcie jak dużo zasobów jest marnotrawione, bo managerowie (niżsi i wyżsi) sami nie wiedzą czego chcą od produktu.

#### 3. Traktowanie programistów jako siła robocza albo linia produkcyjna

W wielu organizacjach dział techniczny odpowiada tylko za realizacje projektów, pełni tylko rolę wykonawczą. Prowadzi to do wyrażnego podziału ról, co w produkcji oprogramowania jest niepożądane. Prowadzi to do mniejszej jakości końcowego produktu. Programiści w taki hierarchicznych organizacjach stanowią **siłę roboczą XXI wieku**. Zaprogramują oni każdą specyfikację, która na nich spadnie. Czy ma ona jakikolwiek sens, czy nie. Czy pasuje do reszty systemu, nie wiadomo, ale po co się pytać. Rezultatem jest minimalna zwinność takich zespołów, niska motywacja, a co gorsza bardzo ograniczone możliwości wybitniejszych jednostek. Czyli taka firma nie wykorzystuje pełnego potencjału swoich pracowników.

Rozwiązaniem jest **zwracanie się do zespołu technicznego zawsze z problemem, a nie z rozwiązaniem**. To naszą rolą jest projektowanie i implementacja oprogramowania, które rozwiąże zadany problem. Jesteśmy inżynierami, z wieloma latami doświadczenia, to my wiemy jak internet i oprogramowanie funkcjonuje, my znamy dobre praktyki jego tworzenia.

#### 4. Scrum i inne praktyki Agile nie uwzględniają jakości tworzonego oprogramowania

Od dawna panuje trend na zwinne rozwijanie oprogramowania. Ta metodyka ma bardzo wiele zalet i jest na pewno rewolucyjna w porównaniu do swojego poprzednika. Ale mało który manager rozumie proces tworzenia oprogramowania, a jeszcze mniej iteracyjny **proces utrzymania kodu w dobrej formie**. Mało kto rozumie, że dług techniczny trzeba regularnie spłacać. Że trzeba robić update bibliotek, framework'ów, baz danych i innych wykorzystywanych technologii. Że wydajność i szybkość aplikacji jest ważna. Że refaktoring i testy to powinien być chleb powszedni każdego programisty.

Dlaczego panuje powszechne przekonanie, że aplikacje internetową trzeba co kilka lat przepisać, bo inaczej nikt nie jest w stanie jej dalej sensownie rozwijać? Bo management nie rozumie *jak*, a zwłaszcza *po co* tworzyć kod dobrej jakości. Że to jest inwestycja, która zwraca się podczas każdej kolejnej dodanej funkcjonalności.

---

Myślę, że mógłbym dodać jeszcze kilka kolejnych punktów do tej listy. Weźmy na przykład: nieefektywną rekrutację i *onboarding*, marnowanie czasu swojego oraz zespołu, brak wiedzy na temat designu, co prowadzi do niespójności w UI i interakcji z produktem. Ale myślę, że dałem Wam już dzisiaj wystarczająco powodów do przemyśleń.

Zmierzając do podsumowania, **dobry manager** to taki, który współpracuje z zespołem, ale nie ingeruje w jego wewnętrzną pracę. Zespół oczywiście musi być samowystarczalny, zapoznany z problemem i produktem, zorientowany na cel, w który wierzy. Jak zbudować taki zespół dowiecie się z kolejnych wpisów.

Zachęcam do sprawdzenia mojego profilu na [Twitterze](http://twitter.com/krzysu). Tam też przyjmuję komentarze!
