<script>
    let taskDone = [];
    let taskTodo = [];

    let id = 0;
    function remove(index) {
        const removed = taskTodo.splice(index, 1)
        taskDone.push(removed[0])
        taskDone=taskDone;
        taskTodo=taskTodo;

    }

    function submit() {
        let taskInput = document.getElementById("newTask").value;
        if (taskInput === "") {
            alert("You must enter something to do first");
            return;
        }

        taskTodo.push({id,taskInput});
        taskTodo = taskTodo;
        document.getElementById("newTask").value = "";
        id++;
    }
</script>

<div class="background">
    <title>Todo App</title>
    <h1>Todo App</h1>

    <input
        type="text"
        placeholder="Write about something you want todo"
        id="newTask"
    />

    <button class="submitbutton" type="button" on:click={() => submit()}
        >Add to list</button
    >

    <div class="todorows">
        <div>
            {#each taskTodo as obj, i (obj.id)}
                <div class="task">
                    {obj.taskInput}
                        <button
                            class="removebutton"
                            type="button"
                            on:click={() => remove(i)}>Remove</button
                        >
                    </div>
            
            {/each}
        </div>
        
        <div>
            {#each taskDone as obj, i (obj.id)}
                <div class="task">
                    {obj.taskInput}
                        <button
                            class="removebutton"
                            type="button"
                            on:click={() => {taskDone.splice(i,1);taskDone=taskDone}}>Remove</button
                        >
                    </div>
            
            {/each}
        </div>
    </div>
</div>

<style>
    :global(body) {
        overflow: hidden;
        background-color: #5e2c04;
    }

    .todorows {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 60vh;
    }

    .background {
        padding: 40px 20px 1000px;
        transform: translate(0, -10px);
        background-color: burlywood;
        width: 50%;
        margin: auto;
        border: double;
    }

    button {
        display: block;
        margin: auto;
    }
    h1 {
        text-align: center;
    }
    input {
        width: 60%;
        height: 40px;
        align-items: center;
        display: block;
        margin: auto;
        background-color: darkgrey;
        border-color: black;
        border-radius: 15px;
    }


    .task {
        margin: 5px;
        border: solid;
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
       max-width: 60%;
       margin-left: 20%;
    }

    .removebutton {
        margin: 0;
    }
</style>

