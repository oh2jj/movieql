let movies = [
    {
        id: 0,
        name: "어벤저스",
        score: 6
    },
    {
        id: 1,
        name: "신세계",
        score: 5
    },
    {
        id: 2,
        name: "범죄도시",
        score: 7
    },
    {
        id: 3,
        name: "극한직업",
        score: 9
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const fileteredMovies = movies.filter(movie => movie.id === id);
    return fileteredMovies[0];
};

export const deleteMovie = id => {
    const cleanMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanMovies.length) {
        movies = cleanMovies;
        return true;
    }else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}