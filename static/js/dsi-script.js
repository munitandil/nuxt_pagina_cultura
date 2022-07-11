function filterContactList() {
    var input = document.getElementById('dsi-filter-contact-list');
    var value = input.value.toUpperCase();
    $("#dsi-contact-ul li.dsi-item").each(function() {
        if ($(this).text().toUpperCase().search(value) > -1) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

function filterSecretariasList() {
    var input = document.getElementById('dsi-filter-sec-list');
    var value = input.value.toUpperCase();
    $(".dsi_blog_container div.blog-item").each(function() {
        if ($(this).text().toUpperCase().search(value) > -1) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}


function escapeHtml(str) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return str.replace(/[&<>"']/g, function(m) { return map[m]; });
}

var textToHTML = function(html) {

    return html;
};

let fontSize = 1;

function doSomethingWithChildren(el, something, recursive) {
    for (let i = 0; i < el.children.length; i++) {
        something(el.children[i]);
        if (recursive) {
            doSomethingWithChildren(el.children[i], something, recursive);
        }
    }
}

// funcion para aumentar la fuente
function zoomIn(elementId) {
    fontSize += 0.1;
    var element = document.getElementById(elementId);
    doSomethingWithChildren(element, function(el) {
        el.style.fontSize = fontSize + "em";
        el.style.lineHeight = "normal";
    }, true);
}

// funcion para disminuir la fuente
function zoomOut(elementId) {
    fontSize -= 0.1;
    var element = document.getElementById(elementId);
    doSomethingWithChildren(element, function(el) {
        el.style.fontSize = fontSize + "em";
        el.style.lineHeight = "normal";
    }, true);
}

function submitButtonClick(event) {
    event.preventDefault();
    //other stuff you want to do instead...
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
            pageLanguage: 'es',
            includedLanguages: "en,es,it,fr,ru,tr,de,zh-CN,nl,ja,pt",
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
    );
}

function checkEmail(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
        return false;
    }
    return true
}


(function(d) {
    let js = d.createElement('script');
    js.type = 'text/javascript';
    js.async = 1;
    js.src = 'https://go.botmaker.com/rest/webchat/p/5AYZUQWM63/init.js';
    (d.body || d.head).appendChild(js);
})(document);

(function(d) {
    var s = d.createElement("script");
    s.setAttribute("src", "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
    (d.body || d.head).appendChild(s);
})(document);

(function(d) {
    var s = d.createElement("script");
    /* uncomment the following line to override default position*/
    /* s.setAttribute("data-position", 3);*/
    /* uncomment the following line to override default size (values: small, large)*/
    /* s.setAttribute("data-size", "small");*/
    /* uncomment the following line to override default language (e.g., fr, de, es, he, nl, etc.)*/
    s.setAttribute("data-language", "es");
    /* uncomment the following line to override color set via widget (e.g., #053f67)*/
    s.setAttribute("data-color", "#0e93d8");
    /* uncomment the following line to override type set via widget (1=person, 2=chair, 3=eye, 4=text)*/
    /* s.setAttribute("data-type", "1");*/
    /* s.setAttribute("data-statement_text:", "Our Accessibility Statement");*/
    /* s.setAttribute("data-statement_url", "http://www.example.com/accessibility")";*/
    /* uncomment the following line to override support on mobile devices*/
    s.setAttribute("data-mobile", true);
    /* uncomment the following line to set custom trigger action for accessibility menu*/
    /* s.setAttribute("data-trigger", "triggerId")*/
    s.setAttribute("data-account", "diRIAc8EGW");
    s.setAttribute("src", "https://cdn.userway.org/widget.js");
    (d.body || d.head).appendChild(s);
})(document);

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function(d) {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = d.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                var failed = false;
                /* controlo que al menos seleccione un area */
                if ($("[name='checkboxArea']:checked").length == 0) {
                    $("[name='checkboxArea']").attr('required', true);
                    failed = true;
                } else {
                    $("[name='checkboxArea']").attr('required', false);
                }
                /* controlo que al menos seleccione un motivo */
                if ($("[name='radioMotivo']:checked").length == 0) {
                    $("[name='radioMotivo']").attr('required', true);
                    failed = true;
                } else {
                    $("[name='radioMotivo']").attr('required', false);
                }

                if (form.checkValidity() === false) {
                    failed = true;
                }

                if (failed == true) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');

            }, false);
        });
    }, false);
})(document);