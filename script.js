const buttons = document.querySelectorAll('.botoes-linguagens button');
const elementsToTranslate = document.querySelectorAll('[data-i18n]');

function loadLanguage(lang) {
    fetch(`i18n/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            elementsToTranslate.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[key]) el.textContent = translations[key];
            });
            localStorage.setItem('linguagem', lang); // mesma chave no salvar e carregar
        });
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('linguagem');
        loadLanguage(lang);
    });
});

const savedLang = localStorage.getItem('linguagem') || 'pt';
loadLanguage(savedLang);
