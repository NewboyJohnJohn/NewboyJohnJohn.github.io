<script>
    import { enhance } from "$app/forms";
    import "elizabot";
    import ElizaBot from "elizabot";
    import "@picocss/pico"

    let eliza = new ElizaBot();
    let chat = [{ user: "eliza", text: eliza.getInitial() }];
    let text = [];


    async function write() {
      let textInput = document.getElementById("newText").value;
        if (textInput === "") {
            alert("You must enter something to do first");
            return;
        }

        await new Promise((r) => setTimeout(r, 100 + Math.random() * 100));
        
        chat.unshift({user: "you", text: textInput});
        chat.unshift({ user: "eliza", text: eliza.transform(textInput)})

        chat = chat;
        text = text;
        document.getElementById("newText").value = "";
    }



  </script>
  
  
  <svelte:head>
    <link rel="stylesheet" href="css/pico.min.css">
    
    <style>
      nav {
        margin-left: 10%;
        margin-right: 10%;
      }
    </style>

  </svelte:head>
  
  <div class="container">
    <h1>TODO: Complete assignment</h1>
    <div class="scrollable">

      
      
      

    </div>
    <form
    
      method="post"
      use:enhance={({ form, data, action, cancel }) => {
        cancel();
        const text = data.get("text");

        write();
      }}
    >
      <input type="text" name="text" id="newText" />
      <button class="submitbutton" type="button" on:click={() => write()}>Done</button>

      

    </form>

    {#each chat as obj, i}
        <div>
          <article>
            <span>
              {obj.text}
            </span>
          </article>
        </div>
      {/each}

  </div>