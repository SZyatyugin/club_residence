window.onload = function () {

    function getAll(id) {
        return document.querySelectorAll(id)
    }

    function get(id) {
        return document.querySelector(id)
    }
    function dot(id){
        return document.getElementById(id)
    }

    let logo = getAll('.logo');
    let slideForward = dot('slideForward');
    let slideBack = dot('slideBack');
    let dots = getAll('.dots');
    let slider = get('.slider');
    let slide1Addr = getAll('.slide1_footer_address');
    let divClubresidence = getAll('.divClubresidence');
    let maintext = getAll('.maintext');
    let slide1 = getAll('.slide1');


    slideForward.addEventListener('click', changestate, false);

    Array.from(dots).forEach((elem) => {
        elem.addEventListener('click', changestate, false)
    });

    function changestate(e) {
        if (e.currentTarget.classList.contains('checked')) {
            e.preventDefault();
            return false;
        }


        if (e.currentTarget == slideForward) {
            if (slideForward.classList.contains('clicked')) {
                e.preventDefault();
                return false
            } else {
                slideForward.classList.add('clicked');

                slideBack.classList.remove('clicked');
            }

        } else
        if (e.currentTarget == slideBack) {
            if (slideBack.classList.contains('clicked')) {

                e.preventDefault();
                return false
            } else {
                slideBack.classList.add('clicked');
                slideForward.classList.remove('clicked')
            }
        }

        for (let i = 0; i < 3; i++) {
            if (i < logo.length) {
                if (logo[i].classList.contains('showlogo')) {
                    logo[i].classList.remove('showlogo');
                } else {
                    logo[i].classList.add('showlogo')
                }
            }
            if (i < dots.length) {
                if (dots[i].classList.contains('checked')) {
                    dots[i].classList.remove('checked');
                } else {
                    dots[i].classList.add('checked');
                }
            }
            if (i < slide1Addr.length) {
                if (slide1Addr[i].classList.contains('active')) {
                    slide1Addr[i].classList.remove('active');
                } else {
                    slide1Addr[i].classList.add('active');
                }
            }
            if (i < divClubresidence.length) {
                if (divClubresidence[i].classList.contains('active')) {
                    divClubresidence[i].classList.remove('active');
                } else {
                    divClubresidence[i].classList.add('active');
                }
            }
            if (i < maintext.length) {
                if (maintext[i].classList.contains('active')) {
                    maintext[i].classList.remove('active');
                } else {
                    maintext[i].classList.add('active');
                }

            }
            if(i<slide1.length){
                if (slide1[i].classList.contains('scroll')) {
                    slide1[i].classList.remove('scroll');
                } else {
                    slide1[i].classList.add('scroll');
                }
            }
        }
       



        for (let i = 0; i < slider.children.length; i++) {
            if (slider.children[i].className) continue
            if (slider.children[i].innerHTML == '02') {
                slider.children[i].innerHTML = '01';
                slider.children[i].style.fontSize = '10px';
            } else {
                slider.children[i].innerHTML = '02';
                slider.children[i].style.fontSize = '12px';
            }
        }
        slideBack.addEventListener('click', changestate, false);
    }




Array.from(getAll('.nav_dots')).forEach((elem) => {
    elem.addEventListener('click', move, false);
})



function move(e) {
    let elem = e.currentTarget.id;
    let array = [{
            id: 'dots_main',
            pos: 0
        },
        {
            id: 'dots_gallery',
            pos: 750
        },
        {
            id: 'dots_plan',
            pos: 1500
        },
        {
            id: 'dots_document',
            pos: 2500
        },
        {
            id: 'dots_contacts',
            pos: 3050
        }
    ]
    for (let i = 0; i < array.length; i++) {
        if (elem == array[i].id) {
            window.scrollTo(0, array[i].pos);
        }
    }

}
Array.from(getAll('.show_modal')).forEach((elem) => {
    elem.addEventListener('click', showmodal, false)
})

function showmodal() {
    dot('modal').style.display = 'grid';
}

dot('close_modal').addEventListener('click', closemodal, false);

function closemodal() {
    dot('modal').style.display = 'none';
}

}