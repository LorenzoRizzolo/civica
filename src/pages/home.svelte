<Page name="home">
  <!-- Top Navbar -->
  <Navbar large sliding={false}>
    <NavLeft>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
    </NavLeft>
    <NavTitle sliding>Educazione civica <br><small><small><small>Lorenzo Rizzolo</small></small></small></NavTitle>
    <NavTitleLarge>Educazione civica <br><small><small><small>Lorenzo Rizzolo</small></small></small></NavTitleLarge>
  </Navbar>

  <Block>
    <BlockTitle>Chi sono?</BlockTitle>
    Mi chiamo Lorenzo Rizzolo e sono uno studente dell'Istituto Internazionale Edoardo Agnelli di Torino.
  </Block>

  <Block>
    <BlockTitle>Quali sono i miei principali interessi?</BlockTitle>
    Il mio principale focus è sullo sviluppo di applicazioni web moderne e lo sviluppo web
  </Block>

  <Block>
    <BlockTitle>Nuove tecnologie</BlockTitle>
    Nei miei progetti utilizzo sempre nuove tecnologie, le quali facilitano lo sviluppo e ne migliorano le prestazioni. Questo sito è stato sviluppato con un potete
    framework moderno, ossia Svelte e framework7.
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
</script>