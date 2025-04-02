define(['questAPI'], function(Quest){

  var API = new Quest();

  /**
   * Page prototype
   */
  API.addPagesSet('basicPage',{
		noSubmit:true, //Change to true if you don't want to show the submit button.
		v1style: 2,
		header: 'Hai completato lo studio. Grazie per la tua partecipazione!',
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
      questions : [
          {
            type: 'info',
            stem: 
            '<p>In questa pagina, ti verranno fornite alcune informazioni generali sullo studio e sulle sue finalità.</h1></p><br/>' +
            '<p> L’obiettivo principale di questo studio è quello di indagare la relazione tra la credenza di discriminazione di genere, i bisogni psicologici di base, il benessere psicologico e la soddisfazione accademica. Nella nostra società, le donne e gli uomini sono trattati in modo diverso in vari contesti (ad esempio, al lavoro, nei contesti educativi, ecc.). Comprendere gli effetti della discriminazione fornirà informazioni sulle ragioni di questa disparità tra donne e uomini e ci aiuterà a definire potenziali soluzioni per ridurre l’impatto negativo sulle persone e sul loro benessere psicologico.</h1></p>' +
            '<p> Durante lo studio, abbiamo raccolto informazioni specifiche sulle esperienze di discriminazione. Volevamo comprendere meglio come la discriminazione di genere si manifesta negli ambiti STEM (Scienze, Tecnologia, Ingegneria e Matematica), e quali conseguenze ha sulle persone coinvolte. Per questo, ti è stato chiesto di rispondere a delle domande riguardanti la tua esperienza personale di discriminazione e le tue credenze in merito.</h1></p>' +
            '<p> Inoltre, hai completato un test di associazione implicita (IAT). Questo test misura il modo in cui la nostra mente associa concetti diversi misurando il tempo che una persona impiega per classificarli. Lo IAT spesso rivela associazioni che differiscono dalle convinzioni consapevoli valutate utilizzando questionari self-report. Nello specifico hai completato uno IAT che misura le associazioni delle categorie Uomo e Donna con i concetti Vittima di Discriminazione e Autore di Discriminazione.</h1></p>' +
            '<p> Durante la partecipazione allo studio, ti è stato chiesto di seguire alcune istruzioni e rispondere a domande finalizzate a indagare le tue credenze e atteggiamenti. Nello specifico, ti è stato chiesto di completare un test di associazione implicita (Implicit Associaton Test, IAT). Questo test misura il modo in cui la nostra mente associa insieme concetti dfferenti. Le misure implicite spesso rivelano associazioni che differiscono dalle credenze consapevoli misurate attraverso i questionari.</p>' +
            '<p> Infine, ti è stato chiesto di fornire informazioni sulla soddisfazione dei bisogni psicologici di base e sulla tua soddisfazione accademica. Questo ci aiuterà a comprendere meglio se le persone che subiscono discriminazione possano sentire che i loro bisogni psicologici di base siano meno soddisfatti e, inoltre, possano sentirsi meno soddisfatte nell’ambito accademico in STEM.</p>' + 
	    '<p> All’inizio dello studio, non abbiamo divulgato completamente tutte le informazioni sulla natura e lo scopo di questo studio per evitare potenziali pregiudizi nelle risposte. Ci auguriamo che tu capisca perché lo abbiamo fatto e perché non siamo riusciti a rivelare completamente l’obiettivo del nostro studio fino ad ora.</p>' + 
            '<p> Nel caso in cui hai domande, preoccupazioni, reclami o vuoi ritirare le tue risposte dallo studio si prega di contattare la Dott.ssa Mariangela Abbate all’indirizzo e-mail: <a href=mariangela.abbate@unicampania.it>mariangela.abbate@unicampania.it</a>.</h1></p><br/>' +
            '<p><h1 style="text-align:center; font-size:xx-large;font-weight: normal;"><b>Grazie ancora per la tua partecipazione!</b></h1></p><br/>'
            }
        ] 
    }]);
 return API.script;
});










