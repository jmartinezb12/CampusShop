export const getAllArticles = async() => {
    let res= await fetch("https://6687e0a50bc7155dc0198074.mockapi.io/api/v1/articles");
    return await res.json();
}