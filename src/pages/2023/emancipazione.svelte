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
        Negli ultimi 70 anni, l'emancipazione femminile ha compiuto progressi straordinari, trasformando radicalmente il ruolo delle donne nella società e segnando un cambiamento epocale verso l'uguaglianza di genere. Questa evoluzione ha toccato vari aspetti della vita, dalla politica al lavoro, dall'educazione ai diritti civili, rispecchiando una lotta continua per ottenere pari opportunità e riconoscimento.
        <br><br>
        Negli anni '50 e '60, le donne hanno iniziato a sfidare i ruoli tradizionali che le vedevano principalmente come casalinghe e madri. Con il boom economico del dopoguerra e l'aumento della domanda di manodopera, molte donne entrarono nel mondo del lavoro, anche se spesso in posizioni subordinate e con salari inferiori rispetto agli uomini. Il movimento femminista di questo periodo, soprattutto negli Stati Uniti e in Europa, ha posto le basi per rivendicazioni fondamentali, chiedendo parità salariale, accesso all'istruzione superiore e il diritto a una carriera professionale.
        <br><br>
        Gli anni '70 furono segnati da una forte ondata di attivismo femminista. In questo decennio, le donne ottennero importanti vittorie legislative. In Italia, ad esempio, la legge sul divorzio fu approvata nel 1970, seguita dalla legge sull'aborto nel 1978. Negli Stati Uniti, il Titolo IX del 1972 proibì la discriminazione di genere nell'istruzione, aprendo la strada a maggiori opportunità per le donne nello sport e nelle università. Questi progressi furono accompagnati da una crescente consapevolezza sociale riguardo alle questioni di genere e da un'accettazione più ampia delle donne in ruoli di leadership.
        <br><br>
        Gli anni '80 e '90 videro ulteriori avanzamenti, con un numero crescente di donne che raggiungevano posizioni di rilievo nel mondo degli affari, della politica e della cultura. Nel 1986, Corazon Aquino diventò presidente delle Filippine, e nel 1988, Benazir Bhutto fu eletta prima ministra del Pakistan, segnando tappe storiche per la leadership femminile globale. In ambito lavorativo, si assistette a un aumento delle donne in carriere tradizionalmente dominate dagli uomini, come l'ingegneria e la medicina.
        <br><br>
        Il nuovo millennio ha continuato su questa scia di progresso. La presenza femminile in politica è cresciuta significativamente: Angela Merkel è diventata cancelliera della Germania nel 2005, e Hillary Clinton è stata la prima donna a ottenere la candidatura presidenziale di un grande partito negli Stati Uniti nel 2016. Anche il movimento #MeToo, nato nel 2017, ha avuto un impatto mondiale, mettendo in luce il problema delle molestie sessuali e della discriminazione sul posto di lavoro e dando voce a milioni di donne.
        <br><br>
        Nonostante i notevoli progressi, la lotta per l'uguaglianza di genere non è finita. Le disparità salariali persistono, con le donne che spesso guadagnano meno degli uomini per lo stesso lavoro. Inoltre, le donne sono ancora sottorappresentate nei ruoli di leadership e nei settori tecnologici e scientifici. La violenza di genere rimane una piaga globale, con molte donne che continuano a subire abusi fisici e psicologici.
        <br><br>
        L'emancipazione femminile degli ultimi 70 anni è una storia di resilienza e determinazione. Le donne hanno ottenuto diritti e opportunità che le generazioni precedenti potevano solo sognare. Tuttavia, il percorso verso una piena uguaglianza è ancora lungo e richiede l'impegno continuo di tutti per eliminare le barriere residue e costruire una società veramente equa per tutte e tutti.
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
        name:"emancipazione",
        title:"Emancipazione Femminile"
    }
  </script>