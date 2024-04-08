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
        Su questo tema mi piacerebbe ragionarci approfonditamente. Per essere degli onesti cittadini bisognerebbe prima di tutto crescere in un ambiente dove la normalità di tutti i giorni sia fondata sul senso civico e sul reciproco rispetto. Come possiamo vedere in molte realtà di oggi i ragazzi che si sentono più isolati ed incompresi dove gli adulti non li seguono e si ribellano alla società compiendo crimini che pian piano diventano la loro normalità. Essere buoni cristiani secondo me implica l’essere onesti cittadini poiché un fedele che cresce con la fede di Gesù, la usa come sentiero per la vita e segue i suoi insegnamenti è molto difficile che cambi. A volte però bisogna riconoscere la differenza tra crescere onesti cittadini ed avere un’etica dove anche ciò che sembra sbagliato secondo le regole per te è giusto. Molti tendono a seguire le regole di un mondo perfetto dove tutte le norme vengono rispettate e alla fine si ritrovano impigliati in una società fatta di inganni e di ingiustizie, una società che ti obbliga a non seguire le regole per sopravvivere e per cavartela. Secondo me invece una persona dovrebbe seguire i suoi ideali e vivere secondo le regole senza sgarrare facendo in modo però che le proprie capacità vengano fuori. Ad esempio in un film che ho visto di recente chiamatosi “captain fantastic”, fa vedere la differenza tra una famiglia di 7 persone che decidono di vivere nella foresta isolati dal mondo per 15 anni e una volta che viene a contatto con il mondo esterno non sa come comportarsi, e loro che sono culturalmente avanzati, senza seguire le regole poiché essendo molto avanzati seguono i propri pensieri di vita. Quando si trovano per la prima volta davanti ad una società che non segue la giustizia ma il denaro. Anche in goni giorno vedi casi di gente che ha il potere grazie a qualche parente o amico stretto, ma a parte questo se uno seguisse la parola di Gesù e crescesse con sani principi in una società che ti permettere di studiare, quindi di crescere meno ignorante, ma allo stesso tempo che ti supporta e che ti aiuta nella vita di tutti i giorni secondo me potremmo vivere in un mondo più onesto. Come dice don bosco dobbiamo seguire 3 regole nella vita: Allegria, studio e preghiera. Dicendo questo intende che dobbiamo vivere gioiosamente, studiando, quindi crescere con le conoscenze e non nell'ignoranza ma soprattutto la preghiera perché come sappiamo ci crea uno stretto rapporto con Dio che ci crea pace interiore e ci fa stare bene.
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
        name:"crescere",
        title:"Crescere onesti cittadini"
    }
  </script>