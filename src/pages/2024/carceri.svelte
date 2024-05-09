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
      Durante quest'anno scolastico abbiamo affrontato insieme alla professoressa la situazione carceraria attuale. In classe è anche venuta la Direttrice del carcere Lo Russo e anche scrittice del libro "Senza sbarre",
      Cosima Buccoliero, a fare un intervento riguardo alla situazione del carcere Lo Russo situato in Via Maria Adelaide Aglietta, 35, 10151 Torino TO.
      Cosima è venuta con la sua collega Serena Uccello nel nostro istituto a parlare e ascoltare le nostre domande sul loro libro. <br>
      <!-- <img src="/images/lo_russo.jpeg" alt="lo russo carcere"> -->

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