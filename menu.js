const help = (p, date, user, wame) => {
return `Olรก @${user} bem vindo ao โ๐ฅโขโ๐ผ๐๐ผโ๐๐๐๐ ๐ฝ๐โ๐๐ฅโ, 
vejo aqui que vocรช assinou meu contrato entรฃo tem acesso ao menu,
se quiser ver minhas redes sociais escreva o comandos ${p}sociais.

โญโโโโโโโโโโโโโโโโโโโโฎ
โ*๐ฑ๐๐๐ฃ๐๐*
โ  
โ ๐ ๐๐๐ญ๐: ${date}
โ ๐ ๐๐๐ฆ๐: 
โ ${wame}
โ ๐ค๐๐จ๐ช๐ฬ๐ง๐๐ค: ${user}
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ โก ๐๐๐๐๐พ๐๐๐ผ๐๐ โก
โ
โ ${p}brizasapi ยฐ
โ ${p}listblockcmd ยฐ
โ ${p}listpalavraยฐ 
โ ${p}info ยฐ
โ ${p}ajuda ยฐ
โ ${p}help ยฐ
โ ${p}oficialcriador ยฐ
โ ${p}comandos ยฐ
โ ${p}menulite ยฐ
โ ${p}menu ยฐ
โ ${p}ping ยฐ
โ ${p}blocklist ยฐ
โ ${p}blacklist ยฐ
โ ${p}criador ยฐ 
โ ${p}toimg (resp sticker) ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ  ๐ ๐พ๐๐๐ผ๐ฟ๐๐ ๐
โ
โ ${p}blockcmd (cmd sem prefix) ยฐ
โ ${p}unblockcmd (cmd sem prefix) ยฐ
โ ${p}antispamcmd (1 or 0) ยฐ
โ ${p}antipv (1 or 0) ยฐ
โ ${p}infinityblock (1 or 0) ยฐ
โ ${p}antiligar (1 or 0)
โ ${p}addpalavra (txt) ยฐ
โ ${p}rmpalavra (txt) ยฐ
โ ${p}block (num) ยฐ
โ ${p}unblock (num) ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ    ๐ณ๏ธ ๐๐๐๐ ๐ณ๏ธ
โ
โ ${p}votohelp ยฐ 
โ ${p}votoinit (txt) | opt1 | opt2ยฐ
โ ${p}clearvoto ยฐ
โ ${p}votostatus ยฐ
โ ${p}voto (opc) ยฐ
โ ${p}votofinish ยฐ
โ ${p}gpvotohelp ยฐ
โ ${p}gpvotoinit ยฐ
โ ${p}gpclearvoto ยฐ
โ ${p}gpvotostatus ยฐ
โ ${p}gpvoto ยฐ
โ ${p}gpvotofinish ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ ๐โโ๏ธ ๐ฝ๐๐ผ๐ ๐๐๐๐ฟ๐ผ๐ ๐โโ๏ธ
โ
โ ${p}byeadd (txt) ยฐ
โ ${p}welcomeadd (txt) ยฐ
โ ${p}welcomehelp ยฐ
โ ${p}welcome (1 or 0) ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ โฑ๏ธ ๐พ๐๐๐๐ผ๐ฟ๐๐ โฑ๏ธ
โ
โ ${p}checkativo (dial) ยฐ 
โ ${p}rankativo ยฐ
โ ${p}atividade ยฐ 
โ ${p}filtroativo (qnt) ยฐ
โ ${p}banativos ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ   ๐ ๐๐๐๐ผ๐ ๐
โ
โ ${p}mute (marcar) ยฐ
โ ${p}desmute (marcar) ยฐ 
โ ${p}mutados ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ   ๐ซ ๐๐๐๐๐ ๐ซ
โ
โ ${p}level (n/a, num) ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ ๐ฎ ๐๐ผ๐๐๐ ๐๐ ๐ฎ
โ
โ ${p}jogatina (1 or 0) ยฐ
โ ${p}stealrandom ยฐ
โ ${p}steal (dial number) ยฐ
โ ${p}cassino ยฐ
โ ${p}flip ยฐ 
โ ${p}doarxp (xp) (dial number) ยฐ
โ ${p}roletarandom ยฐ
โ ${p}roletaneg ยฐ
โ ${p}roletapos ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ   โณ ๐๐๐๐๐๐๐ โณ
โ
โ ${p}rmlimituser ยฐ
โ ${p}resetlimit ยฐ 
โ ${p}limitcmd (1 or 0) ยฐ
โ ${p}mylimit ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ    โ ๐ผ๐๐๐ โ
โ
โ ${p}antidoc (1 or 0) ยฐ
โ ${p}antiloc (1 or 0) ยฐ
โ ${p}antiimg (1 or 0) ยฐ
โ ${p}antipalavra (1 or 0) ยฐ
โ ${p}antivideo (1 or 0) ยฐ 
โ ${p}antisticker (1 or 0) ยฐ
โ ${p}antiaudio (1 or 0) ยฐ
โ ${p}antictt (1 or 0) ยฐ
โ ${p}antilink (1 or 0) ยฐ
โ ${p}antiporn (1 or 0) ยฐ
โ ${p}antifake (1 or 0) ยฐ
โ ${p}dontback (1 or 0) ยฐ
โ ${p}antilinkhard (1 or 0) ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ   ๐ฅ ๐๐๐๐๐๐ ๐ฅ
โ
โ ${p}listfake ยฐ
โ ${p}listbr ยฐ
โ ${p}listddd (country code) ยฐ
โ ${p}dbackadd (num) ยฐ
โ ${p}dbackrm (num) ยฐ 
โ ${p}fechargp ยฐ
โ ${p}mudarnome ยฐ
โ ${p}abrirgp ยฐ
โ ${p}linkgroup ยฐ
โ ${p}listadmin ยฐ
โ ${p}leave ยฐ
โ ${p}kick (dial num) ยฐ
โ ${p}ban (resp msg) ยฐ
โ ${p}promote (dial num) ยฐ
โ ${p}demote (dial num) ยฐ
โ ${p}roletrussablock (1 or 0) ยฐ
โ ${p}simih (1 or 0) ยฐ
โ ${p}autostickerimg (1 or 0) ยฐ
โ ${p}autoreply (1 or 0) ยฐ
โ ${p}marcar ยฐ
โ ${p}marcar2 ยฐ
โ ${p}marcar3 ยฐ
โ ${p}hidemarcar (txt) ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ    ๐ ๐๐๐ ๐
โ
โ ${p}attp (txt) ยฐ
โ ${p}attp2 (txt) ยฐ
โ ${p}attp3 (txt) ยฐ
โ ${p}attp4 (txt) ยฐ
โ ${p}attp5 (txt) ยฐ
โ ${p}attp6 (txt) ยฐ
โ ${p}ttp (txt) ยฐ
โ ${p}ttp2 (txt) ยฐ
โ ${p}ttp3 (txt) ยฐ
โ ${p}ttp4 (txt) ยฐ
โ ${p}ttp5 (txt) ยฐ
โ ${p}ttp6 (txt) ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ  ๐จ ๐๐๐๐๐๐๐ ๐จ
โ
โ obs: coloque "me"
โ ou marque alguรฉm
โ
โ ${p}triggerfig ยฐ
โ ${p}triggered ยฐ
โ ${p}amongus ยฐ
โ ${p}lisa (txt) ยฐ
โ ${p}sepie ยฐ
โ ${p}invert ยฐ
โ ${p}greyscale ยฐ 
โ ${p}lgbt ยฐ
โ ${p}blur ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ๐๏ธ ๐๐๐๐๐ผ๐๐๐๐ ๐๏ธ
โ
โ obs: coloque "me"
โ ou marque alguรฉm
โ
โ ${p}trash ยฐ
โ ${p}thomas ยฐ
โ ${p}tatto ยฐ
โ ${p}stonks ยฐ
โ ${p}spank ยฐ
โ ${p}rip ยฐ
โ ${p}notstonks ยฐ
โ ${p}mms ยฐ
โ ${p}karaba ยฐ
โ ${p}jail ยฐ
โ ${p}hitler ยฐ
โ ${p}facepalm ยฐ
โ ${p}bluediscord ยฐ
โ ${p}blackdiscord ยฐ
โ ${p}delete ยฐ
โ ${p}confusedstonks ยฐ
โ ${p}dobross ยฐ
โ ${p}beatiful ยฐ
โ ${p}affect ยฐ
โ ${p}ad ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ  โจ ๐๐๐๐พ๐๐๐ โจ
โ
โ ${p}stiker (leg, resp img) ยฐ
โ ${p}sticker (leg, resp img) ยฐ
โ ${p}csticker (leg, resp img) ยฐ
โ ${p}cstiker (leg, resp img) ยฐ
โ ${p}fstiker (leg, resp img) ยฐ
โ ${p}fsticker (leg, resp img) ยฐ
โ ${p}nstiker (pack) (author) ยฐ
โ ${p}nsticker (pack) (author) ยฐ
โ ${p}nfstiker (pack) (author) ยฐ
โ ${p}nfsticker (pack) (author) ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ๐ฅ ๐๐๐๐๐๐ผ ๐๐๐๐๐ผ ๐ฅ
โ
โ ${p}helproleta ยฐ
โ ${p}roletarussahard ยฐ
โ ${p}roletarussamed ยฐ
โ ${p}roletarussaeasy ยฐ
โ ${p}roletarussapac ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ #๏ธโฃ ๐๐๐๐ ๐ฟ๐ผ ๐๐๐๐๐ผ #๏ธโฃ
โ
โ ${p}ttt (dificulty) ยฐ
โ ${p}coord (coordenada) ยฐ 
โ ${p}tttme ยฐ
โ ${p}tttrank ยฐ
โ ${p}ttthelp ยฐ
โ ${p}delttc ยฐ 
โ ${p}tictactoe ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ  ๐ ๐๐๐๐๐ ๐
โ
โ ${p}packmega18
โ ${p}nhentai โฎcodeโฏ
โ ${p}nsfw (1 or 0) ยฐ
โ ${p}randomhentai ยฐ 
โ ${p}nsfwblowjob ยฐ 
โ ${p}nsfwneko ยฐ
โ ${p}nsfwtrap ยฐ
โ ${p}anal ยฐ 
โ ${p}cum ยฐ
โ ${p}yuri ยฐ
โ ${p}hentainekogif ยฐ 
โ ${p}futanari ยฐ 
โ ${p}nsfwfeet ยฐ
โ ${p}nsfwfeetgif ยฐ
โ ${p}girlmasturbate ยฐ 
โ ${p}girlmasturbategif ยฐ 
โ ${p}lesbian ยฐ
โ ${p}eroyuri ยฐ
โ ${p}eroneko
โ ${p}erokitsune ยฐ
โ ${p}spankยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ
โญโโโโโโโโโโโโโโโโโโโโฎ
โ  ๐ต ๐ผ๐๐ฟ๐๐ ๐ต
โ
โ ${p}gtts (la) (txt) ยฐ
โ ${p}lyrics ยฐ
โ ${p}ptlyrics ยฐ 
โ ${p}play (music name) ยฐ
โ ${p}playv2 (music name) ยฐ
โ ${p}tomp3 (cap, resp vid) ยฐ
โ ${p}ytmp4 (yt url) ยฐ
โ ${p}ytmp3 (yt url) ยฐ
โ ${p}ytsrc (query) ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโฎ
โ ๐ ๐ซ๐ฐ๐ฝ๐ฌ๐น๐บ๐จฬ๐ถ ๐
โ 
โ ${p}papel ยฐ
โ ${p}pedra ยฐ
โ ${p}tesoura ยฐ
โ ${p}cassino ยฐ
โ ${p}darkjokes ยฐ
โฐโโโโโโโโโโโโโโโโโโโโฏ`
}

exports.help = help


