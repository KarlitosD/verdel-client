const $formSearch = document.getElementById("form-search")
const $searchText = document.getElementById("search-text")
const existingSearch = localStorage.getItem("search")

existingSearch && ($searchText.textContent = existingSearch)

const editName = (search) => {
    $searchText.textContent = search
    localStorage.setItem("search", search)
}

$formSearch.addEventListener("submit", e => {
    e.preventDefault()
    const search = document.getElementById("search-input").value
    editSearch(":(")
    search.trim() && editSearch(search)
})

$searchText.addEventListener("click", e => {
    const element = e.target
    if(element.tagSearch==="SPAN"){
        element.innerHTML = `<input type="text" id="search-input" value="${element.textContent}">`
    }
})