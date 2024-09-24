document.querySelector('.language').addEventListener('mouseenter', function() {
    var tooltip = document.querySelector('.tooltip');
    tooltip.style.display = 'block';
});

document.querySelector('.language').addEventListener('mouseout', function() {
    var tooltip = document.querySelector('.tooltip');
    tooltip.style.display = 'none';
});
