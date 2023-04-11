![Planfix logo](https://github.com/paveltkachenkomy/pf-check-repeated-texts/raw/master/Planfix-PNG-black.png "Planfix logo")

## Описание
Утилита для помощи в очистке текстовок и файлов проекта от дубликатов текстов.

### Оглавление
 - [Установка](#установка)
 - [Использование](#использование)
	- [Примеры](#примеры)
		- [Поиск дубликатов](#поиска-дубликатов-текстов-в-файлах-текстовок)
		- [Замена в файлах](#замена-текстовок-в-файлах-проекта)

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
Для использования нужно сконфигурировать утилиту в файле **[checkutil.json](#checkutiljson)** и выполнить команду
```
npm start
```

#### checkutil.json

**"process"** - Вариант работы утилиты
- **repeated** - Проверка повторяющихся текстовок
- **replace** - Замена в файлах проекта(ов)
- **replacemost** - Замена в файлах проекта(ов) по большенству совпадений из вариантов **search**

**"include"** - Директорий вхождений с проектам(и)

**"exclude"** - Игнорируемые директории и файлы

**"search"** - ИД текстов или текст для что меняем (обязателен для replace и replacemost)

**"replaced"** - ИД текстов или текст для замены (обязателен для replace)

**"output"** - Файл для вывода результата (обязателен для repeated)

#### Примеры 
##### Поиска дубликатов текстов в файлах текстовок
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
##### Замена текстовок в файлах проекта
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
