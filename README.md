![Planfix logo](https://github.com/paveltkachenkomy/pf-check-repeated-texts/raw/master/Planfix-PNG-black.png "Planfix logo")
## Описание
Утилита для помощи в очистке текстовок от сопадающи текстов.

### Установка
Для установки потребуется [git](https://git-scm.com/), [nodejs](https://nodejs.org/).

Клонируем саму утилиту  
```
git clone https://github.com/paveltkachenkomy/pf-check-repeated-texts.git
```

Переходим в папку и устанавливаем компоненты  
```
cd ./pf-check-repeated-texts && npm install
```

### Использование
Для использования нужно сконфигурировать утилиту в файле **checkutil.json** и выполнить команду
```
npm start
```

```
{
	"process": "",			// **repeated** - проверка повторяющихся текстовок или **replace** - замена в файлах проекта(ов) 
	"include": [],			// Директории с файлами
	"exclude": [],			// Директории и файлы для исключения (не обязателен)
	"serach": [],			// Индексы текстовок для поиска по проетку (обязателен, для процесса replace)
	"replace": "",			// Замещающий индекс текстовки (обязателен, для процесса replace)
	"output": ""			// Директория файла с результатами (для процесса repeated)
}
```

#### Пример для поиска совпадающих текстов в файлах текстовок
```
{
	"process": "repeated",
	"include": ["D:/planfix/planfix-frontend/locale/ru"],
	"exclude": [
		"wiki.ru.properties",
		"android*",
		"etc_reactnative_release*",
		"etc_pfeditor*",
		"etc_timer"
	],
	"serach": [],
	"replaced": "",
	"output": "./output/text.txt"
}
```
