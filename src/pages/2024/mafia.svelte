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
      Oggi la mafia è molto diversa da come i nostri genitori l'hanno conosciuta, ha cambiato forma e si è sviluppata in altri ambiti. <br>
      Negli anni la mafia si è infiltrata nell'ambito politico, sanitario e commerciale del nostro paese, ma anche negli stati esteri. Non esiste un solo tipo di
      mafia, ma cambia da paese a paese a seconda delle ricchezze del territorio. <br>
      La mafia, in particolare in Italia, si è sviluppata molto nell'ambito degli appalti pubblici, nella politica, agisce nell'ombra e sta diventando potente economicamente, non come
      anni fa che agiva agli occhi di tutti e fisicamente.
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
        name:"mafia",
        title:"La Mafia Oggi"
    }
  </script>