# Тестовое задание

## Ручки

- http://localhost:3000 - отдает статический файл index.html из public.
- http://localhost:3000/about - возвращает простой текст 'Это простое приложение на Express.js'
- http://localhost:3000/* - 'Страница не найдена' для всех маршрутов, которых не существует.

## Запуск приложения

```bash
git clone https://github.com/M4cr0s3/test-exercise.git
npm i
npm run start
```

Вариант с докером:

```bash
docker pull macrose/express-test
docker run -p 3000:3000 --name express-test macrose/express-test:latest
```
