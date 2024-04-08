<Page name={title.name}>
    <!-- Top Navbar -->
    <Navbar large sliding={false}>
      <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle sliding>{title.title}</NavTitle>
      <!-- <NavTitle sliding>civica</NavTitle> -->
      <NavRight>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
      <NavTitleLarge>{title.title}</NavTitleLarge>
    </Navbar>
  
    <Block>
      Incontro con Stellantis sulla cybersecurity, 3 maggio 2023.
      La materia di cybersecurity è un argomento molto delicato ed importante per la sicurezza dei
      giorni d’oggi. Tutti i dati personali e non vengono salvati in dei contenitori di dati chiamati
      database, i quali possono essere di molti tipi e con proprietà diverse.
      Ovviamente questi dati in mani sbagliate potrebbero causare danni alle pubblica amministrazione
      ed ai cittadini direttamente interessanti.
      Molti dati potrebbero venire “sniffati” all’interno di internet, il processo è molto semplice: un
      hacker si intromette nella comunicazione dei due dispositivi e manomette le informazioni o
      semplicemente le memorizza. Molti hacker sono anche in grado di modificare documenti, come
      quelli mandati via email. Casi simili accadono nelle aziende quando viene effettuato un bonifico,
      un azienda manda ad un’altra azienda un pdf con l’iban bancario e l’hacker cambiando
      quell’imbranato riceve lui ii soldi al posto del destinatario effettivo. Nella realtà di oggi queste
      situazioni capitano molto sovente. Un altro caso molto più comune sono i messaggi e le email di
      spam dove l’hacker crea un sito simile a quello originale del prodotto che uno vuole acquistare
      incassando il denaro a titolo “gratuito”.
      La cybersecurity si occupa proprio di prevenire questi fenomeni e fare in modo che i dati di tutti gli
      utenti siano protetti per mantenere uno profilo di sicurezza molto alto, il quale incide anche sulla
      reputazione e l’economia aziendale.
      Esistono diversi tipi di attacchi hacker, ogni uno mirato a provocare un effetto diverso. Due di
      questi sono, Ddos e Botnet: servono a rallentare il servizio dell’azienda, peggiorante l’esperienza
      utente e danneggiando l’economia perdendo clienti. L’attacco Ddos invia una richiesta enorme di
      dati mentre la botnet invia tante richieste da indirizzi io differenti sparsi per il mondo.
      SQL injection: si tratta di un codice in grado di lavorare con i database, creando ed effettuando
      delle richieste a questi gruppi di dati in modo che l’ha ore possa riceverli e ricavarli con facilità se
      l’amministratore dei database non ha valutato questa situazione.
      Per nostra fortuna però esistono anche molti software per proteggerci da questi attacchi e dello
      sniffing dei dati. In primo luogo ogni password dovrebbe essere criptata tramite sistemi di
      trasformazione del dato in modo da nasconderlo, in secondo luogo alcune app ci permettono di
      nascondere i nostri dati ai siti che li richiedono, addirittura riusciamo tramite delle VPN (software
      di rete) a spostare la nostra posizione in altri stati, il che ci permette di nascondere
      completamente la nostra area di collocazione geografica, la quale potrebbe servire ad hacker o
      siti per vendere i nostri dati personali.
      Spesso capita anche che voi cerchiate un prodotto su un sito e subito dopo trovarlo come
      pubblicità su siti nei quali non centra nulla.
      Nelle aziende esistono molti ruoli che studiano questi fenomeni e cercano di prevenirne gli effetti
      negativi.
      In Stellantis esistono 3 team che si occupano di prevenire, simulare e studiare questi attacchi.
      Il red team si occupa di simulare gli attacchi che gli hacker potrebbero effettuare, in modo da
      sapere come reagire e prepararsi a dovere. Il blue team si occupa di studiare i dati e gli eventi che
      si manifestano durante l’attacco o semplicemente durante un giornata tipica di servizio del
      sistema. Il purple team si occupa invece di sedare questi attacchi e capire come prevenirli.
      È stato effettuato anche un esperimento, il quale consisteva nel trovare tutti i dati di una persona
      attraverso il suo nome. Un indovino simulava di indovinare i dati, mentre nella realtà dall’altra
      parte del muro c’era una squadra di hacker che cercava ed estrapolava le sue informazioni come
      il conto bancario, l’iban, il numero della carta di credito, la scuola frequentata da piccoli eccetera.
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
        name:"cyber",
        title:"Cyber Security"
    }
  </script>