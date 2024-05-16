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
      Durante quest'anno scolastico abbiamo affrontato insieme alla professoressa Giannattasio la situazione carceraria attuale italiana. <br>
      In classe è anche venuta come ospite la Direttrice del carcere Lo Russo Cotugno la quale è anche la scrittice del libro "Senza sbarre",
      Cosima Buccoliero, facendo un intervento riguardo alla situazione del carcere Lo Russo Cotugno in Via Maria Adelaide Aglietta, 35, 10151 Torino.
      Cosima è venuta con la sua collega Serena Uccello nel nostro istituto a parlare e ascoltare le nostre domande sul loro libro discutendo di argomenti interessanti
      e curiosità di noi ragazzi.
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
        name:"carceri",
        title:"Situazione Carceraria"
    }
  </script>