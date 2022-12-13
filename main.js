document.querySelector(".fa-solid").onclick = function () {
    document.querySelector(".search_memo").classList.toggle("active")
    document.querySelector(".shop_memo").classList.remove("active")
    document.querySelector(".nav").classList.remove("active")
}
document.querySelector(".fa-cart-shopping").onclick = function () {
    document.querySelector(".shop_memo").classList.toggle("active")
    document.querySelector(".search_memo").classList.remove("active")
    document.querySelector(".nav").classList.remove("active")
}
document.querySelector(".fa-bars").onclick = function () {
    document.querySelector(".nav").classList.toggle("active")
    document.querySelector(".search_memo").classList.remove("active")
    document.querySelector(".shop_memo").classList.remove("active")
}