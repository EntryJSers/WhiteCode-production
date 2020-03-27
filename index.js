const objectID = new Array;

const createID = () => {
    let result = '';
    for (let i = 8; i > 0; --i) result += '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.round(Math.random() * ('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.length - 1))];
    if (objectID.includes(result)) {
        createID();
        return;
    };
    return result;
};

const loadObject = (name) => {
    let objID = createID();
    Entry.container.addObjectFunc({
        id: objID,
        objectType: "sprite",
        sprite: {
            id: objID,
            name: "testing",
            category: {
                main: "new"
            },
            pictures: [{
                dimension: {
                    width: "256",
                    height: "256"
                },
                fileurl: `/images/${name}.png`
            }]
        }
    }, 0);
};

const exportProject = () => {
    $('#saveCode').val(JSON.stringify(Entry.exportProject()))
};

$('#saveCode').val(JSON.parse(res).link)

const name = [
    'icon_ai',
    'icon_files',
    'icon_game',
    'icon_hangul',
    'icon_message',
    'icon_music',
    'icon_news',
    'icon_phone',
    'icon_settings',
    'icon_store',
    'icon_weather'
];

$(document).ready(() => {
    for (let i = 0; i < name.length; i++) {
        $('#desc').append(`
        <a href="javascript:loadObject('${name[i]}')"><img src="/images/${name[i]}.png"></a>
        `)
    }
});