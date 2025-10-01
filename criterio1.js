define(['questAPI'], function(Quest){

  var API = new Quest();

  /**
   * Page prototype
   */
  API.addPagesSet('basicPage',{
		noSubmit:true, //Change to true if you don't want to show the submit button.
		v1style: 2,
		header: ' ',
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
        '<p>Sei attualmente una studentessa o uno studente iscritta/o ad un corso di formazione universitaria (ad esempio: corso di laurea triennale, corso di laurea magistrale, corso di dottorato, scuola di specializzazione, master)?</p>'
        },
        

    // Note: Feel free to adapt language based on your consent form.
    {
        inherit : 'basicSelect',
        name: 'usercriterio1',
        description: '<b>Clicca due volte sul tasto per selezionare la tua risposta<p>',
        answers: [
            {text: 'Sì', value: true},
            {text: 'No', value: false}
        ]
      }
      ]
    }
    
      
     ]);
 return API.script;
});


