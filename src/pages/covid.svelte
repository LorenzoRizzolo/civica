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
      <BlockTitle>Marzo 2020</BlockTitle>
      Ovviamente in questa situazione non si può non parlare del CoronaVirus. Abbiamo affrontato questo argomento di biologia ascoltando un dottore esperto di medicina, il Dr. Mario Raviglione.
      Dopodichè abbiamo costruito una mappa mentale sull'argomento e approfondito gli effetti di questo virus sul nostro corpo. Adesso, con il completamento del video sull'apparato respiratorio siamo riusciti a capire ancora meglio gli effetti del Covid sui nostri polmoni. 
    </Block>

    <Block>
      <BlockTitle>Dr. Mario Raviglione</BlockTitle>
      Parlando di questo argomento abbiamo conosciuto un amico del nostro professore di Biologia, il prof. Negro. Costui è un chirurgo di Torino che ha iniziato la sua carriera occupandosi di malattie contagiose come la tubercolosi e dal 2003 fino alla fine del 2017 è stato direttore del programma globale per la lotta contro la tubercolosi all’Organizzazione Mondiale della Sanità. Dal 2018 è professore ordinario all'Università degli Studi di Milano. Attualmente dirige le attività incentrate sulla salute globale nell'ambito del nuovo centro multidisciplinare di ricerca in scienze della salute. Negli ultimi mesi si è occupato vastamente di ricerca e divulgazione nell’ambito della nuova epidemia in corso di SARS CoV-2.
      Qui di fianco trovate un video di una sua intervista.      
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
        name:"covid",
        title:"Covid-19"
    }
  </script>