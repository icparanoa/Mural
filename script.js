(function(){
    var atualizarHora = function(){
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(), 
            segundos = fecha.getSeconds(), 
            diaSemana = fecha.getDay(), 
            dia = fecha.getDate(), 
            mes = fecha.getMonth(), 
            year = fecha.getFullYear();



            var pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year');

         var semana = ['Domingo', 'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
         pDiaSemana.textContent = semana[diaSemana];

         pDia.textContent = dia;

         var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubto', 'Novembro', 'Dezembro'];

         pMes.textContent = meses[mes];

         pYear.textContent = year;

         if(horas >= 24){
          horas = horas - 24;
          ampm = 'PM';
         }else{
          ampm = 'PM';
         }
        
        if(horas == 0){
         horas = 24;
        };

        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

          if(minutos <10){ minutos = "0" + minutos};
          if(segundos < 10){ segundos = "0" + segundos};
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;

 };

atualizarHora();
    var intervalo = setInterval(atualizarHora, 1000);
}())

let diapos = document.getElementsByClassName("diapos");
var index = 0;
var interv;
pasar();
arrancar();

function pasar() {

    for (var i = 0; i < diapos.length; i++) {
        diapos[i].style.display = "none";
        diapos[i].style.cursor = "pointer";
    };
    index++;
    if (index > diapos.length) {
        index = 1;
    }
    diapos[index - 1].style.display = "block";
};

function arrancar() {
    interv = setInterval(pasar, 8000);
}

