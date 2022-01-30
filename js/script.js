$(document).ready(function() {

    //MAGNIFIC POPUP PARA QUANDO CLICAR NA IMAGEM
    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image',

        gallery: {
            enabled: true
        }
    });


    //CARROSEL DE IMAGENS DO CARDÁPIO
    $('.carrosel').slick({
        centerMode: true,
        mobileFirst: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


    //CARROSEL DE IMAGENS DA CHURRASCARIA
    $('.fotos-churrascaria').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 900,
        infinite: true,
        speed: 700,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });

    //BOTÃO VOLTAR AO TOPO
    $(window).scroll(function() {
        let position = $(this).scrollTop();

        if (position >= 718) {
            $('.voltar-topo').addClass('scrollTop');
        } else {
            $('.voltar-topo').removeClass('scrollTop');
        }
    });


    //SUAVIZA O SCROLL PARA NAVEGAÇÃO
    $('.nav-item a, header-link, .btn-adiante, .voltar-topo, .navbar-brand .info').click(function(link) {
        link.preventDefault();
        let target = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 25
        }, 1000);
    });


})