<Page name={title.name}>
    <!-- Top Navbar -->
    <Navbar large sliding={false}>
      <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle sliding>{title.title}</NavTitle>
      <NavTitleLarge>{title.title}</NavTitleLarge>
    </Navbar>
  
    <Block>
      Alda merini nata a Milano nel 1931, ha avuto una vita travagliata.
      Il papà le ha trasmesso la passione per la lettura.
      
      <br><br>
      Lei riesce a farsi pubblicare delle poesie, ma tornando a casa felice
      lo racconta al padre e lui gliele strappa dicendole di dover lavorare.

      <br><br>
      Lei ebbe il primo ricovero intorno ai 16 anni e le viene diagnosticata
      una sindrome bipolare. È stata internata in un manicomio di Milano
      per poco tempo dove vengono applicate delle cure e poi dimessa.
      A 21 anni si sposa con Canniti, un uomo non molto colto, ma benestante.
      Viene mandata dal marito in manicomio Paolo Pini a Milano per 10 anni.
      
      <br><br>
      Lei racconta che era stanca badando alle figlie e con la morte della madre lei
      andò in escandescenza e il marito chiamò un'ambulanza e gli chiede lui di mandarla in manicomio.
      Prima della legge Basaglia del 1978 il malato veniva sedato e maltrattato.
      
      <br><br>
      Racconda di una sua amica che era stata messa in manicomio per essere una ragazza madre e la sua famiglia
      voleva disfarsene. Lei non era matta, era molto serena, ovviamente pensando al bambino piageva.
      "Ero sola e mi chiesi in che concetto Dio tenesse i pazzi, ma Dio ha dato il libero arbitrio,
      perchè un folle non può essere padrone della sua volontà?"
      
      <br><br>
      Gli uomini erano divisi in un altro padiglione ed ogni uno era diviso in sotto reparti.
      Le notti per i malati c'erano continue grida e li legavano al letto con delle corde di canapa,
      in alcuni casi si usava a camicia di forza.
      Basaglia studia questi fenomeni e dichiara che a Gorizia c'è la stessa situazione.
      Nel 1971 tra uomini e donne di parlava di 600 internati tra Trieste e Gorizia.
      Li dentro perdevi la tua identità, ti rasavano i capelli e ti mettevano in una cella.
      Basaglia ritiene che i malati non sono oggetti e ad ogni malato bisogna fare una diagnosi.
      Basaglia chiude i manicomi e con situazioni da far paura, con malati morti per terra, nelle feci, nell'immondizia.
    </Block>
  
  </Page>
  <script>
    import {
      Page,
      Navbar,
      NavLeft,
      NavTitle,
      NavTitleLarge,
      NavRight,
      Link,
      Toolbar,
      Block,
      BlockTitle,
      List,
      ListItem,
      Button
    } from 'framework7-svelte';
    let title = {
        name:"manicomi",
        title:"Manicomi"
    }
  </script>