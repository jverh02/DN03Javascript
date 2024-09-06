document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('discount-row').addEventListener('click', function (e) {
        if (e.target.classList.contains('discount')) {
            e.preventDefault();
            document.getElementById('product').innerHTML = e.target.dataset['product'];
            document.getElementById('code').innerHTML = "Discount Code: " + e.target.dataset['code'];
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        }
    });
    document.addEventListener("keydown", function (e) {
        if (e.key == 'Escape') {
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).hide();
        }
    });
});
