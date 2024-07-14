export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id, 10);

  const candidate = await database.file.findUnique({
    where: {
      id: id,
    },
  });

  if (!candidate) {
    throw createError({ statusCode: 404, statusMessage: 'Файл не найден' });
  }

  // Определите тип содержимого в зависимости от типа файла, если необходимо
  setResponseHeader(event, 'Content-Type', 'image/png'); // Убедитесь, что тип содержимого соответствует вашему файлу
  setResponseHeader(event, 'Content-Disposition', 'inline; filename=file.png');
  
  return candidate.data;
});
