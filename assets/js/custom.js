$(function() {
  
  $('.search-text input').focus(function() {
    $(this).parent().addClass('selected');
  });
  $('.search-text input').blur(function() {
    $this = $(this);
    $this.parent().removeClass('selected');
    if ($this.val() !== '') {
      $this.attr('size', $this.val().length);
    }
  });
  
  
});