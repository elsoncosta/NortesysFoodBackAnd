function chkcontrol(checkbox) {
  var limit = parseInt(checkbox.value);
  if ($('input[name=' + checkbox.name +']:checked').length > limit) {
      checkbox.checked = false;
      // alert( "Selecione apenas " + limit + " Sabores")
  }
  else
  {
      var selectedAdicionais = new Array();
      $('input[class=AdicionalCheck]:checked').each(function () {
          selectedAdicionais.push($(this).attr('id'));
      });
  }
}
