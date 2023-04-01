let notes = ['Do', 'Sol', 'Si', 'Re', 'Fa', 'Mi', 'La'];
let music = 'Fa,La,Mi,La,Sol,Mi,Mi,Sol,Do,Si,Do,La,Sol,La,La,Sol,Si,La,Do,La,Si,Mi,La,Do,Si,Do,Mi,Si,Si,Do,Fa,Mi,Do,Fa,Mi,Si,La,Si,Si,Fa,La';

function NotsOnMusic(notes, music) {
    let La= 0;
    let Mi= 0;
    let Sol= 0;
    let Si= 0;
    let Fa= 0;
    let Re= 0;
    let Do= 0;
    music = music.replaceAll(","," ")
    for (let i = 0; i < notes.length; i++) {
        while (music.includes(notes[i])) {
            music = music.replace(notes[i], " ");
            if (notes[i] === 'La') {
                La++;
            }else if(notes[i] === 'Mi'){
                Mi++;
            }else if(notes[i] === 'Sol'){
                Sol++;
            }else if(notes[i] === 'Si'){
                Si++;
            }else if(notes[i] === 'Fa'){
                Fa++;
            }else if(notes[i] === 'Re'){
                Re++;
            }else if(notes[i] === 'Do'){
                Do++;
            }
        }
    }
    console.log(`il y a ${La} La`)
    console.log(`il y a ${Mi} Mi`)
    console.log(`il y a ${Sol} Sol`)
    console.log(`il y a ${Si} si`)
    console.log(`il y a ${Fa} Fa`)
    console.log(`il y a ${Re} Re`)
    console.log(`il y a ${Do} Do`)

}NotsOnMusic(notes, music);
