$(document).ready(function() {

    // hide span in loading 
    $('#error-nom').hide();
    $('#error-prenom').hide();
    $('#error-adr').hide();
    $('#error-cp').hide();
    $('#error-ville').hide();
    $('#error-mail').hide();
    $('#error-tel').hide();
    $('#error-login').hide();
    $('#error-pwd').hide();
    $('#error-pwd-confirm').hide();

    // click on button
    $('#btn_submit').click(function() {
        var check = true;

        // text field
        if (!testGeneric('#nom', '#error-nom')) {
            check = false;
        }
        if (!testGeneric('#prenom', '#error-prenom')) {
            check = false;
        }
        if (!testGeneric('#ville', '#error-ville')) {
            check = false;
        }

        // adress
        if (!testGeneric('#adr', '#error-adr')) {
            check = false;
        }

        //cp
        if (!testGeneric('#cp', '#error-cp')) {
            check = false;
        }

        //tel
        if (!testGeneric('#tel', '#error-tel')) {
            check = false;
        }

        //mail
        if (!testGeneric('#mail', '#error-mail')) {
            check = false;
        }

        //login
        if (!testGeneric('#login', '#error-login')) {
            check = false;
        }

        // password
        if (!testGeneric('#pwd', '#error-pwd')) {
            check = false;
        }

        // confirmation 
        if (!testPasswordSimilarity('#pwd', '#pwd_confirm', '#error-pwd-confirm')) {
            check = false;
        }

        return check;
    });

    // -------------- Show toast if it doesn't match properly
    function showToast(status, idToast) {
        if (status) {
            $(idToast).show();
            return false;
        } else {
            $(idToast).hide();
            return true;
        }
    }

    // -------------- Test fields values with regex expression and print a toast --------------

    // Test text fields values
    function testGeneric(idInput, idToast) {

        switch (idInput) {
            case '#nom':
            case '#prenom':
            case '#ville':
                showToast(!checkName($(idInput).val()), idToast);
                break;
            case '#adr':
                showToast(!$(idInput).val(), idToast);
                break;
            case '#cp':
                showToast(!checkCP($(idInput).val()), idToast);
                break;
            case '#tel':
                showToast(!checkTel($(idInput).val()), idToast);
                break;
            case '#mail':
                showToast(!checkEmail($(idInput).val()), idToast);
                break;
            case '#login':
                showToast(!checkLogin($(idInput).val()), idToast);
            case '#pwd':
                showToast(!checkPassword($(idInput).val()), idToast);

            default:
                break;
        }

    }

    //-------------- Test password similarity expressions --------------
    function testPasswordSimilarity(pwd, pwd_confirm, idToast) {
        showToast(!checkPasswordSimilarity($(pwd).val(), $(pwd_confirm).val()), idToast);
    }


    // -------------- Regex expressions --------------

    // Check text field
    function checkName(name) {
        var pattern = new RegExp(/^[a-zA-Z]+$/);
        return pattern.test(name);
    }

    // Check phone field
    function checkTel(tel) {
        var pattern = new RegExp(/^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$/);
        return pattern.test(tel);
    }

    // Check postal code field
    function checkCP(cp) {
        var pattern = new RegExp(/^[0-9]{5}$/);
        return pattern.test(cp);
    }

    // Check email field
    function checkEmail(email) {
        var pattern = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/);
        return pattern.test(email);
    }

    // Check login field
    function checkLogin(login) {
        var pattern = new RegExp(/^[a-zA-Z0-9-_]+$/);
        return pattern.test(login);
    }

    // Check password field
    function checkPassword(password) {
        var pattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
        return pattern.test(password);
    }

    // Check password field similarity
    function checkPasswordSimilarity(password, confirmPassword) {
        return password === confirmPassword;
    }

});