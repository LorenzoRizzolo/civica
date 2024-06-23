<App { ...f7params }>

  <!-- Left panel with cover effect-->
  <Panel left cover reveal>
    <View>
      <Page>
        <Navbar title="Civica" subtitle="Lorenzo Rizzolo"/>
          <List dividersIos outlineIos strongIos>
            {#each pages as p}
              {#if p.name!="404"}
                {#if p.routes}
                  <Block strong inset>
                    <BlockTitle>{p.name}</BlockTitle>
                    {#each p.routes as r}
                    <ListItem>
                      <Link tabLink={"#view-"+r.name} class="panel-close" iconMd={r.icon} text={r.title} />
                    </ListItem>
                    {/each}
                  </Block>
                {:else}
                  <Block strong inset>
                    <ListItem>
                      <Link tabLink={"#view-"+p.name} class="panel-close" iconMd={p.icon} text={p.title} />
                    </ListItem>
                  </Block>
                {/if}
              {/if}
            {/each}
    
          </List>
      </Page>
    </View>
  </Panel>

  <!-- Views/Tabs container -->
  <Views tabs class="safe-areas">
    <!-- Tabbar for switching views-tabs -->
    <!-- <Toolbar tabbar icons bottom>
      <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconMd="material:home" text="Home" />
      <Link tabLink="#view-catalog" iconIos="f7:square_list_fill" iconMd="material:view_list" text="Catalog" />
      <Link tabLink="#view-settings" iconIos="f7:gear" iconMd="material:settings" text="Settings" />
    </Toolbar> -->

    <View id="view-home" tab tabActive url="/" />


    {#each pages as p}
      {#if p.name!="404"}
        {#if p.routes}
            {#each p.routes as r}
              <View id={"view-"+r.name} tab url={"/"+p.name+"/"+r.path} />
            {/each}
        {:else}
          <View id={"view-"+p.name} tab url={p.path} />   
        {/if}
      {/if}
    {/each}
    <!-- {#each pages as p}
      <View id={"view-"+p.name} tab url={p.path} />
    {/each} -->

    <!-- Your main view/tab, should have "view-main" class. It also has "tabActive" prop -->
    <!-- <View id="view-home" main tab tabActive url="/" /> -->

    <!-- Catalog View -->
    <!-- <View id="view-catalog" name="catalog" tab url="/catalog/" /> -->

    <!-- Settings View -->
    <!-- <View id="view-settings" name="settings" tab url="/settings/" /> -->

  </Views>


  <!-- Popup -->
  <Popup id="my-popup">
    <View>
      <Page>
        <Navbar title="Popup">
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>
        <Block>
          <p>Popup content goes here.</p>
        </Block>
      </Page>
    </View>
  </Popup>

  <LoginScreen id="my-login-screen">
    <View>
      <Page loginScreen>
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List form>
          <ListInput
            type="text"
            name="username"
            placeholder="Your username"
            bind:value={username}
          />
          <ListInput
            type="password"
            name="password"
            placeholder="Your password"
            bind:value={password}
          />
        </List>
        <List>
          <ListButton title="Sign In" onClick={() => alertLoginData()} />
        </List>
        <BlockFooter>
          Some text about login information.<br />Click "Sign In" to close Login Screen
        </BlockFooter>
      </Page>
    </View>
  </LoginScreen>
</App>
<script>
  import { onMount } from 'svelte';
  import { getDevice }  from 'framework7/lite-bundle';
  import {
    f7,
    f7ready,
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    Link,
    Block,
    BlockTitle,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListItem,
    ListInput,
    ListButton,
    BlockFooter
  } from 'framework7-svelte';

  import capacitorApp from '../js/capacitor-app';
  import routes from '../js/routes';
  import store from '../js/store';

  import { pages } from '../js/routes';

  const device = getDevice();
  // Framework7 Parameters
  let f7params = {
    name: 'civica', // App name
    theme: 'md', // Automatic theme detection
    colors: {
      primary: '#ff0000',
    },
    darkMode: true,


    // App store
    store: store,
    // App routes
    routes: routes,

    // Register service worker (only on production build)
    serviceWorker: process.env.NODE_ENV ==='production' ? {
      path: '/service-worker.js',
    } : {},
    // Input settings
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Capacitor Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };
  // Login screen demo data
  let username = '';
  let password = '';

  function alertLoginData() {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  }
  onMount(() => {
    f7ready(() => {

      // Init capacitor APIs (see capacitor-app.js)
      if (f7.device.capacitor) {
        capacitorApp.init(f7);
      }
      // Call F7 APIs here
    });
  })
</script>