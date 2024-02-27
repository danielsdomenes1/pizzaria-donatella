$('section#domingo-perfeito').waypoint(function (direcao) {
    if (direcao == "down") {
        $('div.folha1').addClass('animate__animated animate__fadeInUp');
        $('div.folha3').addClass('animate__animated animate__fadeInUp');
        $('div.camarao').addClass('animate__animated animate__fadeInUp');
        $('div.tomate').addClass('animate__animated animate__fadeInUp');
        $('div.queijo').addClass('animate__animated animate__fadeInUp');
        $('div.folha2').addClass('animate__animated animate__fadeInUp');

    }
    else if (direcao == "up") {
        $('div.folha1').removeClass('animate__animated animate__backInDown');
        $('div.folha3').removeClass('animate__animated animate__backInDown');
        $('div.camarao').removeClass('animate__animated animate__backInDown');
        $('div.tomate').removeClass('animate__animated animate__backInDown');
        $('div.queijo').removeClass('animate__animated animate__backInDown');
        $('div.folha2').removeClass('animate__animated animate__backInDown');
    }


}, {
    offset: '450px'
})

$('id#testemunha ul:eq(0)').css('opacity', 0);
$('id#testemunha ul:eq(1)').css('opacity', 0);
$('id#testemunha ul:eq(2)').css('opacity', 0);

$('sectiontestemunha').waypoint(function (direcao) {
    if (direcao == 'down') {
        $('id#testemunha ul:eq(0)').addClass('animate__animated animate__fadeInUp anime__slower');
        $('id#testemunha ul:eq(1)').addClass('animate__animated animate__fadeInUp anime__slower');
        $('id#testemunha ul:eq(2)').addClass('animate__animated animate__fadeInUp anime__slower');
    }

    if (direcao == 'up') {
        $('id#testemunha ul:eq(0)').removerClass('animate__animated animate__fadeInUp anime__slower');
        $('id#testemunha ul:eq(1)').removerClass('animate__animated animate__fadeInUp anime__slow');
        $('id#testemunha ul:eq(2)').removerClass('animate__animated animate__fadeInUp anime__slower');
    }
}, {
    offset: '400px;'
})

$('div#transicao-testemunha-plano').waypoint(function (direcao) {
    if (direcao == 'down') {
        $('div#direcao1').removerClass('animate__animated animate__fadeOutleft anime__slow');
        $('div#direcao2').removerClass('animate__animated animate__fadeOut anime__slow');
        $('div#direcao3').removerClass('animate__animated animate__fadeOutRight anime__slow');

        $('div#direcao1').addClass('animate__animated animate__fadeInLeft anime__slow');
        $('div#direcao2').addClass('animate__animated animate__fadeIn anime__slow');
        $('div#direcao3').addClass('animate__animated animate__fadeInRight anime__slow');

    } else {

        $('div#decoracao1').addClass('animate__animated animate__fadeOutLeft animate_slow');

        $('div#decoracao2').addClass('animate__animated animate__fadeOut animate_slow');

        $('div#decoracao3').addClass('animate__animated animate__fadeOutRight animate_slow');
    }
}, {

    offset: '600px;'
})


$('section#plano-principal').waypoint(function(direcao) {
    if (direcao == 'down'){
        $('div.planos:eq(0)').addClass('animate__animated animate__fadeInLeft animate__slower')
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow')
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeInRight animate__slower');
    } else {
        $('div.planos:eq(0)').removerClass('animate__animated animate__fadeInLeft animate__slower')
        $('div.planos:eq(1)').removerClass('animate__animated animate__fadeInUp animate__slow')
        $('div.planos:eq(2)').removerClass('animate__animated animate__fadeInRight animate__slower');
    }    
}, {
    offset: '450px;'
})

    





