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
      Oggi la mafia è molto diversa da come i nostri genitori l'hanno conosciuta; ha cambiato forma e si è sviluppata in altri ambiti. Negli anni, la mafia si è infiltrata in profondità nel tessuto sociale e istituzionale, penetrando non solo l'ambito politico, ma anche il settore sanitario e commerciale del nostro paese, espandendosi anche in vari stati esteri. Non esiste un solo tipo di mafia, ma essa cambia da paese a paese a seconda delle risorse e delle opportunità offerte dal territorio.
      <br><br>
      In Italia, ad esempio, oltre alle ben note organizzazioni come Cosa Nostra, 'Ndrangheta e Camorra, esistono anche gruppi criminali più piccoli ma altrettanto pericolosi. La mafia italiana si è evoluta, specialmente negli ultimi decenni, passando da forme di controllo territoriale visibile e violento a forme di potere più subdole e sottili. Questo cambiamento è stato favorito dalla capacità delle organizzazioni mafiose di adattarsi alle trasformazioni economiche e politiche del paese.
      <br><br>
      Un settore particolarmente vulnerabile all'infiltrazione mafiosa è quello degli appalti pubblici. Le organizzazioni criminali riescono a ottenere contratti e subappalti grazie alla corruzione di funzionari pubblici e alla collusione con imprenditori senza scrupoli. Questo sistema di corruzione permette alle mafie di accumulare ingenti capitali, che vengono poi riciclati in attività lecite, rendendo ancora più difficile tracciare l'origine del denaro.
      <br><br>
      La politica è un altro ambito in cui la mafia ha trovato terreno fertile. Attraverso la corruzione e l'intimidazione, le organizzazioni mafiose riescono a influenzare le decisioni politiche a loro favore, assicurandosi protezione e vantaggi economici. Il controllo politico permette alla mafia di garantire la continuità dei propri affari illegali e di mantenere il potere nelle comunità locali.
      <br><br>
      Il settore sanitario è diventato una nuova frontiera per le mafie, soprattutto con la pandemia di COVID-19. Le organizzazioni criminali hanno cercato di approfittare delle emergenze sanitarie per ottenere contratti e forniture di dispositivi medici, nonché per infiltrarsi nel sistema delle vaccinazioni. Questo non solo danneggia l'economia legale, ma mette a rischio la salute pubblica e la fiducia dei cittadini nelle istituzioni.
      <br><br>
      A livello internazionale, la mafia italiana e le sue controparti straniere collaborano e competono in vari settori, dal traffico di droga al riciclaggio di denaro, dall'immigrazione clandestina al contrabbando di armi. Ogni territorio presenta opportunità diverse: in Sud America, ad esempio, le mafie collaborano con i cartelli della droga per il traffico di cocaina, mentre in Europa dell'Est sono coinvolte in traffici di esseri umani e prostituzione.
      <br><br>
      Oggi, la mafia non agisce più agli occhi di tutti con atti di violenza eclatanti, come avveniva negli anni passati. Le organizzazioni criminali preferiscono operare nell'ombra, sfruttando le tecnologie moderne e le reti finanziarie globali per espandere i propri affari. Questa capacità di adattamento rende la mafia ancora più pericolosa, perché difficile da individuare e combattere.
      <br><br>
      In sintesi, la mafia contemporanea è un'entità complessa e multiforme, che ha saputo reinventarsi per sopravvivere e prosperare in un mondo in continua evoluzione. La lotta contro la mafia richiede non solo l'impegno delle forze dell'ordine e della magistratura, ma anche una presa di coscienza collettiva e un forte impegno civile per difendere i valori della legalità e della giustizia.
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
        name:"mafia",
        title:"La Mafia Oggi"
    }
  </script>