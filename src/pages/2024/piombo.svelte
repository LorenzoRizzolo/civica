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
      Abbiamo parlato del Terrorismo in Italia e degli anni di piombo grazie all'incontro con Benedetta Tobagi, figlia di Walter Tobagi 
      giornalista assassinato in un attentato dalla Brigata XXVIII marzo, la quale è l'autrice del libro "Come mi batte forte il cuore". <br>
      Nel libro Parla della storia di suo padre, degli accadimenti avvenuti la sera della sua uccisione e delle scelte che l'hanno portata a continuare il suo 
      percorso.
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