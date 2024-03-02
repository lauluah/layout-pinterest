const cxpesquisa = document.getElementById("cxpesquisa");

    cxpesquisa.addEventListener('input', function() {
        const Vpesquisa = cxpesquisa.value.toLowerCase();
        const imagens = document.querySelectorAll('.imagem'); 
      
            imagens.forEach(function(imagem) {
            const alt = imagem.getAttribute('alt').toLowerCase();

    if (alt.includes(Vpesquisa)) {
        imagem.style.display = 'block';
    } else {
        imagem.style.display = 'none';
           }
    });
});
