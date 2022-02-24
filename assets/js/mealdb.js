const searchFood=()=>{
        const searchField=document.getElementById('search-input');
        const searchFieldtxt=searchField.value;
        console.log(searchFieldtxt);

        searchField.value='';

        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldtxt}`

        console.log(url)

        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))
}
