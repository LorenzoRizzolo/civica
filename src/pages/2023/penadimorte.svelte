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
      Una pena che esiste da sempre tra le comunità primitive.
      Primo codice scritto di hammurabi ed editto di rotari.
      Tra gli egizi si applicava per furti e atti contro persone importanti.
      Adulterio (tradimento) punito con la pena di morte.
      Non esisteva la differenza tra omicidio colposo e volontario.
      Non veniva uccisa la moglie che tradiva ma l'amante per un tradimento.
      Platone, filosofo greco, credeva tra la relazione tra il crimine e la pena, che serviva ad espiare una colpa.
      Platone scrive anche una legge sull'omicidio.
      Nell'antica Roma c'è un codice scritto delle 12 tavole, che prevedevano la legge del taglione (taglio degli arti, rogo...).
      Le vestali (sacerdotesse consacrate alla dea Vesta) colpevoli di infedeltà venivo seppellite vive.
      Nel medioevo papa condannato a morte nella guerra santa.
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
        name:"penamorte",
        title:"Pena di morte"
    }
  </script>