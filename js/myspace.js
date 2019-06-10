$(document).ready(function () {
    var user = JSON.parse(sessionStorage.getItem('user'))[0];
    $("#name").val(user.name);
    $("#username").val(user.username);
    $("#email").val(user.email);
    $("#street").val(user.address.street);
    $("#suite").val(user.address.suite);
    $("#city").val(user.address.city);
    $("#zipcode").val(user.address.zipcode);
    $("#phone").val(user.phone);
    $("#website").val(user.website);
    $("#company-name").val(user.company.name);
    $("#company-catchPhrase").val(user.company.catchPhrase);
    $("#company-bs").val(user.company.bs);


});