console.log("Test with HTML")

async function fetchData(){
    try {
       const response = await fetch("https://www.anapioficeandfire.com/api/books")
       const data = await response.json();
       console.log(data)
    //    console.log(data[0])
           data.forEach(ele => {
        const BooksNameobj = {
         ...ele,
         names : ele.name,
         isbn : ele.isbn,
         numberofpages : ele.numberOfPages,
         authors : ele.authors,
         publisher : ele.publisher,
         releasedate : ele.released,
         characters : ele.characters[0]       
         }  
         Booksname(BooksNameobj);
               
    }) 

    } 
    catch (error) {
        console.log(error)
    }
}



function Booksname(elements){
    document.body.innerHTML += `
    <div class="container">
    <div class="info">
        <p><span>Name : ${elements.names} </span></p>
    <p><span>ISBN : ${elements.isbn} </span></p>
    <p><span>NumberOfPages : ${elements.numberofpages} </span></p>
    <p><span>Author : ${elements.authors} </span></p>
    <p><span>Publisher : ${elements.publisher} </span></p>
    <p><span>ReleaseDate : ${elements.released} </span></p>
    <p><span>characters : ${elements.characters} </span></p>
   
    </div>
    </div>
    `
}

fetchData()