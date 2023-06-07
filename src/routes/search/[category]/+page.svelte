<script>
    /** @type {import('./$types').PageData} */
    export let data;
  </script>
  
  
  <main>
    
    <h2>{"Showing results for: " + data.params.category}</h2>
    <hr />
    <!-- TODO: Style the results -->
    <div>
      {#each data.response as item}
        <div class="userInfo">
        <h2>{item.first_name} {item.last_name}</h2>
        <h4>{item.email}</h4>
        <h4>{item.phone_number}</h4>
        <img class="userImg" src={item.avatar} alt=""> 
        </div>            
      {/each}
    </div>
  </main>

  <style>
    .userImg{
      border-radius: 100%;
      background-color: navy;
    }
    .userInfo{
      margin-bottom: 250px;
    }

  </style>