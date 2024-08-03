function mostrarSecao(id) {
    var section = document.getElementById(id)
    var topo = section.offsetTop - 70

    window.scrollTo({
        top: topo,
        behavior: 'smooth'
    })
}
