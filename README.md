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
							// search - поиск в файлах проетка текстовок по индексу текстовки
							// replace - замена в проекте 
	"include": [],			// Не обязателен (директории и файлы)
	"exclude": [],			// Не обязателен (директории и файлы)
	"serach": [],			// Обязателен для search процесса
	"output": "",			// Обязателен для repeated процесса
	"replace": []			// Обязателен для replace процесса
}
```

Выполняем команду
```
npm start <input> <output>
```

Где ```<input>``` путь к директории с файлами текстовок и ```<output>``` директория куда будет выгружен файл результата
