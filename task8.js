function task8(urls){
    const promises = urls.map(url => {
      return fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Ошибка при получении данных с ${url}: ${response.statusText}`);
          }
          return response.json();
        });
    });

    return Promise.all(promises)
      .then(results => {

        const result = results.reduce((acc, result) => {
          return { ...acc, ...result };
        }, {});
        
        return result;
      })
      .catch(error => {
        console.error('Ошибка при извлечении данных из API:', error);
        throw error;
      });
  };