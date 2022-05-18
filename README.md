
# Brain quest</br>



![img](https://i.imgur.com/uVGjMAO.png)


## Użyte Technologie

![Nowy projekt](https://camo.githubusercontent.com/fe902e8a940c17ac8fd397186ef905a7955e39ad9c3197b062eb2d4043bc2ab1/68747470733a2f2f696d6167652e6962622e636f2f6d38533965772f72656163745f72656475785f736173732e6a7067)


## Opis
Projekt stworzony w React, Redux, scss. Głównym założeniem strony było udoskonalenie umiejętności.<br/>
Aktualnie dostępne są 4 mini gry. <br/>
Każda z gier, działa na zasadzie poziomów tj. jeżeli gracz udzieli pozytywnej odpowiedzi, nastąpi kolejny, trudniejszy etap, jenak gdy odpowiedź będzie błędna, gra się zakończy, a wyniki zostaną zapisane w sekcji Dashboard, za pomocą local storage, będą one możliwe do zobaczenia, po wyłączeniu przeglądarki/karty.

## Spis minigier
1. Remember Number - na krótką chwilę wyświetlana jest liczba, która po czasie znika - użytkownik, musi ją zapamiętać i wpisać w input. Jeśli odpowiedź będzie poprawna, kolejna będzie o jedną cyfrę większa, natomiast gdy udzielona odpowiedź będzie błędna, następuje koniec.
2. Where it was - na pewien momen w oddzielnych kafelkach, ukażą się losowo generowane cyfry od 1 do 9, po czym znikną. Gracz ma za zadanie, wybrać wskazane kafelki, jeśli, będą one zgodne, następuje kolejny etap, gdzie ilość elementów będzie rosła o jeden. Gdy chociaż jeden kafelek będzie wybrany błędnie, rozgrywka się kończy.
3. Remember Word - mużytkownik ma za zadanie określić, czy wyświetlone słowo było wcześniej pokazane, jeśli tak - musi wybrać przycisk "SEEN", natomiast, gdy wyraz pojawi się pierwszy raz "NEW". Jeśli trzykrotnie zostanie wybrany zły button, gra kończy się. Z api pobierane jest 200 losowych słów w języku angielski, które wraz z progresem, będą dodawane do zbioru wyrazów możliwych do wyświetlenia.
4. Circle ninja - polega na trafieniu jak największej ilośći kółek, co czwarte trafione kółko, następuje kolejny poziom, a z tym skraca się czas animacji, co powoduje utrudnienie rozgrywki. Za każdy przepuszczony element pasek skraca się o 10%, gdy wartość paska osiągnie 0, gra kończy się. <br/><br/>
W dalszym stopniu zamierzam rozwijać aplikacje 
