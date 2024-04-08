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
      Paolo borsellino fu un grande sostenitore della giustizia e dell'etica sociale. fu stato uno dei primi a combattere con dei fatti contro la mafia ed ad ottenere dei risultati. insieme a lui il suo amico e collega Giovanni Falcone, i quali furono uccisi dalla mafia a seguito di queste indagini ed a questi processi. il Maxi processo fu uno di questi, nel quale ci furono 475 imputati.  
    </Block>

    <Block>
      <BlockTitle>Il libro <i>"La casa di paolo"</i></BlockTitle>
      Questo libro, che abbiamo letto per educazione civica è un gran esempio di etica sociale. Parla di questo magistrato, ormai conosciuto in tuto il mondo, Paolo Borsellino. Per la precisazione parla di un ragazzo di 15 anni che si ritrova in lui e nelle sue idee. Si racconta che Borsellino ha salvato la vita di questo ragazzo, non in modo oggettivo ma gliel'ha salvata dandogli delle lezioni di vita attraverso le sue parole ed i suoi fatti. Per l'appunto si parla che all'inizio questo ragazzo era molto agitato e non seguiva le regole, ovvero ciò che tiene in ordine la società e che impedisce il caos. Poi scopre questo personaggio e senza accoAll'inizio della seconda superiore la professoressa decide di affrontare questo argomento con la classe, esso comincia subito ad interessarsi ed a porsi molte domanda su di lui. Alla fine dell'anno la sua classe affronta un gita in merito dell'argomento andando fino a Palermo a vedere la vecchia casa di Paolo, ormai divenuta una casa per i bambini più disagiati della città.
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
        name:"borsellino",
        title:"Paolo Borsellino"
    }
  </script>