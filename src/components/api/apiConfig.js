const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: '6c6f245c7cb66188c43ba3a86c847ebe',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;