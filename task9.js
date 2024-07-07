async function task9(urls){
    try {
        const promises = urls.map(async (url) => {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Ошибка при получении данных с ${url}: ${response.statusText}`);
          }
          return response.json();
        });
    
        const results = await Promise.all(promises);

        const result = results.reduce((acc, result) => {
          return { ...acc, ...result };
        }, {});
    
        return result;
      } catch (error) {
        console.error('Ошибка при извлечении данных из API:', error);
        throw error;
      }
    };
