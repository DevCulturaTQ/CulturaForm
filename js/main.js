$("#cpf").keyup(function () {
    $("#cpf").mask("999.999.999-99");
    if (cpf.value.length !== 14) {
        $('#vcpf').removeClass("indicador_on");
    } else {
        $('#vcpf').addClass("indicador_on");
    }
});

$("#cnpj").keydown(function () {
    $("#cnpj").mask("99.999.999/9999-99");
});

$("#telefone").keydown(function () {
    $("#telefone").mask("(99)99999-9999");
});

$('#nascimento').keyup(function (e) {
    $('#nascimento').mask("99/99/9999")
    if (nascimento.value.length !== 10) {
        $('#vdata').removeClass("indicador_on");
    } else {
        $('#vdata').addClass("indicador_on");
    }
});

$("#nome").keyup(function () {
    if (nome.value.length < 7) {
        $('#vnome').removeClass("indicador_on");
    } else {
        $('#vnome').addClass("indicador_on");
    }
});

$("#nome").keyup(function () {
    if (nome.value.length < 7) {
        $('#vnome').removeClass("indicador_on");
    } else {
        $('#vnome').addClass("indicador_on");
    }
});

$('#end').keyup(function () {
    endverifica();
}); $('#endN').keyup(function () {
    endverifica();
}); $('#endB').keyup(function () {
    endverifica();
})

function endverifica() {
    if (end.value.length > 5 && endN.value.length > 0 && endB.value.length > 5) {
        $('#vend').addClass("indicador_on");
    } else {
        $('#vend').removeClass("indicador_on");
    }
}
