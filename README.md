![Planfix logo](https://github.com/paveltkachenkomy/pf-check-repeated-texts/raw/master/Planfix-PNG-black.png "Planfix logo")
## Проверка текстов на повторение


### Установка и запуск
Для установки потребуется git, nodejs


#### Установка
Клонируем саму утилиту  
```
git clone https://github.com/paveltkachenkomy/pf-check-repeated-texts.git
```


Переходим в папку и устанавливаем компоненты  
```
cd ./pf-check-repeated-texts && npm install
```


#### Использование
Клонируем текстовые файлы (например из русской локализации и вставляем в директорию locale в утилите)


Выполняем команду
```
npm start
```


После окончания выполнения в директории утилиты появится файл "texts.txt", в котором выведены все совпадающие текстовки