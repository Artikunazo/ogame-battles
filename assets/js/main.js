//var url = 'http://artikunazo.mx/battles-ogame/';
var url = 'http://localhost:3000/';

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("btnAddBattle").addEventListener('click', function () {
        let form = new Map();
        form.set('banner', document.getElementById('tbBannerBattle').value);
        form.set('summary', document.getElementById('taSummaryBattle').value);

        fetch(url + 'register-battle', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(map_to_object(form))
        })
            .then(response => response.json()) //Get promise
            .then((response) => {
                document.getElementById('frmAddBattle').reset();
                alert(response.message)
            }) //Resolve promise
    });


    /**
     * Funcion para parsear Map a Object
     * @param map
     * @returns {Object}
     */
    function map_to_object(map) {
        var data = Object.create(null);
        map.forEach((value, key) => {
            if (value instanceof Map) {
                data[key] = map_to_object(value);
            } else {
                data[key] = value
            }
        });
        return data;
    }

    function parseBbCode($input) {
            BBCodeRegExMap = {
                'tagClass': {
                    "(\\[[^\\]]+?)(\\§\\s*)(.+?)([\\§\\|\\#].+?)?(\\])": "$1 class='$3'$4$5"
                },
                'tagId': {
                    "(\\[[^\\]]+?)(\\#\\s*)(.+?)([\\§\\|\\#].+?)?(\\])": "$1 id='$3'$4$5"
                },
                'tagImgAlt': {
                    "(\\[img.+?)(\\|)(\\s*)(.+?)(\\s*\\w+\\=\\'.+?)?(\\s*)([\\§\\|\\#].+?)?(\\])": "$1$3 alt='$4'$5$6$7$8"
                },
                'tagATitle': {
                    "(\\[a.+?)(\\|)(\\s*)(.+?)(\\s*\\w+\\=\\'.+?)?(\\s*)([\\§\\|\\#].+?)?(\\])": "$1$3 title='$4'$5$6$7$8$4</a>"
                },
                'tagImgSrc': {
                    "(\\[img\\s*)(.+?)(\\s*\\w+\\=\\'.+?)?(\\s*)([\\s\\§\\|\\#].+?)?(\\])": "$1src='$2'$3$4$5$6"
                },
                'tagAHref': {
                    "(\\[a\\s*)(.+?)(\\s*\\w+\\=\\'.+?)?(\\s*)([\\s\\§\\|\\#].+?)?(\\])": "$1href='$2' target='_blank'$3$4$5$6"
                },
                'tagUl': {
                    "(\\[\\*\\])(.*)(\\[\\/\\*\\])": "<ul><li>$2</li></ul>"
                },
                'tagLi': {
                    "(\\[\\/\\*\\])(\\s*)(\\[\\*\\])": "</li><li>"
                },
                'tagFieldsetLegend': {
                    "(\\[g\\s*)(.+?)(\\s*\\w+\\=\\'.+?)?(\\s*)([\\§\\|\\#].+?)?(\\])(.+?)(\\[\\/g\\])": "<fieldset$4$5><legend class='sans-serif-400-italic'>$2</legend>$7</fieldset>"
                },
                'tagSmall': {
                    "(\\[)(s)(\\s*)(.*?)(\\])(.+?)(\\[)(\\/)(s)(\\])": "<small $4>$6</small>"
                },
                'tagEm': {
                    "(\\[)(i)(\\s*)(.*?)(\\])(.+?)(\\[)(\\/)(i)(\\])": "<em $4>$6</em>"
                },
                'tagDiv': {
                    "(\\[)(section)(\\s*)(.*?)(\\])(.+?)(\\[)(\\/)(section)(\\])": "<div $4>$6</div>"
                },
                'tagQuote': {
                    "(\\[)(q)(\\s*)(.*?)(\\])(.+?)(\\[)(\\/)(q)(\\])": "<p class='quote'$4><span class='serif-900'>“</span> $6</p>"
                },
                'tagQuoteSource': {
                    "(\\[qs\\s*)(.+?)(\\s*\\w+\\=\\'.+?)?(\\s*)([\\s\\§\\|\\#].+?)?(\\])(.+?)(\\[)(\\/)(qs)(\\])": "<br><a href='$2' class='quote-source'$5>$7</a>"
                },
                'tagLanguage': {
                    "(\\[)(lang)(\\s*.*?)(\\])(.+?)(\\[)(\\/)(lang)(\\])": "<p class='sans-serif-600'>$5</p>"
                },
                'tagYear': {
                    "(\\[)(y)(\\s*.*?)(\\])(.+?)(\\[)(\\/)(y)(\\])": "<div class='lang-$5-years' id='skills-bar'><p class='sans-serif-600'>$5</p></div>"
                },
                'tagAngleBrackets': {
                    "\\[(\\/?)(.+?)[\\]]\\]?": "<$1$2>"
                }
            };

        for (var i in BBCodeRegExMap) {

            var BBCodeKey = Object.keys(BBCodeRegExMap[i])[0],
                BBCodeVal = BBCodeRegExMap[i][BBCodeKey];
            input.match(BBCodeKey) ? input = input.replace(new RegExp(BBCodeKey, 'g'), BBCodeVal) : input
        }

        console.log(input);
    }
});