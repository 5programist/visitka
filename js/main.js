document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    $(document).ready(function() {

        $(".v-izbrannie").click(function(e) {
            console.log(1555);
            var izb = $(".id_item").val();
            localStorage.setItem(izb,window.location.href);
            console.log("Check"+localStorage.getItem(izb));
        })
        $(".description-j").click(function (e) {
            e.preventDefault();
            showDescriptionAlert("put_description","Описание");
        })
        $(".color-j").click(function (e) {
            e.preventDefault();
            showDescriptionAlert("put_color","Цвета");
        })
        $(".send-j1").click(function (e) {
            e.preventDefault();
            getContactList();
        })
        getContactList();

        checkConnection();

        function checkConnection() {
            if(window.navigator.onLine) {
                $(".mail-j").css("display","block");
            } else {
                $(".mail-j").css("display","none");
            }
        }

        var str_email ="mailto:admin@absolut-perm.ru?subject=Заказ замера - "+$(".title_page").text()+"&body=Введите имя и номер телефона";
        $(".mail-j a").attr("href",str_email);   

        var str_sms ="sms:?body=Рекомендую эту прогу";
        $(".send-j").attr("href",str_sms);



        




        
     })
}



// alert dialog dismissed
function alertDismissed() {
    // do something
}

function showDescriptionAlert(element,title) {
    var element = document.getElementById(element);
    var desc = element.innerText || element.textContent;

    navigator.notification.alert(
        desc,  // message
        alertDismissed,         // callback
        title,            // title
        'ОК'                  // buttonName
    );
}


function getContactList() {
    console.log(100);
        var options = new ContactFindOptions();
        options.multiple  = true; 
        options.filter=""; 
        var fields = ["name", "phoneNumbers", "emails","displayName","photos"];
        navigator.contacts.find(fields, getContactFields,  getContactFieldsError, options);

}


function getContactFields(contacts) {
        console.log(contacts);
        for (var i=0; i<contacts.length; i++) {
            console.log("Display Name = " + contacts[i].photos);
            var ss = "<li>\
                        <div>"+" "+"</div>\
                        <div>"+contacts[i].name+"</div>\
                        <div>"+contacts[i].displayName+"</div>\
                      </li>";
            $(".contacts-ul").append(ss);
        }

    }


    function getContactFieldsError() {
        console.log("I coudn't get contacts");
    }