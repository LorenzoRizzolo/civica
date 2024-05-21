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
      Abbiamo parlato del terrorismo in Italia e degli anni di piombo grazie all'incontro con Benedetta Tobagi, figlia di Walter Tobagi, giornalista assassinato in un attentato dalla Brigata XXVIII Marzo. Benedetta Tobagi è anche l'autrice del libro "Come mi batte forte il cuore". Nel libro, Benedetta parla della storia di suo padre, degli accadimenti avvenuti la sera della sua uccisione e delle scelte che l'hanno portata a continuare il suo percorso.
      <br><br>
      Gli anni di piombo, un periodo compreso tra la fine degli anni '60 e gli anni '80, rappresentano una fase buia e turbolenta della storia italiana, caratterizzata da violenze politiche e terrorismo. Il termine "anni di piombo" deriva dalla pesantezza del clima politico e sociale, segnato da attentati, omicidi, rapimenti e scontri tra gruppi estremisti di sinistra e destra.
      <br><br>
      Walter Tobagi, giornalista del Corriere della Sera, è una delle vittime più emblematiche di quel periodo. Tobagi era noto per la sua integrità e il suo impegno nella denuncia delle attività terroristiche e delle connivenze tra politica e violenza. La sua morte, avvenuta il 28 maggio 1980, fu un duro colpo per l'Italia e suscitò una profonda riflessione sul ruolo della stampa e della libertà di espressione in una democrazia minacciata.
      <br><br>
      Benedetta Tobagi, nel suo libro "Come mi batte forte il cuore", non solo racconta la storia di suo padre, ma offre anche una visione personale e toccante di quel periodo storico. Attraverso le sue parole, emerge il dramma di una famiglia spezzata dalla violenza e il coraggio di una figlia che decide di affrontare il passato per capire meglio il presente. Benedetta esplora le motivazioni dietro l'attentato, descrive la sera fatidica della morte di suo padre e riflette sulle scelte personali che l'hanno portata a seguire un percorso di impegno civile e memoria storica.
      <br><br>
      Il libro è una testimonianza preziosa non solo per comprendere meglio la figura di Walter Tobagi, ma anche per avere uno sguardo più profondo sugli anni di piombo. Benedetta Tobagi riesce a intrecciare la storia personale con quella collettiva, offrendo al lettore una narrazione ricca di emozioni e di spunti di riflessione. La sua opera è un invito a non dimenticare, a mantenere viva la memoria di chi ha sacrificato la propria vita per la libertà e la giustizia.
      <br><br>
      Gli anni di piombo furono segnati da numerosi eventi tragici e da un clima di paura e sospetto. Le Brigate Rosse, uno dei gruppi terroristici più noti, furono responsabili di molti attentati e omicidi, tra cui quello di Aldo Moro, rapito e ucciso nel 1978. Anche gruppi di estrema destra, come Ordine Nuovo e Avanguardia Nazionale, furono coinvolti in atti di violenza e stragi, contribuendo a rendere il panorama politico italiano estremamente complesso e pericoloso.
      <br><br>
      Il terrorismo di quegli anni ebbe un impatto devastante sulla società italiana, creando una frattura profonda tra lo Stato e i cittadini. La paura e l'insicurezza si diffusero, minando la fiducia nelle istituzioni e nei valori democratici. Nonostante ciò, molte persone, come Walter Tobagi, continuarono a lottare per la verità e la giustizia, diventando simboli di resistenza e coraggio.
      <br><br>
      L'eredità degli anni di piombo è ancora presente nella memoria collettiva dell'Italia. Eventi come l'incontro con Benedetta Tobagi e la lettura del suo libro sono fondamentali per mantenere viva la consapevolezza di quel periodo storico e per riflettere sulle lezioni apprese. Solo attraverso il ricordo e l'analisi critica del passato possiamo costruire un futuro più giusto e libero dalla violenza politica.
      <br><br>
      In conclusione, "Come mi batte forte il cuore" non è solo la storia di una perdita personale, ma anche un potente atto di memoria e di impegno civile. La testimonianza di Benedetta Tobagi ci ricorda l'importanza di non dimenticare mai i sacrifici fatti per la libertà e la democrazia e di continuare a lottare contro ogni forma di violenza e ingiustizia.
      <br><br>
      La strage di piazza Fontana fu conseguenza di un grave attentato terroristico compiuto il 12 dicembre 1969 nel centro di Milano presso la Banca Nazionale dell'Agricoltura che causò 17 morti e 88 feriti.
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
        name:"piombo",
        title:"Anni di Piombo"
    }
  </script>