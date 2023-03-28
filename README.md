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
checkutil.json
```
{

	"process": "",			// repeated - проверка повторяющихся текстовок
							// replace - замена в проекте 
	"include": [],			// Директории с проектом
	"exclude": [],			// Директории и файлы для исключения (не обязателен)
	"serach": [],			// Индексы текстовок для поиска по проетку (обязателен, для процесса search)
	"output": "",			// Директория файла с результатами (для процесса repeated) 
	"replace": ""			// Замещающий индекс текстовки (обязателен, для процесса replace)
}
```

Выполняем команду
```
npm start <input> <output>
```

Где ```<input>``` путь к директории с файлами текстовок и ```<output>``` директория куда будет выгружен файл результата
