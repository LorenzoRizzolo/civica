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
      <BlockTitle>Campi Giapponesi 1920 - Unità 731</BlockTitle>
      Il Giapponese Shiro Ishii si iscrive a medicina, nel 1921 si arruola nell'esercito ed entra nelle grazie di persone importanti andando successivamente in Europa per vedere i laboratori delle armi tossiche. 
      Produrrà anche un filtro per pulire l'acqua dai batteri e usando poi quei laboratori per i suoi interessi. Aveva però bisogno di cavie e di segretezza per svolgere i suoi affari tranquillamente e nell’ombra. Nel 1931 i giapponesi invadono la Manciuria, territorio Cinese. 
      I’unità 731 vede gli abitanti della Manciuria come cavie utili per i loro esperimenti, le donne come lavoratrici per la casa e il territorio come laboratori. Nel 1932 apre un laboratorio dell'esercito in Harbin, Manciuria.
      Sposterà tutto 100km più in là per creare questi campi di laboratori. Volevano capire come l'uomo reagiva alle malattie e facevano degli studi. Nel 1934 una trentina di prigionieri fuggirono ma solo 16 riusciranno a tornare in Cina. I Giapponesi temendo di essere scoperti spostano nuovamente la fortezza da un'altra parte, creando il dipartimento della depurazione dell'acqua e dello studio delle malattie. 
      Le cavie erano prigionieri, sbandati, scarti della società. Venivano sfruttati, schiavizzati e maltrattati. 
      La polizia giapponese catturava ogni giorno nuove persone da usare come cavie.
      L'unità 731 lavorerà sulle cavie e sugli esperimenti, che verranno anche pubblicati su articoli e portarono a nuove scoperte, dicendo di usare scimmie particolari della Manciuria. 
      Facevano ibernare le braccia di cavie, per poi colpirle e vedere quanto resisteva e per poi sfruttarla ancora fino a che non moriva.
      Le cavie venivano chiamate tronchi perché alle popolazioni locali era stato riferito che quel grande immobile era una segheria.
      Si effettuavano esperimenti di qualsiasi tipo e genere, dalla natalità alle armi, dal cibo e alle malattie comuni. Si provava qualsiasi tipo di esperimento, si tagliavano le braccia, si scambiava il sangue e altre crudeltà, per il fine di testare i tempi di sopravvivenza e se sopravvivevano venivano riusati per altri esperimenti. 
      La sopravvivenza media di una cavia era di un mese, nel giro di 10 anni sono passate dall’unità 731 circa 20.000 persone morte per gli esperimenti. 
      Spesso uscivano informazioni da quell’area, ma venivano fatte sparire. Nel 45 smantellano tutto per evitare la fine dei tedeschi e Ishii torna in Giappone, continuando delle ricerche mediche. Le prove delle sue azione nei campi vennero fuori con il tempo e gli Americani fanno un patto con Ishii assicurandogli l’immunità in cambio dei risultati degli esperimenti. Anche la Russia cercò di venire a conoscenza di questi esperimenti. Al giorno d’oggi non vengono eseguiti esperimenti così crudi neanche sui topi. Ishii nel 45 stava studiando di fare un attacco all’America con le sue pulci e le sue malattie sulla città di San Diego.
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
        name:"giapponesi",
        title:"Campi Giapponesi"
    }
  </script>