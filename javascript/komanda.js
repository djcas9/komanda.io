var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

jQuery(document).ready(function($) {

  if (OSName === "Windows") {
    $('button.download').hide();
    $('button.download.windows').show();
  } else if (OSName === "MacOS") {
    $('button.download.apple').show();
  } else if (OSName === "Linux") {
    $('button.download').hide();
    $('button.download.linux').show();
  } else {
    $('button.download.apple').show();
  }

  $('button.download').on('click', function(e) {
    e.preventDefault();
    var href = $(this).attr('data-href');
    window.location = href;
  });

});
