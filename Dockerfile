# Используем базовый образ Alpine с Node.js 22 и yarn
FROM node:22-alpine as base

# Устанавливаем дополнительные зависимости для работы ПО и задаем временную зону
RUN apk add --no-cache openssl tzdata \
  && cp /usr/share/zoneinfo/Asia/Vladivostok /etc/localtime \
  && echo "Asia/Vladivostok" > /etc/timezone \
  && apk del tzdata

# Создаем рабочую директорию
WORKDIR /app

FROM base as build

# Копируем проект
COPY . .

# Устанавливаем зависимости для сборки
# Генерируем .prisma
# Выполняем миграции
# Собираем проект
RUN npm install \
  && npx prisma generate \
  && npx prisma migrate deploy \
  && npm run build 

# Используем более легкий базовый образ Alpine для финального контейнера
FROM base as app

# Копируем собранные файлы из стадии сборки
COPY --from=build /app/.output /app/

# Запускаем приложение
CMD ["node", "./server/index.mjs"]
