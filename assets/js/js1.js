// JavaScript Document
var key = function (e) {
  e = e || window.event;
  event.preventDefault();
  var k = e.keyCode || e.which;
  if (k == 32) {
    stop_play();
  }
};
document.onkeydown = key;

function listener() {
  document.addEventListener(
    "play",
    function (e) {
      var audios = document.getElementsByTagName("audio");
      for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
          audios[i].pause();
          audios[i].currentTime = 0;
        }
      }
    },
    true
  );
}

function stop_play() {
  listener();
  var aud = document.getElementById("blank").play();
}

// Intro
function play_int1() {
  listener();
  var aud = document.getElementById("int1").play();
}
function play_int2() {
  listener();
  var aud = document.getElementById("int2").play();
}
function play_int3() {
  listener();
  var aud = document.getElementById("int3").play();
}
function play_int4() {
  listener();
  var aud = document.getElementById("int4").play();
}
function play_int5() {
  listener();
  var aud = document.getElementById("int5").play();
}
function play_int6() {
  listener();
  var aud = document.getElementById("int6").play();
}
function play_int7() {
  listener();
  var aud = document.getElementById("int7").play();
}
function play_int8() {
  listener();
  var aud = document.getElementById("int8").play();
}
function play_int9() {
  listener();
  var aud = document.getElementById("int9").play();
}
function play_int10() {
  listener();
  var aud = document.getElementById("int10").play();
}
function play_int11() {
  listener();
  var aud = document.getElementById("int11").play();
}

function play_int12() {
  listener();
  var aud = document.getElementById("int12").play();
}

function play_int13() {
  listener();
  var aud = document.getElementById("int13").play();
}

function play_int14() {
  listener();
  var aud = document.getElementById("int14").play();
}

function play_int15() {
  listener();
  var aud = document.getElementById("int15").play();
}

function play_int16() {
  listener();
  var aud = document.getElementById("int16").play();
}

function play_int17() {
  listener();
  var aud = document.getElementById("int17").play();
}

function play_int18() {
  listener();
  var aud = document.getElementById("int18").play();
}

function play_int19() {
  listener();
  var aud = document.getElementById("int19").play();
}

function play_int20() {
  listener();
  var aud = document.getElementById("int20").play();
}

function play_int21() {
  listener();
  var aud = document.getElementById("int21").play();
}

function play_int22() {
  listener();
  var aud = document.getElementById("int22").play();
}

function play_int23() {
  listener();
  var aud = document.getElementById("int23").play();
}

function play_int24() {
  listener();
  var aud = document.getElementById("int24").play();
}

function play_int25() {
  listener();
  var aud = document.getElementById("int25").play();
}

function play_int26() {
  listener();
  var aud = document.getElementById("int26").play();
}

function play_int27() {
  listener();
  var aud = document.getElementById("int27").play();
}

function play_man1() {
  listener();
  var aud = document.getElementById("man1").play();
}
function play_man2() {
  listener();
  var aud = document.getElementById("man2").play();
}
function play_man3() {
  listener();
  var aud = document.getElementById("man3").play();
}
function play_man4() {
  listener();
  var aud = document.getElementById("man4").play();
}
function play_man5() {
  listener();
  var aud = document.getElementById("man5").play();
}
function play_man6() {
  listener();
  var aud = document.getElementById("man6").play();
}
function play_man7() {
  listener();
  var aud = document.getElementById("man7").play();
}
function play_man8() {
  listener();
  var aud = document.getElementById("man8").play();
}
function play_man9() {
  listener();
  var aud = document.getElementById("man9").play();
}
function play_man10() {
  listener();
  var aud = document.getElementById("man10").play();
}
function play_man11() {
  listener();
  var aud = document.getElementById("man11").play();
}

function play_man12() {
  listener();
  var aud = document.getElementById("man12").play();
}

function play_man13() {
  listener();
  var aud = document.getElementById("man13").play();
}

function play_man14() {
  listener();
  var aud = document.getElementById("man14").play();
}

function play_man15() {
  listener();
  var aud = document.getElementById("man15").play();
}

function play_man16() {
  listener();
  var aud = document.getElementById("man16").play();
}

function play_man17() {
  listener();
  var aud = document.getElementById("man17").play();
}

function play_man18() {
  listener();
  var aud = document.getElementById("man18").play();
}

function play_man19() {
  listener();
  var aud = document.getElementById("man19").play();
}

function play_man20() {
  listener();
  var aud = document.getElementById("man20").play();
}

function play_man21() {
  listener();
  var aud = document.getElementById("man21").play();
}

function play_man22() {
  listener();
  var aud = document.getElementById("man22").play();
}

function play_man23() {
  listener();
  var aud = document.getElementById("man23").play();
}

function play_man24() {
  listener();
  var aud = document.getElementById("man24").play();
}

function play_man25() {
  listener();
  var aud = document.getElementById("man25").play();
}

function play_man26() {
  listener();
  var aud = document.getElementById("man26").play();
}

function play_man27() {
  listener();
  var aud = document.getElementById("man27").play();
}

function play_man28() {
  listener();
  var aud = document.getElementById("man28").play();
}

function play_man29() {
  listener();
  var aud = document.getElementById("man29").play();
}

function play_tran1() {
  listener();
  var aud = document.getElementById("tran1").play();
}
function play_tran2() {
  listener();
  var aud = document.getElementById("tran2").play();
}
function play_tran3() {
  listener();
  var aud = document.getElementById("tran3").play();
}
function play_tran4() {
  listener();
  var aud = document.getElementById("tran4").play();
}
function play_tran5() {
  listener();
  var aud = document.getElementById("tran5").play();
}
function play_tran6() {
  listener();
  var aud = document.getElementById("tran6").play();
}
function play_tran7() {
  listener();
  var aud = document.getElementById("tran7").play();
}
function play_tran8() {
  listener();
  var aud = document.getElementById("tran8").play();
}
function play_tran9() {
  listener();
  var aud = document.getElementById("tran9").play();
}
function play_tran10() {
  listener();
  var aud = document.getElementById("tran10").play();
}
function play_tran11() {
  listener();
  var aud = document.getElementById("tran11").play();
}

function play_tran12() {
  listener();
  var aud = document.getElementById("tran12").play();
}

function play_tran13() {
  listener();
  var aud = document.getElementById("tran13").play();
}

function play_tran14() {
  listener();
  var aud = document.getElementById("tran14").play();
}

function play_tran15() {
  listener();
  var aud = document.getElementById("tran15").play();
}

function play_tran16() {
  listener();
  var aud = document.getElementById("tran16").play();
}

function play_tran17() {
  listener();
  var aud = document.getElementById("tran17").play();
}

function play_tran18() {
  listener();
  var aud = document.getElementById("tran18").play();
}

function play_tran19() {
  listener();
  var aud = document.getElementById("tran19").play();
}

function play_tran20() {
  listener();
  var aud = document.getElementById("tran20").play();
}

function play_tran21() {
  listener();
  var aud = document.getElementById("tran21").play();
}

function play_tran22() {
  listener();
  var aud = document.getElementById("tran22").play();
}

function play_tran23() {
  listener();
  var aud = document.getElementById("tran23").play();
}

function play_tran24() {
  listener();
  var aud = document.getElementById("tran24").play();
}

function play_tran25() {
  listener();
  var aud = document.getElementById("tran25").play();
}

function play_tran26() {
  listener();
  var aud = document.getElementById("tran26").play();
}

function play_tran27() {
  listener();
  var aud = document.getElementById("tran27").play();
}

function play_tran28() {
  listener();
  var aud = document.getElementById("tran28").play();
}

function play_tran29() {
  listener();
  var aud = document.getElementById("tran29").play();
}

function play_tran30() {
  listener();
  var aud = document.getElementById("tran30").play();
}

function play_tran31() {
  listener();
  var aud = document.getElementById("tran31").play();
}

function play_tran32() {
  listener();
  var aud = document.getElementById("tran32").play();
}

function play_tran33() {
  listener();
  var aud = document.getElementById("tran33").play();
}

function play_tran34() {
  listener();
  var aud = document.getElementById("tran34").play();
}

function play_tran35() {
  listener();
  var aud = document.getElementById("tran35").play();
}

function play_tran36() {
  listener();
  var aud = document.getElementById("tran36").play();
}

function play_tran37() {
  listener();
  var aud = document.getElementById("tran37").play();
}

function play_tran38() {
  listener();
  var aud = document.getElementById("tran38").play();
}

function play_tran39() {
  listener();
  var aud = document.getElementById("tran39").play();
}

function play_tran40() {
  listener();
  var aud = document.getElementById("tran40").play();
}

function play_tran41() {
  listener();
  var aud = document.getElementById("tran41").play();
}

function play_cls1() {
  listener();
  var aud = document.getElementById("cls1").play();
}
function play_cls2() {
  listener();
  var aud = document.getElementById("cls2").play();
}
function play_cls3() {
  listener();
  var aud = document.getElementById("cls3").play();
}
function play_cls4() {
  listener();
  var aud = document.getElementById("cls4").play();
}
function play_cls5() {
  listener();
  var aud = document.getElementById("cls5").play();
}
function play_cls6() {
  listener();
  var aud = document.getElementById("cls6").play();
}
function play_cls7() {
  listener();
  var aud = document.getElementById("cls7").play();
}

function play_oso1() {
  listener();
  var aud = document.getElementById("oso1").play();
}
function play_oso2() {
  listener();
  var aud = document.getElementById("oso2").play();
}
function play_oso3() {
  listener();
  var aud = document.getElementById("oso3").play();
}
function play_oso4() {
  listener();
  var aud = document.getElementById("oso4").play();
}
function play_oso5() {
  listener();
  var aud = document.getElementById("oso5").play();
}
function play_oso6() {
  listener();
  var aud = document.getElementById("oso6").play();
}
function play_oso7() {
  listener();
  var aud = document.getElementById("oso7").play();
}
function play_oso8() {
  listener();
  var aud = document.getElementById("oso8").play();
}
function play_oso9() {
  listener();
  var aud = document.getElementById("oso9").play();
}
function play_oso10() {
  listener();
  var aud = document.getElementById("oso10").play();
}
function play_oso11() {
  listener();
  var aud = document.getElementById("oso11").play();
}

function play_oso12() {
  listener();
  var aud = document.getElementById("oso12").play();
}

function play_oso13() {
  listener();
  var aud = document.getElementById("oso13").play();
}

function play_oso14() {
  listener();
  var aud = document.getElementById("oso14").play();
}

function play_oso15() {
  listener();
  var aud = document.getElementById("oso15").play();
}

function play_oso16() {
  listener();
  var aud = document.getElementById("oso16").play();
}

function play_oso17() {
  listener();
  var aud = document.getElementById("oso17").play();
}

function play_busys1() {
  listener();
  var aud = document.getElementById("busys1").play();
}
function play_busys2() {
  listener();
  var aud = document.getElementById("busys2").play();
}
function play_busys3() {
  listener();
  var aud = document.getElementById("busys3").play();
}
function play_busys4() {
  listener();
  var aud = document.getElementById("busys4").play();
}
function play_busys5() {
  listener();
  var aud = document.getElementById("busys5").play();
}
function play_busys6() {
  listener();
  var aud = document.getElementById("busys6").play();
}
function play_busys7() {
  listener();
  var aud = document.getElementById("busys7").play();
}
function play_busys8() {
  listener();
  var aud = document.getElementById("busys8").play();
}
function play_busys9() {
  listener();
  var aud = document.getElementById("busys9").play();
}
function play_busys10() {
  listener();
  var aud = document.getElementById("busys10").play();
}
function play_busys11() {
  listener();
  var aud = document.getElementById("busys11").play();
}

function play_busys12() {
  listener();
  var aud = document.getElementById("busys12").play();
}

function play_busys13() {
  listener();
  var aud = document.getElementById("busys13").play();
}

function play_busys14() {
  listener();
  var aud = document.getElementById("busys14").play();
}

function play_busys15() {
  listener();
  var aud = document.getElementById("busys15").play();
}

function play_busys16() {
  listener();
  var aud = document.getElementById("busys16").play();
}

function play_zoft1() {
  listener();
  var aud = document.getElementById("zoft1").play();
}
function play_zoft2() {
  listener();
  var aud = document.getElementById("zoft2").play();
}
function play_zoft3() {
  listener();
  var aud = document.getElementById("zoft3").play();
}
function play_zoft4() {
  listener();
  var aud = document.getElementById("zoft4").play();
}
function play_zoft5() {
  listener();
  var aud = document.getElementById("zoft5").play();
}
function play_zoft6() {
  listener();
  var aud = document.getElementById("zoft6").play();
}
function play_zoft7() {
  listener();
  var aud = document.getElementById("zoft7").play();
}
function play_zoft8() {
  listener();
  var aud = document.getElementById("zoft8").play();
}
function play_zoft9() {
  listener();
  var aud = document.getElementById("zoft9").play();
}
function play_zoft10() {
  listener();
  var aud = document.getElementById("zoft10").play();
}
function play_zoft11() {
  listener();
  var aud = document.getElementById("zoft11").play();
}

function play_zoft12() {
  listener();
  var aud = document.getElementById("zoft12").play();
}

function play_zoft13() {
  listener();
  var aud = document.getElementById("zoft13").play();
}

function play_zoft14() {
  listener();
  var aud = document.getElementById("zoft14").play();
}

function play_zoft15() {
  listener();
  var aud = document.getElementById("zoft15").play();
}

function play_zoft16() {
  listener();
  var aud = document.getElementById("zoft16").play();
}

function play_zoft17() {
  listener();
  var aud = document.getElementById("zoft17").play();
}

function play_zoft18() {
  listener();
  var aud = document.getElementById("zoft18").play();
}

function play_zoft19() {
  listener();
  var aud = document.getElementById("zoft19").play();
}

function play_zoft20() {
  listener();
  var aud = document.getElementById("zoft20").play();
}

function play_zoft21() {
  listener();
  var aud = document.getElementById("zoft21").play();
}

function play_zoft22() {
  listener();
  var aud = document.getElementById("zoft22").play();
}

function play_zoft23() {
  listener();
  var aud = document.getElementById("zoft23").play();
}

function play_zoft24() {
  listener();
  var aud = document.getElementById("zoft24").play();
}

function play_zoft25() {
  listener();
  var aud = document.getElementById("zoft25").play();
}

function play_zoft26() {
  listener();
  var aud = document.getElementById("zoft26").play();
}

function play_zoft27() {
  listener();
  var aud = document.getElementById("zoft27").play();
}

function play_inq1() {
  listener();
  var aud = document.getElementById("inq1").play();
}
function play_inq2() {
  listener();
  var aud = document.getElementById("inq2").play();
}
function play_inq3() {
  listener();
  var aud = document.getElementById("inq3").play();
}
function play_inq4() {
  listener();
  var aud = document.getElementById("inq4").play();
}
function play_inq5() {
  listener();
  var aud = document.getElementById("inq5").play();
}
function play_inq6() {
  listener();
  var aud = document.getElementById("inq6").play();
}
function play_inq7() {
  listener();
  var aud = document.getElementById("inq7").play();
}
function play_inq8() {
  listener();
  var aud = document.getElementById("inq8").play();
}
function play_inq9() {
  listener();
  var aud = document.getElementById("inq9").play();
}
function play_inq10() {
  listener();
  var aud = document.getElementById("inq10").play();
}
function play_inq11() {
  listener();
  var aud = document.getElementById("inq11").play();
}

function play_inq12() {
  listener();
  var aud = document.getElementById("inq12").play();
}

function play_inq13() {
  listener();
  var aud = document.getElementById("inq13").play();
}

function play_inq14() {
  listener();
  var aud = document.getElementById("inq14").play();
}

function play_inq15() {
  listener();
  var aud = document.getElementById("inq15").play();
}

function play_inq16() {
  listener();
  var aud = document.getElementById("inq16").play();
}

function play_inq17() {
  listener();
  var aud = document.getElementById("inq17").play();
}

function play_inq18() {
  listener();
  var aud = document.getElementById("inq18").play();
}

function play_ao1() {
  listener();
  var aud = document.getElementById("ao1").play();
}
function play_ao2() {
  listener();
  var aud = document.getElementById("ao2").play();
}
function play_ao3() {
  listener();
  var aud = document.getElementById("ao3").play();
}
function play_ao4() {
  listener();
  var aud = document.getElementById("ao4").play();
}
function play_ao5() {
  listener();
  var aud = document.getElementById("ao5").play();
}
function play_ao6() {
  listener();
  var aud = document.getElementById("ao6").play();
}
function play_ao7() {
  listener();
  var aud = document.getElementById("ao7").play();
}
function play_ao8() {
  listener();
  var aud = document.getElementById("ao8").play();
}
function play_ao9() {
  listener();
  var aud = document.getElementById("ao9").play();
}
function play_ao10() {
  listener();
  var aud = document.getElementById("ao10").play();
}
function play_ao11() {
  listener();
  var aud = document.getElementById("ao11").play();
}

function play_ao12() {
  listener();
  var aud = document.getElementById("ao12").play();
}

function play_ao13() {
  listener();
  var aud = document.getElementById("ao13").play();
}

function play_ao14() {
  listener();
  var aud = document.getElementById("ao14").play();
}

function play_ao15() {
  listener();
  var aud = document.getElementById("ao15").play();
}

function play_ao16() {
  listener();
  var aud = document.getElementById("ao16").play();
}

function play_ao17() {
  listener();
  var aud = document.getElementById("ao17").play();
}

function play_trant1() {
  listener();
  var aud = document.getElementById("trant1").play();
}
function play_trant2() {
  listener();
  var aud = document.getElementById("trant2").play();
}
function play_trant3() {
  listener();
  var aud = document.getElementById("trant3").play();
}
function play_trant4() {
  listener();
  var aud = document.getElementById("trant4").play();
}

function play_phon1() {
  listener();
  var aud = document.getElementById("phon1").play();
}
function play_phon2() {
  listener();
  var aud = document.getElementById("phon2").play();
}
function play_phon3() {
  listener();
  var aud = document.getElementById("phon3").play();
}
function play_phon4() {
  listener();
  var aud = document.getElementById("phon4").play();
}
function play_phon5() {
  listener();
  var aud = document.getElementById("phon5").play();
}
function play_phon6() {
  listener();
  var aud = document.getElementById("phon6").play();
}
function play_phon7() {
  listener();
  var aud = document.getElementById("phon7").play();
}
function play_phon8() {
  listener();
  var aud = document.getElementById("phon8").play();
}
function play_phon9() {
  listener();
  var aud = document.getElementById("phon9").play();
}
function play_phon10() {
  listener();
  var aud = document.getElementById("phon10").play();
}
function play_phon11() {
  listener();
  var aud = document.getElementById("phon11").play();
}

function play_phon12() {
  listener();
  var aud = document.getElementById("phon12").play();
}

function play_phon13() {
  listener();
  var aud = document.getElementById("phon13").play();
}

function play_phon14() {
  listener();
  var aud = document.getElementById("phon14").play();
}

function play_phon15() {
  listener();
  var aud = document.getElementById("phon15").play();
}

function play_phon16() {
  listener();
  var aud = document.getElementById("phon16").play();
}

function play_phon17() {
  listener();
  var aud = document.getElementById("phon17").play();
}

function play_phon18() {
  listener();
  var aud = document.getElementById("phon18").play();
}

function play_phon19() {
  listener();
  var aud = document.getElementById("phon19").play();
}

function play_phon20() {
  listener();
  var aud = document.getElementById("phon20").play();
}

function play_phon21() {
  listener();
  var aud = document.getElementById("phon21").play();
}

function play_phon22() {
  listener();
  var aud = document.getElementById("phon22").play();
}

function play_phon23() {
  listener();
  var aud = document.getElementById("phon23").play();
}

function play_phon24() {
  listener();
  var aud = document.getElementById("phon24").play();
}

function play_phon25() {
  listener();
  var aud = document.getElementById("phon25").play();
}

function play_phon26() {
  listener();
  var aud = document.getElementById("phon26").play();
}

function play_num1() {
  listener();
  var aud = document.getElementById("num1").play();
}
function play_num2() {
  listener();
  var aud = document.getElementById("num2").play();
}
function play_num3() {
  listener();
  var aud = document.getElementById("num3").play();
}
function play_num4() {
  listener();
  var aud = document.getElementById("num4").play();
}
function play_num5() {
  listener();
  var aud = document.getElementById("num5").play();
}
function play_num6() {
  listener();
  var aud = document.getElementById("num6").play();
}
function play_num7() {
  listener();
  var aud = document.getElementById("num7").play();
}
function play_num8() {
  listener();
  var aud = document.getElementById("num8").play();
}
function play_num9() {
  listener();
  var aud = document.getElementById("num9").play();
}
function play_num10() {
  listener();
  var aud = document.getElementById("num10").play();
}

function play_con1() {
  listener();
  var aud = document.getElementById("con1").play();
}
function play_con2() {
  listener();
  var aud = document.getElementById("con2").play();
}
function play_con3() {
  listener();
  var aud = document.getElementById("con3").play();
}
function play_con4() {
  listener();
  var aud = document.getElementById("con4").play();
}
function play_con5() {
  listener();
  var aud = document.getElementById("con5").play();
}

function play_fil1() {
  listener();
  var aud = document.getElementById("fil1").play();
}
function play_fil2() {
  listener();
  var aud = document.getElementById("fil2").play();
}
function play_fil3() {
  listener();
  var aud = document.getElementById("fil3").play();
}
function play_fil4() {
  listener();
  var aud = document.getElementById("fil4").play();
}
function play_fil5() {
  listener();
  var aud = document.getElementById("fil5").play();
}
function play_fil6() {
  listener();
  var aud = document.getElementById("fil6").play();
}
function play_fil7() {
  listener();
  var aud = document.getElementById("fil7").play();
}
function play_fil8() {
  listener();
  var aud = document.getElementById("fil8").play();
}
function play_fil9() {
  listener();
  var aud = document.getElementById("fil9").play();
}
function play_fil10() {
  listener();
  var aud = document.getElementById("fil10").play();
}
function play_fil11() {
  listener();
  var aud = document.getElementById("fil11").play();
}

function play_fil12() {
  listener();
  var aud = document.getElementById("fil12").play();
}

function play_fil13() {
  listener();
  var aud = document.getElementById("fil13").play();
}

function play_fil14() {
  listener();
  var aud = document.getElementById("fil14").play();
}

function play_fil15() {
  listener();
  var aud = document.getElementById("fil15").play();
}

function play_fil16() {
  listener();
  var aud = document.getElementById("fil16").play();
}

function play_fil17() {
  listener();
  var aud = document.getElementById("fil17").play();
}

function play_fil18() {
  listener();
  var aud = document.getElementById("fil18").play();
}

function play_fil19() {
  listener();
  var aud = document.getElementById("fil19").play();
}

function play_fil20() {
  listener();
  var aud = document.getElementById("fil20").play();
}

function play_fil21() {
  listener();
  var aud = document.getElementById("fil21").play();
}

function play_fil22() {
  listener();
  var aud = document.getElementById("fil22").play();
}

function play_fil23() {
  listener();
  var aud = document.getElementById("fil23").play();
}

function play_fil24() {
  listener();
  var aud = document.getElementById("fil24").play();
}

function play_fil25() {
  listener();
  var aud = document.getElementById("fil25").play();
}

function play_fil26() {
  listener();
  var aud = document.getElementById("fil26").play();
}

function play_fil27() {
  listener();
  var aud = document.getElementById("fil27").play();
}

function play_fil28() {
  listener();
  var aud = document.getElementById("fil28").play();
}

function play_fil29() {
  listener();
  var aud = document.getElementById("fil29").play();
}

function play_fil30() {
  listener();
  var aud = document.getElementById("fil30").play();
}

function play_fil31() {
  listener();
  var aud = document.getElementById("fil31").play();
}

function play_fil32() {
  listener();
  var aud = document.getElementById("fil32").play();
}

function play_fil33() {
  listener();
  var aud = document.getElementById("fil33").play();
}

function play_fil34() {
  listener();
  var aud = document.getElementById("fil34").play();
}
