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
        Il Maxiprocesso di Palermo, svoltosi tra il 1986 e il 1992, è stato uno dei più grandi e importanti procedimenti giudiziari contro la mafia nella storia italiana e mondiale. Organizzato dal pool antimafia, guidato dai magistrati Giovanni Falcone e Paolo Borsellino, il processo ha segnato una svolta decisiva nella lotta contro Cosa Nostra, dimostrando la capacità dello Stato di affrontare e colpire duramente l'organizzazione mafiosa.
        <br><br>
        <b>Contesto e formazione del pool antimafia</b><br>
        Negli anni '70 e '80, la mafia siciliana aveva raggiunto livelli di potere e violenza senza precedenti, infiltrandosi nelle istituzioni e nell'economia. Per contrastare questa crescente minaccia, venne creato a Palermo un pool di magistrati dedicato esclusivamente alla lotta contro la mafia. Guidato da Rocco Chinnici e successivamente da Antonino Caponnetto, il pool includeva magistrati di grande talento e coraggio come Giovanni Falcone, Paolo Borsellino, Giuseppe Di Lello e Leonardo Guarnotta.
        <br><br>
        <b>Preparazione del Maxiprocesso</b><br>
        Il lavoro del pool antimafia culminò nella preparazione del Maxiprocesso. Utilizzando nuove tecniche investigative, tra cui il "metodo Falcone" basato su una meticolosa analisi delle transazioni finanziarie e sulle dichiarazioni dei collaboratori di giustizia, il pool riuscì a raccogliere prove inconfutabili contro i vertici di Cosa Nostra. Un ruolo cruciale fu svolto dai pentiti, primo tra tutti Tommaso Buscetta, che svelò la struttura e il modus operandi dell'organizzazione mafiosa.
        <br><br>
        <b>Svolgimento del Maxiprocesso</b><br>
        Il Maxiprocesso iniziò il 10 febbraio 1986 all'interno di un'aula bunker costruita appositamente nel carcere dell'Ucciardone a Palermo. Alla sbarra vi erano 475 imputati, accusati di vari reati tra cui omicidio, traffico di droga, estorsione e associazione mafiosa. La conduzione del processo fu affidata al presidente della corte Alfonso Giordano e al pubblico ministero Giuseppe Ayala.
        <br><br>
        Per due anni, l'aula bunker fu teatro di un confronto serrato tra accusa e difesa. Il processo fu caratterizzato da momenti drammatici e testimonianze cruciali, come quelle di Buscetta e di altri pentiti che confermarono la responsabilità dei capi di Cosa Nostra nei più gravi crimini commessi in Sicilia.
        <br><br>
        <b>Sentenza e impatto</b><br>
        Il 16 dicembre 1987 venne emessa la sentenza di primo grado: 360 condanne, tra cui 19 ergastoli, e oltre 2.665 anni di carcere complessivi. La sentenza rappresentò una vittoria storica per lo Stato italiano e un duro colpo per la mafia siciliana. Tuttavia, la lotta non era finita: seguirono anni di appelli e contrappelli, con il rischio costante che molte condanne venissero annullate.
        <br><br>
        Il Maxiprocesso si concluse definitivamente il 30 gennaio 1992 con la conferma della Cassazione delle condanne principali. Questo risultato fu possibile grazie alla tenacia dei magistrati del pool antimafia e alla creazione di una legislazione più efficace nella lotta alla mafia.
        <br><br>
        <b>Eredità e significato</b><br>
        Il Maxiprocesso segnò un punto di svolta nella storia italiana. Non solo dimostrò che la mafia poteva essere sconfitta con la legge, ma anche che lo Stato, se unito e determinato, era in grado di proteggere i suoi cittadini dai poteri criminali. Il coraggio e il sacrificio dei magistrati del pool antimafia, molti dei quali pagarono con la vita il loro impegno, rimangono un esempio luminoso di dedizione alla giustizia.
        <br><br>
        L'eredità del Maxiprocesso vive ancora oggi, non solo nei risultati concreti ottenuti nella lotta alla mafia, ma anche nell'ispirazione che continua a fornire a magistrati, forze dell'ordine e cittadini impegnati nella difesa della legalità e della democrazia in Italia e nel mondo.
        <br><br>
        Gratteri fece un'altro processo molto simile, ma con le tecnologie moderne, chiamato <b>Rinascita Scott</b>, Scott fu un poliziotto americano che collaborò con le forze dell'ordine italiane per sconfiggere la mafia anche in america e fu ucciso per le sue indagini.
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
        name:"maxi",
        title:"Il Maxiprocesso"
    }
  </script>