<template>
  <header>
    <h1>
      devEngines CLI Installer
    </h1>
    <button @click="showMessage">
      run
    </button>
  </header>
  <main>
    <ol>
      <li>
        We noticed you already had a ~/devEngines folder.
        <DoxenRadioDials
          v-model="retainChoice"
          label="Do you want to"
          :options="[
            {
              name: 'Keep it',
              value: 'keep'
            },
            {
              name: 'Delete it and install a fresh copy',
              value: 'delete'
            },
            {
              name: 'Attempt to upgrade it',
              value: 'upgrade'
            }
          ]"
        />
      </li>
      <li>
        How would you like to download the devEngines CLI?
        <DoxenRadioDials
          v-model="cloneChoice"
          label="Use"
          :options="[
            {
              name: 'Use git clone HTTPS (unable to find local git)',
              value: 'https'
            },
            {
              name: 'Use git clone SSH (unable to find local git)',
              value: 'ssh'
            },
            {
              name: 'Use GitHub CLI (gh whatever, not found)',
              value: 'gh'
            },
            {
              name: 'Download a zip over regular HTTPS',
              value: 'manual'
            }
          ]"
        />
      </li>
      <li>
        <template v-if="cloneChoice === 'manual'">
          Downloading
        </template>
        <template v-else>
          Cloning
        </template>
        ........
      </li>
      <li v-if="cloneChoice === 'manual'">
        Unzipping .........
      </li>
      <li>
        Downloading Node v25.5.1......
      </li>
      <li>
        Unzipping........
      </li>
      <li>
        Running <code>npm i</code>
      </li>
      <li>
        Adding to PATH.......
      </li>
      <li>
        DONE! you can delete this installer now
      </li>
    </ol>
  </main>
</template>

<script>
import { os } from '@neutralinojs/lib';
import { DoxenRadioDials } from 'vue-doxen';

export default {
  name: 'App',
  components: {
    DoxenRadioDials
  },
  data: function () {
    return {
      retainChoice: undefined,
      cloneChoice: undefined
    };
  },
  methods: {
    showMessage: async function () {
      console.log('asdfasdf');
      // const envs = await os.getEnvs();
      // console.log({ envs });
      os.showMessageBox('Title', 'Body');
    }
  }
}
</script>

<style>
  html,
  body {
    width: 100%;
    height: 100%;
    background: #333340;
    border: 0px;
    margin: 0px;
    padding: 0px;
    color: #CCCCD0;
  }
  header {
    text-align: center;
  }
  main {
    font-size: 20px;
  }
</style>
