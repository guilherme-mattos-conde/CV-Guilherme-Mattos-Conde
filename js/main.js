import titulos from "../mocks/titulos.js"
import informacoes from "../mocks/informacoes.js"
import formacao from "../mocks/formacao.js"
import experiencias from "../mocks/experiencias.js"
import cursosCertificacoes from "../mocks/cursosCertificacoes.js"

const idiomaSelect = document.getElementById('idioma')
const titulosExperiencia = document.querySelectorAll('.experiencia')
const titulosFormacao = document.querySelectorAll('.formacao')
const titulosCursosCertificacoes = document.querySelectorAll('.cursos-certificacoes')
const divInformacoes = document.getElementById('div-informacoes')
const divFormacao = document.getElementById('div-formacao')
const divExperiencias = document.getElementById('div-experiencias')
const divCursosCertificacoes = document.getElementById('div-cursos-certificacoes')

idiomaSelect.addEventListener('change', () => {
    const idioma = idiomaSelect.value;
    atualizarPagina(idioma);
})

function atualizarPagina(idioma) {
    atualizarTitulos(idioma)
    atualizarInformacoes(idioma)
    atualizarSecoes(idioma)

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function atualizarTitulos(idioma) {
    let texto = verificaIdioma(titulos[0], idioma)

    console.log(texto)

    titulosExperiencia.forEach((e) => e.textContent = texto.experiencia)
    titulosFormacao.forEach((e) => e.textContent = texto.formacao)
    titulosCursosCertificacoes.forEach((e) => e.textContent = texto.cursosCertificacoes)
}

function atualizarInformacoes(idioma) {
    divInformacoes.innerHTML = ''
    
    informacoes.forEach((e) => {
        let texto = verificaIdioma(e, idioma)

        divInformacoes.innerHTML += `
            <div>
                <h2>${texto.titulo}</h2>
                <p>${texto.paragrafo}</p>
            </div>
        `
    })
}

function atualizarSecoes(idioma) {
    divFormacao.innerHTML = ''
    divExperiencias.innerHTML = ''
    divCursosCertificacoes.innerHTML = ''

    formacao.forEach((e) => adicionarCard(divFormacao, e, idioma))
    experiencias.forEach((e) => adicionarCard(divExperiencias, e, idioma))
    cursosCertificacoes.forEach((e) => adicionarCard(divCursosCertificacoes, e, idioma))
}

function adicionarCard(section, e, idioma) {
    let texto = verificaIdioma(e, idioma)

    section.innerHTML += `
        <div class="cards">
            <img src="${e.imagem}" alt=""></img>
            <div>
                <h1>${texto.titulo}</h1>
                <h2>${texto.subtitulo}</h2>
                <h3>${texto.ano}</h3>
            </div>
        </div>
    `
}

function verificaIdioma(e, idioma) {
    if (idioma === 'pt-BR') {
        return e.ptBR
    } else if (idioma === 'en-US') {
        return e.enUS
    }
}

const idiomaPadrao = idiomaSelect.value
atualizarPagina(idiomaPadrao)
