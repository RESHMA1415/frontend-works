// $(document).ready(function(){
//         $("p").hide();
//     });


// $(document).ready(function(){
    // $("p").hide();
    // $("button").click(function(){
    //  $("p").hide();   
    // })
    // $("button").click(function(){
    //     $("#h1").hide();
    // })
    // $("button").click(function(){
    //     $(".h6").hide();
    // $("button").click(function(){
    //     $(this).hide();
//     $("button").dbclick(function(){
//         $('p').hide();
//     })
//     $("button").mouseenter(function(){
//         $('p').hide();
//     })
//     $("button").mouseleave(function(){
//         $('#h1').hide();

    
//     })
//     $("button").hover(function(){
//         $('.h6').hide();
//     })
//     $("button").keypress(function(){
//         $('.h6').hide();
//     })
//     $("button").keydown(function(){
//         $('#h1').hide();
//     })
//     $("button").keyup(function(){
//         $('this').hide();
//     })



// $("button").click(function(){
//     $('p').css("background-color","yellow");
// })
// $("input").focus(function(){
//     $(this).css("background-color","green");
// })
// $("button").blur(function(){
//     $(this).css("background-color","red");
// })

// $("#b1").keyup(function(){
//     $(this).hide();
// })

// $("#b2").keyup(function(){
//     $('p').show();
// })

// $("#b1").keyup(function(){
//     $('p').toggle();
// })



// ("#b1").keyup(function(){
//     $('div').fadein();
// })

// $("#b2").keyup(function(){
//     $('div').fadeout();
// })

// $("#b3").keyup(function(){
//     $('p').fadeTogle();
// })

// $("#b1").keyup(function(){
//     $('div').slideUp(2000);
// })

// $("#b2").keyup(function(){
//     $('div').slideDown(2000);
// })

// $("#b3").keyup(function(){
//     $('div').slideToggle(3000);
// })
//  });



// $(document).ready(function(){
//     $("#b1").click(function(){
//     $("div").css("color","blue").slideUP(2000,function(){
//         $(this).css("bacground-color","green");

//     }).slideDown(2000,function(){
//         $(this).css("background-color","red")
//     }).fadeOut(2000,function(){
//         $(this).css("background-color","yellow")
//     }).fadeIn(2000,function(){
//         $(this).css("background-color","blue")
//     });
// });
// });

$(document).ready(function(){

    $('#b1').click(function(){
         $('h1').append("hello")
    })
    $('#b1').click(function(){
        $('h1').prepend("hello")
});
$('#b3').click(function(){
    $('h1').after("hello")
})
$('#b4').click(function(){
    $('h1').before("hello")
});
})
$(document).ready(function(){
    $('#b1').click(function(){
        alert("data is"+$('p').text())

    });
});
    $('#b2').click(function(){
        alert("data is"+$('p').html())
    })
    $('#b3').click(function(){
        alert("data is"+$('input').val())
})
$('#b3').click(function(){
    alert("data is"+$('a').attr("href"))
})


$(document).ready(function(){
    $('#b1').click(function(){
        $('p').text("hello hai")
    })
})
    $(document).ready(function(){
        $('#b1').click(function(){
            $('p').html("hello <i>hai</i>")
})
    })
$(document).ready(function(){
    $('#b1').click(function(){
        $('input').val("jquerry")
    })
})
    $(document).ready(function(){
        $('#b1').click(function(){
            $('a').attr("href","https://en.wikipedia.org/wiki/Flower#:~:text=External%20links-,Flower,-194%20languages")

        })
    })



