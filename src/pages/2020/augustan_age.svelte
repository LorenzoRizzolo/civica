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
      In this section we will talk about the Augustan times, i.e. in the 17th century, in which there were two rival political parties: the Tories and the Whigs.
      The Whigs wanted a strong Parliament, with a King and the Catholic religion.
      They began as groups of like-minded people and split in 1784.
      Displeased with the Tories who were strongly monarchists, supporters of the Anglican church and others
      favor of the industries from which they collected votes.
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
        name:"augustan_age",
        title:"Augustan Age"
    }
  </script>