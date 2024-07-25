$(document).ready(function() {
$('.header-nav-folder-title').click(function() {
var $folderTitle = $(this);
var $folder = $folderTitle.closest('.header-nav-item--folder');
var $content = $folder.find('.header-nav-folder-content');
var contentHeight = $content.outerHeight() + 16;
var maxContentHeight = contentHeight + 16; // Add 16px for 1rem

if ($folder.hasClass('open')) {
$folder.removeClass('open');
$folder.css({
'max-height': '1rem',
'margin-bottom': '0'
});
} else {
// Close all other open folders
$('.header-nav-item--folder').not($folder).removeClass('open').css({
'max-height': '1rem',
'margin-bottom': '0'
});

$folder.addClass('open');
$folder.css({
'max-height': maxContentHeight + 'px',
'margin-bottom': '16px'
});
}
});
});
