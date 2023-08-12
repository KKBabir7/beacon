  $('#myModal').on('shown.bs.modal', function () {
  $('#videoReceive')[0].play();
})
$('#myModal').on('hidden.bs.modal', function () {
  $('#videoReceive')[0].pause();
})