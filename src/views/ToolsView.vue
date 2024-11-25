<template>
  <div class="tools container">
    <h3>Tools</h3>
    <p>Legit, community-tools and pages relevant to Call of Duty Black Ops 6</p>
    <div class="tools flex  items-center gap-6">
      <div v-for="listing in listings" :key="listing.title">
        <h4>{{ listing.title }}</h4>
        <p>{{ listing.description }}</p>
        <div class="flex flex-col gap-4">
          <a v-for="item in listing.items" :key="item.title" :href="item.link" target="_blank" class="flex flex-col gap-2">
            <h5>{{ item.title }}</h5>
            <p>{{ item.description }}</p>
            <p v-if="item.author">Author: <a :href="item.author.link" target="_blank" class="text-blue-500">{{ item.author.name }}</a></p>
          </a>

          <a href="https://github.com/carlssonemil/nebula/issues/new" target="_blank" class="flex flex-col gap-2 add-to-list">
            <h5>Add your tool</h5>
            <p>Add your tool to the list</p>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listings: [
        {
          title: "Tools",
          description: "",
          items: [
            {
              icon:"",
              title: "Beamsmasher Calculator",
              description: "Calculate the beamsmasher value of your weapon",
              link: "https://beamsmasher-calculator.fr/",
              author:{
                name: "akavava",
                link: "https://x.com/arekus_"
              }
            },
            {
              icon:"",
              title: "Declassified",
              description: "Maps, weapons, and more",
              link: "https://declassified.app/",
              author:{
                name: "sol3uk",
                link: "https://github.com/sol3uk"
              }
            },

          ],
        }
      ],
 
    };
  },

};
</script>

<style lang="scss" scoped>
.tools {
  // Container Styling
  .container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .tools {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;

    > div {
      flex: 1 1 calc(33.333% - 1.5rem);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

      h4 {
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: 0.75rem;
      }

      a.flex {
        display: block;
        margin: 0 0 1rem;
        color: white;
        padding: 0.5rem 1rem;
        background-color: rgba(255,255,255,0.01);
        border: 1px solid rgba(255,255,255,0.05);;
        border-radius: 1rem;
        text-decoration: none;

        &:hover{
          background-color: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);;
          scale: 1.01;
        }

        &.add-to-list{
          background: rgba(119, 255, 104, 0.299);
          text-align: center;
          p{
            margin-bottom:0;
          }
        }

        h5 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom:0.5rem;
          
        }

        p {
          font-size: 0.875rem;
        }

        a {
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }

        .author {
          margin-top: 0.5rem;

          a {
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
