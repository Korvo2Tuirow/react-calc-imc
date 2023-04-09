const char = createKnight('Korvo');
const monster = createLittleMonster();

 stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);

stage.update();