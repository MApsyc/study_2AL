define(['questAPI'], function(Quest){

  var API = new Quest();

  /**
   * Page prototype
   */
  API.addPagesSet('basicPage',{
		noSubmit:true, //Change to true if you don't want to show the submit button.
		v1style: 2,
		header: 'Consenso',
		decline: false,
		autoFocus:true
	});
    /**
   * Question prototypes
   */
   API.addQuestionsSet('basicSelect',{
    type: 'selectOne',
    autoSubmit:'true',
    maxWidth: '60%'
  });
  
  
   API.addSequence([
    {
      inherit : 'basicPage',
      questions : [{
        type: 'info',
        stem: 
        '<p>Gentile partecipante,</p><br/>' +
        '<p>stiamo conducendo una ricerca il cui obiettivo è di indagare credenze, atteggiamenti e opinioni sulla discriminazione di genere.</p>'+
        '<p>Ti verrà chiesto di leggere alcune istruzioni, rispondere ad alcune domande e ordinare alcune parole in gruppi il più velocemente possibile.</p>' +
        '<p> Inoltre, ti verrà chiesto di completare dei questionari sulle tue convinzioni e atteggiamenti, sulla tua soddisfazione accademica e su come ti sei sentita/o di recente</p><br/>' +
        '<p><h1 style="text-align:center; font-size:xx-large;font-weight: normal;"><b>Ti chiediamo di leggere attentamente le seguenti indicazioni:</b></h1></p><br/>' +
        '<p>- La partecipazione alla ricerca è volontaria: Sei libera/o di decidere di prenderne parte oppure no. Nel caso decidessi di non partecipare o abbandonare lo studio non subirai alcuna conseguenza.</p>' +
        '<p>- Il trattamento e l’elaborazione di tutti i dati personali da te forniti avverranno in forma anonima e i risultati verranno utilizzati esclusivamente in forma aggregata, garantendo ogni cautela necessaria a evitarne la identificabilità.</p>' +
        '<p>- L’accesso ai dati da te forniti sarà concesso esclusivamente al personale incaricato dello studio, il quale è vincolato alla segretezza sull’identità dei partecipanti.</p>' +
        '<p>- Tutti i dati personali saranno sottoposti a modalità di trattamento sia cartaceo sia elettronico e/o automatizzato, quindi con modalità sia manuali sia informatiche, e verranno conservati da Mariangela Abbate, dottoranda; Maddalena Marini, professore associato; Sebastiano Costa, professore ordinario, tramite l’utilizzo di archivi cartacei o mezzi tecnologici (come, ad esempio, password crittografate per consentire l’accesso ai dati solo a personale autorizzato), per un arco di tempo non superiore al conseguimento delle finalità dello studio.</p>' +
        '<p>- Saranno utilizzate adeguate misure di sicurezza al fine di garantire la protezione, la sicurezza, l’integrità, l’accessibilità di tutti i dati personali, entro i vincoli delle norme vigenti e del segreto professionale.</p>' +
        '<p>- I dati personali che non siano più necessari, o per i quali non vi sia più un presupposto giuridico per la relativa conservazione, verranno anonimizzati irreversibilmente o distrutti in modo sicuro.</p>' +
        '<p>- La comunicazione dei risultati dello studio a soggetti terzi nel corso di congressi e convegni scientifici, così come la pubblicazione per scopi scientifici, potranno avvenire soltanto in forma aggregata e assolutamente anonima, a cura e sotto la responsabilità diretta dei responsabili della ricerca.</p>' +
        '<p>- In qualsiasi momento puoi decidere di ritirare il tuo consenso, contattando i responsabili della ricerca, agli indirizzi e-mail: <a href=maddalena.marini@unicampania.it>maddalena.marini@unicampania.it</a> e <a href=sebastiano.costa@unicampania.it>sebastiano.costa@unicampania.it</a>. Nel caso decidessi di ritirare il consenso al trattamento dei dati, i Responsabili dello studio si impegnano fin da ora ad eliminare tutti i dati e le informazioni da te forniti.</p>' +
        '<p><h1 style="text-align:center; font-size:xx-large;font-weight: normal;"><b>Accettando di partecipare alla ricerca, dichiari:</b></h1></p><br/>' +
        '<p>- di aver letto attentamente la nota informativa relativa al consenso informato;</p>' +
        '<p>- di aver essere stata/o informata/o riguardo agli obiettivi e alle finalità del progetto di ricerca, così come riguardo alla procedura sperimentale;</p>' +
        '<p>- di aver avuto la possibilità di porre domande a proposito di qualsiasi aspetto della procedura sperimentale e di aver ottenuto risposte soddisfacenti;</p>' +
        '<p>- di essere a conoscenza dei disagi e benefici dell’esperimento;</p>' +
        '<p>- di aver ricevuto le informazioni relative alla riservatezza dei dati personali che saranno raccolti e trattati, nell’assoluto anonimato, esclusivamente per fini di ricerca.</p><br/>' +
        '<p><h1 style="text-align:center; font-size:xx-large;font-weight: normal;"><b>Accettando di partecipare alla ricerca, fornisci il consenso al trattamento dei dati.</b></h1></p><br/>' +
        '<p>Inoltre, avendo ricevuto apposita informativa sul trattamento dei dati personali e in relazione a quanto indicato in relazione al trattamento dei dati, per ciò che attiene al trattamento e alla comunicazione dei dati personali forniti per tutte le finalità indicate nella presente informativa:</p>'
        },
        

    // Note: Feel free to adapt language based on your consent form.
    {
        inherit : 'basicSelect',
        name: 'userconsent',
        description: '<b>Clicca due volte sul tasto per selezionare la tua risposta<p>',
        answers: [
            {text: 'Accetto di partecipare alla ricerca', value: true},
            {text: 'Non accetto di partecipare alla ricerca', value: false}
        ]
      }
      ]
    }
    
      
     ]);
 return API.script;
});









