const getImagePath = (imagePath: string, fullSize?: boolean) => {
    return imagePath
    ? `https://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}${imagePath}`
    : "/images/placeholder.png";
}
 
export default getImagePath;