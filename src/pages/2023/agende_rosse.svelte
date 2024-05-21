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
        Le "agende rosse" sono diventate un potente simbolo nella lotta contro la mafia e la corruzione in Italia, principalmente a causa del giudice Paolo Borsellino, uno dei più importanti magistrati antimafia del paese. Paolo Borsellino fu ucciso il 19 luglio 1992 in un attentato a Palermo, pochi mesi dopo il suo amico e collega Giovanni Falcone. Da quel momento, l'agenda rossa che Borsellino portava con sé è scomparsa, e la sua assenza continua a sollevare dubbi e sospetti sulla dinamica e le complicità dietro l'omicidio.
        <br><br>
        <b>La scomparsa dell'agenda rossa</b><br>
        L'agenda rossa di Paolo Borsellino è divenuta simbolo di verità non rivelate e di segreti oscuri. Secondo i racconti, Borsellino annotava sull'agenda dettagli importanti delle sue indagini e riflessioni personali sui collegamenti tra la mafia e parti deviate dello Stato. Dopo la strage di via D'Amelio, la borsa del giudice venne ritrovata, ma l'agenda rossa risultò scomparsa, alimentando sospetti di un'azione orchestrata per far sparire informazioni cruciali.
        <br><br>
        <b>L'importanza simbolica</b><br>
        La scomparsa dell'agenda rossa è stata interpretata da molti come un chiaro segnale delle infiltrazioni mafiose nelle istituzioni italiane e della volontà di occultare la verità sui rapporti tra mafia e potere. Questo oggetto è diventato un simbolo della lotta per la giustizia e la trasparenza. Ogni anno, in occasione dell'anniversario della morte di Borsellino, manifestazioni e cortei commemorativi sfilano per le strade di Palermo, e molte persone portano con sé agende rosse, per ricordare la necessità di continuare a cercare la verità.
        <br><br>
        <b>Il Movimento delle Agende Rosse</b><br>
        Dalla scomparsa dell'agenda di Borsellino è nato il "Movimento delle Agende Rosse", fondato dal fratello del giudice, Salvatore Borsellino. Il movimento si impegna attivamente nella ricerca della verità e nella sensibilizzazione dell'opinione pubblica sui temi della giustizia, della lotta alla mafia e della memoria delle vittime di mafia. Il Movimento delle Agende Rosse organizza eventi, incontri e iniziative educative, coinvolgendo soprattutto i giovani, per diffondere la cultura della legalità e del rispetto delle istituzioni.
        <br><br>
        <b>L'eredità di Paolo Borsellino</b><br>
        L'eredità di Paolo Borsellino va oltre il suo lavoro di magistrato. La sua figura rappresenta un esempio di integrità, coraggio e dedizione alla giustizia. Le sue parole e il suo operato continuano a ispirare generazioni di italiani, in particolare chi si batte contro l'illegalità e la corruzione. La storia dell'agenda rossa di Borsellino è un richiamo costante a non dimenticare il sacrificio di chi ha dato la vita per contrastare la mafia e a mantenere viva la memoria delle loro battaglie.
        <br><br>
        <b>Conclusione</b><br>
        Le agende rosse non sono solo un oggetto fisico, ma un potente simbolo della lotta per la verità e la giustizia in Italia. La scomparsa dell'agenda rossa di Paolo Borsellino è un enigma che continua a sollevare interrogativi e a stimolare la ricerca della verità. Attraverso il Movimento delle Agende Rosse e altre iniziative, la memoria di Borsellino e il suo impegno per un'Italia libera dalla mafia continuano a vivere, spronando la società a non arrendersi di fronte all'ingiustizia e alla corruzione. L'agenda rossa è diventata un simbolo della speranza e della perseveranza nella lotta per un futuro migliore.
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
        name:"agende",
        title:"Agende Rosse"
    }
  </script>