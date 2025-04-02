define(['questAPI'], function(Quest){
	var API = new Quest();

API.addQuestionsSet('basicDropdown2', {
    type: 'dropdown',
    autoSubmit: false,
    numericValues: true,
    required:true,
    help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	errorMsg: {
		required: "Per favore, rispondi a questa domanda"
	}
});

	
	API.addQuestionsSet('singleChoice', [
     {
        type: 'selectOne',
        autoSubmit: false,
        numericValues: true,
        required: true,
        help: '<%= pagesMeta.number < 100 %>',
    	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	    errorMsg: {
    		required: "Per favore, rispondi a questa domanda"
    	}
		}]);
	
	API.addQuestionsSet('multiChoice', [
     {
        type: 'selectMulti',
        autoSubmit: false,
        numericValues: true,
        required: true,
        help: '<%= pagesMeta.number < 100 %>',
    	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	    errorMsg: {
    		required: "Per favore, rispondi a questa domanda"
    	}
		}]);
	

    API.addQuestionsSet('basicSelect',
    {
        type: 'selectOne',
        autoSubmit:false,
        numericValues:true,
        style:'multiButtons',
	required : true,
	errorMsg: {
	required: "Per favore, rispondi a questa domanda."
	  	  },
        answers : [
            '1 - Fortemente in disaccordo',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7 - Fortemente d’accordo'
        ]
    });
	
	// ### Questions
	// Create the template

    API.addQuestionsSet('vittima',{
        inherit : 'singleChoice',
        name: 'vittima',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	  	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
        stem: 'Quanto fortemente associ il seguente concetto alla donna o all’uomo: <b>Vittima di Discriminazione</b>',
        answers: [
		{text:'Fortemente all’uomo',value:1},
		{text:'Moderatamente all’uomo',value:2},
		{text:'Leggermente all’uomo',value:3},
		{text:'Né all’uomo né alla donna',value:4},
		{text:'Leggermente alla donna',value:5},
		{text:'Moderatamente alla donna',value:6},
		{text:'Fortemente alla donna',value:7}
        ]
    });

    API.addQuestionsSet('autore',{
        inherit : 'singleChoice',
        name: 'autore',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	  	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
        stem: 'Quanto fortemente associ il seguente concetto alla donna o all’uomo: <b>Autore di Discriminazione</b>',
        answers: [
		{text:'Fortemente all’uomo',value:1},
		{text:'Moderatamente all’uomo',value:2},
		{text:'Leggermente all’uomo',value:3},
		{text:'Né all’uomo né alla donna',value:4},
		{text:'Leggermente alla donna',value:5},
		{text:'Moderatamente alla donna',value:6},
		{text:'Fortemente alla donna',value:7}
        ]
    });

	API.addQuestionsSet('DiscriminazioneGruppo',{
	inherit : 'singleChoice',
	name: 'DiscriminazioneGruppo',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	  	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: 'Quanto spesso ritieni che le donne siano discriminate a causa del loro genere?',
	answers: [
		{text:'Mai',value: 1},
		{text:'Raramente',value: 2},
		{text:'Qualche volta',value: 3},
		{text:'Spesso',value: 4}
		]
	});
	
	API.addQuestionsSet('DiscriminazioneIndividuale',{
	inherit : 'singleChoice',
	name: 'DiscriminazioneIndividuale',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	  	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: 'Quanto spesso ritieni di essere stata/o personalmente discriminata/o a causa del tuo genere?',
	answers: [
		{text:'Mai',value: 1},
		{text:'Raramente',value: 2},
		{text:'Qualche volta',value: 3},
		{text:'Spesso',value: 4}
		]
	});

API.addQuestionsSet('BPNSFS',{
	type : 'grid',
	name: 'BPNSFS',
	checkboxType : 'colorMark',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	 	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: 'Di seguito sono riportate delle affermazioni che si riferiscono a sentimenti vissuti nella propria vita. Leggi ciascuna affermazione con attenzione. Puoi rispondere scegliendo un numero da 1=(Completamente in disaccordo) a 5=(Completamente d’accordo) per indicare il grado d’accordo a ciascuna affermazione in riferimento a come ti senti <b>nel tuo contesto universitario</b>.', 
                    rows: [
			   'Sento un senso di possibilità di scelta e di libertà nelle cose in cui mi impegno',
			   'La maggior parte delle cose faccio, le faccio perché "le devo fare"',
			   'Mi sento fiduciosa/o di poter fare le cose bene',
			   'Mi sento delusa/o da molte delle mie prestazioni',
			   'Mi sento in sintonia con le persone che si prendono cura di me e alle quali tengo',
			   'Sento che le persone che sono importanti per me sono fredde e distanti nei miei confronti',
			   'Sento che le mie decisioni rispecchiano quello che voglio veramente',
			   'Mi sento costretta/o a fare molte cose che io non avrei scelto di fare',
			   'Mi sento competente per raggiungere i miei obiettivi',
			   'Mi sento insicura/o delle mie capacità',
			   'Provo un sentimento di calore con le persone con cui passo il mio tempo',
			   'Mi sento esclusa/o dal gruppo a cui vorrei appartenere',
			   ],
                    columns: [
			{type:'text', textProperty:'left', css : {width:'5%'}},
			{stem:'1. Completamente in disaccordo', css : {width:'12%'}},
			{stem:'2.', css : {width:'12%'}},
			{stem:'3.', css : {width:'12%'}},
			{stem:'4.', css : {width:'12%'}},
			{stem:'5. Completamente d’accordo', css : {width:'12%'}},
			{type:'text', textProperty:'right', css : {width:'5%'}}
			],
	
	});

API.addQuestionsSet('SoddAcc',{
	type : 'grid',
	name: 'SoddAcc',
	checkboxType : 'colorMark',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	  	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: 'Utilizzando la scala sottostante, indica il tuo grado di accordo con ciascuna delle seguenti affermazioni.', 
                    rows: [
			   'Sono soddisfatta/o della decisione di laurearmi nel mio campo di studi' ,
			   'Mi sento a mio agio nell’ambiente universitario e accademico del mio corso di studi',
			   'In generale, mi piacciono le attività del mio corso di laurea',
			   'Sono complessivamente soddisfatta/o della mia vita universitaria e accademica',
			   'Apprezzo molto il livello di stimolazione intellettuale che trovo nei miei corsi',
			   'Mi sento entusiasta riguardo agli argomenti trattati nel mio corso di studi',
			   'Mi piace quello che sto imparando durante le mie lezioni'
			   ],
                    columns: [
			{type:'text', textProperty:'left', css : {width:'5%'}},
			{stem:'1. Fortemente in disaccordo', css : {width:'12%'}},
			{stem:'2. In disaccordo', css : {width:'12%'}},
			{stem:'3. Né in disaccordo né in accordo', css : {width:'12%'}},
			{stem:'4. D’accordo', css : {width:'12%'}},
			{stem:'5. Fortemente d’accordo', css : {width:'12%'}},
			{type:'text', textProperty:'right', css : {width:'5%'}}
			],
	});
	
API.addQuestionsSet('AspirCar',{
	type : 'grid',
	name: 'AspirCar',
	checkboxType : 'colorMark',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	 	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: 'Utilizzando la scala sottostante, indica quanto sia vera o falsa per te ciascuna delle seguenti affermazioni.', 
                    rows: [
			   'Mi piacerebbe lavorare in un settore in cui le mie competenze nelle discipline STEM siano particolarmente valorizzate',
			   'Mi piacerebbe lavorare in un ambiente in cui le competenze STEM siano fondamentali per il successo professionale',
			   'Sto considerando una carriera nel campo delle STEM',
			   ],
                    columns: [
			{type:'text', textProperty:'left', css : {width:'5%'}},
			{stem:'1. Per niente vero', css : {width:'7%'}},
			{stem:'2.', css : {width:'7%'}},
			{stem:'3.', css : {width:'7%'}},
			{stem:'4.', css : {width:'7%'}},
			{stem:'5.', css : {width:'7%'}},
			{stem:'6.', css : {width:'7%'}},
			{stem:'7. Completamente vero', css : {width:'7%'}},
			{type:'text', textProperty:'right', css : {width:'5%'}}
			],
	
	});	

API.addQuestionsSet('AspettCarr',{
	type : 'grid',
	name: 'AspettCarr',
	checkboxType : 'colorMark',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	 	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: 'Utilizzando la scala sottostante, indica quanto sia vera o falsa per te ciascuna delle seguenti affermazioni.', 
                    rows: [
			   'Ho sempre sperato di avere un lavoro nelle STEM un giorno',
			   'Per me è molto importante avere un lavoro nelle STEM in futuro',
			   'Mi aspetto di ottenere la laurea necessaria per un lavoro in STEM',
			   'È molto probabile che, in futuro, troverò un lavoro nelle STEM',
			   'Mi aspetto di avere una carriera professionale solida nel campo delle STEM',
			   ],
                    columns: [
			{type:'text', textProperty:'left', css : {width:'5%'}},
			{stem:'1. Fortemente in disaccordo', css : {width:'12%'}},
			{stem:'2.', css : {width:'12%'}},
			{stem:'3.', css : {width:'12%'}},
			{stem:'4.', css : {width:'12%'}},
			{stem:'5. Fortemente d’accordo', css : {width:'12%'}},
			{type:'text', textProperty:'right', css : {width:'5%'}}
			],
	
	});	

API.addQuestionsSet('Resilienza',{
	type : 'grid',
	name: 'Resilienza',
	checkboxType : 'colorMark',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	 	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: 'Utilizzando la scala sottostante, indica quanto sia vera o falsa per te ciascuna delle seguenti affermazioni.', 
                    rows: [
			   'Tendo a riprendermi in fretta dopo periodi difficili',
			   'Ho difficoltà a “farcela” dopo eventi stressanti',
			   'Non mi ci vuole molto per recuperare da un evento stressante',
			   'È difficile per me ripartire subito quando succede qualcosa di brutto',
			   'Di solito ho attraversato momenti difficili con poca fatica',
			   'Mi serve molto tempo per superare battute d’arresto nella mia vita',
			   ],
                    columns: [
			{type:'text', textProperty:'left', css : {width:'5%'}},
			{stem:'1. Forte disaccordo', css : {width:'12%'}},
			{stem:'2. Disaccordo', css : {width:'12%'}},
			{stem:'3. Indifferente', css : {width:'12%'}},
			{stem:'4. D’accordo', css : {width:'12%'}},
			{stem:'5. Molto d’accordo', css : {width:'12%'}},
			{type:'text', textProperty:'right', css : {width:'5%'}}
			],
	
	});	

	
	API.addQuestionsSet('COWS_1',
	[
		{
			inherit : 'basicSelect',
			name : 'COWS_1_1',
			stem : '<b>1. La/il tua/o docente ti ha informato dell’introduzione di nuove procedure che potrebbero aiutarti a migliorare il tuo rendimento accademico. La prima cosa che pensi è:</b><br/><br/>' + 
				'Questo sarà interessante e importante per me provarlo'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_1_2',
			stem : 'Sentirò la pressione di dover fare come dice la/il mia/o docente'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_1_3',
			stem : 'Probabilmente sarà inutile per me farlo'
		}
	]);
	
	API.addQuestionsSet('COWS_2',
	[
		{
			inherit : 'basicSelect',
			name : 'COWS_2_1',
			stem : '<br><br><b>2. La/il tua/o docente desidera che tu sia più autonoma/o e indipendente nello studio. La prima cosa che probabilmente penserai sarà:</b><br/><br/>' + 
				'Sarà importante per me mettermi alla prova per vedere se funziona'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_2_2',
			stem : 'Sentirò la pressione di seguire ciò che mi dice la/il mia/o docente'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_2_3',
			stem : 'È difficile cambiare su aspetti come l’indipendenza, sono fatta/o così'
		}
	]);

	API.addQuestionsSet('COWS_3',
	[
		{
			inherit : 'basicSelect',
			name : 'COWS_3_1',
			stem : '<br><br><b>3. La/il tua/o docente ti ha chiesto di affrontare la questione del tuo interesse per lo studio, che ultimamente sembra essere un po’ calato. Probabilmente penserai/sentirai:</b><br/><br/>' + 
				'Vorrei parlare con la/il mia/o docente per cercare insieme una soluzione adeguata'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_3_2',
			stem : 'Mi sentirò sotto pressione per fare qualcosa che soddisfi la/il mia/o docente'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_3_3',
			stem : 'Onestamente, penso di non poter realmente cambiare il mio interesse di base per lo studio'
		}
	]);

	API.addQuestionsSet('COWS_4',
	[
		{
			inherit : 'basicSelect',
			name : 'COWS_4_1',
			stem : '<br><br><b>4. La/il tua/o docente ti ha chiesto di frequentare un corso per migliorare le tue competenze accademiche. Probabilmente penserai/sentirai:</b><br/><br/>' + 
				'Penso che potrebbe essere interessante e stimolante'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_4_2',
			stem : 'Mi sentirò sotto pressione per farlo e soddisfare le aspettative della/del mia/o docente'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_4_3',
			stem : 'Ritengo di avere già una certa competenza, e non c’è molto che io possa fare per migliorarla'
		}
	]);

	API.addQuestionsSet('COWS_5',
	[
		{
			inherit : 'basicSelect',
			name : 'COWS_5_1',
			stem : '<br><br><b>5. La/il tua/o docente ti ha suggerito di lavorare con una/o studentessa/e più esperta/o per migliorare le tue competenze. Probabilmente penserai o sentirai:</b><br/><br/>' + 
				'Ritengo che questa possa essere un’opportunità importante per me'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_5_2',
			stem : 'Mi sentirò sotto pressione a farlo per adempiere ai miei incarichi di studio'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_5_3',
			stem : 'A dire il vero, penso di non essere in grado di cambiare significativamente il mio livello di competenza'
		}
	]);

	API.addQuestionsSet('COWS_6',
	[
		{
			inherit : 'basicSelect',
			name : 'COWS_6_1',
			stem : '<br><br><b>6. La/il tua/o docente ti ha chiesto di collaborare di più con i tuoi colleghi di corso. Probabilmente penserai, sentirai o farai:</b><br/><br/>' + 
				'Mi impegnerò a individuare con chi collaborare e li contatterò'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_6_2',
			stem : 'Avvertirò la pressione di dover collaborare su qualcosa che preferirei affrontare da sola/o'
		},
		{
			inherit : 'basicSelect',
			name : 'COWS_6_3',
			stem : 'Sento che, onestamente, non posso fare molto per modificare il mio atteggiamento sociale'
		}
	]);	



API.addQuestionsSet('Distress',{
	type : 'grid',
	name: 'Distress',
	checkboxType : 'colorMark',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	 	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	stem: 'Nelle prossime dieci domande ti verrà chiesto come ti sei sentita/o nelle ultime 4 settimane <b>nel tuo contesto universitario</b>. Per ognuna di esse, contrassegna la risposta che più di tutte rispecchia la frequenza delle emozioni descritte. Presta attenzione! Ti compariranno 10 affermazioni.', 
                    rows: [
			'Nelle ultime 4 settimane quante volte ti sei sentita/o esausta/o senza una ragione apparente?',
			'Nelle ultime 4 settimane quante volte ti sei sentita/o nervosa/o?',
			'Nelle ultime 4 settimane quante volte ti sei sentita/o così nervosa/o da non riuscire in nessun modo a calmarti?',
			'Nelle ultime 4 settimane quante volte sei stata/o presa/o dalla disperazione?',
			'Nelle ultime 4 settimane quante volte ti sei sentita/o irrequieta/o o agitata/o?',
			'Nelle ultime 4 settimane quante volte ti sei sentita/o così irrequieta/o da non riuscire a stare ferma/o?',
			'Nelle ultime 4 settimane quante volte ti sei sentita/o depressa/o?',
			'Nelle ultime 4 settimane quante volte hai sentito che ogni cosa che facevi richiedeva uno sforzo?',
			'Nelle ultime 4 settimane quante volte ti sei sentita/o così triste che nulla riusciva a rasserenarti?',
			'Nelle ultime 4 settimane quante volte ti sei sentita/o inutile?',
			   ],
                    columns: [
			{type:'text', textProperty:'left', css : {width:'5%'}},
			{stem:'Nemmeno una volta', value:0, css : {width:'12%'}},
			{stem:'Poche volte', value:1, css : {width:'12%'}},
			{stem:'Diverse volte', value:2, css : {width:'12%'}},
			{stem:'Quasi sempre', value:3, css : {width:'12%'}},
			{stem:'Sempre', value:4, css : {width:'12%'}},
			{type:'text', textProperty:'right', css : {width:'5%'}}
			],
	
	});
	
	
    API.addQuestionsSet('nazione',{
        inherit : 'singleChoice',
        name: 'nazione',
        stem: '<b>Indica la tua nazionalità</b>',
        answers: [
		{text:'Italiana',value:1},
		{text:'Altro',value:2}
        ]
    });
	
    API.addQuestionsSet('sesso',{
        inherit : 'singleChoice',
        name: 'sesso',
        stem: '<b>Indica il tuo sesso biologico</b>',
        answers: [
		{text:'Maschio',value:1},
		{text:'Femmina',value:2},
		{text:'Altro',value:3}
        ]
    });

    API.addQuestionsSet('genere',{
        inherit : 'singleChoice',
        name: 'genere',
        stem: '<b>Indica il genere con cui ti identifichi</b>',
        answers: [
		{text:'Uomo',value:1},
		{text:'Donna',value:2},
		{text:'Non Binario',value:3},
		{text:'Altro',value:4}
        ]
    });	

	API.addQuestionsSet('eta',{
		inherit: 'basicDropdown2',
		name: 'eta',
		stem: '<b>Indica la tua età</b>',
		answers: [
			{text:'18',value:18},
			{text:'19',value:19},
			{text:'20',value:20},
			{text:'21',value:21},
			{text:'22',value:22},
			{text:'23',value:23},
			{text:'24',value:24},
			{text:'25',value:25},
			{text:'26',value:26},
			{text:'27',value:27},
			{text:'28',value:28},
			{text:'29',value:29},
			{text:'30',value:30},
			{text:'31',value:31},
			{text:'32',value:32},
			{text:'33',value:33},
			{text:'34',value:34},
			{text:'35',value:35},
			{text:'36',value:36},
			{text:'37',value:37},
			{text:'38',value:38},
			{text:'39',value:39},
			{text:'40',value:40},
			{text:'41',value:41},
			{text:'42',value:42},
			{text:'43',value:43},
			{text:'44',value:44},
			{text:'45',value:45},
			{text:'46',value:46},
			{text:'47',value:47},
			{text:'48',value:48},
			{text:'49',value:49},
			{text:'50',value:50},
			{text:'51',value:51},
			{text:'52',value:52},
			{text:'53',value:53},
			{text:'54',value:54},
			{text:'55',value:55},
			{text:'56',value:56},
			{text:'57',value:57},
			{text:'58',value:58},
			{text:'59',value:59},
			{text:'60',value:60},
			{text:'61',value:61},
			{text:'62',value:62},
			{text:'63',value:63},
			{text:'64',value:64},
			{text:'65',value:65},
			{text:'66',value:66},
			{text:'67',value:67},
			{text:'68',value:68},
			{text:'69',value:69},
			{text:'70',value:70},
			{text:'71',value:71},
			{text:'72',value:72},
			{text:'73',value:73},
			{text:'74',value:74},
			{text:'75',value:75},
			{text:'76',value:76},
			{text:'77',value:77},
			{text:'78',value:78},
			{text:'79',value:79},
			{text:'80',value:80},
			{text:'81',value:81},
			{text:'82',value:82},
			{text:'83',value:83},
			{text:'84',value:84},
			{text:'85',value:85},
			{text:'86',value:86},
			{text:'87',value:87},
			{text:'88',value:88},
			{text:'89',value:89},
			{text:'90',value:90},
			{text:'91',value:91},
			{text:'92',value:92},
			{text:'93',value:93},
			{text:'94',value:94},
			{text:'95',value:95},
			{text:'96',value:96},
			{text:'97',value:97},
			{text:'98',value:98},
			{text:'99',value:99}
		]
	});		

	API.addQuestionsSet('regione',{
		inherit: 'basicDropdown2',
		name: 'regione',
		stem: '<b>Regione in cui vivi</b>',
		answers: [
			'Abruzzo',
			'Basilicata',
			'Calabria',
			'Campania',
			'Emilia-Romagna',
			'Friuli Venezia Giulia',
			'Lazio',
			'Liguria',
			'Lombardia',
			'Marche',
			'Molise',
			'Piemonte',
			'Puglia',
			'Sardegna',
			'Sicilia',
			'Toscana',
			'Trentino-Alto Adige',
			'Umbria',
			'Valle d’Aosta',
			'Veneto'
		]
	});	

    API.addQuestionsSet('istruzione',{
        inherit : 'singleChoice',
        name: 'istruzione',
        stem: '<b>Indica il tuo livello di istruzione</b>',
        answers: [
		{text:'Diploma di scuola Elementare',value:1},
		{text:'Diploma di scuola Media',value:2},
		{text:'Diploma di scuola Superiore',value:3},
		{text:'Laurea Triennale',value:4},
		{text:'Laurea Magistrale',value:5},
		{text:'Dottorato di ricerca/Scuola di Specializzazione',value:6},
		{text:'Altri titoli post-laurea',value:7}
        ]
    });	

	API.addQuestionsSet({
	   areadisciplinare: [
	       {
    		inherit: 'singleChoice',
    		name:'areadisciplinare',
    		stem:'<b>Indica l’area disciplinare a cui appartiene il tuo percorso di studi</b>',
    		answers : ['Ingegneria', 'Matematica', 'Fisica', 'Informatica', 'Chimica', 'Astronomia', 'Altro']
        }],
        open: [{
        	type: 'text',
        	name:'Altro',
        	stem:'Specifica l’area disciplinare a cui appartiene il tuo percorso di studi',
		required: true,
        	errorMsg: {
            	    required: "Per favore specifica l’area disciplinare a cui appartiene il tuo percorso di studi" // Mostra il messaggio di errore se il campo è vuoto
	}
   }],
});

    API.addQuestionsSet('corsodistudio',{
        inherit : 'singleChoice',
        name: 'corsodistudio',
        stem: '<b>Indica a quale tipo di corso di studio sei iscritta/o</b>',
        answers: [
		{text:'Laurea Triennale'},
		{text:'Laurea Magistrale'},
		{text:'Laurea a Ciclo Unico'},
		{text: 'Dottorato di Ricerca o altra formazione post-laurea'}
            ],
    		errorMsg: {
        	    required: "Per favore seleziona un'opzione"
    	}
    });
	
    API.addQuestionsSet('annodistudio',{
        inherit : 'singleChoice',
        name: 'annodistudio',
        stem: '<b>Indica l’anno di corso a cui sei iscritta/o</b>',
        answers: [
		{text:'1'},
		{text:'2'},
		{text:'3'},
		{text:'4'},
		{text:'5'},
		{text: 'Fuoricorso'}
        ]
    });	

	    API.addQuestionsSet('occupazione',{
        inherit : 'singleChoice',
        name: 'occupazione',
        stem: '<b>Indica la tua occupazione</b>',
        answers: [
		'Studentessa/Studente',
		'Inoccupata/o',
		'Lavoratrice/ore Part-time',
		'Lavoratrice/ore Full-time',
		'Studentessa/Studente e Lavoratrice/ore Part-time',
		'Studentessa/Studente e Lavoratrice/ore Full-time',
		'Altro'
        ]
    });	
		
	/**
	* Page prototype
	*/

	
API.addPagesSet('basicPage',
{
	v1style:2,
	numbered: false,
	noSubmit: false,
	numericValues:true,
	submitText: "Invia"
});

    API.addPagesSet('basicPage2',
    {
        header: '<b>Immagina di ritrovarti nelle sei situazioni sottoelencate ed indica il tuo grado di accordo con ciascuna delle seguenti affermazioni, su una scala da 1 (= Fortemente in disaccordo) a 7 (=Fortemente d’accordo).</b>',
        headerStyle : {'font-size':'1.5em'},
	submitText: "Invia",
        questions : [
                 {inherit: {set: 'COWS_1', type: 'sequential'}},
      		 {inherit: {set: 'COWS_1', type: 'sequential', index: 1}},
       		 {inherit: {set: 'COWS_1', type: 'sequential', index: 2}},
        
        	 {inherit: {set: 'COWS_2', type: 'sequential'}},
        	 {inherit: {set: 'COWS_2', type: 'sequential', index: 1}},
        	 {inherit: {set: 'COWS_2', type: 'sequential', index: 2}},

       		 {inherit: {set: 'COWS_3', type: 'sequential'}},
      		 {inherit: {set: 'COWS_3', type: 'sequential', index: 1}},
       		 {inherit: {set: 'COWS_3', type: 'sequential', index: 2}},

       		 {inherit: {set: 'COWS_4', type: 'sequential'}},
       		 {inherit: {set: 'COWS_4', type: 'sequential', index: 1}},
      		 {inherit: {set: 'COWS_4', type: 'sequential', index: 2}},

        	 {inherit: {set: 'COWS_5', type: 'sequential'}},
     		 {inherit: {set: 'COWS_5', type: 'sequential', index: 1}},
       		 {inherit: {set: 'COWS_5', type: 'sequential', index: 2}},

       		 {inherit: {set: 'COWS_6', type: 'sequential'}},
       		 {inherit: {set: 'COWS_6', type: 'sequential', index: 1}},
        	 {inherit: {set: 'COWS_6', type: 'sequential', index: 2}}
            ],
        v1style:2,
        decline:false,
        numbered: false
    });

	API.addSequence([

		{
	        mixer : 'random', 
	        wrapper: true, 
	        data : [
	            {
	                inherit:'basicPage', 
	                questions: {inherit:'vittima'}
	            },
	            {
	                inherit:'basicPage', 
	                questions: {inherit:'autore'}							
	            }
	        ]
	    },
	    {
	        mixer : 'random', 
	        wrapper: true, 
	        data : [
	            {
	                inherit:'basicPage', 
	                questions: {inherit:'DiscriminazioneGruppo'}
	            },
	            {
	                inherit:'basicPage', 
	                questions: {inherit:'DiscriminazioneIndividuale'}							
	            }
	        ]
	    },
	    {
		mixer : 'random', 
	        wrapper: true, 
	        data : [
		    {
	        	inherit:'basicPage', 
	        	questions: {inherit:'BPNSFS'}
	            },
	    	    {
	        	inherit:'basicPage', 
	        	questions: {inherit:'SoddAcc'}
	   	    },	
	   	    {
	    		inherit:'basicPage', 
	   		questions: {inherit:'AspirCar'}
		    },
		    {
	  		inherit:'basicPage', 
	      		questions: {inherit:'AspettCarr'}
		    },	
		    {
	 	        inherit:'basicPage', 
	        	questions: {inherit:'Resilienza'}
	  	    },	
		    {
			inherit : 'basicPage2'
		    },
	   	    {
	   		inherit:'basicPage', 
	 		questions: {inherit:'Distress'}
	 	    }

		]
	    },
	  	    {
		       inherit:'basicPage', 
	               questions: {inherit:'nazione'}							
	            },
	    	    {
		       inherit:'basicPage', 
	               questions: {inherit:'sesso'}							
	            },
		    {
		       inherit:'basicPage', 
	               questions: {inherit:'genere'}							
	            },
	    	    {
		       inherit:'basicPage', 
	               questions: {inherit:'eta'}							
	            },
		    {
		       inherit:'basicPage', 
	               questions: {inherit:'regione'}							
	            },
		    {
		       inherit:'basicPage', 
	               questions: {inherit:'istruzione'}							
	            },
		    {
			inherit :'basicPage',
			questions:[
				{inherit:'areadisciplinare'},
				{
					remix: true, 
					mixer:'branch',
		            conditions: [
						{compare: 7, to: 'current.questions.areadisciplinare.response'}
					],
					data: [
						{inherit:'open'}
					]
				}
			]
		    },
		    {
		       inherit:'basicPage', 
	               questions: {inherit:'corsodistudio'}							
	            },
		    {
		       inherit:'basicPage', 
	               questions: {inherit:'annodistudio'}							
	            },
		    {
		       inherit:'basicPage', 
	               questions: {inherit:'occupazione'}							
	            }
		
	]);


    return API.script;
});
